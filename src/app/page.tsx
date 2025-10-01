"use client";

import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-black transform scale-90 origin-top">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-bold">Dinesh Ojha</h1>
            <nav className="hidden md:flex space-x-6">
              <button
                onClick={() => scrollToSection("home")}
                className={`text-xs font-medium transition-colors hover:text-gray-600 ${
                  activeSection === "home" ? "text-black" : "text-gray-500"
                }`}
              >
                HOME
              </button>
              <button
                onClick={() => scrollToSection("work")}
                className={`text-xs font-medium transition-colors hover:text-gray-600 ${
                  activeSection === "work" ? "text-black" : "text-gray-500"
                }`}
              >
                WORK
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className={`text-xs font-medium transition-colors hover:text-gray-600 ${
                  activeSection === "projects" ? "text-black" : "text-gray-500"
                }`}
              >
                PROJECTS
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className={`text-xs font-medium transition-colors hover:text-gray-600 ${
                  activeSection === "skills" ? "text-black" : "text-gray-500"
                }`}
              >
                SKILLS
              </button>
            </nav>
            <div className="w-4 h-4 border border-gray-400 rounded-sm flex items-center justify-center cursor-pointer hover:border-gray-600 transition-colors">
              <svg
                className="w-2.5 h-2.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </header>

      <section id="home" className="pt-44 pb-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Dinesh Ojha</h1>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Full Stack Developer & Software Engineer passionate about creating
              innovative solutions
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">About Me</h2>
          <div className="text-gray-700 space-y-4">
            <p>
              I am a passionate software developer with expertise in modern web
              technologies. I love building scalable applications and solving
              complex problems through code.
            </p>
            <p>
              With experience in both frontend and backend development, I enjoy
              creating full-stack solutions that provide exceptional user
              experiences while maintaining robust and efficient backend
              systems.
            </p>
            <p>
              When I'm not coding, I enjoy exploring new technologies,
              contributing to open source projects, and sharing knowledge with
              the developer community.
            </p>
          </div>
        </div>
      </section>

      <section id="work" className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Work Experience
          </h2>
          <div className="space-y-8">
            {/* Current Role */}
            <div className="border-l-2 border-gray-200 pl-4">
              <div className="mb-3">
                <h3 className="text-lg font-semibold">Software Developer</h3>
                <p className="text-sm text-gray-600">
                  SecurityPal AI • Sep 2023 - Present
                </p>
              </div>
              <p className="text-gray-700 mb-3 text-sm">
                Contributing to the development of a scalable web application,
                enhancing features and improving usability through robust
                backend and frontend integration.
              </p>
            </div>

            {/* Internship */}
            <div className="border-l-2 border-gray-200 pl-4">
              <div className="mb-3">
                <h3 className="text-lg font-semibold">.NET Developer Intern</h3>
                <p className="text-sm text-gray-600">
                  Citrana Creatives • Jun 2023 – Aug 2023
                </p>
              </div>
              <p className="text-gray-700 mb-3 text-sm">
                Developed backend systems and APIs for a prototype application
                while gaining practical experience in software design,
                authentication, and database management.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                <li>
                  Designed and implemented core backend functionality for a
                  Reddit-style application prototype
                </li>
                <li>
                  Built RESTful API endpoints for user management, posts, and
                  comments using .NET Web API (C#)
                </li>
                <li>Secured the application using JWT authentication</li>
                <li>
                  Applied a layered architecture for maintainability and
                  scalability
                </li>
                <li>
                  Utilized Entity Framework Core (EF Core) with SQL Server for
                  data handling
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-12 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid md:grid-cols-1 gap-6">
            <a
              href="/projects/bughunt-ai"
              className="block bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-2">
                <h3 className="text-lg font-semibold text-blue-600 hover:underline">
                  BugHunt AI
                </h3>
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open("https://github.com/ojha-me/bug-hunt-ai", "_blank");
                  }}
                  className="ml-8 text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
                >
                  github
    </span> 
              </div>
              <p className="text-gray-700 text-sm mb-3">
                An interactive AI-powered learning platform transforming coding
                education through hands-on bug hunting and structured learning
                paths.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 bg-gray-100 rounded">React</span>
                <span className="px-2 py-1 bg-gray-100 rounded">
                  TypeScript
                </span>
                <span className="px-2 py-1 bg-gray-100 rounded">Django</span>
                <span className="px-2 py-1 bg-gray-100 rounded">
                  Monaco Editor
                </span>
                <span className="px-2 py-1 bg-gray-100 rounded">Docker</span>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                Work in progress — 2–3 commits per week. Click to view details &
                screenshots.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-center">Skills</h2>

          <div className="space-y-10">
            <div>
              <h3 className="text-lg font-semibold mb-4">Frontend</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>React.js / Next.js (SSR, ISR)</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Redux Toolkit / Zustand / React Query</li>
                <li>HTML5 / CSS3</li>
                <li>Jest / Playwright</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Backend</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>Python</li>
                <li>Django Ninja / FastAPI / Django Rest Framework</li>
                <li> .NET Web Apis (C#)</li>
                <li>Node.js / Express.js</li>
                <li>PostgreSQL / MongoDB / Redis</li>
                <li>REST API design & GraphQL (Apollo)</li>
                <li>Authentication & Authorization (JWT, OAuth2, RBAC)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Tools & DevOps</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>Git / GitHub</li>
                <li>Docker / docker compose</li>
                <li>GCP</li>
                <li>
                  CI/CD (GitHub Actions, Jenkins pipelines, Docker deployments)
                </li>
                <li>Nginx / Reverse Proxy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-6 px-4 border-t border-gray-200">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-600 text-sm">
            2024 Dinesh Ojha. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
