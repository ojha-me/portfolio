"use client";

import { useState } from "react";
import { useScrollReveal } from '../lib/useScrollReveal';

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll reveal hooks for sections
  const homeReveal = useScrollReveal(0.3);
  const aboutReveal = useScrollReveal(0.3);
  const workReveal = useScrollReveal(0.3);
  const projectsReveal = useScrollReveal(0.3);
  const skillsReveal = useScrollReveal(0.3);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <div className="bg-white text-black">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 animate-in fade-in slide-in-from-top-2 duration-500">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-bold animate-in fade-in duration-700 delay-200">Dinesh Ojha</h1>
            <nav className="hidden md:flex space-x-6">
              <button
                onClick={() => scrollToSection("home")}
                className={`text-xs font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 active:scale-95 !cursor-pointer ${
                  activeSection === "home" ? "text-black" : "text-gray-500"
                }`}
              >
                HOME
              </button>
              <button
                onClick={() => scrollToSection("work")}
                className={`text-xs font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 active:scale-95 !cursor-pointer ${
                  activeSection === "work" ? "text-black" : "text-gray-500"
                }`}
              >
                WORK
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className={`text-xs font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 active:scale-95 !cursor-pointer ${
                  activeSection === "projects" ? "text-black" : "text-gray-500"
                }`}
              >
                PROJECTS
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className={`text-xs font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 active:scale-95 !cursor-pointer ${
                  activeSection === "skills" ? "text-black" : "text-gray-500"
                }`}
              >
                SKILLS
              </button>
            </nav>
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 hover:bg-gray-100 rounded transition-all duration-200 hover:scale-110 active:scale-95"
                aria-label="Toggle mobile menu"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-14 left-0 right-0 bg-white border-b border-gray-200 z-40 animate-in slide-in-from-top-2 duration-300">
          <nav className="max-w-5xl mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className={`text-left text-sm font-medium transition-all duration-300 hover:translate-x-2 hover:text-black active:scale-95 !cursor-pointer ${
                  activeSection === "home" ? "text-black" : "text-gray-500"
                }`}
              >
                HOME
              </button>
              <button
                onClick={() => scrollToSection("work")}
                className={`text-left text-sm font-medium transition-all duration-300 hover:translate-x-2 hover:text-black active:scale-95 !cursor-pointer ${
                  activeSection === "work" ? "text-black" : "text-gray-500"
                }`}
              >
                WORK
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className={`text-left text-sm font-medium transition-all duration-300 hover:translate-x-2 hover:text-black active:scale-95 !cursor-pointer ${
                  activeSection === "projects" ? "text-black" : "text-gray-500"
                }`}
              >
                PROJECTS
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className={`text-left text-sm font-medium transition-all duration-300 hover:translate-x-2 hover:text-black active:scale-95 !cursor-pointer ${
                  activeSection === "skills" ? "text-black" : "text-gray-500"
                }`}
              >
                SKILLS
              </button>
            </div>
          </nav>
        </div>
      )}

      <section id="home" className="pt-44 pb-12 px-4">
        <div ref={homeReveal.ref as any} className={`max-w-5xl mx-auto transition-all duration-700 ${homeReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Dinesh Ojha</h1>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Full Stack Developer who loves creating solutions and exploring new technologies
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-4 bg-gray-50">
        <div ref={aboutReveal.ref as any} className={`max-w-3xl mx-auto transition-all duration-700 delay-100 ${aboutReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
              Out of my day job, I like creating random projects that sound good in my head.
            </p>
            <p>
              When I'm not working, I like going on bike rides, watching animes, reading mangas, and just hanging out with my family.
            </p>
          </div>
        </div>
      </section>

      <section id="work" className="py-12 px-4">
        <div ref={workReveal.ref as any} className={`max-w-5xl mx-auto transition-all duration-700 delay-200 ${workReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
                enhancing features, improving usability, and optimizing workflows
                through robust backend and frontend integration with AI.
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
        <div ref={projectsReveal.ref as any} className={`max-w-5xl mx-auto transition-all duration-700 delay-300 ${projectsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-2xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid md:grid-cols-1 gap-6">
            <a
              href="/projects/bughunt-ai"
              className="block bg-white rounded-lg border border-gray-200 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-2 hover:border-gray-300 group !cursor-pointer"
            >
              <div className="flex items-center mb-2">
                <h3 className="text-lg font-semibold text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                  BugHunt AI
                </h3>
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open("https://github.com/ojha-me/bug-hunt-ai", "_blank");
                  }}
                  className="ml-8 text-sm text-blue-600 hover:text-blue-700 underline cursor-pointer transition-colors duration-200 hover:scale-110"
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
                <span className="px-2 py-1 bg-gray-100 rounded transition-all duration-200 hover:bg-blue-50 hover:text-blue-700">React</span>
                <span className="px-2 py-1 bg-gray-100 rounded transition-all duration-200 hover:bg-blue-50 hover:text-blue-700">
                  TypeScript
                </span>
                <span className="px-2 py-1 bg-gray-100 rounded transition-all duration-200 hover:bg-blue-50 hover:text-blue-700">Django</span>
                <span className="px-2 py-1 bg-gray-100 rounded transition-all duration-200 hover:bg-blue-50 hover:text-blue-700">
                  Monaco Editor
                </span>
                <span className="px-2 py-1 bg-gray-100 rounded transition-all duration-200 hover:bg-blue-50 hover:text-blue-700">Docker</span>
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
        <div ref={skillsReveal.ref as any} className={`max-w-5xl mx-auto transition-all duration-700 delay-400 ${skillsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-2xl font-bold mb-10 text-center">Skills</h2>

          <div className="space-y-10">
            <div>
              <h3 className="text-lg font-semibold mb-4">Frontend</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="transition-all duration-200 hover:translate-x-1 hover:text-black cursor-default">React.js / Next.js (SSR, ISR)</li>
                <li className="transition-all duration-200 hover:translate-x-1 hover:text-black cursor-default">TypeScript</li>
                <li className="transition-all duration-200 hover:translate-x-1 hover:text-black cursor-default">Tailwind CSS</li>
                <li className="transition-all duration-200 hover:translate-x-1 hover:text-black cursor-default">Redux Toolkit / Zustand / React Query</li>
                <li className="transition-all duration-200 hover:translate-x-1 hover:text-black cursor-default">HTML5 / CSS3</li>
                <li className="transition-all duration-200 hover:translate-x-1 hover:text-black cursor-default">Jest / Playwright</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Backend</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="transition-all duration-200 hover:translate-x-1 hover:text-black cursor-default">Python</li>
                <li className="transition-all duration-200 hover:translate-x-1 hover:text-black cursor-default">Django Ninja / FastAPI / Django Rest Framework</li>
                <li className="transition-all duration-200 hover:translate-x-1 hover:text-black cursor-default"> .NET Web Apis (C#)</li>
                <li className="transition-all duration-200 hover:translate-x-1 hover:text-black cursor-default">Node.js / Express.js</li>
                <li className="transition-all duration-200 hover:translate-x-1 hover:text-black cursor-default">PostgreSQL / MongoDB / Redis</li>
                <li className="transition-all duration-200 hover:translate-x-1 hover:text-black cursor-default">REST API design & GraphQL (Apollo)</li>
                <li className="transition-all duration-200 hover:translate-x-1 hover:text-black cursor-default">Authentication & Authorization (JWT, OAuth2, RBAC)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Tools & DevOps</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="transition-all duration-200 hover:translate-x-1 hover:text-black cursor-default">Git / GitHub</li>
                <li className="transition-all duration-200 hover:translate-x-1 hover:text-black cursor-default">Docker / docker compose</li>
                <li className="transition-all duration-200 hover:translate-x-1 hover:text-black cursor-default">GCP</li>
                <li className="transition-all duration-200 hover:translate-x-1 hover:text-black cursor-default">
                  CI/CD (GitHub Actions, Jenkins pipelines, Docker deployments)
                </li>
                <li className="transition-all duration-200 hover:translate-x-1 hover:text-black cursor-default">Nginx / Reverse Proxy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-6 px-4 border-t border-gray-200 animate-in fade-in duration-500 delay-1000">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-600 text-sm">
            2025 Dinesh Ojha. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
