
'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function BugHuntAI() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { src: '/Homepage.png', alt: 'BugHunt AI Homepage' },
    { src: '/Paths details.png', alt: 'BugHunt AI Paths Details' },
    { src: '/Paths Creation.png', alt: 'BugHunt AI Paths Creation' },
    { src: '/Code Editor.png', alt: 'BugHunt AI Code Editor' },
    { src: '/Notes Page.png', alt: 'BugHunt AI Notes Page' },
    { src: '/Analytics Page.png', alt: 'BugHunt AI Analytics Page' },
    { src: '/Register.png', alt: 'BugHunt AI Register Page' },
  ];

  return (
    <>
    <section id="project-detail" className="py-12 px-4 bg-white">
  <div className="max-w-5xl mx-auto">
    <h1 className="text-3xl font-bold mb-6 text-center">
      BugHunt AI
    </h1>

    <p className="text-gray-700 text-sm mb-8">
      BugHunt AI is an interactive AI-powered learning platform that transforms coding education through active bug-hunting and structured learning paths.
      It allows learners to master programming by solving real challenges with an AI tutor guiding them step-by-step.
    </p>

    <div className="mb-8">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="rounded-lg"
        aria-label="BugHunt AI project screenshots"
        role="region"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image
              src={slide.src}
              alt={slide.alt}
              width={600}
              height={450}
              className="w-full rounded-lg shadow max-w-lg mx-auto cursor-pointer hover:opacity-90 transition-opacity"
              priority={index === 0}
              onClick={() => {
                setCurrentIndex(index);
                setLightboxOpen(true);
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    {/* Demo Video */}
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Demo Video</h2>
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/F_ibdM16Ykc"
          title="BugHunt AI Demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
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

  <Lightbox
    open={lightboxOpen}
    close={() => setLightboxOpen(false)}
    slides={slides.map(slide => ({ src: slide.src }))}
    index={currentIndex}
  />
</section>
    </>
  );
}
