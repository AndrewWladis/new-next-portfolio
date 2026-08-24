"use client";
import Image from 'next/image'
import { BsGithub, BsEnvelope, BsLinkedin } from "react-icons/bs";

export default function Home() {
  const projects = [
    {
      name: "Pillowbook - Dream Decoder",
      link: "https://apps.apple.com/us/app/pillowbook-dream-decoder/id6775021552",
      image: "/pillowbook.png",
      stack: "React Native, Expo, OpenAI API, Firebase",
      published: "Published June 2026",
      description: "A personalized dream-journaling and interpretation app for iOS.",
      highlights: [
        "Built with React Native and Expo for a polished mobile-first experience.",
        "Integrated the OpenAI API to generate personalized interpretations from dream entries and recurring themes.",
        "Designed a knowledge-graph system linking symbols, emotions, and people to surface long-term dream patterns."
      ]
    },
    {
      name: "Swiftie Swipe",
      link: "https://apps.apple.com/us/app/swiftie-swipe/id6479224086",
      image: "/swiftieswipe.png",
      stack: "React Native, Expo, Azure, SQL",
      published: "Published March 2024",
      description: "The ultimate unofficial daily Swiftie challenge game!",
      highlights: [
        "Daily replayable gameplay loop.",
        "Built for short-session mobile engagement.",
        "Achieved over 20,000 downloads.",
        "Created an Azure backend with an Azure SQL database to host Expo notification tokens."
      ]
    },
    {
      name: "Dunk Rank",
      link: "https://apps.apple.com/us/app/dunk-rank/id6448699695",
      image: "/dunkrank.png",
      stack: "React Native, Expo, Firebase",
      published: "Published May 2023",
      description: "Rank yourself and your friends based on basketball 1v1 scores.",
      highlights: [
        "Competitive ranking and score tracking.",
        "Designed around friend-group interactions."
      ]
    },
    {
      name: "Quote Cook",
      link: "https://apps.apple.com/us/app/quote-cook/id6447148619",
      image: "/quotecook.png",
      stack: "React Native, Expo",
      published: "Published April 2023",
      description: "A competitive daily Breaking Bad quote trivia game.",
      highlights: [
        "Daily challenges with social share moments.",
        "Built around fan-community engagement."
      ]
    },
    {
      name: "EKSE",
      link: "https://apps.apple.com/us/app/ekse/id6450754813",
      image: "/ekse.png",
      stack: "React Native, Expo, MongoDB",
      published: "Published December 2023",
      description: "Challenge your skills, reflexes, and endurance in this addictive arcade adventure.",
      highlights: [
        "Fast-paced mechanics and progression.",
        "Optimized for responsive touch controls."
      ]
    },
  ];

  return (
    <main className="w-full bg-zinc-950 scroll-smooth h-screen">
      <nav className="w-full sticky top-0 flex items-start justify-evenly bg-gradient-to-b from-blue-950 to-transparent" style={{ height: '10%' }}>
        <a href="#projects">
          <p className="text-gray-100 text-2xl font-sans py-4">Projects</p>
        </a>
        <a href="#skills">
          <p className="text-gray-100 text-2xl font-sans py-4">My Skills</p>
        </a>
        <a href="#contact">
          <p className="text-gray-100 text-2xl font-sans py-4">Contact</p>
        </a>
      </nav>
      <div className="w-full flex items-center justify-center flex-col h-5/6">
        <h1 className="text-gray-100 text-5xl font-sans font-semibold">Andrew Wladis</h1>
        <h2 className="text-gray-100 text-4xl font-sans">Software Developer</h2>
      </div>
      <div id="projects" className="w-full bg-gradient-to-b from-zinc-950 via-slate-950 to-blue-950 py-20">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="mb-12 flex flex-col items-center text-center">
            <h2 className="text-4xl font-sans font-bold text-gray-100 md:text-5xl">Projects</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((item) => (
              <article
                key={item.name.replace(/\s/g, "").toLowerCase()}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 p-5 shadow-[0_20px_60px_rgba(8,47,73,0.35)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-slate-900/70"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.15),transparent_55%)]" aria-hidden="true" />
                <div className="relative grid gap-5 md:grid-cols-[140px_1fr]">
                  <div className="mx-auto flex w-full max-w-[140px] items-center justify-center rounded-2xl p-2">
                    <Image
                      src={item.image}
                      width={180}
                      height={375}
                      alt={item.name}
                      className="h-auto max-h-[250px] w-auto rounded-lg object-contain"
                    />
                  </div>

                  <div>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="py-1 text-xs font-medium uppercase tracking-wide text-slate-200">
                        {item.published}
                      </span>
                    </div>

                    <h3 className="text-2xl font-semibold text-white">{item.name}</h3>
                    <p className="mt-2 text-slate-300">{item.description}</p>
                    <p className="mt-2 text-sm font-medium text-cyan-200">{item.stack}</p>

                    <ul className="mt-4 space-y-1.5 text-sm text-slate-200">
                      {item.highlights.map((highlight) => (
                        <li key={`${item.name}-${highlight}`} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300" aria-hidden="true" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {item.link ? (
                      <a
                        className="mt-5 inline-flex items-center rounded-xl border border-cyan-300/60 bg-cyan-400/20 px-4 py-2 text-sm font-semibold text-cyan-50 transition duration-200 hover:bg-cyan-300/30"
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Project
                      </a>
                    ) : (
                      <span className="mt-5 inline-flex items-center rounded-xl border border-cyan-300/40 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-100">
                        Published
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <div id="skills" className="w-full bg-gradient-to-b from-blue-950 to-zinc-950 flex flex-col h-fit py-16">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-sans font-bold text-gray-100 md:text-5xl">My Skills</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: 'Programming Languages',
                accent: 'from-cyan-400 via-sky-500 to-blue-600',
                skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C/C++', 'SQL', 'CSS', 'HTML'],
              },
              {
                title: 'Frameworks & Libraries',
                accent: 'from-violet-400 via-purple-500 to-fuchsia-600',
                skills: ['React', 'Next.js', 'React Native', 'Node.js', 'Angular', 'Bootstrap', 'Tailwind CSS', 'Expo', 'Firebase', 'MongoDB', 'NumPy', 'PyTorch', 'Torch'],
              },
              {
                title: 'Tools & Platforms',
                accent: 'from-emerald-400 via-teal-500 to-cyan-600',
                skills: ['Git', 'GitHub', 'GitLab', 'Azure', 'Google Cloud', 'Netlify', 'App Store Connect', 'Google Analytics', 'Adobe Photoshop', 'Adobe XD', 'Adobe Illustrator', 'Google Workspace', 'Microsoft Office'],
              },
              {
                title: 'CS & ML Concepts',
                accent: 'from-amber-400 via-orange-500 to-rose-500',
                skills: ['Gradient Descent', 'Backpropagation', 'Neural Networks', 'CNNs', 'Object-Oriented Design'],
              },
            ].map((group, index) => (
              <div
                key={group.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.45)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-sky-400/60 hover:bg-slate-900/80"
              >
                <div className="mb-5 flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-white">{group.title}</h2>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <span
                      key={`${group.title}-${skill}`}
                      className="rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1.5 text-sm font-medium text-sky-100 transition duration-200 hover:border-sky-300/70 hover:bg-sky-400/15"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="contact" className="w-full bg-zinc-950 h-1/6 flex flex-col pt-2">

          <div className="mb-10 text-center">
            <h2 className="text-4xl font-sans font-bold text-gray-100 md:text-5xl">Contact</h2>
          </div>
        <div className="w-full bg-zinc-950 flex flex-row justify-center items-end">
          <a href="https://github.com/AndrewWladis/" className='p-4' target="blank">
            <BsGithub color='white' size={50} />
          </a>
          <a href="https://www.linkedin.com/in/andrew-wladis-720070331/" className='p-4' target="blank">
            <BsLinkedin color='white' size={50} />
          </a>
          <a href="mailto:andrewwladis@gmail.com" className='p-4'>
            <BsEnvelope color='white' size={50} />
          </a>
        </div>
      </div>
    </main>
  )
}
