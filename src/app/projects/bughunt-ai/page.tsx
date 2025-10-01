export default function BugHuntAI() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
      <section id="project-detail" className="py-12 px-4 bg-white">
  <div className="max-w-5xl mx-auto">
    <h1 className="text-3xl font-bold mb-6 text-center">
      BugHunt AI
    </h1>

    <p className="text-gray-700 text-sm mb-8">
      BugHunt AI is an interactive AI-powered learning platform that transforms coding education through active bug-hunting and structured learning paths.
      It allows learners to master programming by solving real challenges with an AI tutor guiding them step-by-step.
    </p>

    <div className="grid md:grid-cols-2 gap-6 mb-8">
      <img src="/learning-path.png" alt="BugHunt AI Screenshot 1" className="rounded-lg shadow" />
      <img src="/learning-path-creation.png" alt="BugHunt AI Screenshot 3" className="rounded-lg shadow" />
      <img src="/conversation-ss.png" alt="BugHunt AI Screenshot 2" className="rounded-lg shadow" />
      <img src="/code-editor-page.png" alt="BugHunt AI Screenshot 4" className="rounded-lg shadow" />
    </div>

    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
          <li>Structured Learning Paths with progress tracking and clear objectives</li>
          <li>General Chat Mode for instant bug hunting and real-time coding practice</li>
          <li>Interactive Monaco Editor for live code editing and execution</li>
          <li>AI-powered explanations, challenges, and code review using Google Gemini API</li>
          <li>Secure sandboxed Docker containers for isolated code execution</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="px-2 py-1 bg-gray-100 rounded">React</span>
          <span className="px-2 py-1 bg-gray-100 rounded">TypeScript</span>
          <span className="px-2 py-1 bg-gray-100 rounded">Vite</span>
          <span className="px-2 py-1 bg-gray-100 rounded">Mantine UI</span>
          <span className="px-2 py-1 bg-gray-100 rounded">Monaco Editor</span>
          <span className="px-2 py-1 bg-gray-100 rounded">Python</span>
          <span className="px-2 py-1 bg-gray-100 rounded">Django Ninja</span>
          <span className="px-2 py-1 bg-gray-100 rounded">Docker</span>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2">Status</h2>
        <p className="text-gray-700 text-sm">
          Work in progress — actively developed with 2–3 commits per week.
        </p>
      </div>

    </div>

    {/* Back Link */}
    <div className="mt-10 text-center">
      <a
        href="/#projects"
        className="text-blue-600 hover:underline font-medium"
      >
        ← Back to Projects
      </a>
    </div>
  </div>
</section>

  );
}
