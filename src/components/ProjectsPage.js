import React, { useMemo, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { SiAppstore, SiGithub, SiGoogleplay } from "react-icons/si";
import "../styles.css";
import RevealOnScroll from "./RevealOnScroll";
import Starfield from "./Starfield";

const STORE_LINK_ICONS = {
  "google-play": SiGoogleplay,
  "app-store": SiAppstore,
};

const FILTER = {
  ALL: "all",
  WEB_APP: "web-app",
  MOBILE: "mobile",
  WEBSITE: "website",
};

const FILTER_LABELS = [
  { id: FILTER.ALL, label: "All" },
  { id: FILTER.WEB_APP, label: "Web apps" },
  { id: FILTER.MOBILE, label: "Mobile" },
  { id: FILTER.WEBSITE, label: "Websites" },
];

/** I Love Resumes banner from LinkedIn CDN (signed URL may expire). */
const ILOVE_RESUMES_IMAGE =
  "https://media.licdn.com/dms/image/v2/D4E16AQHtJqX1DL_nNA/profile-displaybackgroundimage-shrink_350_1400/B4EZhG0gZGGYAY-/0/1753534832760?e=1778716800&v=beta&t=q5cRSk2fI_MsGwRwnJsleFub-aWXspk3CGbcp9Kd0bo";

/** Harmony Salon logo via Next.js image optimizer (`w=828` for sharp card display). */
const HARMONY_SALON_IMAGE =
  "https://harmonysalon.biz/_next/image?url=%2Flogo.png&w=828&q=80";

/** Circuit (SnapCycle) app icon from Google Play CDN. */
const CIRCUIT_APP_IMAGE =
  "https://play-lh.googleusercontent.com/cVmmo1hmM3CixtfJQ9ORWynDB3xeGzAlviuWf7-nf4mkbbZlEL522HXU0IdWJ4ApCGy2KOj8A319S9TKYXyp=w240-h480-rw";

const projects = [
  {
    id: "ilove-resumes",
    title: "I Love Resumes",
    filterKey: FILTER.WEB_APP,
    type: "Web App",
    tags: ["React", "Node.js", "AI", "PDF / Word"],
    description:
      "An AI-powered resume tailoring tool with smart job matching, live editing, and PDF/Word export.",
    liveUrl: "https://iloveresumes.ca",
    repoUrl: null,
    image: ILOVE_RESUMES_IMAGE,
    thumbObjectFit: "contain",
    priority: 1,
    caseStudy: {
      problem:
        "Job seekers needed to adapt resumes quickly per role without juggling multiple files or losing version control.",
      solution:
        "Built a full-stack app with guided editing, AI-assisted tailoring, and reliable export to common hiring formats.",
      role: "End-to-end product development — architecture, UI, APIs, and deployment.",
      outcome:
        "A polished, production-ready tool teams and individuals can use to ship tailored applications faster.",
    },
  },
  {
    id: "zapphir",
    title: "Zapphir",
    filterKey: FILTER.WEB_APP,
    type: "Web App",
    tags: ["React", "Node.js", "AI", "Admin", "Healthcare"],
    description:
      "End-to-end platform for an AI-assisted medical care staffing agency—public website, facility tools, and admin backend built from scratch.",
    liveUrl: "https://zapphir.com",
    repoUrl: null,
    image: "/images/projects/zapphir.svg",
    priority: 2,
    caseStudy: {
      problem:
        "Healthcare staffing needed a single system for facilities to request coverage, internal teams to coordinate placements, and leadership to oversee operations—without duct-taping spreadsheets and disconnected tools.",
      solution:
        "Shipped a full-stack product from scratch: marketing site, authenticated admin and facility experiences, and APIs supporting AI-assisted workflows for medical staffing.",
      role: "Full-stack ownership—architecture, backend, admin UI, public site, and deployment.",
      outcome:
        "A production-ready agency stack on zapphir.com with clear separation between public, facility, and admin surfaces and room to scale staffing operations.",
    },
  },
  {
    id: "harmony-salon",
    title: "Harmony Salon",
    filterKey: FILTER.WEBSITE,
    type: "Business Website",
    tags: ["React", "Responsive", "SEO", "Booking UX"],
    description:
      "Marketing site for an Ahmedabad bridal makeup and salon brand—services, portfolio, pricing, reviews, blog, and trial / WhatsApp booking paths.",
    liveUrl: "https://harmonysalon.biz/",
    repoUrl: null,
    image: HARMONY_SALON_IMAGE,
    thumbObjectFit: "contain",
    priority: 3,
    caseStudy: {
      problem:
        "The salon needed a premium, trustworthy web presence that converts brides researching packages and price lists into booked trials and WhatsApp inquiries.",
      solution:
        "Built a fast, mobile-first experience with clear service sections, social proof, structured pricing cues, and prominent CTAs aligned with how clients actually book.",
      role: "End-to-end site build—layout, content structure, performance, and deployment to production.",
      outcome:
        "A polished harmonysalon.biz presence that showcases signature services and makes it easy to start a conversation or book a trial.",
    },
  },
  {
    id: "circuit",
    title: "Circuit",
    filterKey: FILTER.MOBILE,
    type: "Mobile App",
    tags: ["iOS", "Android", "AI", "SnapCycle"],
    description:
      "SnapCycle's consumer app: photograph an item and get municipality-accurate sorting guidance (recycling, compost, ecocentre, and more)—maps, reminders, and gamified impact.",
    liveUrl: null,
    repoUrl: null,
    image: CIRCUIT_APP_IMAGE,
    thumbObjectFit: "contain",
    priority: 4,
    storeLinks: [
      {
        href: "https://play.google.com/store/apps/details?id=com.snapcycle.circuit",
        label: "Google Play",
        icon: "google-play",
      },
      {
        href: "https://apps.apple.com/ca/app/circuit-sort-it-in-one-photo/id6756132167",
        label: "App Store",
        icon: "app-store",
      },
    ],
    caseStudy: {
      problem:
        "Residents struggle to sort waste correctly when rules differ by municipality—long PDFs and guesswork at the bin hurt diversion rates and education.",
      solution:
        "Built a cross-platform mobile experience with photo-based guidance, local rules, maps for drop-off points, reminders, and engagement features aligned with partner programs.",
      role: "Full stack mobile development at SnapCycle—product delivery, integrations, and iteration with design and backend.",
      outcome:
        "Live on Google Play and the App Store for partnered municipalities, with a clear photo-to-instruction loop and ongoing releases for UX, offline behavior, and performance.",
    },
  },
  {
    id: "caliber-dashboard",
    title: "Caliber Construction Dashboard",
    filterKey: FILTER.WEB_APP,
    type: "Web App",
    tags: ["React", "Node.js", "Dashboard", "Analytics"],
    description:
      "A project dashboard for construction teams to track tasks, progress, and operational analytics.",
    liveUrl: null,
    repoUrl: null,
    image: "/images/projects/caliber-dashboard.svg",
    priority: 5,
    internalNote:
      "Internal client tool — live demo and technical walkthrough available on request.",
    contactCta: true,
    caseStudy: {
      problem:
        "Field and office teams needed one place to see project status, workloads, and key metrics without scattered spreadsheets.",
      solution:
        "Delivered a React and Node dashboard focused on clarity, role-relevant views, and maintainable data flows.",
      role: "Full-stack development and UX for operational workflows.",
      outcome:
        "Reduced context-switching for stakeholders; details shared under NDA on request.",
    },
  },
  {
    id: "liftmates",
    title: "Liftmates Car-pool",
    filterKey: FILTER.MOBILE,
    type: "Mobile App",
    tags: ["Android", "Firebase", "Real-time"],
    description:
      "A real-time carpooling app to simplify commutes with Firebase-backed tracking and authentication.",
    liveUrl: null,
    repoUrl: "https://github.com/ThakkarRajan/liftmates-master",
    image: "/images/projects/liftmates.svg",
    priority: 6,
  },
  {
    id: "harsmo",
    title: "Harsmo Ventures Website",
    filterKey: FILTER.WEBSITE,
    type: "Business Website",
    tags: ["React", "Responsive", "Vercel"],
    description:
      "A responsive React site for an international import-export company: services, profile, and contact with a modern UI.",
    liveUrl: "https://harsmo-ventures-1syw.vercel.app/",
    repoUrl: null,
    image: "/images/projects/harsmo.svg",
    priority: 7,
    caseStudy: {
      problem:
        "The business needed a credible web presence that works globally and reflects a professional logistics brand.",
      solution:
        "Structured content for services and company story, fast loads, and clear paths to contact.",
      role: "Design and full front-end build; deployment to production hosting.",
      outcome:
        "A maintainable marketing site the client can extend as offerings grow.",
    },
  },
  {
    id: "lavish-salon",
    title: "Lavish Look Salon Website",
    filterKey: FILTER.WEBSITE,
    type: "Website",
    tags: ["React", "Maps", "Booking UX"],
    description:
      "A stylish site for a local salon featuring services, Google Maps integration, and online booking flows.",
    liveUrl: "https://salon-website-eta.vercel.app/",
    repoUrl: null,
    image: "/images/projects/lavish-salon.svg",
    priority: 8,
  },
  {
    id: "weather",
    title: "Weather App",
    filterKey: FILTER.MOBILE,
    type: "Mobile App",
    tags: ["Android", "OpenWeather API"],
    description:
      "A minimal weather app with accurate local forecasts via the OpenWeather API.",
    liveUrl: null,
    repoUrl: "https://github.com/ThakkarRajan/Weather-App",
    image: "/images/projects/weather.svg",
    priority: 9,
  },
  {
    id: "naturalwalk",
    title: "NaturalWalk",
    filterKey: FILTER.MOBILE,
    type: "Mobile App",
    tags: ["iOS", "Swift", "GPS"],
    description:
      "A mindfulness and walking tracker with a clean UI and GPS integration.",
    liveUrl: null,
    repoUrl: "https://github.com/ThakkarRajan/NaturalWalk-iOS-Application",
    image: "/images/projects/naturalwalk.svg",
    priority: 10,
  },
  {
    id: "news-app",
    title: "News App",
    filterKey: FILTER.MOBILE,
    type: "Mobile App",
    tags: ["Android", "REST APIs", "Swipe UI"],
    description:
      "Stay updated with dynamic news feeds and a swipeable, readable article experience.",
    liveUrl: null,
    repoUrl: "https://github.com/ThakkarRajan/News-Application",
    image: "/images/projects/news.svg",
    priority: 11,
  },
  {
    id: "my-alarm",
    title: "My Alarm",
    filterKey: FILTER.MOBILE,
    type: "Mobile App",
    tags: ["Android", "Material", "Dark mode"],
    description:
      "Alarm clock with snooze, sound options, and a polished dark mode interface.",
    liveUrl: null,
    repoUrl: "https://github.com/ThakkarRajan/MyAlarmByRajan",
    image: "/images/projects/my-alarm.svg",
    priority: 12,
  },
];

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState(FILTER.ALL);

  const sorted = useMemo(
    () => [...projects].sort((a, b) => (a.priority || 99) - (b.priority || 99)),
    []
  );

  const visible = useMemo(() => {
    if (activeFilter === FILTER.ALL) return sorted;
    return sorted.filter((p) => p.filterKey === activeFilter);
  }, [sorted, activeFilter]);

  return (
    <>
      <Starfield />

      <section id="projects" className="projects-section" aria-labelledby="projects-heading">
        <header className="projects-section-header">
          <h2 id="projects-heading" className="section-title">
            My Projects
          </h2>
          <p className="projects-intro">
            Full-stack web apps, client websites, and mobile work — React, Node.js, and native tooling.
            Filter by type or open live demos and source where available.
          </p>
        </header>

        <div
          className="projects-filter"
          role="toolbar"
          aria-label="Filter projects by category"
        >
          {FILTER_LABELS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              className={`project-filter-btn${activeFilter === id ? " is-active" : ""}`}
              onClick={() => setActiveFilter(id)}
              aria-pressed={activeFilter === id}
            >
              {label}
            </button>
          ))}
        </div>

        <RevealOnScroll>
          <div className="projects-grid">
            {visible.map((project) => {
              const schemaUrl =
                project.storeLinks?.[0]?.href ||
                project.liveUrl ||
                project.repoUrl ||
                undefined;

              return (
                <article
                  className="project-card"
                  key={project.id}
                  itemScope
                  itemType="https://schema.org/SoftwareApplication"
                >
                  <div className="project-card-thumb">
                    <img
                      src={project.image}
                      alt={`Preview graphic for ${project.title}`}
                      width={800}
                      height={450}
                      loading="lazy"
                      decoding="async"
                      className={`project-card-thumb-img${
                        project.thumbObjectFit === "contain" ? " project-card-thumb-img--contain" : ""
                      }`}
                    />
                  </div>
                  <div className="project-card-body">
                    <div className="project-card-meta">
                      <span className="project-type-badge">{project.type}</span>
                    </div>
                    <h3 itemProp="name">{project.title}</h3>
                    <p className="project-card-desc" itemProp="description">
                      {project.description}
                    </p>
                    <ul className="project-tags" aria-label="Technologies">
                      {project.tags.map((tag) => (
                        <li key={tag}>
                          <span className="project-tag">{tag}</span>
                        </li>
                      ))}
                    </ul>
                    {project.internalNote && (
                      <p className="project-internal-note">{project.internalNote}</p>
                    )}
                    <div className="project-cta-row">
                      {project.storeLinks?.length ? (
                        <div className="project-store-row">
                          {project.storeLinks.map((link, i) => {
                            const Icon = link.icon ? STORE_LINK_ICONS[link.icon] : null;
                            return (
                              <a
                                key={link.href}
                                className={`${
                                  i === 0 ? "btn btn-project-primary" : "btn btn-project-secondary"
                                } project-store-link`}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${link.label}: ${project.title}`}
                              >
                                {Icon ? <Icon className="project-cta-icon" aria-hidden /> : null}
                                <span>{link.label}</span>
                              </a>
                            );
                          })}
                        </div>
                      ) : null}
                      {!project.storeLinks?.length && project.liveUrl ? (
                        <a
                          className="btn btn-project-primary project-cta-link"
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open live demo: ${project.title}`}
                        >
                          <FiExternalLink className="project-cta-icon" aria-hidden />
                          <span>Live demo</span>
                        </a>
                      ) : null}
                      {!project.storeLinks?.length && project.repoUrl ? (
                        <a
                          className="btn btn-project-secondary project-cta-link"
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View source code: ${project.title}`}
                        >
                          <SiGithub className="project-cta-icon" aria-hidden />
                          <span>{project.liveUrl ? "Source code" : "View code"}</span>
                        </a>
                      ) : null}
                      {project.contactCta && (
                        <a
                          className="btn btn-project-secondary"
                          href="#contact"
                          aria-label={`Request details about ${project.title}`}
                        >
                          Request details
                        </a>
                      )}
                    </div>
                    {schemaUrl ? (
                      <meta itemProp="url" content={schemaUrl} />
                    ) : null}
                    <meta itemProp="applicationCategory" content={project.type} />
                    {project.caseStudy && (
                      <details className="project-case-study">
                        <summary className="project-case-study-summary">
                          Case study
                        </summary>
                        <div className="project-case-study-body">
                          <div className="case-block">
                            <h4 className="case-label">Problem</h4>
                            <p>{project.caseStudy.problem}</p>
                          </div>
                          <div className="case-block">
                            <h4 className="case-label">Solution</h4>
                            <p>{project.caseStudy.solution}</p>
                          </div>
                          <div className="case-block">
                            <h4 className="case-label">My role</h4>
                            <p>{project.caseStudy.role}</p>
                          </div>
                          <div className="case-block">
                            <h4 className="case-label">Outcome</h4>
                            <p>{project.caseStudy.outcome}</p>
                          </div>
                        </div>
                      </details>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </RevealOnScroll>

        {visible.length === 0 && (
          <p className="projects-empty">No projects in this category yet.</p>
        )}

        <div className="wave-overlay" aria-hidden="true">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path
              fill="#6bc1ff10"
              fillOpacity="1"
              d="M0,160L48,144C96,128,192,96,288,117.3C384,139,480,213,576,234.7C672,256,768,224,864,202.7C960,181,1056,171,1152,165.3C1248,160,1344,160,1392,160L1440,160V320H0Z"
            />
          </svg>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
