const sources = {
  courts: {
    title: "U.S. Courts: Court Role and Structure",
    org: "Administrative Office of the U.S. Courts",
    url: "https://www.uscourts.gov/about-federal-courts/court-role-and-structure"
  },
  federalState: {
    title: "Comparing Federal and State Courts",
    org: "Administrative Office of the U.S. Courts",
    url: "https://www.uscourts.gov/about-federal-courts/court-role-and-structure/comparing-federal-state-courts"
  },
  constitution: {
    title: "U.S. Constitution and Amendments",
    org: "Constitution Annotated, Congress.gov",
    url: "https://constitution.congress.gov/constitution/"
  },
  criminal: {
    title: "Criminal Case Overview",
    org: "U.S. District Court, Southern District of New York",
    url: "https://www.nysd.uscourts.gov/criminal-case"
  },
  probableCause: {
    title: "Probable Cause",
    org: "Cornell Legal Information Institute",
    url: "https://www.law.cornell.edu/wex/probable_cause"
  },
  reasonableSuspicion: {
    title: "Reasonable Suspicion",
    org: "Cornell Legal Information Institute",
    url: "https://www.law.cornell.edu/index.php/wex/reasonable_suspicion"
  },
  recordingPolice: {
    title: "Know Your Rights: Recording Police",
    org: "ACLU of Pennsylvania",
    url: "https://www.aclupa.org/know-your-rights/takingphotosandvideo/"
  },
  contracts: {
    title: "Contract",
    org: "Cornell Legal Information Institute",
    url: "https://www.law.cornell.edu/wex/contract"
  },
  arbitration: {
    title: "Mandatory Binding Arbitration in Auto Purchase Agreements",
    org: "Consumer Financial Protection Bureau",
    url: "https://www.consumerfinance.gov/ask-cfpb/what-is-mandatory-binding-arbitration-in-an-auto-purchase-agreement-en-739/"
  },
  tenant: {
    title: "Tenant Rights and Landlord Complaints",
    org: "USAGov",
    url: "https://www.usa.gov/tenant-rights"
  },
  fairHousing: {
    title: "Fair Housing Rights and Obligations",
    org: "U.S. Department of Housing and Urban Development",
    url: "https://www.hud.gov/stat/fheo/rights-obligations"
  },
  dolWorkers: {
    title: "Workers",
    org: "U.S. Department of Labor",
    url: "https://beta.dol.gov/workers"
  },
  flsa: {
    title: "Wages and the Fair Labor Standards Act",
    org: "U.S. Department of Labor",
    url: "https://www.dol.gov/index.php/agencies/whd/flsa"
  },
  eeoc: {
    title: "Employees and Applicants",
    org: "U.S. Equal Employment Opportunity Commission",
    url: "https://www.eeoc.gov/employees"
  },
  creditDisputes: {
    title: "Using Credit Cards and Disputing Charges",
    org: "Federal Trade Commission",
    url: "https://consumer.ftc.gov/articles/using-credit-cards-and-disputing-charges"
  },
  creditReports: {
    title: "Disputing Errors on Your Credit Reports",
    org: "Federal Trade Commission",
    url: "https://consumer.ftc.gov/articles/disputing-errors-your-credit-reports"
  },
  identityTheft: {
    title: "What To Know About Identity Theft",
    org: "Federal Trade Commission",
    url: "https://consumer.ftc.gov/articles/what-know-about-identity-theft"
  },
  family: {
    title: "Family Legal Issues",
    org: "USAGov",
    url: "https://www.usa.gov/family-legal-issues"
  },
  childSupport: {
    title: "How To Get Help Collecting Child Support",
    org: "USAGov",
    url: "https://www.usa.gov/child-support"
  },
  hipaa: {
    title: "The HIPAA Privacy Rule",
    org: "U.S. Department of Health and Human Services",
    url: "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html"
  },
  medicalRecords: {
    title: "Your Medical Records",
    org: "U.S. Department of Health and Human Services",
    url: "https://www.hhs.gov/hipaa/for-individuals/medical-records/index.html"
  },
  advance: {
    title: "Advance Care Planning",
    org: "Medicare.gov",
    url: "https://www.medicare.gov/coverage/advance-care-planning"
  },
  copyright: {
    title: "Copyright in General",
    org: "U.S. Copyright Office",
    url: "https://www.copyright.gov/help/faq/faq-general.html"
  },
  onlinePrivacy: {
    title: "Online Privacy and Security",
    org: "Federal Trade Commission",
    url: "https://consumer.ftc.gov/identity-theft-and-online-security/online-privacy-and-security"
  },
  legalAid: {
    title: "Find a Lawyer for Affordable Legal Aid",
    org: "USAGov",
    url: "https://www.usa.gov/legal-aid"
  },
  glossary: {
    title: "Glossary of Legal Terms",
    org: "Administrative Office of the U.S. Courts",
    url: "https://www.uscourts.gov/glossary"
  }
};

const weeks = [
  {
    title: "Foundations: How U.S. Law Works",
    goal: "Understand the basic structure of U.S. law so future topics make sense.",
    learn: [
      "Federal, state, and local law",
      "Constitution, statutes, regulations, and court decisions",
      "Civil law versus criminal law",
      "Trial courts, appeals courts, and the Supreme Court",
      "The roles of lawyers, judges, prosecutors, and public defenders"
    ],
    tasks: [
      "Find your state official legal website and your county court website.",
      "Locate where your state publishes laws and where your city or county publishes ordinances.",
      "Write a one-paragraph answer to: Which level of government applies to this problem?"
    ],
    terms: [
      ["Federal law", "联邦法律: applies nationally in areas Congress can regulate."],
      ["State law", "州法律: often controls everyday issues like family, housing, torts, and contracts."],
      ["Regulation", "行政法规: rules made by agencies under authority given by statutes."],
      ["Precedent", "判例: a prior court decision that guides later courts."]
    ],
    outcome: "Explain who makes law in the U.S. and which level of government applies to common daily-life situations.",
    sourceKeys: ["courts", "federalState", "constitution"]
  },
  {
    title: "Constitutional Rights in Daily Life",
    goal: "Learn the rights people commonly hear about and when they apply.",
    learn: [
      "First Amendment speech, religion, protest, assembly, and petition",
      "Fourth Amendment searches and seizures",
      "Fifth Amendment self-incrimination and due process",
      "Sixth Amendment right to counsel in criminal cases",
      "Fourteenth Amendment equal protection and due process",
      "Why constitutional rights usually restrict government actors"
    ],
    tasks: [
      "Summarize the First, Fourth, Fifth, and Sixth Amendments in your own words.",
      "Compare probable cause with reasonable suspicion.",
      "Look up your state's rule on recording police or public officials."
    ],
    terms: [
      ["Government actor", "政府行为者: an official or agency acting with government authority."],
      ["Due process", "正当程序: required fairness before government deprives a person of life, liberty, or property."],
      ["Equal protection", "平等保护: government generally must treat similarly situated people alike."],
      ["Self-incrimination", "自证其罪: being compelled to provide testimony against yourself in a criminal case."]
    ],
    outcome: "Understand that constitutional rights usually protect people against government action, not every private dispute.",
    sourceKeys: ["constitution", "probableCause", "reasonableSuspicion", "recordingPolice"]
  },
  {
    title: "Police Encounters and Criminal Law Basics",
    goal: "Understand common situations involving police, tickets, arrests, and criminal charges.",
    learn: [
      "Infractions, misdemeanors, and felonies",
      "Traffic stops and citations",
      "Searches of cars, homes, phones, and bags",
      "Miranda warnings and the right to remain silent",
      "Bail, arraignment, plea agreements, trial, and public defenders"
    ],
    tasks: [
      "Learn your state's traffic ticket process.",
      "Find the website for your local criminal court.",
      "Check how to confirm whether a court date is required after a citation."
    ],
    terms: [
      ["Arraignment", "提审/首次出庭: early hearing where charges are read and a plea may be entered."],
      ["Bail", "保释: release conditions or money/security meant to ensure future court appearances."],
      ["Plea agreement", "认罪协议: an agreement resolving a criminal case, often with a guilty plea."],
      ["Public defender", "公设辩护律师: lawyer appointed for eligible criminal defendants who cannot afford counsel."]
    ],
    outcome: "Know a safe general phrase: I want to remain silent, and I want to speak with a lawyer.",
    sourceKeys: ["criminal", "probableCause", "reasonableSuspicion", "recordingPolice"]
  },
  {
    title: "Contracts and Everyday Agreements",
    goal: "Understand the basics of legally binding promises.",
    learn: [
      "What makes a contract valid",
      "Offer, acceptance, consideration, capacity, and legality",
      "Written and oral contracts",
      "Breach of contract and remedies",
      "Phone plans, gyms, car repairs, subscriptions, and online terms",
      "Fine print, arbitration clauses, cancellation terms, and late fees"
    ],
    tasks: [
      "Read one agreement you already have, such as a phone, gym, or streaming subscription.",
      "Identify payment terms, cancellation policy, late fees, and dispute resolution.",
      "Mark any term that limits your right to sue or join a class action."
    ],
    terms: [
      ["Offer", "要约: a proposed deal that can become binding if accepted."],
      ["Acceptance", "承诺: agreeing to the terms of an offer in the required way."],
      ["Consideration", "对价: something of value exchanged by each side."],
      ["Arbitration", "仲裁: private dispute resolution that can replace going to court."]
    ],
    outcome: "Spot risky terms before signing or clicking I agree.",
    sourceKeys: ["contracts", "arbitration"]
  },
  {
    title: "Housing Law: Renting, Leases, and Landlords",
    goal: "Learn common rights and responsibilities as a tenant or renter.",
    learn: [
      "Lease basics and renewal terms",
      "Security deposits",
      "Repairs and habitability",
      "Rent increases and notices",
      "Eviction process",
      "Roommates, subleases, and landlord entry rules",
      "Fair housing protections"
    ],
    tasks: [
      "Find your state's landlord-tenant handbook or tenant-rights guide.",
      "Read your lease or a sample lease.",
      "List rent, late fee, deposit, notice period, renewal, maintenance, and entry terms."
    ],
    terms: [
      ["Lease", "租约: contract that sets the rental terms."],
      ["Security deposit", "押金: money held to cover certain unpaid rent or damage, controlled by state law."],
      ["Habitability", "适居性: the basic legal requirement that housing be livable and safe."],
      ["Eviction", "驱逐/强制搬离程序: court process a landlord generally must use to remove a tenant."]
    ],
    outcome: "Know what to check before signing a lease and what steps to take if repairs are ignored.",
    sourceKeys: ["tenant", "fairHousing", "legalAid"]
  },
  {
    title: "Employment Law for Workers",
    goal: "Understand basic workplace rights.",
    learn: [
      "At-will employment",
      "Minimum wage and overtime",
      "Employee versus independent contractor",
      "Workplace discrimination, harassment, and retaliation",
      "Family and medical leave basics",
      "Workplace safety",
      "Noncompete, confidentiality, and handbook terms"
    ],
    tasks: [
      "Check your state minimum wage and overtime rules.",
      "Find where to file a wage complaint in your state.",
      "Read your offer letter or employee handbook if you have one."
    ],
    terms: [
      ["At-will employment", "任意雇佣: employment can usually end at any time, unless a law or agreement limits that."],
      ["Overtime", "加班费: federal law usually requires 1.5 times regular pay after 40 hours for covered nonexempt workers."],
      ["Protected class", "受保护类别: traits such as race, sex, religion, disability, national origin, and age 40+ under federal law."],
      ["Retaliation", "报复: punishment for asserting protected workplace rights."]
    ],
    outcome: "Understand the difference between unfair treatment and legally actionable discrimination or retaliation.",
    sourceKeys: ["dolWorkers", "flsa", "eeoc"]
  },
  {
    title: "Consumer Law and Money",
    goal: "Learn protections related to purchases, debt, credit, and scams.",
    learn: [
      "Refunds, warranties, and unordered products",
      "Debt collection rights",
      "Credit reports and disputes",
      "Credit card billing disputes",
      "Auto purchases and repairs",
      "Fraud, scams, and identity theft",
      "Small claims court"
    ],
    tasks: [
      "Request or review your credit report.",
      "Learn how to dispute a credit card charge.",
      "Find your state attorney general's consumer protection page.",
      "Learn your local small claims court limit."
    ],
    terms: [
      ["Debt collector", "债务催收者: a person or company trying to collect a debt, subject to federal and state limits."],
      ["Credit report", "信用报告: record used by lenders, landlords, insurers, and sometimes employers."],
      ["Billing dispute", "账单争议: formal challenge to a credit card charge or billing error."],
      ["Small claims", "小额索赔: simplified court process for lower-dollar disputes."]
    ],
    outcome: "Know what to do if you are overcharged, scammed, or contacted by a debt collector.",
    sourceKeys: ["creditDisputes", "creditReports", "identityTheft", "legalAid"]
  },
  {
    title: "Family Law Basics",
    goal: "Understand common family-law issues at a high level.",
    learn: [
      "Marriage and divorce basics",
      "Prenuptial agreements",
      "Child custody and child support",
      "Domestic violence protective orders",
      "Adoption basics",
      "Legal guardianship",
      "Name changes"
    ],
    tasks: [
      "Find your state family court website.",
      "Learn the difference between legal custody and physical custody.",
      "Look up how protective orders work in your state."
    ],
    terms: [
      ["Custody", "监护/抚养安排: legal and practical responsibility for a child."],
      ["Child support", "子女抚养费: money one parent may be ordered to pay for a child's needs."],
      ["Protective order", "保护令: court order meant to protect someone from abuse, threats, or harassment."],
      ["Guardianship", "监护权: court-recognized authority to care for a child or adult who needs assistance."]
    ],
    outcome: "Understand that family law is highly state-specific and often uses specialized court procedures.",
    sourceKeys: ["family", "childSupport", "legalAid"]
  },
  {
    title: "Healthcare, Privacy, and End-of-Life Planning",
    goal: "Learn legal tools related to medical decisions and personal planning.",
    learn: [
      "HIPAA basics and medical-record access",
      "Medical consent",
      "Health insurance appeals",
      "Advance directives and living wills",
      "Healthcare proxy or medical power of attorney",
      "Durable financial power of attorney",
      "Basic estate planning: wills, beneficiaries, and probate"
    ],
    tasks: [
      "Find your state's official advance directive form.",
      "Check beneficiary designations on accounts if applicable.",
      "Learn the difference between a will and a power of attorney."
    ],
    terms: [
      ["HIPAA", "健康信息隐私法框架: federal privacy rules for protected health information."],
      ["Advance directive", "预先医疗指示: document stating future medical wishes if you cannot decide."],
      ["Healthcare proxy", "医疗代理人: trusted person named to make health decisions if you cannot."],
      ["Probate", "遗产认证程序: court process for administering a deceased person's estate."]
    ],
    outcome: "Know which basic documents help someone make decisions for you if you cannot.",
    sourceKeys: ["hipaa", "medicalRecords", "advance"]
  },
  {
    title: "Digital Life, Privacy, and Online Behavior",
    goal: "Understand legal issues in online daily life.",
    learn: [
      "Online privacy and account security",
      "Terms of service",
      "Defamation",
      "Copyright basics",
      "Using images, music, and AI-generated content",
      "Cyberbullying, harassment, stalking, sexting, and image-sharing laws",
      "Data breaches and identity theft"
    ],
    tasks: [
      "Review privacy settings on major accounts.",
      "Learn what doxxing, harassment, and defamation mean legally.",
      "Check whether your state has data breach notification laws."
    ],
    terms: [
      ["Defamation", "诽谤: false factual statement that harms someone's reputation; rules vary by state."],
      ["Copyright", "版权: protection for original expression fixed in a tangible medium."],
      ["Terms of service", "服务条款: contract-like rules for using a website or app."],
      ["Data breach", "数据泄露: unauthorized exposure or access to personal information."]
    ],
    outcome: "Understand what online actions can create legal risk.",
    sourceKeys: ["onlinePrivacy", "copyright", "identityTheft"]
  },
  {
    title: "Courts, Lawyers, and Legal Documents",
    goal: "Learn how to navigate the legal system when a problem happens.",
    learn: [
      "When you need a lawyer",
      "How to find legal aid",
      "Small claims court",
      "Demand letters and mediation",
      "Court forms and filing deadlines",
      "Evidence basics",
      "What happens if you are sued"
    ],
    tasks: [
      "Find your state legal aid organization.",
      "Find your local small claims court forms.",
      "Draft a simple mock demand letter for a fictional dispute.",
      "Learn what statute of limitations means."
    ],
    terms: [
      ["Demand letter", "索赔/催告信: written request to resolve a dispute before filing a case."],
      ["Mediation", "调解: neutral person helps parties try to settle voluntarily."],
      ["Evidence", "证据: materials used to prove facts, such as documents, photos, testimony, or records."],
      ["Statute of limitations", "诉讼时效: deadline to file a legal claim."]
    ],
    outcome: "Know the first steps to take when a dispute becomes serious.",
    sourceKeys: ["legalAid", "courts", "glossary"]
  },
  {
    title: "Practical Review and Personal Legal Checklist",
    goal: "Consolidate everything into a personal daily-life legal toolkit.",
    learn: [
      "Emergency legal contacts",
      "State court, county court, and legal aid links",
      "Consumer, tenant, and wage complaint offices",
      "Small claims court page",
      "Copies of leases, contracts, insurance, IDs, and important documents",
      "Basic estate-planning documents to consider",
      "Steps to take if stopped by police, sued, scammed, or fired"
    ],
    tasks: [
      "Create a one-page Legal First Aid Plan.",
      "Answer: What documents should I keep organized?",
      "Answer: Who would I call for legal help?",
      "Answer: What should I never ignore?",
      "Answer: What situations require a lawyer quickly?"
    ],
    terms: [
      ["Legal aid", "法律援助: free or low-cost legal help, often income-limited."],
      ["Court summons", "传票/出庭通知: official notice that requires a response or appearance."],
      ["Default judgment", "缺席判决: judgment entered when a party fails to respond or appear."],
      ["Deadline", "期限: a date you should treat as urgent, especially court or agency deadlines."]
    ],
    outcome: "Leave with a personalized, state-specific legal first aid plan.",
    sourceKeys: ["legalAid", "tenant", "dolWorkers", "creditDisputes", "advance"]
  }
];

const weekSelect = document.querySelector("#weekSelect");
const weekTabs = document.querySelector("#weekTabs");
const moduleEl = document.querySelector("#module");
const prevWeek = document.querySelector("#prevWeek");
const nextWeek = document.querySelector("#nextWeek");
const sourceLibrary = document.querySelector("#sourceLibrary");

let currentWeek = 0;

function list(items) {
  return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function sourceCards(keys) {
  return keys.map((key) => {
    const source = sources[key];
    return `
      <a class="source-card" href="${source.url}" target="_blank" rel="noreferrer">
        <strong>${source.title}</strong>
        <span>${source.org}</span>
      </a>
    `;
  }).join("");
}

function terms(items) {
  return items.map(([term, note]) => `
    <div class="term"><b>${term}</b>: ${note}</div>
  `).join("");
}

function renderWeek(index) {
  currentWeek = index;
  const week = weeks[index];
  weekSelect.value = String(index);
  document.querySelectorAll(".week-tab").forEach((tab, tabIndex) => {
    tab.setAttribute("aria-current", tabIndex === index ? "true" : "false");
  });

  moduleEl.innerHTML = `
    <div class="module-title">
      <div>
        <span class="pill">Week ${index + 1}</span>
        <h3>${week.title}</h3>
      </div>
      <span class="pill">Local check required</span>
    </div>

    <div class="module-grid">
      <section class="panel" aria-label="English course version">
        <h4>English Version</h4>
        <p class="goal"><strong>Goal:</strong> ${week.goal}</p>
        <h4>Learn</h4>
        ${list(week.learn)}
        <h4>Weekly Tasks</h4>
        ${list(week.tasks)}
        <p><strong>By the end of the week:</strong> ${week.outcome}</p>
      </section>

      <section class="panel" lang="zh-Hans" aria-label="English version with Chinese legal term explanations">
        <h4>English Copy + 中文法律术语解释</h4>
        <p class="goal"><strong>Goal 目标:</strong> ${week.goal}</p>
        <h4>Learn 学习内容</h4>
        ${list(week.learn)}
        <h4>Weekly Tasks 每周任务</h4>
        ${list(week.tasks)}
        <h4>Key Legal Terms 重点法律术语</h4>
        <div class="term-list">${terms(week.terms)}</div>
        <p><strong>By the end of the week 本周完成后:</strong> ${week.outcome}</p>
      </section>
    </div>

    <section class="panel" aria-label="Verified sources">
      <h4>Verified Sources</h4>
      <div class="source-cards">${sourceCards(week.sourceKeys)}</div>
    </section>
  `;
}

function buildNavigation() {
  weeks.forEach((week, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = `${index + 1}. ${week.title}`;
    weekSelect.appendChild(option);

    const button = document.createElement("button");
    button.type = "button";
    button.className = "week-tab";
    button.textContent = index + 1;
    button.setAttribute("aria-label", `Show week ${index + 1}: ${week.title}`);
    button.addEventListener("click", () => renderWeek(index));
    weekTabs.appendChild(button);
  });
}

function buildSources() {
  const used = [...new Set(weeks.flatMap((week) => week.sourceKeys))];
  sourceLibrary.innerHTML = used.map((key) => {
    const source = sources[key];
    return `
      <a href="${source.url}" target="_blank" rel="noreferrer">
        <strong>${source.title}</strong>
        <span>${source.org}</span>
      </a>
    `;
  }).join("");
}

weekSelect.addEventListener("change", (event) => renderWeek(Number(event.target.value)));
prevWeek.addEventListener("click", () => renderWeek((currentWeek + weeks.length - 1) % weeks.length));
nextWeek.addEventListener("click", () => renderWeek((currentWeek + 1) % weeks.length));

buildNavigation();
buildSources();
renderWeek(0);
