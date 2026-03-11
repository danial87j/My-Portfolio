// ====== Config (Edit these) ======
const githubUserName = "danial87j"; // <-- تغییر بده
const contactEmail = "danialbarbodjalali@gmail.com"; // <-- تغییر بده

// Featured repo names (exact repo names)
const featuredRepoNames = [
  "Web-messenger",
  "Superior-IQ",
  "",

];

// ====== Language ======
const translations = {
  en: {
    pageTitle: "Daniel | Portfolio",
    pageDescription: "Daniel's portfolio — Junior Web Developer. Clean, responsive, human-friendly websites.",

    navAbout: "About",
    navSkills: "Skills",
    navProjects: "Projects",
    navContact: "Contact",

    statusText: "Available for small projects",
    heroGreeting: "Hi, I’m",
    heroSubtitle: "Junior Web Developer in Germany. I build clean, responsive websites that feel good to use.",
    githubButtonText: "View GitHub",
    seeProjectsButton: "See Projects",

    repoLabel: "Public Repos",
    followerLabel: "Followers",
    stackLabel: "Main Stack",

    profileRole: "Junior Web Developer",
    focusKey: "Focus",
    focusValue: "Small business sites, landing pages",
    locationKey: "Location",
    locationValue: "Germany",
    strengthKey: "Strength",
    strengthValue: "Simple, fast, responsive UI",
    contactChip: "Contact",

    aboutTitle: "About",
    aboutHint: "Short, honest, and human.",
    aboutText1: "I’m a junior web developer based in Germany. I enjoy building websites that are clean, fast, and easy to use. I work mainly with HTML, CSS, JavaScript, and PHP, and I’m currently focused on real-world projects that help small businesses and personal brands.",
    aboutText2: "I like simple design, smooth micro-interactions, and code that stays understandable.",

    highlight1Title: "What I can build",
    highlight1Text: "Landing pages, portfolios, small business sites, contact forms",
    highlight2Title: "What I care about",
    highlight2Text: "Speed, clarity, mobile-first design, nice UX",
    highlight3Title: "Next goals",
    highlight3Text: "More projects, stronger backend skills, better UI polish",

    skillsTitle: "Skills",
    skillsHint: "Things I use and improve every week.",

    projectsTitle: "Projects",
    projectsHint: "Auto-loaded from GitHub (you can pin featured ones).",
    featuredButton: "Featured",
    allReposButton: "All Repos",
    projectsNoteStrong: "",
    projectsNoteText: "Featured Repos ",

    contactTitle: "Contact",
    contactHint: "Fastest way to reach me.",
    contactText: "If you want a simple website (portfolio, landing page, small business site), message me and tell me what you need. I reply fast and keep it clear.",
    emailLabel: "Email",
    githubLabel: "GitHub",
    nameLabel: "Your Name",
    namePlaceholder: "John Doe",
    messageLabel: "Message",
    messagePlaceholder: "Tell me what you want to build...",
    copyMessageButton: "Copy Message Template",
    formHintDefault: "This will copy a clean message you can paste into email/DM.",
    formHintSuccess: "Copied ✅ Now paste it into email/DM.",
    formHintError: "Could not copy automatically. Select & copy manually.",
    topLink: "Top",

    projectBadgeFeatured: "Featured",
    projectBadgeRepo: "Repo",
    projectDescFallback: "No description yet. Add one in GitHub for a more professional look.",
    projectLive: "Live",
    projectCode: "Code",
    emptyRepos: "No repos found.",
    emptyReposText: "Add at least one public repo, or check your GitHub username in main.js.",
    githubError: "Could not load GitHub data. Check your username in main.js.",

    copiedMessageTemplate: (nameValue, messageValue) =>
`Hi Daniel,
My name is ${nameValue}.

${messageValue}

Budget:
Timeline:
Links (optional):`
  },

  de: {
    pageTitle: "Daniel | Portfolio",
    pageDescription: "Daniels Portfolio — Junior Webentwickler. Saubere, responsive und benutzerfreundliche Websites.",

    navAbout: "Über mich",
    navSkills: "Fähigkeiten",
    navProjects: "Projekte",
    navContact: "Kontakt",

    statusText: "Verfügbar für kleine Projekte",
    heroGreeting: "Hi, ich bin",
    heroSubtitle: "Junior Webentwickler in Deutschland. Ich erstelle saubere und responsive Websites, die sich gut benutzen lassen.",
    githubButtonText: "GitHub ansehen",
    seeProjectsButton: "Projekte ansehen",

    repoLabel: "Öffentliche Repos",
    followerLabel: "Follower",
    stackLabel: "Haupt-Stack",

    profileRole: "Junior Webentwickler",
    focusKey: "Fokus",
    focusValue: "Websites für kleine Unternehmen, Landingpages",
    locationKey: "Standort",
    locationValue: "Deutschland",
    strengthKey: "Stärke",
    strengthValue: "Einfaches, schnelles, responsives UI",
    contactChip: "Kontakt",

    aboutTitle: "Über mich",
    aboutHint: "Kurz, ehrlich und menschlich.",
    aboutText1: "Ich bin ein Junior Webentwickler in Deutschland. Ich baue gerne Websites, die sauber, schnell und einfach zu benutzen sind. Ich arbeite hauptsächlich mit HTML, CSS, JavaScript und PHP und konzentriere mich aktuell auf reale Projekte für kleine Unternehmen und Personal Brands.",
    aboutText2: "Ich mag schlichtes Design, weiche Mikro-Interaktionen und Code, der verständlich bleibt.",

    highlight1Title: "Was ich bauen kann",
    highlight1Text: "Landingpages, Portfolios, Websites für kleine Unternehmen, Kontaktformulare",
    highlight2Title: "Worauf ich achte",
    highlight2Text: "Geschwindigkeit, Klarheit, Mobile-First-Design, gute UX",
    highlight3Title: "Nächste Ziele",
    highlight3Text: "Mehr Projekte, stärkere Backend-Skills, besseres UI-Finishing",

    skillsTitle: "Fähigkeiten",
    skillsHint: "Dinge, die ich jede Woche nutze und verbessere.",

    projectsTitle: "Projekte",
    projectsHint: "Automatisch von GitHub geladen (du kannst ausgewählte Projekte anheften).",
    featuredButton: "Ausgewählt",
    allReposButton: "Alle Repos",
    projectsNoteStrong: "",
    projectsNoteText: "Featured Repos.",

    contactTitle: "Kontakt",
    contactHint: "Der schnellste Weg, mich zu erreichen.",
    contactText: "Wenn du eine einfache Website möchtest (Portfolio, Landingpage oder Website für ein kleines Unternehmen), schreib mir einfach, was du brauchst. Ich antworte schnell und halte alles klar.",
    emailLabel: "E-Mail",
    githubLabel: "GitHub",
    nameLabel: "Dein Name",
    namePlaceholder: "Max Mustermann",
    messageLabel: "Nachricht",
    messagePlaceholder: "Erzähl mir, was du bauen möchtest...",
    copyMessageButton: "Nachrichtenvorlage kopieren",
    formHintDefault: "Das kopiert eine saubere Nachricht, die du in E-Mail oder DM einfügen kannst.",
    formHintSuccess: "Kopiert ✅ Jetzt in E-Mail oder DM einfügen.",
    formHintError: "Automatisches Kopieren hat nicht funktioniert. Bitte manuell kopieren.",
    topLink: "Nach oben",

    projectBadgeFeatured: "Ausgewählt",
    projectBadgeRepo: "Repo",
    projectDescFallback: "Noch keine Beschreibung. Füge eine auf GitHub hinzu, damit es professioneller aussieht.",
    projectLive: "Live",
    projectCode: "Code",
    emptyRepos: "Keine Repos gefunden.",
    emptyReposText: "Füge mindestens ein öffentliches Repo hinzu oder prüfe deinen GitHub-Benutzernamen in main.js.",
    githubError: "GitHub-Daten konnten nicht geladen werden. Prüfe deinen Benutzernamen in main.js.",

    copiedMessageTemplate: (nameValue, messageValue) =>
`Hallo Daniel,
mein Name ist ${nameValue}.

${messageValue}

Budget:
Zeitrahmen:
Links (optional):`
  }
};

// ====== Elements ======
const githubButton = document.getElementById("githubButton");
const githubChip = document.getElementById("githubChip");
const githubLink = document.getElementById("githubLink");
const footerGitHub = document.getElementById("footerGitHub");
const emailLink = document.getElementById("emailLink");

const repoCount = document.getElementById("repoCount");
const followerCount = document.getElementById("followerCount");

const projectsGrid = document.getElementById("projectsGrid");
const featuredButton = document.getElementById("featuredButton");
const allReposButton = document.getElementById("allReposButton");
const projectsNote = document.getElementById("projectsNote");

const currentYear = document.getElementById("currentYear");

const contactForm = document.getElementById("contactForm");
const formHint = document.getElementById("formHint");

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");
const langToggleButton = document.getElementById("langToggleButton");

// ====== State ======
let allReposCache = [];
let currentMode = "featured";
let currentLanguage = localStorage.getItem("portfolioLanguage") || "en";

// ====== Init ======
function initPage() {
  currentYear.textContent = String(new Date().getFullYear());

  const githubProfileUrl = `https://github.com/danial87j`;
  githubButton.href = githubProfileUrl;
  githubChip.href = githubProfileUrl;
  githubLink.href = githubProfileUrl;
  githubLink.textContent = `https://github.com/danial87j`;
  footerGitHub.href = githubProfileUrl;

  emailLink.href = `mailto:danialbarbodjalali@gmail.com`;
  emailLink.textContent = `danialbarbodjalali@gmail.com`;

  setupMobileMenu();
  setupProjectToggles();
  setupContactForm();
  setupLanguageToggle();
  applyLanguage();

  loadGitHubData().catch(() => {
    renderErrorCard(getText("githubError"));
  });
}

function setupMobileMenu() {
  menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("isOpen");
  });

  mobileMenu.addEventListener("click", (event) => {
    const isLink = event.target && event.target.classList.contains("mobileLink");
    if (isLink) mobileMenu.classList.remove("isOpen");
  });
}

function setupProjectToggles() {
  featuredButton.addEventListener("click", () => {
    currentMode = "featured";
    featuredButton.classList.add("isActive");
    allReposButton.classList.remove("isActive");
    renderProjects();
  });

  allReposButton.addEventListener("click", () => {
    currentMode = "all";
    allReposButton.classList.add("isActive");
    featuredButton.classList.remove("isActive");
    renderProjects();
  });
}

function setupContactForm() {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const nameValue = String(formData.get("name") || "").trim();
    const messageValue = String(formData.get("message") || "").trim();

    const finalText = translations[currentLanguage].copiedMessageTemplate(nameValue, messageValue);

    try {
      await navigator.clipboard.writeText(finalText);
      formHint.textContent = getText("formHintSuccess");
    } catch {
      formHint.textContent = getText("formHintError");
      alert(finalText);
    }
  });
}

function setupLanguageToggle() {
  langToggleButton.addEventListener("click", () => {
    currentLanguage = currentLanguage === "en" ? "de" : "en";
    localStorage.setItem("portfolioLanguage", currentLanguage);
    applyLanguage();
    renderProjects();
  });
}

function applyLanguage() {
  document.documentElement.lang = currentLanguage;
  document.title = getText("pageTitle");

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", getText("pageDescription"));
  }

  setText("navAbout", getText("navAbout"));
  setText("navSkills", getText("navSkills"));
  setText("navProjects", getText("navProjects"));
  setText("navContact", getText("navContact"));

  setText("mobileNavAbout", getText("navAbout"));
  setText("mobileNavSkills", getText("navSkills"));
  setText("mobileNavProjects", getText("navProjects"));
  setText("mobileNavContact", getText("navContact"));

  setText("statusText", getText("statusText"));
  setText("heroGreeting", getText("heroGreeting"));
  setText("heroSubtitle", getText("heroSubtitle"));
  setText("githubButtonText", getText("githubButtonText"));
  setText("seeProjectsButton", getText("seeProjectsButton"));

  setText("repoLabel", getText("repoLabel"));
  setText("followerLabel", getText("followerLabel"));
  setText("stackLabel", getText("stackLabel"));

  setText("profileRole", getText("profileRole"));
  setText("focusKey", getText("focusKey"));
  setText("focusValue", getText("focusValue"));
  setText("locationKey", getText("locationKey"));
  setText("locationValue", getText("locationValue"));
  setText("strengthKey", getText("strengthKey"));
  setText("strengthValue", getText("strengthValue"));
  setText("contactChip", getText("contactChip"));

  setText("aboutTitle", getText("aboutTitle"));
  setText("aboutHint", getText("aboutHint"));
  setText("aboutText1", getText("aboutText1"));
  setText("aboutText2", getText("aboutText2"));

  setText("highlight1Title", getText("highlight1Title"));
  setText("highlight1Text", getText("highlight1Text"));
  setText("highlight2Title", getText("highlight2Title"));
  setText("highlight2Text", getText("highlight2Text"));
  setText("highlight3Title", getText("highlight3Title"));
  setText("highlight3Text", getText("highlight3Text"));

  setText("skillsTitle", getText("skillsTitle"));
  setText("skillsHint", getText("skillsHint"));

  setText("projectsTitle", getText("projectsTitle"));
  setText("projectsHint", getText("projectsHint"));
  setText("featuredButton", getText("featuredButton"));
  setText("allReposButton", getText("allReposButton"));
  setText("projectsNoteStrong", getText("projectsNoteStrong"));
  setText("projectsNoteText", getText("projectsNoteText"));

  setText("contactTitle", getText("contactTitle"));
  setText("contactHint", getText("contactHint"));
  setText("contactText", getText("contactText"));
  setText("emailLabel", getText("emailLabel"));
  setText("githubLabel", getText("githubLabel"));
  setText("nameLabel", getText("nameLabel"));
  setText("messageLabel", getText("messageLabel"));
  setText("copyMessageButton", getText("copyMessageButton"));
  setText("topLink", getText("topLink"));

  const nameInput = document.getElementById("nameInput");
  const messageInput = document.getElementById("messageInput");

  if (nameInput) nameInput.placeholder = getText("namePlaceholder");
  if (messageInput) messageInput.placeholder = getText("messagePlaceholder");

  if (formHint) {
    formHint.textContent = getText("formHintDefault");
  }

  langToggleButton.textContent = currentLanguage === "en" ? "DE" : "EN";
}

function getText(key) {
  return translations[currentLanguage][key];
}

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
}

// ====== GitHub Load ======
async function loadGitHubData() {
  const userResponse = await fetch(`https://api.github.com/users/${githubUserName}`);
  if (!userResponse.ok) throw new Error("User not found");
  const userData = await userResponse.json();

  repoCount.textContent = String(userData.public_repos ?? "—");
  followerCount.textContent = String(userData.followers ?? "—");

  const reposResponse = await fetch(`https://api.github.com/users/${githubUserName}/repos?per_page=100&sort=updated`);
  if (!reposResponse.ok) throw new Error("Repos not found");
  const reposData = await reposResponse.json();

  allReposCache = Array.isArray(reposData) ? reposData : [];
  renderProjects();
}

function renderProjects() {
  projectsGrid.innerHTML = "";

  const filteredRepos = getFilteredRepos();
  if (filteredRepos.length === 0) {
    renderEmptyCard();
    return;
  }

  const topRepos = currentMode === "featured" ? filteredRepos.slice(0, 6) : filteredRepos.slice(0, 12);

  for (const repo of topRepos) {
    projectsGrid.appendChild(buildProjectCard(repo));
  }

  projectsNote.style.display = currentMode === "featured" ? "block" : "none";
}

function getFilteredRepos() {
  const nonForkRepos = allReposCache.filter((repo) => !repo.fork);

  if (currentMode === "all") return nonForkRepos;

  const featured = nonForkRepos.filter((repo) => featuredRepoNames.includes(repo.name));
  return featured.length > 0 ? featured : nonForkRepos;
}

function buildProjectCard(repo) {
  const card = document.createElement("div");
  card.className = "projectCard";

  const projectName = repo.name || "Unnamed";
  const projectDesc = repo.description || getText("projectDescFallback");
  const language = repo.language || "—";
  const stars = repo.stargazers_count ?? 0;

  const repoUrl = repo.html_url || "#";
  const liveUrl = repo.homepage && String(repo.homepage).trim() ? String(repo.homepage).trim() : null;

  card.innerHTML = `
    <div class="projectTop">
      <h3 class="projectName">${escapeHtml(projectName)}</h3>
      <span class="projectBadge">${currentMode === "featured" ? escapeHtml(getText("projectBadgeFeatured")) : escapeHtml(getText("projectBadgeRepo"))}</span>
    </div>

    <p class="projectDesc">${escapeHtml(projectDesc)}</p>

    <div class="projectMeta">
      <div class="metaLeft">
        <span>${escapeHtml(language)}</span>
        <span class="metaDot"></span>
        <span>★ ${escapeHtml(String(stars))}</span>
      </div>

      <div class="projectLinks">
        ${liveUrl ? `<a class="smallLink" href="${escapeAttr(liveUrl)}" target="_blank" rel="noreferrer">${escapeHtml(getText("projectLive"))}</a>` : ""}
        <a class="smallLink" href="${escapeAttr(repoUrl)}" target="_blank" rel="noreferrer">${escapeHtml(getText("projectCode"))}</a>
      </div>
    </div>
  `;

  return card;
}

function renderEmptyCard() {
  const card = document.createElement("div");
  card.className = "noteCard";
  card.innerHTML = `
    <strong>${escapeHtml(getText("emptyRepos"))}</strong>
    ${escapeHtml(getText("emptyReposText"))}
  `;
  projectsGrid.appendChild(card);
}

function renderErrorCard(message) {
  const card = document.createElement("div");
  card.className = "noteCard";
  card.innerHTML = `<strong>${escapeHtml(message)}</strong>`;
  projectsGrid.innerHTML = "";
  projectsGrid.appendChild(card);
}

// ====== Helpers ======
function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(text) {
  return escapeHtml(text).replaceAll("`", "&#096;");
}

initPage();