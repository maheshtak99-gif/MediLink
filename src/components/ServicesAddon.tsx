
"use client";
import React, { useEffect } from "react";

const rawHTML = `<!--
  MediLink RCM â€” Services add-on
  Paste this entire block below your existing Services section.
  It is intentionally scoped to .ml-services so it will not change your site-wide styles.
-->
<style>
  .ml-services {
    --mls-ink: #17324f;
    --mls-blue: #0874c9;
    --mls-blue-dark: #075da5;
    --mls-text: #17324f;
    --mls-muted: #5f7186;
    --mls-line: #e4ebf2;
    --mls-surface: #ffffff;
    --mls-background: #f9fbfd;
    --mls-shadow: 0 16px 40px rgba(9, 58, 102, 0.11);
    position: relative;
    isolation: isolate;
    overflow: hidden;
    padding: clamp(68px, 8vw, 112px) 20px;
    color: var(--mls-text);
    background:
      radial-gradient(circle at 5% 0%, rgba(8, 116, 201, 0.07), transparent 28%),
      linear-gradient(180deg, var(--mls-background), var(--mls-surface));
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  .ml-services,
  .ml-services *,
  .ml-services *::before,
  .ml-services *::after {
    box-sizing: border-box;
  }

  .ml-services::before {
    position: absolute;
    z-index: -1;
    top: -125px;
    right: -92px;
    width: 310px;
    height: 310px;
    border: 1px solid rgba(8, 116, 201, 0.1);
    border-radius: 50%;
    box-shadow: 0 0 0 34px rgba(8, 116, 201, 0.035), 0 0 0 68px rgba(8, 116, 201, 0.02);
    content: "";
    animation: mls-orbit 16s linear infinite;
  }

  .ml-services__wrap {
    width: min(100%, 1160px);
    margin: 0 auto;
  }

  .ml-services__header {
    display: grid;
    grid-template-columns: minmax(0, 1.05fr) minmax(280px, 0.72fr);
    gap: clamp(35px, 8vw, 120px);
    align-items: end;
    margin-bottom: clamp(42px, 6vw, 68px);
  }

  .ml-services__eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    margin-bottom: 15px;
    color: var(--mls-blue-dark);
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.16em;
    line-height: 1.2;
    text-transform: uppercase;
  }

  .ml-services__eyebrow::before {
    width: 27px;
    height: 2px;
    border-radius: 999px;
    background: var(--mls-blue);
    content: "";
  }

  .ml-services__title {
    max-width: 690px;
    margin: 0;
    color: var(--mls-ink);
    font-size: clamp(34px, 4.6vw, 59px);
    font-weight: 700;
    letter-spacing: -0.06em;
    line-height: 1.02;
  }

  .ml-services__title span {
    color: var(--mls-blue);
  }

  .ml-services__intro {
    max-width: 450px;
    margin: 0;
    color: var(--mls-muted);
    font-size: 16px;
    line-height: 1.75;
  }

  .ml-services__scope {
    display: flex;
    flex-wrap: wrap;
    gap: 9px;
    margin: 0 0 clamp(44px, 6vw, 68px);
    padding: 14px 0 0;
    border-top: 1px solid var(--mls-line);
  }

  .ml-services__scope span {
    padding: 8px 12px;
    border: 1px solid #d8e6f2;
    border-radius: 999px;
    color: var(--mls-blue-dark);
    background: #f4f9fd;
    font-size: 11px;
    font-weight: 750;
  }

  .ml-services__grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: clamp(38px, 8vw, 118px);
    row-gap: 42px;
  }

  .ml-services__item {
    display: grid;
    grid-template-columns: 78px minmax(0, 1fr);
    gap: 22px;
    align-items: start;
    min-width: 0;
  }

  .ml-services__icon {
    display: grid;
    width: 78px;
    height: 78px;
    place-items: center;
    border-radius: 50%;
    color: #ffffff;
    background: var(--mls-blue);
    box-shadow: 0 10px 18px rgba(8, 116, 201, 0.19);
    transition: transform 220ms ease, background 220ms ease, box-shadow 220ms ease;
  }

  .ml-services__item:hover .ml-services__icon {
    background: var(--mls-blue-dark);
    box-shadow: 0 14px 25px rgba(8, 116, 201, 0.25);
    transform: translateY(-4px) rotate(-4deg);
  }

  .ml-services__icon svg {
    width: 42px;
    height: 42px;
    fill: none;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1.25;
  }

  .ml-services__copy {
    min-width: 0;
    padding-top: 1px;
  }

  .ml-services__copy h3 {
    margin: 0 0 9px;
    color: var(--mls-ink);
    font-size: 21px;
    font-weight: 700;
    letter-spacing: -0.035em;
    line-height: 1.15;
  }

  .ml-services__copy p {
    margin: 0;
    color: var(--mls-muted);
    font-size: 14px;
    line-height: 1.65;
  }

  .ml-services__link,
  .ml-services__playbook a,
  .ml-services__playbook button {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    margin-top: 12px;
    padding: 0;
    border: 0;
    color: var(--mls-blue-dark);
    background: transparent;
    font-size: 13px;
    font-weight: 700;
    font-family: inherit;
    line-height: 1.35;
    text-decoration: underline;
    text-decoration-color: #79b5dc;
    text-decoration-thickness: 1px;
    text-underline-offset: 4px;
    text-align: left;
    cursor: pointer;
    transition: color 180ms ease;
  }

  .ml-services__link:hover,
  .ml-services__link:focus-visible,
  .ml-services__playbook a:hover,
  .ml-services__playbook a:focus-visible,
  .ml-services__playbook button:hover,
  .ml-services__playbook button:focus-visible {
    color: var(--mls-blue);
  }

  .ml-services__link svg,
  .ml-services__playbook a svg,
  .ml-services__playbook button svg {
    width: 14px;
    height: 14px;
    transition: transform 180ms ease;
  }

  .ml-services__link:hover svg,
  .ml-services__link:focus-visible svg,
  .ml-services__playbook a:hover svg,
  .ml-services__playbook a:focus-visible svg,
  .ml-services__playbook button:hover svg,
  .ml-services__playbook button:focus-visible svg {
    transform: translate(2px, -2px);
  }

  .ml-services__subhead {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(240px, 0.64fr);
    gap: 40px;
    align-items: end;
    margin: clamp(82px, 10vw, 132px) 0 34px;
    padding-top: 33px;
    border-top: 1px solid var(--mls-line);
  }

  .ml-services__subhead h3 {
    max-width: 560px;
    margin: 0;
    color: var(--mls-ink);
    font-size: clamp(28px, 3.4vw, 43px);
    font-weight: 700;
    letter-spacing: -0.055em;
    line-height: 1.05;
  }

  .ml-services__subhead p {
    max-width: 400px;
    margin: 0;
    color: var(--mls-muted);
    font-size: 14px;
    line-height: 1.7;
  }

  .ml-services__playbooks {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: clamp(38px, 8vw, 118px);
    row-gap: 0;
    border-top: 1px solid var(--mls-line);
  }

  .ml-services__playbook {
    display: grid;
    grid-template-columns: 46px minmax(0, 1fr);
    gap: 18px;
    padding: 25px 0 27px;
    border-bottom: 1px solid var(--mls-line);
  }

  .ml-services__playbook-number {
    display: grid;
    width: 36px;
    height: 36px;
    place-items: center;
    border: 1px solid #afd0e8;
    border-radius: 50%;
    color: var(--mls-blue-dark);
    font-size: 11px;
    font-weight: 800;
  }

  .ml-services__playbook h4 {
    margin: 0 0 7px;
    color: var(--mls-ink);
    font-size: 17px;
    font-weight: 750;
    letter-spacing: -0.025em;
    line-height: 1.2;
  }

  .ml-services__playbook p {
    margin: 0;
    color: var(--mls-muted);
    font-size: 13px;
    line-height: 1.65;
  }

  .ml-services__closing {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 28px;
    margin-top: 65px;
    padding: 25px 28px;
    border: 1px solid #cfe3f1;
    border-radius: 18px;
    background: linear-gradient(110deg, #f0f8fd, #ffffff);
    box-shadow: var(--mls-shadow);
  }

  .ml-services__closing strong {
    display: block;
    color: var(--mls-ink);
    font-size: 17px;
    letter-spacing: -0.025em;
  }

  .ml-services__closing span {
    display: block;
    margin-top: 5px;
    color: var(--mls-muted);
    font-size: 13px;
  }

  .ml-services__closing a,
  .ml-services__closing button {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    min-height: 44px;
    padding: 0 17px;
    border: 0;
    border-radius: 999px;
    color: #ffffff;
    background: var(--mls-blue);
    font-size: 12px;
    font-weight: 800;
    font-family: inherit;
    cursor: pointer;
    transition: background 180ms ease, transform 180ms ease;
  }

  .ml-services__closing a:hover,
  .ml-services__closing a:focus-visible,
  .ml-services__closing button:hover,
  .ml-services__closing button:focus-visible {
    background: var(--mls-blue-dark);
    transform: translateY(-2px);
  }

  .ml-services__modal[hidden] {
    display: none !important;
  }

  .ml-services__modal {
    position: fixed;
    z-index: 10000;
    inset: 0;
    display: grid;
    place-items: center;
    padding: 20px;
    background: rgba(6, 24, 46, 0.68);
    opacity: 0;
    transition: opacity 220ms ease;
  }

  .ml-services__modal.ml-is-open {
    opacity: 1;
  }

  .ml-services__modal-backdrop {
    position: absolute;
    inset: 0;
  }

  .ml-services__dialog {
    position: relative;
    z-index: 1;
    width: min(100%, 700px);
    max-height: min(720px, calc(100vh - 40px));
    overflow: auto;
    padding: clamp(28px, 5vw, 48px);
    border: 1px solid rgba(255, 255, 255, 0.74);
    border-radius: 26px;
    background: #ffffff;
    box-shadow: 0 32px 90px rgba(1, 21, 43, 0.34);
    transform: translateY(18px) scale(0.98);
    transition: transform 260ms cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .ml-services__modal.ml-is-open .ml-services__dialog {
    transform: translateY(0) scale(1);
  }

  .ml-services__modal-close {
    position: absolute;
    top: 18px;
    right: 18px;
    display: grid;
    width: 36px;
    height: 36px;
    place-items: center;
    border: 1px solid #dce8f1;
    border-radius: 50%;
    color: var(--mls-ink);
    background: #f7fbfe;
    font-size: 22px;
    line-height: 1;
    cursor: pointer;
    transition: background 180ms ease, transform 180ms ease;
  }

  .ml-services__modal-close:hover,
  .ml-services__modal-close:focus-visible {
    background: #eaf5fb;
    transform: rotate(90deg);
  }

  .ml-services__modal-eyebrow {
    margin: 0 0 13px;
    color: var(--mls-blue-dark);
    font-size: 10px;
    font-weight: 850;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  .ml-services__modal-title {
    max-width: 550px;
    margin: 0;
    color: var(--mls-ink);
    font-size: clamp(28px, 4vw, 42px);
    font-weight: 750;
    letter-spacing: -0.055em;
    line-height: 1.03;
  }

  .ml-services__modal-summary {
    margin: 18px 0 0;
    color: var(--mls-muted);
    font-size: 15px;
    line-height: 1.75;
  }

  .ml-services__modal-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
    gap: 16px;
    margin-top: 28px;
  }

  .ml-services__modal-panel {
    padding: 20px;
    border: 1px solid #dceaf3;
    border-radius: 16px;
    background: #f7fbfe;
  }

  .ml-services__modal-panel-label {
    display: block;
    margin-bottom: 12px;
    color: var(--mls-blue-dark);
    font-size: 10px;
    font-weight: 850;
    letter-spacing: 0.13em;
    text-transform: uppercase;
  }

  .ml-services__modal-panel ul {
    display: grid;
    gap: 10px;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .ml-services__modal-panel li {
    position: relative;
    padding-left: 18px;
    color: var(--mls-text);
    font-size: 13px;
    line-height: 1.55;
  }

  .ml-services__modal-panel li::before {
    position: absolute;
    top: 0.6em;
    left: 0;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--mls-blue);
    box-shadow: 0 0 0 4px rgba(8, 116, 201, 0.1);
    content: "";
  }

  .ml-services__modal-panel p {
    margin: 0;
    color: var(--mls-muted);
    font-size: 13px;
    line-height: 1.65;
  }

  .ml-services__modal-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    margin-top: 24px;
    padding-top: 20px;
    border-top: 1px solid var(--mls-line);
  }

  .ml-services__modal-note {
    color: var(--mls-muted);
    font-size: 12px;
    line-height: 1.5;
  }

  .ml-services__modal-back {
    flex: 0 0 auto;
    min-height: 42px;
    padding: 0 16px;
    border: 1px solid #c7ddea;
    border-radius: 999px;
    color: var(--mls-blue-dark);
    background: #ffffff;
    font: inherit;
    font-size: 12px;
    font-weight: 800;
    cursor: pointer;
  }

  .ml-services__modal-back:hover,
  .ml-services__modal-back:focus-visible {
    background: #eef8fd;
  }

  .ml-services [data-ml-reveal] {
    opacity: 0;
    transform: translateY(18px);
    transition: opacity 620ms ease, transform 620ms cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .ml-services [data-ml-reveal].ml-is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  .ml-services [data-ml-reveal]:nth-child(2) {
    transition-delay: 70ms;
  }

  .ml-services [data-ml-reveal]:nth-child(3) {
    transition-delay: 140ms;
  }

  .ml-services [data-ml-reveal]:nth-child(4) {
    transition-delay: 210ms;
  }

  .ml-services [data-ml-reveal]:nth-child(5) {
    transition-delay: 280ms;
  }

  .ml-services :focus-visible {
    outline: 3px solid rgba(8, 116, 201, 0.3);
    outline-offset: 4px;
  }

  @keyframes mls-orbit {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @media (max-width: 820px) {
    .ml-services__header,
    .ml-services__subhead {
      grid-template-columns: 1fr;
      gap: 22px;
    }

    .ml-services__grid,
    .ml-services__playbooks {
      column-gap: 34px;
    }

    .ml-services__copy h3 {
      font-size: 19px;
    }
  }

  @media (max-width: 650px) {
    .ml-services {
      padding-right: 16px;
      padding-left: 16px;
    }

    .ml-services__grid,
    .ml-services__playbooks {
      grid-template-columns: 1fr;
    }

    .ml-services__grid {
      row-gap: 35px;
    }

    .ml-services__item {
      grid-template-columns: 67px minmax(0, 1fr);
      gap: 17px;
    }

    .ml-services__icon {
      width: 67px;
      height: 67px;
    }

    .ml-services__icon svg {
      width: 36px;
      height: 36px;
    }

    .ml-services__closing {
      align-items: flex-start;
      flex-direction: column;
      gap: 18px;
      padding: 22px;
    }

    .ml-services__modal-grid,
    .ml-services__modal-footer {
      grid-template-columns: 1fr;
    }

    .ml-services__modal-footer {
      align-items: flex-start;
      flex-direction: column;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .ml-services::before,
    .ml-services *,
    .ml-services *::before,
    .ml-services *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }

    .ml-services [data-ml-reveal] {
      opacity: 1;
      transform: none;
    }
  }
</style>

<section class="ml-services" id="ml-specialty-services" data-ml-services aria-labelledby="ml-services-title">
  <div class="ml-services__wrap">
    <div class="ml-services__header" data-ml-reveal>
      <div>
        <div class="ml-services__eyebrow">Specialty billing services</div>
        <h2 class="ml-services__title" id="ml-services-title">Billing built around the <span>specialty behind every claim.</span></h2>
      </div>
      <p class="ml-services__intro">Every practice has different coding patterns, payer rules, authorization requirements, and denial risks. MediLink RCM adapts its workflow to the way your specialty operates.</p>
    </div>

    <div class="ml-services__scope" data-ml-reveal aria-label="MediLink RCM service capabilities">
      <span>Claims management</span>
      <span>Denial follow-up</span>
      <span>Eligibility &amp; benefits</span>
      <span>Prior authorization</span>
      <span>A/R recovery</span>
    </div>

    <div class="ml-services__grid" aria-label="MediLink RCM specialty services">
      <article class="ml-services__item" data-ml-reveal>
        <div class="ml-services__icon" aria-hidden="true"><svg viewBox="0 0 48 48"><path d="M24 40V8M8 24h32M14 14h.01M34 34h.01" /><path d="M12 8h24v32H12z" /></svg></div>
        <div class="ml-services__copy"><h3>Internal Medicine</h3><p>Comprehensive billing for the prevention, diagnosis, and treatment of adults across the full spectrum of care.</p><button class="ml-services__link" type="button" data-ml-open="internal-medicine" aria-haspopup="dialog">Explore internal medicine billing <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13 13 3M6 3h7v7" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" /></svg></button></div>
      </article>

      <article class="ml-services__item" data-ml-reveal>
        <div class="ml-services__icon" aria-hidden="true"><svg viewBox="0 0 48 48"><circle cx="24" cy="14" r="6" /><path d="M11 40c1-8 5-12 13-12s12 4 13 12M8 23h7M33 23h7M14 18l-4-4M34 18l4-4" /></svg></div>
        <div class="ml-services__copy"><h3>Pediatrics</h3><p>Specialized billing for the medical care of infants, children, and adolescents at every stage of growth.</p><button class="ml-services__link" type="button" data-ml-open="pediatrics" aria-haspopup="dialog">Explore pediatric billing <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13 13 3M6 3h7v7" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" /></svg></button></div>
      </article>

      <article class="ml-services__item" data-ml-reveal>
        <div class="ml-services__icon" aria-hidden="true"><svg viewBox="0 0 48 48"><path d="m27 5-16 21h12l-2 17 18-23H27V5Z" /></svg></div>
        <div class="ml-services__copy"><h3>Urgent &amp; Immediate Care</h3><p>Fast, accurate billing for walk-in and ambulatory care delivered outside the traditional ER.</p><button class="ml-services__link" type="button" data-ml-open="urgent-care" aria-haspopup="dialog">Explore urgent care billing <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13 13 3M6 3h7v7" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" /></svg></button></div>
      </article>

      <article class="ml-services__item" data-ml-reveal>
        <div class="ml-services__icon" aria-hidden="true"><svg viewBox="0 0 48 48"><path d="M10 10c7 0 11 4 14 11 3-7 7-11 14-11M10 38c7 0 11-4 14-11 3 7 7 11 14 11M24 18v12" /></svg></div>
        <div class="ml-services__copy"><h3>Chiropractic</h3><p>Billing for the diagnosis and treatment of musculoskeletal disorders, especially those involving the spine.</p><button class="ml-services__link" type="button" data-ml-open="chiropractic" aria-haspopup="dialog">Explore chiropractic billing <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13 13 3M6 3h7v7" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" /></svg></button></div>
      </article>

      <article class="ml-services__item" data-ml-reveal>
        <div class="ml-services__icon" aria-hidden="true"><svg viewBox="0 0 48 48"><path d="M12 7h24v34H12zM18 15h12M18 22h12M18 29h8" /><path d="M18 4v7M30 4v7" /></svg></div>
        <div class="ml-services__copy"><h3>DME Billing</h3><p>Durable medical equipment billing for therapeutic equipment used by patients in the home.</p><button class="ml-services__link" type="button" data-ml-open="dme" aria-haspopup="dialog">Explore DME billing <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13 13 3M6 3h7v7" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" /></svg></button></div>
      </article>

      <article class="ml-services__item" data-ml-reveal>
        <div class="ml-services__icon" aria-hidden="true"><svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="15" /><circle cx="24" cy="24" r="5" /><path d="M5 24h4M39 24h4M24 5v4M24 39v4" /></svg></div>
        <div class="ml-services__copy"><h3>Optometry</h3><p>Billing for eye exams, visual-system care, and the diagnosis and management of eye disease.</p><button class="ml-services__link" type="button" data-ml-open="optometry" aria-haspopup="dialog">Explore optometry billing <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13 13 3M6 3h7v7" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" /></svg></button></div>
      </article>

      <article class="ml-services__item" data-ml-reveal>
        <div class="ml-services__icon" aria-hidden="true"><svg viewBox="0 0 48 48"><path d="M8 9h32v30H8zM16 17h16M16 24h16M16 31h10" /><path d="m10 9 6 6 6-6 6 6 6-6 4 4" /></svg></div>
        <div class="ml-services__copy"><h3>Pathology</h3><p>Billing for laboratory-based diagnosis using chemistry, microbiology, hematology, and molecular pathology.</p><button class="ml-services__link" type="button" data-ml-open="pathology" aria-haspopup="dialog">Explore pathology billing <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13 13 3M6 3h7v7" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" /></svg></button></div>
      </article>

      <article class="ml-services__item" data-ml-reveal>
        <div class="ml-services__icon" aria-hidden="true"><svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="15" /><path d="m24 9 5 10 10 5-10 5-5 10-5-10-10-5 10-5 5-10Z" /><circle cx="24" cy="24" r="2" /></svg></div>
        <div class="ml-services__copy"><h3>Radiology</h3><p>Billing for diagnostic and interventional imaging and radiation-based treatment.</p><button class="ml-services__link" type="button" data-ml-open="radiology" aria-haspopup="dialog">Explore radiology billing <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13 13 3M6 3h7v7" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" /></svg></button></div>
      </article>

      <article class="ml-services__item" data-ml-reveal>
        <div class="ml-services__icon" aria-hidden="true"><svg viewBox="0 0 48 48"><path d="M12 8h24v32H12zM18 4v9M30 4v9M18 21h12M18 28h12M18 35h8" /><path d="m31 32 3 3 6-7" /></svg></div>
        <div class="ml-services__copy"><h3>Ambulatory Surgery</h3><p>Billing for same-day and outpatient surgery that does not require an overnight stay.</p><button class="ml-services__link" type="button" data-ml-open="ambulatory-surgery" aria-haspopup="dialog">Explore ambulatory surgery billing <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13 13 3M6 3h7v7" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" /></svg></button></div>
      </article>

      <article class="ml-services__item" data-ml-reveal>
        <div class="ml-services__icon" aria-hidden="true"><svg viewBox="0 0 48 48"><path d="M24 39V9M9 24h30" /><path d="M15 17h7M26 17h7M15 31h7M26 31h7" /></svg></div>
        <div class="ml-services__copy"><h3>Cardiology</h3><p>Billing for congenital heart defects, coronary artery disease, heart failure, valves, and electrophysiology.</p><button class="ml-services__link" type="button" data-ml-open="cardiology" aria-haspopup="dialog">Explore cardiology billing <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13 13 3M6 3h7v7" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" /></svg></button></div>
      </article>

      <article class="ml-services__item" data-ml-reveal>
        <div class="ml-services__icon" aria-hidden="true"><svg viewBox="0 0 48 48"><path d="M10 12h28M10 24h28M10 36h28" /><path d="M17 6v12M31 18v12M17 30v12" /></svg></div>
        <div class="ml-services__copy"><h3>Gastroenterology</h3><p>Billing for the esophagus, stomach, intestines, pancreas, gallbladder, bile ducts, and liver.</p><button class="ml-services__link" type="button" data-ml-open="gastroenterology" aria-haspopup="dialog">Explore gastroenterology billing <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13 13 3M6 3h7v7" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" /></svg></button></div>
      </article>

      <article class="ml-services__item" data-ml-reveal>
        <div class="ml-services__icon" aria-hidden="true"><svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="15" /><path d="M24 15v18M15 24h18M35 10l4-4M13 38l-4 4" /></svg></div>
        <div class="ml-services__copy"><h3>Many More</h3><p>We adapt quickly and can take on virtually any specialty with minimal ramp-up time.</p><button class="ml-services__link" type="button" data-ml-open="many-more" aria-haspopup="dialog">Tell us about your specialty <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13 13 3M6 3h7v7" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" /></svg></button></div>
      </article>
    </div>

    <div class="ml-services__subhead" data-ml-reveal>
      <h3>Specialty-specific playbooks for the issues that affect payment.</h3>
      <p>Each playbook focuses on the denial patterns, payer rules, and operational questions practice administrators deal with every day.</p>
    </div>

    <div class="ml-services__playbooks" aria-label="Dedicated specialty billing playbooks">
      <article class="ml-services__playbook" data-ml-reveal><div class="ml-services__playbook-number">01</div><div><h4>Cardiology billing</h4><p>Bundling edits, coverage policies, device-monitoring frequency limits, and underpayments on high-dollar procedures.</p><button type="button" data-ml-open="cardiology-playbook" aria-haspopup="dialog">Explore cardiology <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13 13 3M6 3h7v7" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" /></svg></button></div></article>
      <article class="ml-services__playbook" data-ml-reveal><div class="ml-services__playbook-number">02</div><div><h4>Pediatric billing</h4><p>Vaccine administration components, VFC, same-day sick and well visits, screenings, and Medicaid managed care.</p><button type="button" data-ml-open="pediatrics-playbook" aria-haspopup="dialog">Explore pediatrics <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13 13 3M6 3h7v7" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" /></svg></button></div></article>
      <article class="ml-services__playbook" data-ml-reveal><div class="ml-services__playbook-number">03</div><div><h4>Internal medicine billing</h4><p>Office visit levels, Medicare wellness visits versus physicals, and care-management services that are often left unbilled.</p><button type="button" data-ml-open="internal-medicine-playbook" aria-haspopup="dialog">Explore internal medicine <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13 13 3M6 3h7v7" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" /></svg></button></div></article>
      <article class="ml-services__playbook" data-ml-reveal><div class="ml-services__playbook-number">04</div><div><h4>OB/GYN billing</h4><p>The global maternity package, split billing, antepartum visit counts, and ultrasound medical necessity.</p><button type="button" data-ml-open="obgyn-playbook" aria-haspopup="dialog">Explore OB/GYN <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13 13 3M6 3h7v7" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" /></svg></button></div></article>
      <article class="ml-services__playbook" data-ml-reveal><div class="ml-services__playbook-number">05</div><div><h4>Orthopedic billing</h4><p>Prior authorization, surgical global periods and modifiers, DME enrollment, and injection units.</p><button type="button" data-ml-open="orthopedics-playbook" aria-haspopup="dialog">Explore orthopedics <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13 13 3M6 3h7v7" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" /></svg></button></div></article>
      <article class="ml-services__playbook" data-ml-reveal><div class="ml-services__playbook-number">06</div><div><h4>Behavioral health billing</h4><p>Carve-outs, session limits, timed psychotherapy codes, and telehealth place-of-service rules.</p><button type="button" data-ml-open="behavioral-health-playbook" aria-haspopup="dialog">Explore behavioral health <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13 13 3M6 3h7v7" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" /></svg></button></div></article>
      <article class="ml-services__playbook" data-ml-reveal><div class="ml-services__playbook-number">07</div><div><h4>Dermatology billing</h4><p>Lesion measurement, bundled procedures, modifier 25, and the separation of cosmetic and covered services.</p><button type="button" data-ml-open="dermatology-playbook" aria-haspopup="dialog">Explore dermatology <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13 13 3M6 3h7v7" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" /></svg></button></div></article>
      <article class="ml-services__playbook" data-ml-reveal><div class="ml-services__playbook-number">08</div><div><h4>Physical therapy billing</h4><p>The 8-minute rule, KX and CQ modifiers, and plan-of-care certification requirements.</p><button type="button" data-ml-open="physical-therapy-playbook" aria-haspopup="dialog">Explore physical therapy <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13 13 3M6 3h7v7" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" /></svg></button></div></article>
      <article class="ml-services__playbook" data-ml-reveal><div class="ml-services__playbook-number">09</div><div><h4>Urgent care billing</h4><p>Walk-in registration errors, S codes and contract rates, CLIA-waived labs, and time-of-service collection.</p><button type="button" data-ml-open="urgent-care-playbook" aria-haspopup="dialog">Explore urgent care <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13 13 3M6 3h7v7" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" /></svg></button></div></article>
      <article class="ml-services__playbook" data-ml-reveal><div class="ml-services__playbook-number">10</div><div><h4>Radiology billing</h4><p>Professional and technical component splits, advanced imaging authorization, and medical necessity.</p><button type="button" data-ml-open="radiology-playbook" aria-haspopup="dialog">Explore radiology <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13 13 3M6 3h7v7" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" /></svg></button></div></article>
    </div>

    <div class="ml-services__closing" data-ml-reveal>
      <div><strong>Do not see your specialty?</strong><span>We can adapt quickly with minimal ramp-up time.</span></div>
      <button type="button" data-ml-open="many-more" aria-haspopup="dialog">Discuss your practice <span aria-hidden="true">â†—</span></button>
    </div>
  </div>

  <div class="ml-services__modal" data-ml-modal hidden aria-hidden="true">
    <div class="ml-services__modal-backdrop" data-ml-close="backdrop"></div>
    <div class="ml-services__dialog" role="dialog" aria-modal="true" aria-labelledby="mls-modal-title" aria-describedby="mls-modal-summary" tabindex="-1">
      <button class="ml-services__modal-close" type="button" data-ml-close aria-label="Close details">Ã—</button>
      <div class="ml-services__modal-eyebrow" id="mls-modal-eyebrow">Specialty billing focus</div>
      <h3 class="ml-services__modal-title" id="mls-modal-title">Specialty billing</h3>
      <p class="ml-services__modal-summary" id="mls-modal-summary"></p>
      <div class="ml-services__modal-grid">
        <div class="ml-services__modal-panel">
          <span class="ml-services__modal-panel-label">What we focus on</span>
          <ul id="mls-modal-focus"></ul>
        </div>
        <div class="ml-services__modal-panel">
          <span class="ml-services__modal-panel-label">How this helps</span>
          <p id="mls-modal-outcome"></p>
        </div>
      </div>
      <div class="ml-services__modal-footer">
        <span class="ml-services__modal-note">Every workflow is tailored to your providers, payer mix, and practice goals.</span>
        <button class="ml-services__modal-back" type="button" data-ml-close>Back to services</button>
      </div>
    </div>
  </div>
</section>


`;

export default function ServicesAddon() {
  useEffect(() => {
    
  (() => {
    const details = {
      'internal-medicine': {
        eyebrow: 'Primary care & adult medicine',
        title: 'Internal Medicine Billing',
        summary: 'A practical billing workflow for adult medicine teams that balances accurate office-visit billing with the ongoing care many patients require.',
        focus: ['Office-visit level selection and documentation alignment', 'Medicare wellness visits versus physicals', 'Care-management and chronic-condition charge capture', 'A/R follow-up organized by payer response and aging'],
        outcome: 'Your team gets a clearer view of missed charges, payer friction, and the next action needed to move each account forward.'
      },
      pediatrics: {
        eyebrow: 'Pediatric practice billing',
        title: 'Pediatric Billing',
        summary: 'Specialty-aware billing support for practices caring for infants, children, and adolescents across commercial and managed Medicaid plans.',
        focus: ['Vaccine administration components and VFC workflows', 'Same-day sick and well-visit billing', 'Preventive screenings and developmental services', 'Medicaid managed-care requirements and follow-up'],
        outcome: 'Important preventive services and administration components stay visible while your staff spends less time sorting payer-specific issues.'
      },
      'urgent-care': {
        eyebrow: 'Walk-in & immediate care',
        title: 'Urgent & Immediate Care Billing',
        summary: 'A fast-moving billing workflow designed for walk-in volume, time-of-service collections, and the payer rules that make urgent care different.',
        focus: ['Registration and demographic accuracy', 'S codes, contract rates, and payer-specific edits', 'CLIA-waived laboratory services', 'Time-of-service collection and denial prevention'],
        outcome: 'Your operation can move quickly without losing visibility into registration errors, underpayments, or claims that require immediate attention.'
      },
      chiropractic: {
        eyebrow: 'Spine & musculoskeletal care',
        title: 'Chiropractic Billing',
        summary: 'Billing support that connects the clinical story, treatment plan, visit limits, and payer requirements for chiropractic care.',
        focus: ['Spinal region and treatment documentation', 'Payer-specific visit limits and benefit rules', 'Medical-necessity and authorization follow-up', 'Clean claim review for recurring treatment plans'],
        outcome: 'Your team receives a repeatable process for handling visits, payer questions, and aging accounts without relying on guesswork.'
      },
      dme: {
        eyebrow: 'Equipment & recurring supplies',
        title: 'DME Billing',
        summary: 'A detail-focused revenue workflow for therapeutic equipment and supplies delivered to patients in the home.',
        focus: ['Coverage and medical-necessity documentation', 'Prior authorization and payer follow-up', 'Delivery, usage, and recurring-supply records', 'Modifiers, replacement cycles, and denial tracking'],
        outcome: 'The documentation trail is easier to follow, helping your team address preventable denials before they become long-aged receivables.'
      },
      optometry: {
        eyebrow: 'Vision & eye care',
        title: 'Optometry Billing',
        summary: 'Billing support for routine eye care, medical eye visits, diagnostic testing, and the coverage differences that can affect payment.',
        focus: ['Routine vision versus medical eye-care workflows', 'Exam, refraction, and testing components', 'Diagnosis-to-service alignment', 'Payer edits, benefit limits, and follow-up'],
        outcome: 'Your staff gets a cleaner way to separate coverage types, review claim details, and protect revenue from services that are often misunderstood.'
      },
      pathology: {
        eyebrow: 'Laboratory-based diagnosis',
        title: 'Pathology Billing',
        summary: 'A structured billing process for laboratory-based diagnosis where specimen, component, and medical-necessity details all matter.',
        focus: ['Professional and technical component coordination', 'Accession and specimen information review', 'Medical-necessity and payer policy checks', 'Laboratory edits, denials, and documentation follow-up'],
        outcome: 'Your billing team can identify whether an issue starts with the order, the claim detail, the payer policy, or missing supporting documentation.'
      },
      radiology: {
        eyebrow: 'Diagnostic & interventional imaging',
        title: 'Radiology Billing',
        summary: 'Specialty billing support for imaging and radiation-based treatment, with attention to authorization, components, and medical necessity.',
        focus: ['Professional and technical component splits', 'Advanced-imaging authorization checks', 'Medical-necessity and diagnosis review', 'Modifier, payer-edit, and denial follow-up'],
        outcome: 'Your practice gains a consistent way to work high-value imaging claims and understand exactly why a payer has delayed or denied payment.'
      },
      'ambulatory-surgery': {
        eyebrow: 'Same-day surgical services',
        title: 'Ambulatory Surgery Billing',
        summary: 'A coordinated billing workflow for outpatient procedures that depend on accurate scheduling, documentation, and same-day claim movement.',
        focus: ['Procedure and service-line completeness', 'Authorization and coverage verification', 'Global-period and modifier review', 'Payer follow-up for high-value outpatient claims'],
        outcome: 'Your team can protect the complete episode of care while keeping exceptions visible before they turn into avoidable write-offs.'
      },
      cardiology: {
        eyebrow: 'Heart & vascular care',
        title: 'Cardiology Billing',
        summary: 'Billing support for cardiology practices managing complex procedures, monitoring services, coverage policies, and high-dollar accounts.',
        focus: ['Bundling edits and coverage policies', 'Device-monitoring frequency limits', 'Heart-failure and chronic-care service capture', 'Underpayment review on high-dollar procedures'],
        outcome: 'Your practice gets specialty-aware review for the claims where one missed component, frequency limit, or payer edit can materially affect reimbursement.'
      },
      gastroenterology: {
        eyebrow: 'Digestive health services',
        title: 'Gastroenterology Billing',
        summary: 'A coordinated revenue workflow for digestive-health practices, endoscopy services, pathology relationships, and payer-specific requirements.',
        focus: ['Screening versus diagnostic procedure distinctions', 'Endoscopy components and documentation', 'Pathology and related-service coordination', 'Authorization, coding edits, and denial follow-up'],
        outcome: 'Your team can see the full claim story across the procedure, related services, payer policy, and follow-up activity.'
      },
      'many-more': {
        eyebrow: 'Flexible specialty coverage',
        title: 'A Billing Workflow for Your Specialty',
        summary: 'MediLink RCM can map a new specialty quickly by learning your payer mix, service lines, documentation patterns, and current revenue-cycle bottlenecks.',
        focus: ['A quick discovery of your specialty and payer mix', 'A workflow map for claims, denials, eligibility, and A/R', 'A practical ramp-up plan for your providers and locations', 'Reporting built around the metrics your team needs'],
        outcome: 'You receive a focused operating plan instead of a generic checklist, with clear ownership for the next steps.'
      },
      'cardiology-playbook': {
        eyebrow: 'Dedicated specialty playbook',
        title: 'Cardiology Billing Playbook',
        summary: 'Our cardiology-focused review is designed around the denial patterns that appear in complex heart and vascular services.',
        focus: ['Bundling edits and coverage-policy interpretation', 'Device-monitoring frequency limits', 'High-dollar procedure underpayment review', 'A/R prioritization by financial impact'],
        outcome: 'Administrators can understand which claims need documentation, correction, payer escalation, or contract review.'
      },
      'pediatrics-playbook': {
        eyebrow: 'Dedicated specialty playbook',
        title: 'Pediatric Billing Playbook',
        summary: 'A focused approach to pediatric billing that accounts for preventive care, vaccine administration, and managed-care complexity.',
        focus: ['Vaccine administration and VFC components', 'Same-day sick and well-visit rules', 'Screenings and preventive services', 'Medicaid managed-care follow-up'],
        outcome: 'Your team can protect preventive revenue while reducing rework caused by missing components and payer-specific requirements.'
      },
      'internal-medicine-playbook': {
        eyebrow: 'Dedicated specialty playbook',
        title: 'Internal Medicine Billing Playbook',
        summary: 'A focused review of the visit-level, wellness, and care-management details that influence adult primary-care reimbursement.',
        focus: ['Office-visit level selection under current rules', 'Wellness visits versus physicals', 'Care-management charge capture', 'Unbilled or underworked services'],
        outcome: 'Practice leaders get a cleaner picture of where documentation, charge capture, or follow-up is limiting revenue.'
      },
      'obgyn-playbook': {
        eyebrow: 'Dedicated specialty playbook',
        title: 'OB/GYN Billing Playbook',
        summary: 'A maternity and womenâ€™s-health billing workflow that keeps global-package and split-billing details organized.',
        focus: ['Global maternity package rules', 'Split billing and antepartum visit counts', 'Delivery and postpartum claim timing', 'Ultrasound medical-necessity review'],
        outcome: 'Your practice has a repeatable way to reduce confusion around maternity episodes and protect services outside the global package.'
      },
      'orthopedics-playbook': {
        eyebrow: 'Dedicated specialty playbook',
        title: 'Orthopedic Billing Playbook',
        summary: 'A focused orthopedic workflow for authorization, surgical periods, modifiers, DME, and injection-related billing.',
        focus: ['Prior authorization and payer follow-up', 'Surgical global periods and modifiers', 'DME enrollment and documentation', 'Injection units and claim accuracy'],
        outcome: 'Your team can work orthopedic claims with a clearer sequence from authorization to final payment.'
      },
      'behavioral-health-playbook': {
        eyebrow: 'Dedicated specialty playbook',
        title: 'Behavioral Health Billing Playbook',
        summary: 'A billing workflow designed around carve-outs, time-based services, visit limits, and telehealth requirements.',
        focus: ['Carve-outs and behavioral-health benefit structures', 'Session limits and authorization tracking', 'Timed psychotherapy codes', 'Telehealth place-of-service requirements'],
        outcome: 'Your billing team can distinguish benefit limitations from claim errors and work the right next step faster.'
      },
      'dermatology-playbook': {
        eyebrow: 'Dedicated specialty playbook',
        title: 'Dermatology Billing Playbook',
        summary: 'A practical dermatology review for procedures where measurement, bundling, modifiers, and cosmetic coverage can change payment.',
        focus: ['Lesion measurement and documentation', 'Bundled services inside a procedure', 'Modifier 25 review', 'Covered versus cosmetic lines'],
        outcome: 'Your team gains a clearer way to separate covered services, avoid avoidable edits, and explain denial patterns.'
      },
      'physical-therapy-playbook': {
        eyebrow: 'Dedicated specialty playbook',
        title: 'Physical Therapy Billing Playbook',
        summary: 'A therapy-focused process for timed services, plan-of-care requirements, and payer-specific modifiers.',
        focus: ['8-minute rule and timed-unit review', 'KX and CQ modifier requirements', 'Plan-of-care certification', 'Visit-limit and authorization tracking'],
        outcome: 'Your practice can reduce unit errors and keep documentation, authorization, and follow-up aligned.'
      },
      'urgent-care-playbook': {
        eyebrow: 'Dedicated specialty playbook',
        title: 'Urgent Care Billing Playbook',
        summary: 'A high-velocity urgent-care workflow for registration, contract, laboratory, and collection issues.',
        focus: ['Walk-in registration accuracy', 'S codes and contract rates', 'CLIA-waived laboratory billing', 'Time-of-service collection'],
        outcome: 'Your operation gets a practical way to catch front-end issues and move urgent-care claims through follow-up without delay.'
      },
      'radiology-playbook': {
        eyebrow: 'Dedicated specialty playbook',
        title: 'Radiology Billing Playbook',
        summary: 'A focused radiology process for component splits, advanced-imaging authorization, and medical-necessity review.',
        focus: ['Professional and technical component splits', 'Advanced-imaging authorization', 'Medical-necessity documentation', 'High-value denial and underpayment follow-up'],
        outcome: 'Your administrators can see whether the problem is authorization, documentation, coding, payer policy, or payment accuracy.'
      }
    };

    document.querySelectorAll('.ml-services[data-ml-services]').forEach((root) => {
      const items = root.querySelectorAll('[data-ml-reveal]');
      if (!('IntersectionObserver' in window)) {
        items.forEach((item) => item.classList.add('ml-is-visible'));
      } else {
        const observer = new IntersectionObserver((entries, currentObserver) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('ml-is-visible');
              currentObserver.unobserve(entry.target);
            }
          });
        }, { threshold: 0.12 });

        items.forEach((item) => observer.observe(item));
      }

      const modal = root.querySelector('[data-ml-modal]');
      if (!modal) return;

      const dialog = modal.querySelector('.ml-services__dialog');
      const closeButton = modal.querySelector('.ml-services__modal-close');
      const eyebrow = modal.querySelector('#mls-modal-eyebrow');
      const title = modal.querySelector('#mls-modal-title');
      const summary = modal.querySelector('#mls-modal-summary');
      const focus = modal.querySelector('#mls-modal-focus');
      const outcome = modal.querySelector('#mls-modal-outcome');
      let activeTrigger = null;
      let previousOverflow = '';
      let hideTimer = null;

      const closeModal = () => {
        if (modal.hidden) return;
        modal.classList.remove('ml-is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = previousOverflow;
        if (activeTrigger) activeTrigger.setAttribute('aria-expanded', 'false');
        window.clearTimeout(hideTimer);
        hideTimer = window.setTimeout(() => {
          modal.hidden = true;
          if (activeTrigger) activeTrigger.focus();
          activeTrigger = null;
        }, 220);
      };

      const openModal = (key, trigger) => {
        const item = details[key];
        if (!item) return;

        window.clearTimeout(hideTimer);
        activeTrigger = trigger;
        eyebrow.textContent = item.eyebrow;
        title.textContent = item.title;
        summary.textContent = item.summary;
        outcome.textContent = item.outcome;
        focus.replaceChildren(...item.focus.map((point) => {
          const listItem = document.createElement('li');
          listItem.textContent = point;
          return listItem;
        }));
        trigger.setAttribute('aria-expanded', 'true');
        modal.hidden = false;
        modal.setAttribute('aria-hidden', 'false');
        previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        window.requestAnimationFrame(() => modal.classList.add('ml-is-open'));
        closeButton.focus();
      };

      root.querySelectorAll('[data-ml-open]').forEach((trigger) => {
        trigger.setAttribute('aria-expanded', 'false');
        trigger.addEventListener('click', () => openModal(trigger.dataset.mlOpen, trigger));
      });

      modal.querySelectorAll('[data-ml-close]').forEach((closeTarget) => {
        closeTarget.addEventListener('click', closeModal);
      });

      root.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !modal.hidden) closeModal();
      });

      dialog.addEventListener('click', (event) => event.stopPropagation());
    });
  })();

  }, []);

  return <div dangerouslySetInnerHTML={{ __html: rawHTML }} />;
}
