/* =========================================================
   1. SITE CONFIG
   ========================================================= */
const SITE = {
  name: "YourBrand",          // TODO: your platform name
  newBadgeDays: 3,            // "New" badge if posted within this many days
  pageSize: 12                // jobs shown before "Load more"
};

// Google Sheet that holds your daily jobs.
// Sheet must be shared: Share > General access > "Anyone with the link" > Viewer
const SHEET = {
  id: "181-DZ6WMudyfrxoLTpmHboGpbl1Azhf4WRKGDfuUTx8",
  gid: "0"
};

const CSV_URL =
  `https://docs.google.com/spreadsheets/d/${SHEET.id}/export?format=csv&gid=${SHEET.gid}`;

// Leave empty until the account exists. Empty = shown as "Coming soon".
const LINKS = { whatsapp:"", telegram:"", instagram:"", linkedin:"", youtube:"", email:"" /* e.g. "mailto:hello@domain.com" */ };

/* =========================================================
   2. SHEET FORMAT (row 1 = headers, one job per row)
   Required : title | description | date | skills | link
   Optional : company | location | experience | type
   - date   : use YYYY-MM-DD (e.g. 2026-10-19). dd/mm/yyyy also works.
   - skills : comma separated, e.g. Java, Spring Boot, SQL
   - type   : write "Internship" for internships; anything else = job
   - Add new jobs in new rows; the site sorts newest first.
   ========================================================= */
const HEADER_ALIASES = {
  title:["title","job title","role","position","job"],
  description:["description","details","about","summary"],
  date:["date","posted","posted date","date posted","posted on"],
  skills:["skills","skill","tech","technologies","tech stack"],
  link:["link","url","apply link","apply","application url","job link"],
  company:["company","organisation","organization","employer"],
  location:["location","city","place"],
  experience:["experience","exp","level"],
  type:["type","category","kind"]
};

/* =========================================================
   3. STATIC CONTENT
   ========================================================= */
const roadmaps = [
  { title:"Java Full Stack Developer", steps:["Core Java","OOP","Collections","DSA","SQL","Spring Boot","REST APIs","Frontend","Testing","Deployment"] },
  { title:"Python Full Stack Developer", steps:["Python","OOP","DSA","SQL","Django or FastAPI","REST APIs","Frontend","Testing","Deployment"] },
  { title:"AI/ML Engineer", steps:["Python","NumPy","Pandas","Statistics","Machine Learning","Model Evaluation","NLP","LLM Fundamentals","Deployment"] },
  { title:"Software Engineer", steps:["Programming Fundamentals","DSA","OOP","Databases","Operating Systems","Computer Networks","Git","Projects","Interview Preparation"] },
  { title:"Data Analyst", steps:["Excel","SQL","Python","Pandas","Visualization","Statistics","Portfolio Projects"] }
];
const prepTopics = [
  ["Java interview questions","OOP, collections, exceptions, multithreading"],["Python interview questions","Data types, functions, OOP, libraries"],
  ["SQL interview questions","Joins, grouping, subqueries, indexes"],["DSA practice","Arrays, strings, hashing, recursion, sorting"],
  ["Aptitude preparation","Quant, percentages, time and work"],["Logical reasoning","Series, puzzles, data arrangement"],
  ["Communication skills","Introductions, clarity, group discussion"],["HR interview questions","Strengths, goals, teamwork examples"],
  ["Coding assessment practice","Timed problems and edge cases"],["Company-specific preparation","Pattern and rounds for each company"]
];
const challenges = [
  { title:"Two Sum", level:"Easy", topic:"Arrays / Hash Map", desc:"Return indices of two numbers that add up to a target.", input:"nums=[2,7,11,15], target=9", output:"[0,1]", hint:"Store each number's index in a hash map while scanning." },
  { title:"Valid Anagram", level:"Easy", topic:"Strings", desc:"Check whether two strings contain the same characters with the same counts.", input:'"listen", "silent"', output:"true", hint:"Count letters in one string, then subtract using the other." },
  { title:"Word Frequency", level:"Medium", topic:"Hash Maps", desc:"Count how often each word appears in a sentence.", input:'"to be or not to be"', output:"{to:2, be:2, or:1, not:1}", hint:"Split on spaces, then update a map entry per word." },
  { title:"Sort by Frequency", level:"Medium", topic:"Sorting", desc:"Sort array values by how often they occur, most frequent first.", input:"[4,4,1,2,2,2]", output:"[2,2,2,4,4,1]", hint:"Build a count map, then sort entries by count." },
  { title:"Factorial", level:"Easy", topic:"Recursion", desc:"Compute n! using recursion.", input:"n=5", output:"120", hint:"Define the base case n<=1 first." }
];
const projects = [
  { t:"E-commerce Application", s:"React, Spring Boot, MySQL, Payment API", p:"Let shoppers browse, order and pay online.", f:["Cart and checkout","Order tracking","Admin product panel"], d:"Intermediate" },
  { t:"Employee Management System", s:"Java, Spring Boot, PostgreSQL, Angular", p:"Replace spreadsheets for HR records.", f:["CRUD with roles","Attendance","Reports"], d:"Beginner" },
  { t:"House-Price Prediction", s:"Python, Pandas, scikit-learn, Flask", p:"Estimate property prices from features.", f:["Data cleaning","Model comparison","Prediction API"], d:"Beginner" },
  { t:"AI Recommendation System", s:"Python, scikit-learn, FastAPI, React", p:"Suggest products or content users may like.", f:["Collaborative filtering","REST API","Dashboard"], d:"Advanced" },
  { t:"Job Portal with Resume Matching", s:"Node.js, React, MongoDB, NLP", p:"Match resumes to openings by skills.", f:["Resume parsing","Match score","Recruiter view"], d:"Advanced" },
  { t:"Student Performance Prediction", s:"Python, Pandas, ML, Streamlit", p:"Flag students who may need extra support.", f:["Feature analysis","Classification","Visual report"], d:"Intermediate" },
  { t:"Rental Marketplace", s:"Spring Boot, React, MySQL, Maps API", p:"Connect owners and renters in one app.", f:["Listings and search","Booking flow","Reviews"], d:"Intermediate" },
  { t:"AI Customer-Support Chatbot", s:"Python, LLM API, FastAPI, React", p:"Answer common customer questions automatically.", f:["Knowledge base","Chat UI","Escalation to humans"], d:"Advanced" }
];
const courses = [
  { title:"Java Full Stack Development", level:"Beginner to Intermediate", duration:"", fee:"", nextBatch:"",
    why:"Java and Spring Boot are widely used for enterprise and banking software, so many IT companies hire Java developers.",
    roles:["Java Developer","Full Stack Developer","Backend Engineer"],
    modules:["Core Java and OOP","Collections and Streams","DSA basics","SQL and MySQL","Spring Boot and REST APIs","Spring Security and JWT","HTML, CSS, JavaScript","React or Angular","Git and Maven","Testing with JUnit","Docker and deployment","Capstone project"],
    tools:["Java","Spring Boot","MySQL","React","Git"], project:"E-commerce or job portal application" },
  { title:"Python Full Stack Development", level:"Beginner to Intermediate", duration:"", fee:"", nextBatch:"",
    why:"Python is beginner-friendly and used for web, automation, data and AI, which keeps it useful across many roles.",
    roles:["Python Developer","Full Stack Developer","Automation Engineer"],
    modules:["Python fundamentals and OOP","DSA basics","SQL and PostgreSQL","Django and FastAPI","REST APIs and authentication","HTML, CSS, JavaScript","React basics","Git and GitHub","Testing with PyTest","Cloud deployment","Capstone project"],
    tools:["Python","Django","FastAPI","PostgreSQL","React"], project:"Rental marketplace or student management app" },
  { title:"AI/ML and Generative AI", level:"Intermediate", duration:"", fee:"", nextBatch:"",
    why:"Companies in every industry are adding machine learning and generative AI features, creating demand for people who can build them.",
    roles:["AI/ML Engineer","Machine Learning Engineer","Generative AI Developer"],
    modules:["Python for ML","NumPy and Pandas","Statistics and probability","Supervised and unsupervised learning","Model evaluation","Deep learning basics","NLP","LLM APIs and prompt design","RAG and chatbots","Model deployment with FastAPI","Capstone project"],
    tools:["Python","scikit-learn","PyTorch","LLM APIs","FastAPI"], project:"Recommendation system or support chatbot" },
  { title:"Data Analytics and Data Science", level:"Beginner to Intermediate", duration:"", fee:"", nextBatch:"",
    why:"Businesses rely on data for decisions, so analysts who can clean, query and present data are hired in most sectors.",
    roles:["Data Analyst","Business Analyst","Data Scientist (with ML depth)"],
    modules:["Excel for analysis","SQL","Python and Pandas","Data cleaning","Statistics","Power BI or Tableau","EDA and storytelling","Intro to machine learning","Portfolio projects"],
    tools:["Excel","SQL","Python","Power BI","Tableau"], project:"Sales dashboard or house-price prediction" },
  { title:"Cloud and DevOps Engineering", level:"Intermediate", duration:"", fee:"", nextBatch:"",
    why:"More companies run on the cloud, and teams need engineers who can automate, deploy and monitor applications reliably.",
    roles:["DevOps Engineer","Cloud Engineer","Site Reliability Engineer"],
    modules:["Linux and shell scripting","Networking basics","Git workflows","AWS core services","Docker","Kubernetes basics","CI/CD with Jenkins or GitHub Actions","Terraform","Monitoring and logging","Capstone pipeline"],
    tools:["AWS","Docker","Kubernetes","Terraform","Jenkins"], project:"Automated deployment pipeline for a web app" },
  { title:"Cybersecurity Fundamentals", level:"Beginner to Intermediate", duration:"", fee:"", nextBatch:"",
    why:"As more services move online, organisations need people who can find weaknesses and protect systems and data.",
    roles:["Security Analyst","SOC Analyst","Junior Penetration Tester"],
    modules:["Networking and Linux","Security concepts and threats","Web application security (OWASP)","Vulnerability assessment","Intro to ethical hacking","Security monitoring","Incident response basics","Security best practices for developers"],
    tools:["Linux","Wireshark","Burp Suite","Nmap"], project:"Security assessment of a practice web app" },
  { title:"Software Testing and Automation", level:"Beginner", duration:"", fee:"", nextBatch:"",
    why:"Every software team needs quality checks, and automation skills help testers move into higher-impact roles.",
    roles:["QA Engineer","Automation Test Engineer","SDET"],
    modules:["Testing fundamentals","Test cases and bug reports","SQL for testers","Java or Python basics","Selenium automation","API testing with Postman","TestNG or PyTest","CI integration","Capstone test suite"],
    tools:["Selenium","Postman","Java or Python","Git"], project:"Automation suite for an e-commerce site" }
];

/* =========================================================
   4. HELPERS
   ========================================================= */
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const isValidUrl = (u) => { try { return ["http:","https:"].includes(new URL(u).protocol); } catch { return false; } };
const fmtDate = (d) => d ? d.toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}) : "";
const daysAgo = (d) => d ? (Date.now() - d.getTime()) / 864e5 : Infinity;
const hostOf = (u) => { try { return new URL(u).hostname.replace(/^www\./,""); } catch { return ""; } };
const initials = (n) => (n || "?").split(/\s+/).filter(Boolean).map((w) => w[0]).join("").slice(0,2).toUpperCase();

/* Parse many date formats safely. Returns Date or null. */
function parseDate(raw){
  const s = String(raw || "").trim(); if (!s) return null;
  let m = s.match(/^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})/);           // 2026-10-19
  if (m) return new Date(+m[1], +m[2]-1, +m[3]);
  m = s.match(/^(\d{1,2})[-/.](\d{1,2})[-/.](\d{2,4})/);             // 19/10/2026 (dd/mm) or 10/19/2026
  if (m){
    let a = +m[1], b = +m[2], y = +m[3]; if (y < 100) y += 2000;
    return b > 12 ? new Date(y, a-1, b) : new Date(y, b-1, a);        // dd/mm unless clearly mm/dd
  }
  const d = new Date(s);                                              // "19 Oct 2026", "Oct 19, 2026"
  return isNaN(d) ? null : d;
}

/* Minimal RFC-4180 CSV parser (handles quotes, commas and newlines in cells) */
function parseCSV(text){
  const rows = []; let row = [], cell = "", q = false;
  for (let i = 0; i < text.length; i++){
    const c = text[i];
    if (q){
      if (c === '"'){ if (text[i+1] === '"'){ cell += '"'; i++; } else q = false; } else cell += c;
    } else if (c === '"') q = true;
    else if (c === ","){ row.push(cell); cell = ""; }
    else if (c === "\n" || c === "\r"){ if (c === "\r" && text[i+1] === "\n") i++; row.push(cell); rows.push(row); row = []; cell = ""; }
    else cell += c;
  }
  if (cell !== "" || row.length){ row.push(cell); rows.push(row); }
  return rows;
}

/* =========================================================
   5. LOAD JOBS FROM GOOGLE SHEET
   ========================================================= */
let allJobs = [];

function mapHeaders(headerRow){
  const norm = headerRow.map((h) => h.trim().toLowerCase());
  const idx = {};
  for (const key in HEADER_ALIASES){ idx[key] = norm.findIndex((h) => HEADER_ALIASES[key].includes(h)); }
  return idx;
}
function rowsToJobs(rows){
  if (rows.length < 2) return [];
  const idx = mapHeaders(rows[0]);
  if (idx.title < 0) throw new Error("Column 'title' not found in row 1 of the sheet.");
  const get = (r, k) => (idx[k] >= 0 ? (r[idx[k]] || "").trim() : "");
  const seen = new Set(), out = [];
  rows.slice(1).forEach((r, n) => {
    const title = get(r,"title"); if (!title) return;
    const link = get(r,"link"), desc = get(r,"description"), typeRaw = get(r,"type"), exp = get(r,"experience");
    const key = (link || title + get(r,"company")).toLowerCase(); if (seen.has(key)) return; seen.add(key);
    const blob = (title + " " + desc + " " + exp + " " + typeRaw).toLowerCase();
    const intern = /intern/.test(typeRaw.toLowerCase()) || /\bintern(ship)?\b/.test(title.toLowerCase());
    const fresher = !intern && /fresher|graduate|trainee|entry[- ]level|0\s*[-–to]+\s*1|junior|campus/.test(blob);
    out.push({
      id: "r" + n, title, description: desc, link, date: parseDate(get(r,"date")),
      company: get(r,"company"), location: get(r,"location"), experience: exp,
      skills: get(r,"skills").split(/[,;|]/).map((s) => s.trim()).filter(Boolean),
      kind: intern ? "Internship" : fresher ? "Fresher" : "Experienced / Other"
    });
  });
  return out.sort((a,b) => (b.date?.getTime() || 0) - (a.date?.getTime() || 0));
}
async function loadJobs(){
  $("jobGrid").innerHTML = '<div class="skeleton"></div>'.repeat(3);
  const url = `https://docs.google.com/spreadsheets/d/${SHEET.id}/gviz/tq?tqx=out:csv&gid=${SHEET.gid}&_=${Date.now()}`;
  try{
    const res = await fetch(url, { cache:"no-store" });
    if (!res.ok) throw new Error("Sheet returned HTTP " + res.status);
    const text = await res.text();
    if (/^\s*<(!doctype|html)/i.test(text)) throw new Error("Sheet is private. Share it as 'Anyone with the link: Viewer'.");
    allJobs = rowsToJobs(parseCSV(text));
    $("jobNotice").innerHTML = allJobs.length ? "" : '<div class="notice info">No jobs in the sheet yet. Add rows under the header and refresh.</div>';
  }catch(err){
    allJobs = [];
    $("jobNotice").innerHTML = `<div class="notice err">Could not load jobs right now. ${esc(err.message)} Please refresh in a moment.</div>`;
  }
  const latest = allJobs.find((j) => j.date);
  $("lastUpdated").textContent = latest ? "Last updated: " + fmtDate(latest.date) : "Jobs feed";
  updateStats(); fillFilters(); renderJobs(); renderInternships();
}
function updateStats(){
  $("statTotal").textContent = allJobs.filter((j) => j.kind !== "Internship").length;
  $("statFresher").textContent = allJobs.filter((j) => j.kind === "Fresher").length;
  $("statWeek").textContent = allJobs.filter((j) => daysAgo(j.date) <= 7).length;
}

/* =========================================================
   6. SAVED JOBS (localStorage, guarded)
   ========================================================= */
const SAVE_KEY = "savedJobKeys";
const jobKey = (j) => (j.link || j.title).toLowerCase();
function getSaved(){ try { return JSON.parse(localStorage.getItem(SAVE_KEY)) || []; } catch { return []; } }
function toggleSave(key){
  const list = getSaved(), i = list.indexOf(key); i >= 0 ? list.splice(i,1) : list.push(key);
  try { localStorage.setItem(SAVE_KEY, JSON.stringify(list)); } catch {}
  renderJobs();
}

/* =========================================================
   7. FILTER + RENDER JOBS
   ========================================================= */
const state = { q:"", kind:"All", skill:"All", days:0, savedOnly:false, shown:SITE.pageSize };

function fillFilters(){
  $("fType").innerHTML = ["All types","Fresher","Internship","Experienced / Other"].map((t,i) => `<option value="${i?esc(t):"All"}">${esc(t)}</option>`).join("");
  const skills = [...new Set(allJobs.flatMap((j) => j.skills.map((s) => s.toLowerCase())))].sort();
  const label = (s) => allJobs.flatMap((j) => j.skills).find((x) => x.toLowerCase() === s) || s;
  $("fSkill").innerHTML = '<option value="All">All skills</option>' + skills.map((s) => `<option value="${esc(s)}">${esc(label(s))}</option>`).join("");
}
function filterJobs(){
  const t = state.q.trim().toLowerCase(), saved = getSaved();
  return allJobs.filter((j) =>
    (!t || [j.title, j.company, j.location, j.description, ...j.skills].join(" ").toLowerCase().includes(t)) &&
    (state.kind === "All" || j.kind === state.kind) &&
    (state.skill === "All" || j.skills.some((s) => s.toLowerCase() === state.skill)) &&
    (!state.days || daysAgo(j.date) <= state.days) &&
    (!state.savedOnly || saved.includes(jobKey(j))));
}
function applyButton(url){
  return url && isValidUrl(url)
    ? `<a class="btn btn-primary btn-sm" href="${esc(url)}" target="_blank" rel="noopener noreferrer">Apply Now</a>`
    : `<span class="btn btn-sm" aria-disabled="true">Link unavailable</span>`;
}
function jobCard(j, saved){
  const src = hostOf(j.link);
  const meta = [j.company && j.location ? "" : "", j.location, j.experience, j.date && ("Posted " + fmtDate(j.date)), src && ("via " + src)].filter(Boolean);
  const name = j.company || src || j.title;
  return `<article class="card job">
    <div class="job-top"><div class="ini" aria-hidden="true">${esc(initials(name))}</div>
      <div><h3>${esc(j.title)}</h3>${j.company?`<p class="co">${esc(j.company)}</p>`:""}</div>
      <button class="save" type="button" data-save="${esc(jobKey(j))}" aria-pressed="${saved}" aria-label="${saved?"Remove saved job":"Save job"}: ${esc(j.title)}">${saved?"★":"☆"}</button></div>
    <div class="tags"><span class="badge ${j.kind==="Internship"?"green":""}">${esc(j.kind)}</span>${daysAgo(j.date) <= SITE.newBadgeDays ? '<span class="badge green">New</span>' : ""}</div>
    <div class="meta">${meta.map((m) => `<span>${esc(m)}</span>`).join("")}</div>
    ${j.description ? `<p class="desc">${esc(j.description)}</p>` : ""}
    ${j.skills.length ? `<div class="tags">${j.skills.map((s) => `<span class="skill">${esc(s)}</span>`).join("")}</div>` : ""}
    <div class="foot">${applyButton(j.link)}</div></article>`;
}
function renderJobs(){
  const saved = getSaved(), r = filterJobs(), page = r.slice(0, state.shown);
  $("jobGrid").innerHTML = page.map((j) => jobCard(j, saved.includes(jobKey(j)))).join("");
  $("emptyState").hidden = r.length > 0 || !allJobs.length;
  $("moreBtn").hidden = r.length <= state.shown;
  $("resultCount").textContent = allJobs.length ? `Showing ${page.length} of ${r.length} matching jobs (${allJobs.length} total)` : "";
}
function clearFilters(){
  Object.assign(state,{q:"",kind:"All",skill:"All",days:0,savedOnly:false,shown:SITE.pageSize});
  $("q").value = ""; $("savedOnly").checked = false; $("fType").value = "All"; $("fSkill").value = "All"; $("fDate").value = "0";
  renderJobs();
}
function renderInternships(){
  const list = allJobs.filter((j) => j.kind === "Internship").slice(0, 6), saved = getSaved();
  $("internGrid").innerHTML = list.map((j) => jobCard(j, saved.includes(jobKey(j)))).join("");
  $("internEmpty").hidden = list.length > 0;
}

/* =========================================================
   8. STATIC SECTIONS
   ========================================================= */
function renderRoadmaps(){
  $("roadGrid").innerHTML = roadmaps.map((r,i) => `<article class="card road">
    <h3>${esc(r.title)}</h3><p>${r.steps.length} steps from basics to deployment.</p>
    <ul class="steps" id="steps${i}">${r.steps.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
    <button class="btn btn-ghost btn-sm" type="button" data-road="${i}" aria-expanded="false" aria-controls="steps${i}">View Roadmap</button></article>`).join("");
}
function renderStatic(){
  $("prepGrid").innerHTML = prepTopics.map(([t,d]) => `<article class="card resource"><h3>${esc(t)}</h3><p style="margin:0">${esc(d)}</p></article>`).join("");
  $("chalGrid").innerHTML = challenges.map((c,i) => `<article class="card resource">
    <div class="tags"><span class="badge diff-${c.level}">${c.level}</span><span class="badge">${esc(c.topic)}</span></div>
    <h3>${esc(c.title)}</h3><p style="margin:0">${esc(c.desc)}</p>
    <p class="ex">Input: ${esc(c.input)}<br>Output: ${esc(c.output)}</p>
    <button class="btn btn-ghost btn-sm" type="button" data-chal="${i}" aria-expanded="false">Show Hint</button>
    <div class="chal-box" id="chal${i}" hidden><strong>Hint:</strong> ${esc(c.hint)} Write your solution in your own IDE; this page does not run code.</div></article>`).join("");
  $("projGrid").innerHTML = projects.map((p) => `<article class="card resource">
    <div class="tags"><span class="badge ${p.d==="Beginner"?"green":p.d==="Advanced"?"amber":""}">${p.d}</span></div>
    <h3>${esc(p.t)}</h3><p style="margin:0"><strong>Stack:</strong> ${esc(p.s)}</p>
    <p style="margin:0"><strong>Solves:</strong> ${esc(p.p)}</p>
    <div class="tags">${p.f.map((f) => `<span class="skill">${esc(f)}</span>`).join("")}</div>
    <button class="btn btn-ghost btn-sm" type="button" data-proj>Explore Project</button></article>`).join("");
}
function renderCourses(){
  $("courseGrid").innerHTML = courses.map((c,i) => `<article class="card course">
    <div class="top"><h3>${esc(c.title)}</h3><span class="badge green">In demand</span></div>
    <p class="tag-line">${esc(c.why)}</p>
    <div><h4>Roles it prepares you for</h4><div class="tags">${c.roles.map((r) => `<span class="badge">${esc(r)}</span>`).join("")}</div></div>
    <details><summary>What you will learn (${c.modules.length} topics)</summary><ul>${c.modules.map((m) => `<li>${esc(m)}</li>`).join("")}</ul></details>
    <div><h4>Tools</h4><div class="tags">${c.tools.map((t) => `<span class="skill">${esc(t)}</span>`).join("")}</div></div>
    <div class="info"><span>Level: ${esc(c.level)}</span><span>Project: ${esc(c.project)}</span>
      <span>Duration: ${c.duration ? esc(c.duration) : "shared when the program opens"}</span>
      <span>Fee: ${c.fee ? esc(c.fee) : "shared when the program opens"}</span>${c.nextBatch ? `<span>Next batch: ${esc(c.nextBatch)}</span>` : ""}</div>
    <button class="btn btn-primary btn-sm" type="button" data-course="${i}">Get course details</button></article>`).join("");
}
function renderLinks(){
  const make = (arr) => arr.map(([label,key]) => LINKS[key] && (key === "email" ? /^mailto:/.test(LINKS[key]) : isValidUrl(LINKS[key]))
    ? `<a class="btn btn-ghost btn-sm" href="${esc(LINKS[key])}" target="_blank" rel="noopener noreferrer">${label}</a>`
    : `<span class="btn btn-sm" aria-disabled="true">${label}: coming soon</span>`).join("");
  $("socialRow").innerHTML = make([["WhatsApp updates","whatsapp"],["Telegram updates","telegram"],["Instagram","instagram"],["LinkedIn","linkedin"],["YouTube","youtube"]]);
  $("contactRow").innerHTML = make([["Email","email"],["WhatsApp","whatsapp"],["LinkedIn","linkedin"],["Instagram","instagram"]]);
}

/* =========================================================
   9. INTEREST FORM (frontend only until you connect a form service)
   ========================================================= */
function handleForm(e){
  e.preventDefault();
  const name = $("fName").value.trim(), contact = $("fContact").value.trim(), ok = $("fConsent").checked;
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact), phoneOk = /^[+]?[\d\s-]{10,14}$/.test(contact);
  $("eName").textContent = name.length < 2 ? "Enter your name." : "";
  $("eContact").textContent = (emailOk || phoneOk) ? "" : "Enter a valid email or 10-digit phone number.";
  $("eConsent").textContent = ok ? "" : "Please tick the consent box to continue.";
  if (name.length < 2 || !(emailOk || phoneOk) || !ok){ $("formMsg").innerHTML = ""; return; }
  $("formMsg").innerHTML = '<div class="form-msg info">Details look valid, but no form service is connected yet, so nothing was sent or saved. Connect Formspree, Google Forms or your API before launch.</div>';
}

/* =========================================================
   10. ANIMATIONS (skipped if visitor prefers reduced motion)
   ========================================================= */
function initAnimations(){
  const skills = ["Java","Python","SQL","React","Spring Boot","Django","DSA","AWS","Git","Machine Learning","REST APIs","Docker","Node.js","Power BI"];
  $("track").innerHTML = skills.concat(skills).map((s) => `<span>${s}</span>`).join("");
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const words = ["Java","Python","Full Stack","AI/ML","Data Analytics","Cloud & DevOps","Testing / QA"];
  let w = 0; const rot = $("rot");
  setInterval(() => { w = (w + 1) % words.length; rot.style.animation = "none"; void rot.offsetWidth; rot.textContent = words[w]; rot.style.animation = ""; }, 2200);

  document.documentElement.classList.add("anim");
  const targets = document.querySelectorAll(".sec-head,.fresher,.trust,.learn>*,#roadGrid .card,#prepGrid .card,#chalGrid .card,#projGrid .card,#courseGrid .card");
  const io = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold:.12 });
  targets.forEach((el,i) => { el.classList.add("reveal"); el.style.transitionDelay = (i % 4) * 80 + "ms"; io.observe(el); });
}

/* =========================================================
   11. INIT
   ========================================================= */
function init(){
  document.querySelectorAll("#brandName,.brandName2").forEach((n) => { n.textContent = SITE.name; });
  $("year").textContent = new Date().getFullYear();
  renderRoadmaps(); renderStatic(); renderCourses(); renderLinks();

  $("q").addEventListener("input", (e) => { state.q = e.target.value; state.shown = SITE.pageSize; renderJobs(); });
  $("fType").addEventListener("change", (e) => { state.kind = e.target.value; state.shown = SITE.pageSize; renderJobs(); });
  $("fSkill").addEventListener("change", (e) => { state.skill = e.target.value; state.shown = SITE.pageSize; renderJobs(); });
  $("fDate").addEventListener("change", (e) => { state.days = +e.target.value; state.shown = SITE.pageSize; renderJobs(); });
  $("savedOnly").addEventListener("change", (e) => { state.savedOnly = e.target.checked; renderJobs(); });
  $("clearBtn").addEventListener("click", clearFilters); $("emptyClear").addEventListener("click", clearFilters);
  $("moreBtn").addEventListener("click", () => { state.shown += SITE.pageSize; renderJobs(); });
  $("fresherBtn").addEventListener("click", () => { clearFilters(); state.kind = "Fresher"; $("fType").value = "Fresher"; renderJobs(); $("jobs").scrollIntoView({behavior:"smooth"}); });
  $("interestForm").addEventListener("submit", handleForm);

  const onSave = (e) => { const b = e.target.closest("[data-save]"); if (b){ toggleSave(b.dataset.save); renderInternships(); } };
  $("jobGrid").addEventListener("click", onSave); $("internGrid").addEventListener("click", onSave);
  $("roadGrid").addEventListener("click", (e) => { const b = e.target.closest("[data-road]"); if (!b) return;
    const open = $("steps" + b.dataset.road).classList.toggle("show"); b.setAttribute("aria-expanded", open); b.textContent = open ? "Hide Roadmap" : "View Roadmap"; });
  $("chalGrid").addEventListener("click", (e) => { const b = e.target.closest("[data-chal]"); if (!b) return;
    const box = $("chal" + b.dataset.chal); box.hidden = !box.hidden; b.setAttribute("aria-expanded", !box.hidden); });
  $("projGrid").addEventListener("click", (e) => { if (e.target.closest("[data-proj]")) $("learn").scrollIntoView({behavior:"smooth"}); });
  $("courseGrid").addEventListener("click", (e) => { const b = e.target.closest("[data-course]"); if (!b) return;
    $("fTech").selectedIndex = Math.min(+b.dataset.course, $("fTech").options.length - 1); $("learn").scrollIntoView({behavior:"smooth"}); });

  const burger = $("burger"), menu = $("menu");
  const setMenu = (open) => { menu.classList.toggle("open", open); burger.setAttribute("aria-expanded", open); burger.textContent = open ? "Close" : "Menu"; };
  burger.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
  menu.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });
  document.querySelectorAll("[data-todo]").forEach((a) => a.addEventListener("click", (e) => { e.preventDefault(); alert(a.dataset.todo + " page is not published yet. Add it before launch."); }));

  loadJobs();
}
document.addEventListener("DOMContentLoaded", () => { init(); initAnimations(); });