"use client";

import React, { useState } from "react";
import { Search, RotateCcw, AlertCircle, CheckCircle, MapPin, Award } from "lucide-react";

interface NpiResult {
  number: number;
  basic: {
    first_name?: string;
    last_name?: string;
    organization_name?: string;
    credential?: string;
    sole_proprietor?: string;
    gender?: string;
  };
  taxonomies: Array<{
    code: string;
    desc: string;
    primary: boolean;
    state?: string;
    license?: string;
  }>;
  addresses: Array<{
    address_purpose: string;
    address_1: string;
    address_2?: string;
    city: string;
    state: string;
    postal_code: string;
    telephone_number?: string;
  }>;
}

export default function NpiSearchTool() {
  const [searchType, setSearchType] = useState<"individual" | "org">("individual");
  const [npiNumber, setNpiNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [orgName, setOrgName] = useState("");
  const [state, setState] = useState("");
  const [results, setResults] = useState<NpiResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleClear = () => {
    setNpiNumber("");
    setFirstName("");
    setLastName("");
    setOrgName("");
    setState("");
    setResults([]);
    setError("");
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResults([]);

    if (!npiNumber && !firstName && !lastName && !orgName) {
      setError("Please provide at least an NPI number, name, or organization name to search.");
      return;
    }

    if (npiNumber && !/^\d{10}$/.test(npiNumber.trim())) {
      setError("NPI number must be exactly 10 digits.");
      return;
    }

    setLoading(true);

    try {
      const query = new URLSearchParams();
      if (npiNumber) query.append("number", npiNumber.trim());
      if (searchType === "individual") {
        if (firstName) query.append("first_name", firstName.trim());
        if (lastName) query.append("last_name", lastName.trim());
      } else {
        if (orgName) query.append("organization_name", orgName.trim());
      }
      if (state) query.append("state", state.trim().toUpperCase());
      query.append("limit", "10");

      const response = await fetch(`/api/npi-search?${query.toString()}`);
      if (!response.ok) {
        throw new Error("Failed to query NPI registry.");
      }

      const data = await response.json();
      if (data.results && data.results.length > 0) {
        setResults(data.results);
      } else {
        setError("No providers found matching the criteria.");
      }
    } catch (err) {
      setError("Could not connect to the registry. Please verify your internet connection or try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto bg-white rounded-xl shadow-md shadow-slate-200/50 border border-slate-100 overflow-hidden">
      {/* Search Header */}
      <div className="p-6 sm:p-8 bg-gradient-to-r from-sky-800 via-blue-700 to-sky-800 text-white">
        <h3 className="font-heading font-bold text-xl sm:text-2xl mb-2 flex items-center gap-2 drop-shadow-sm">
          <Award className="h-6 w-6 text-sky-200 animate-pulse" /> Live NPPES NPI Registry Lookup
        </h3>
        <p className="text-sky-100 text-xs sm:text-sm opacity-90">
          Query the official National Plan and Provider Enumeration System (NPPES) registry database in real-time.
        </p>
      </div>

      {/* Query Forms */}
      <form onSubmit={handleSearch} className="p-6 sm:p-8 border-b border-slate-100 space-y-6">
        {/* Toggle Search Type */}
        <div className="flex gap-4 border-b border-slate-100 pb-4">
          <button
            type="button"
            onClick={() => {
              setSearchType("individual");
              setOrgName("");
            }}
            className={`pb-2 text-base font-extrabold transition-all border-b-2 ${
              searchType === "individual"
                ? "border-amber-500 text-slate-900"
                : "border-transparent text-slate-400 hover:text-slate-600"
            }`}
          >
            Individual Provider
          </button>
          <button
            type="button"
            onClick={() => {
              setSearchType("org");
              setFirstName("");
              setLastName("");
            }}
            className={`pb-2 text-base font-extrabold transition-all border-b-2 ${
              searchType === "org"
                ? "border-amber-500 text-slate-900"
                : "border-transparent text-slate-400 hover:text-slate-600"
            }`}
          >
            Healthcare Organization
          </button>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex flex-col">
            <label className="text-sm font-black uppercase tracking-wider text-slate-600 mb-2">
              NPI Number (10 Digits)
            </label>
            <input
              type="text"
              maxLength={10}
              placeholder="e.g. 1982736450"
              value={npiNumber}
              onChange={(e) => setNpiNumber(e.target.value.replace(/\D/g, ""))}
              className="px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-base font-bold placeholder:font-bold placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50/50"
            />
          </div>

          {searchType === "individual" ? (
            <>
              <div className="flex flex-col">
                <label className="text-sm font-black uppercase tracking-wider text-slate-600 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sarah"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-base font-bold placeholder:font-bold placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50/50"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-black uppercase tracking-wider text-slate-600 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Jenkins"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-base font-bold placeholder:font-bold placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50/50"
                />
              </div>
            </>
          ) : (
            <div className="flex flex-col sm:col-span-2">
              <label className="text-sm font-black uppercase tracking-wider text-slate-600 mb-2">
                Organization Name
              </label>
              <input
                type="text"
                placeholder="e.g. General Hospital Inc"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
                className="px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-base font-bold placeholder:font-bold placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50/50"
              />
            </div>
          )}

          <div className="flex flex-col">
            <label className="text-sm font-black uppercase tracking-wider text-slate-600 mb-2">
              State / Territory
            </label>
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-base font-bold focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50/50"
            >
              <option className="font-bold" value="">All States</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 justify-end pt-2">
          <button
            type="button"
            onClick={handleClear}
            className="px-6 py-3 rounded-xl border border-slate-200 text-slate-600 font-semibold hover:bg-slate-50 transition-colors flex items-center gap-2 text-sm"
          >
            <RotateCcw className="h-4 w-4" /> Reset Fields
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold shadow-lg shadow-sky-600/20 transition-all flex items-center gap-2 text-sm disabled:opacity-50"
          >
            {loading ? (
              <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <Search className="h-4 w-4" />
            )}
            {loading ? "Searching..." : "Search Provider"}
          </button>
        </div>
      </form>

      {/* Results / Feedback Panel */}
      <div className="p-6 sm:p-8 bg-slate-50/50">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3.5 rounded-2xl flex items-center gap-3 text-sm">
            <AlertCircle className="h-5 w-5 text-red-500 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {loading && (
          <div className="space-y-4">
            <p className="text-center text-xs font-semibold text-slate-500 uppercase tracking-widest animate-pulse">
              Contacting federal registry...
            </p>
            <div className="h-32 bg-slate-100 rounded-2xl animate-pulse" />
            <div className="h-32 bg-slate-100 rounded-2xl animate-pulse" />
          </div>
        )}

        {!loading && results.length > 0 && (
          <div className="space-y-6">
            <h4 className="font-heading font-bold text-slate-800 text-lg flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-emerald-500" />
              Found {results.length} Matching Records
            </h4>

            <div className="overflow-x-auto rounded-2xl border border-slate-100 bg-white shadow-sm">
              <table className="min-w-full divide-y divide-slate-100 text-left text-sm">
                <thead className="bg-slate-50/70 text-slate-500 text-xs font-bold uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-4">NPI / Provider</th>
                    <th className="px-6 py-4">Primary Specialty</th>
                    <th className="px-6 py-4">Practice Address</th>
                    <th className="px-6 py-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {results.map((provider) => {
                    const primaryTaxonomy =
                      provider.taxonomies.find((t) => t.primary) || provider.taxonomies[0];
                    const mailingAddress =
                      provider.addresses.find((a) => a.address_purpose === "LOCATION") ||
                      provider.addresses[0];

                    const name = provider.basic.organization_name
                      ? provider.basic.organization_name
                      : `${provider.basic.first_name || ""} ${provider.basic.last_name || ""} ${
                          provider.basic.credential ? `, ${provider.basic.credential}` : ""
                        }`;

                    return (
                      <tr key={provider.number} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-5">
                          <div className="font-semibold text-slate-900 text-sm">{name}</div>
                          <div className="text-xs text-sky-600 font-mono mt-1">NPI: {provider.number}</div>
                        </td>
                        <td className="px-6 py-5">
                          <div className="text-xs max-w-xs font-medium leading-relaxed text-slate-900">
                            {primaryTaxonomy ? primaryTaxonomy.desc : "General Practice"}
                          </div>
                          {primaryTaxonomy?.code && (
                            <div className="text-xs text-sky-600 mt-1.5 font-mono font-semibold bg-sky-50 inline-block px-1.5 py-0.5 rounded border border-sky-100">
                              Taxonomy: {primaryTaxonomy.code}
                            </div>
                          )}
                          {primaryTaxonomy?.license && (
                            <div className="text-xs text-slate-600 mt-1 font-mono font-medium">
                              Lic: {primaryTaxonomy.license} | State: {primaryTaxonomy.state || 'N/A'}
                            </div>
                          )}
                        </td>
                        <td className="px-6 py-5">
                          <div className="text-xs flex items-start gap-1">
                            <MapPin className="h-3.5 w-3.5 text-slate-400 mt-0.5 shrink-0" />
                            <div>
                              <div>{mailingAddress.address_1}</div>
                              <div className="text-slate-400">
                                {mailingAddress.city}, {mailingAddress.state} {mailingAddress.postal_code}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                            Active
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
