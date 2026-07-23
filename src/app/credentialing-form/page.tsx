"use client";

import React, { useState } from "react";
import { Check, ClipboardList, Shield, CreditCard, Send, ArrowRight, ArrowLeft } from "lucide-react";

export default function CredentialingFormPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    npi: "",
    specialty: "",
    taxId: "",
    licenseNumber: "",
    licenseState: "",
    dob: "",
    gender: "",
    clinicName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    fax: "",
    email: "",
    payers: [] as string[],
  });

  const [submitted, setSubmitted] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const payerOptions = [
    { id: "medicare", name: "Medicare (Part A & B)" },
    { id: "medicaid", name: "Medicaid Managed Care" },
    { id: "bcbs", name: "Blue Cross Blue Shield" },
    { id: "aetna", name: "Aetna Healthcare" },
    { id: "cigna", name: "Cigna Health" },
    { id: "uhc", name: "UnitedHealthcare (UHC)" },
    { id: "humana", name: "Humana" },
    { id: "tricare", name: "Tricare / Military Health" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePayerToggle = (id: string) => {
    setFormData((prev) => {
      const payers = prev.payers.includes(id)
        ? prev.payers.filter((p) => p !== id)
        : [...prev.payers, id];
      return { ...prev, payers };
    });
  };

  const nextStep = () => {
    if (step === 1) {
      if (!formData.firstName || !formData.lastName || !formData.npi || !formData.specialty || !formData.taxId) {
        alert("Please fill in all required provider details.");
        return;
      }
      if (!/^\d{10}$/.test(formData.npi)) {
        alert("NPI must be a 10-digit number.");
        return;
      }
    }

    if (step === 2) {
      if (!formData.clinicName || !formData.address || !formData.city || !formData.state || !formData.zipCode || !formData.phone || !formData.email) {
        alert("Please fill in all required practice details.");
        return;
      }
    }

    if (step === 3) {
      if (formData.payers.length === 0) {
        alert("Please select at least one insurance panel to enroll in.");
        return;
      }
    }

    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const rand = Math.floor(100000 + Math.random() * 900000);
      setTrackingNumber(`MEDILINK-${rand}`);
      setSubmitted(true);
      setLoading(false);
    }, 1800);
  };

  return (
    <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 mt-16 animate-fade-in-up">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Payer Enrollment & Credentialing
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Submit your clinical credentialing application details. Our support team will compile your CAQH profile and file applications.
          </p>
        </div>

        {!submitted && (
          <div className="mb-8 flex items-center justify-between px-6 py-4 bg-white rounded-xl border border-slate-100 shadow-md shadow-slate-200/50">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                    step >= s
                      ? "bg-slate-900 text-white shadow-md shadow-slate-950/20"
                      : "bg-slate-100 text-slate-400"
                  }`}
                >
                  {step > s ? <Check className="h-4 w-4 text-emerald-400" /> : s}
                </div>
                {s < 4 && (
                  <div
                    className={`w-12 sm:w-20 h-1 mx-2 rounded-full transition-all ${
                      step > s ? "bg-slate-900" : "bg-slate-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        )}

        <div className="bg-white rounded-xl border border-slate-100 shadow-md shadow-slate-200/50 overflow-hidden p-6 sm:p-10">
          {submitted ? (
            <div className="text-center py-8 space-y-6 animate-fade-in-up">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-full flex items-center justify-center mx-auto shadow-md">
                <Check className="h-8 w-8" />
              </div>
              <div className="space-y-2">
                <h3 className="font-heading font-bold text-2xl text-slate-950">Credentialing Setup Started</h3>
                <p className="text-slate-500 text-sm max-w-md mx-auto">
                  Your details have been securely logged. A MediLink certified enrollment agent will contact you within 24 hours to execute contracts.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 max-w-sm mx-auto space-y-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Application Tracking #
                </span>
                <div className="text-lg font-mono font-bold text-sky-600">{trackingNumber}</div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setStep(1);
                  setFormData({
                    firstName: "",
                    lastName: "",
                    npi: "",
                    specialty: "",
                    taxId: "",
                    licenseNumber: "",
                    licenseState: "",
                    dob: "",
                    gender: "",
                    clinicName: "",
                    address: "",
                    city: "",
                    state: "",
                    zipCode: "",
                    phone: "",
                    fax: "",
                    email: "",
                    payers: [],
                  });
                }}
                className="mt-4 px-6 py-3 border border-slate-200 hover:bg-slate-50 rounded-xl text-slate-700 font-semibold transition-colors text-sm"
              >
                Enroll Another Provider
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="font-heading font-bold text-lg text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                    <ClipboardList className="h-5 w-5 text-sky-500" /> Step 1: Individual Provider Information
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <label className="text-xs font-bold text-slate-500 uppercase mb-2">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50/50"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="text-xs font-bold text-slate-500 uppercase mb-2">Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50/50"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="text-xs font-bold text-slate-500 uppercase mb-2">10-Digit NPI Number *</label>
                      <input
                        type="text"
                        name="npi"
                        required
                        maxLength={10}
                        placeholder="e.g. 1000000000"
                        value={formData.npi}
                        onChange={(e) => setFormData({ ...formData, npi: e.target.value.replace(/\D/g, "") })}
                        className="px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50/50"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="text-xs font-bold text-slate-500 uppercase mb-2">Tax ID or SSN *</label>
                      <input
                        type="text"
                        name="taxId"
                        required
                        placeholder="e.g. 12-3456789"
                        value={formData.taxId}
                        onChange={handleInputChange}
                        className="px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50/50"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="text-xs font-bold text-slate-500 uppercase mb-2">Specialty *</label>
                      <input
                        type="text"
                        name="specialty"
                        required
                        placeholder="e.g. Family Practice, Internal Medicine"
                        value={formData.specialty}
                        onChange={handleInputChange}
                        className="px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50/50"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="text-xs font-bold text-slate-500 uppercase mb-2">License State / License Number</label>
                      <div className="flex gap-2">
                        <select
                          name="licenseState"
                          value={formData.licenseState}
                          onChange={handleInputChange}
                          className="w-24 px-2 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50/50"
                        >
                          <option value="">State</option>
                          <option value="AL">AL</option>
                          <option value="CA">CA</option>
                          <option value="FL">FL</option>
                          <option value="GA">GA</option>
                          <option value="NY">NY</option>
                          <option value="TX">TX</option>
                        </select>
                        <input
                          type="text"
                          name="licenseNumber"
                          placeholder="Lic #"
                          value={formData.licenseNumber}
                          onChange={handleInputChange}
                          className="flex-1 px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50/50"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="font-heading font-bold text-lg text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-sky-500" /> Step 2: Practice / Facility Location Details
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col sm:col-span-2">
                      <label className="text-xs font-bold text-slate-500 uppercase mb-2">Clinic or Group Practice Name *</label>
                      <input
                        type="text"
                        name="clinicName"
                        required
                        value={formData.clinicName}
                        onChange={handleInputChange}
                        className="px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50/50"
                      />
                    </div>

                    <div className="flex flex-col sm:col-span-2">
                      <label className="text-xs font-bold text-slate-500 uppercase mb-2">Physical Practice Address *</label>
                      <input
                        type="text"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleInputChange}
                        className="px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50/50"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="text-xs font-bold text-slate-500 uppercase mb-2">City *</label>
                      <input
                        type="text"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleInputChange}
                        className="px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50/50"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col">
                        <label className="text-xs font-bold text-slate-500 uppercase mb-2">State *</label>
                        <input
                          type="text"
                          name="state"
                          required
                          maxLength={2}
                          placeholder="e.g. CA"
                          value={formData.state}
                          onChange={handleInputChange}
                          className="px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50/50"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-xs font-bold text-slate-500 uppercase mb-2">Zip Code *</label>
                        <input
                          type="text"
                          name="zipCode"
                          required
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          className="px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50/50"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <label className="text-xs font-bold text-slate-500 uppercase mb-2">Office Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="e.g. (555) 555-5555"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50/50"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="text-xs font-bold text-slate-500 uppercase mb-2">Office Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="e.g. billing@clinic.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50/50"
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <h3 className="font-heading font-bold text-lg text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-sky-500" /> Step 3: Select Payer Panels for Enrollment
                  </h3>
                  <p className="text-xs text-slate-500">
                    Check all commercial and government insurance payer panels you wish this provider to be credentialed under.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {payerOptions.map((payer) => {
                      const isSelected = formData.payers.includes(payer.id);
                      return (
                        <button
                          key={payer.id}
                          type="button"
                          onClick={() => handlePayerToggle(payer.id)}
                          className={`flex items-center justify-between p-4 rounded-2xl border text-left transition-all ${
                            isSelected
                              ? "bg-slate-950 border-slate-950 text-white shadow-md shadow-slate-950/10"
                              : "bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700"
                          }`}
                        >
                          <span className="text-sm font-semibold">{payer.name}</span>
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center border transition-all ${
                              isSelected ? "bg-amber-500 border-amber-500 text-slate-900" : "border-slate-300"
                            }`}
                          >
                            {isSelected && <Check className="h-3.5 w-3.5 stroke-[3]" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-6 animate-fade-in-up">
                  <h3 className="font-heading font-bold text-lg text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                    <ClipboardList className="h-5 w-5 text-sky-500" /> Step 4: Review Application Summary
                  </h3>

                  <div className="space-y-4 text-sm text-slate-700">
                    <div className="border border-slate-100 rounded-2xl p-5 space-y-3 bg-slate-50/50">
                      <h4 className="font-semibold text-slate-800 text-xs uppercase tracking-wider text-slate-500">
                        Provider Profile
                      </h4>
                      <p>
                        <strong>Name:</strong> Dr. {formData.firstName} {formData.lastName}
                      </p>
                      <p>
                        <strong>NPI:</strong> {formData.npi}
                      </p>
                      <p>
                        <strong>Specialty:</strong> {formData.specialty}
                      </p>
                      <p>
                        <strong>Tax ID/SSN:</strong> {formData.taxId}
                      </p>
                    </div>

                    <div className="border border-slate-100 rounded-2xl p-5 space-y-3 bg-slate-50/50">
                      <h4 className="font-semibold text-slate-800 text-xs uppercase tracking-wider text-slate-500">
                        Practice Location
                      </h4>
                      <p>
                        <strong>Clinic:</strong> {formData.clinicName}
                      </p>
                      <p>
                        <strong>Address:</strong> {formData.address}, {formData.city}, {formData.state} {formData.zipCode}
                      </p>
                      <p>
                        <strong>Phone:</strong> {formData.phone}
                      </p>
                      <p>
                        <strong>Email:</strong> {formData.email}
                      </p>
                    </div>

                    <div className="border border-slate-100 rounded-2xl p-5 space-y-3 bg-slate-50/50">
                      <h4 className="font-semibold text-slate-800 text-xs uppercase tracking-wider text-slate-500">
                        Selected Payers ({formData.payers.length})
                      </h4>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {formData.payers.map((pid) => {
                          const pObj = payerOptions.find((p) => p.id === pid);
                          return (
                            <span
                              key={pid}
                              className="bg-slate-900 text-white border border-slate-800 text-xs font-semibold px-3 py-1 rounded-full"
                            >
                              {pObj?.name}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 text-amber-950 p-4 rounded-2xl text-xs leading-relaxed">
                    <strong>Submission Disclaimer:</strong> By submitting, you authorize MediLink RCM Services to compile clinical profiles and dispatch credentialing applications to the designated payers. No fees are charged until payer authorization begins.
                  </div>
                </div>
              )}

              <div className="flex justify-between pt-6 border-t border-slate-100">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-5 py-3 border border-slate-200 hover:bg-slate-50 rounded-xl text-slate-700 font-semibold transition-colors flex items-center gap-2 text-sm"
                  >
                    <ArrowLeft className="h-4 w-4" /> Previous Step
                  </button>
                ) : (
                  <div />
                )}

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold shadow-md shadow-slate-900/10 transition-all flex items-center gap-2 text-sm"
                  >
                    Next Step <ArrowRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-3 bg-brand-teal hover:bg-brand-teal-dark text-slate-950 rounded-xl font-semibold shadow-lg shadow-brand-teal/20 transition-all flex items-center gap-2 text-sm disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                    {loading ? "Submitting..." : "Submit Credentialing Application"}
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
