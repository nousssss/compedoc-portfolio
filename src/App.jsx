import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Cat,
  Flower2,
  GraduationCap,
  BookOpen,
  Code2,
  Cpu,
  Monitor,
  HeartHandshake,
  Mail,
  ExternalLink,
  Star,
  Wand2,
  CalendarDays,
  Target,
  FileText,
  ChevronRight,
  Search,
  Filter,
  Moon,
  Sun,
} from "lucide-react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "journey", label: "Journey" },
  { id: "skills", label: "Skills" },
  { id: "evidence", label: "Projects" },
  { id: "project", label: "Future" },
  { id: "contact", label: "Contact" },
];

const journey = [
  {
    year: "2026",
    title: "MenaML Winter School Participant at KAUST",
    subtitle: "International machine learning school · Full Google scholarship",
    text: "Selected to participate in the MenaML Winter School at KAUST with a full scholarship from Google, strengthening my exposure to advanced machine learning research and international scientific communities.",
    tags: ["deep learning", "large language models", "scientific AI"],
    logo: "/logos/kaust.png",
  },
  {
    year: "2025",
    title: "ARCHI Spring School Participant",
    subtitle: "Embedded hardware/software system architectures",
    text: "Attended the ARCHI Spring School to deepen my understanding of embedded architectures and hardware/software systems, directly supporting my PhD work on efficient AI deployment.",
    tags: ["embedded systems", "hardware architectures", "accelerator design"],
    logo: "/logos/lirmm.jpeg",
  },
  {
    year: "2024 — Present",
    title: "PhD in Computer Science",
    subtitle: "UPHF / INSA Hauts-de-France / LAMIH / NYU Abu Dhabi",
    text: "Started my PhD on software/hardware co-optimization through code transformation and hardware-aware Neural Architecture Search, with the goal of making AI model deployment more efficient on edge devices.",
    tags: ["edge AI", "hardware-aware NAS", "co-optimization"],
    logo: "/logos/insa.png",
  },
  {
    year: "2024",
    title: "Guest lecturer at Batam State Polytechnic",
    subtitle: "Data Mining course",
    text: "Delivered an online lecture for students in Indonesia, guiding them on how to approach AI research projects for their final-year work.",
    tags: ["teaching", "mentorship", "data mining"],
    logo: "/logos/batam.png",
  },
  // {
  //   year: "2025",
  //   title: "Paper Publication in Journal of Systems Architecture",
  //   subtitle: "Neural Architecture Search and Automatic Code Optimization",
  //   text: "Published a survey paper analyzing techniques, trends and challenges at the intersection of Neural Architecture Search and Automatic Code Optimization.",
  //   tags: ["publication", "JSA", "survey", "NAS", "ACO"],
  // },
  {
    year: "2023 - Present",
    title: "Reviewer for international AI and Systems venues",
    subtitle: "AAAI, IJCNN, DAC, NeurIPS and DATE",
    text: "Contributed to the scientific community by reviewing submissions for major international conferences, developing a sharper understanding of research quality, clarity, evaluation and positioning.",
    tags: ["peer review"],
    logo: "/logos/kaust.png",
  },
  {
    year: "2023 — 2024",
    title: "Research internship at NYUAD & LAMIH",
    subtitle: "Neural Architecture Search + Compiler Optimization",
    text: "Reviewed literature on the combination of NAS and compiler optimization, then designed and implemented CONAS, a hardware-aware NAS framework integrating automatic code optimization through MLIR.",
    tags: ["NAS", "MLIR", "LLVM", "compiler optimization"],
    logo: "/logos/NYUAD.png", 
  },
  // {
  //   year: "2023 — 2024",
  //   title: "Master Degree in Intelligent Systems and Data Science",
  //   subtitle: "ESI ex INI · With High Honors",
  //   text: "Deepened my research-oriented skills through research methodology, research communication, literature review, information retrieval and information extraction.",
  //   tags: ["research methodology", "literature review"],
  //   logo: "/logos/esi.png",
  // },
  {
    year: "2023 — 2024",
    title: "Notion Campus Leader",
    subtitle: "Academic community building and student support",
    text: "Represented Notion at my university by organizing workshops and tutoring sessions, creating learning resources and supporting students in their academic organization.",
    tags: ["leadership", "tutoring", "communication"],
    logo: "/logos/notion.png",
  },
  {
    year: "2023 — 2024",
    title: "AI instructor at School of AI Algiers",
    subtitle: "School of AI Algiers · AI Camp",
    text: "Prepared learning materials and assignments, and presented workshops on Maths for AI, image classification and transfer learning.",
    tags: ["teaching", "mentorship", "AI", "math"],
    logo: "/logos/soai.png",
  },
  {
    year: "2023",
    title: "Research Summer Camp Participant",
    subtitle: " · School of AI Algiers",
    text: "Worked on analyzing and benchmarking mathematical methods to explain deep learning models for breast cancer detection, and presented the work as a research poster at AI Summit.",
    tags: ["XAI", "medical imaging", "deep learning", "scientific communication"],
    logo: "/logos/soai.png",
  },
  {
    year: "2023",
    title: "Neuro-Symbolic AI Summer School",
    subtitle: "IBM NSSS 2023",
    text: "Attended talks, panels and tutorials on theory and applications of neuro-symbolic AI, expanding my view of AI beyond purely data-driven approaches.",
    tags: ["neuro-symbolic AI"],
    logo: "/logos/ibm.png",
  },
  {
    year: "2023",
    title: "Research intern at LMCS lab, ESI",
    subtitle: "Research projectS · ESI",
    text: "Worked on improving a metaheuristic using machine learning techniques to solve the Flowshop scheduling problem.",
    tags: ["optimization", "metaheuristics", "reinforcement learning", "scheduling"],
    logo: "/logos/lmcs.png",
  },
  {
    year: "2023",
    title: "IWD Hackathon Participant",
    subtitle: "Women Techmakers Algiers · BeeFriendly app",
    text: "Participated in the IWD’23 Hackathon by contributing to a computer vision model for classifying beehives based on their health status.",
    tags: ["hackathon", "computer vision", "teamwork", "AI for good"],
    logo: "/logos/wtm.png",
  },
  {
    year: "2022",
    title: "Process Mining Intern at CDTA",
    subtitle: "CDTA · Centre de Développement des Technologies Avancées",
    text: "Designed and implemented a ProM extension to analyze interoperability issues between processes, verify conformance between event logs and process models, and support model repair.",
    tags: ["process mining", "Java", "graphs", "software plugin"],
    logo: "/logos/cdta.jpeg",
  },
  {
    year: "2021 — 2024",
    title: "Engineering cycle in Intelligent Systems and Data",
    subtitle: "ESI ex INI · Advanced AI, systems and optimization training",
    text: "Built strong foundations in machine learning, NLP, combinatorial optimization, computer architecture, HPC, distributed computing, data mining, signal/image processing and mathematics for data science.",
    tags: ["engineering", "AI", "HPC", "data science"],
    logo: "/logos/esi.png",
  },
  {
    year: "2021",
    title: "Entrance exam to the engineering cycle",
    subtitle: "Transition into the engineering curriculum",
    text: "Completed the competitive entrance step into the engineering cycle, marking the transition from preparatory training to advanced computer science and AI studies.",
    tags: ["engineering", "transition", "competitive exam"],
    logo: "/logos/esi.png",
  },
  {
    year: "2019 — 2021",
    title: "Classe préparatoire",
    subtitle: "Early programming, design and problem-solving foundations",
    text: "Developed early technical and creative skills including C/C++, Java, Shell/Bash, Figma and Adobe After Effects, while strengthening mathematical and problem-solving habits.",
    tags: ["C/C++", "Java", "Shell", "Figma", "Adobe After Effects"],
    logo: "/logos/esi.png",
  },
  // {
  //   year: "2016 — 2019",
  //   title: "Scientific and creative foundations",
  //   subtitle: "High school, mathematics and communication",
  //   text: "Developed a strong mathematical base through calculus, probability and statistics, participated in a Mathematical Olympiad, and explored communication and creativity through an Arabic literature competition.",
  //   tags: ["mathematics", "problem solving", "creativity", "communication"],
  //   logo: "/logos/kaust.png",
  // },
];

const skillGroups = [
  {
    id: "research",
    icon: BookOpen,
    title: "Conducting research",
    cute: "research foundations",
    description:
      "Building research questions, conducting scientific literature reviews, analyzing the state of the art, positioning a contribution and writing scientific work.",
    skills: ["Literature review", "Research methodology", "State of the art", "Scientific writing"],
    evidence: "NACOS survey published in Journal of Systems Architecture, CONAS, optimization and XAI research projects.",
  },
  {
    id: "technical",
    icon: Code2,
    title: "Developing & experimenting",
    cute: "experimental workflow",
    description:
      "Implementing prototypes, running experiments, structuring pipelines, using AI frameworks and analyzing results.",
    skills: ["Python", "C/C++", "Java", "Julia", "Bash/Shell", "PyTorch", "TensorFlow/Keras", "JAX", "Matlab", "R"],
    evidence: "CONAS, Interoperability Solver, projets XAI, Flowshop scheduling, Community Detection.",
  },
  {
    id: "hardware",
    icon: Cpu,
    title: "Understanding hardware & systems",
    cute: "hardware-aware thinking",
    description:
      "Connecting software decisions to hardware constraints, understanding architectures, HPC and efficient AI deployment.",
    skills: ["Computer Architecture", "HPC", "CUDA", "OpenMP", "MPI", "Pthreads", "HDL", "LLVM", "MLIR", "Edge AI"],
    evidence: "PhD work in software/hardware co-optimization, ARCHI Spring School, HPC and architecture coursework, efficient AI projects.",
  },
  {
    id: "optimization",
    icon: Sparkles,
    title: "Optimization & AutoML",
    cute: "optimization garden",
    description:
      "Using combinatorial optimization, Neural Architecture Search and automation to improve model and code performance.",
    skills: ["Neural Architecture Search", "Automatic Code Optimization", "Combinatorial Optimization", "Metaheuristics", "Reinforcement Learning"],
    evidence: "CONAS, survey NACOS, Flowshop Scheduling Optimization, Community Detection in Social Networks.",
  },
  {
    id: "communication",
    icon: Monitor,
    title: "Communicating & showcasing research",
    cute: "research communication",
    description:
      "Presenting work to different audiences, producing clear visual supports, explaining technical ideas and guiding students in research projects.",
    skills: ["Poster", "Slides", "Science communication", "Guest lecture", "Workshops", "Scientific figures", "Figma", "Adobe After Effects"],
    evidence: "Guest lecture at Batam State Polytechnic, AI Camp workshops, AI Summit poster, presentations, Figma visuals and research communication supports.",
  },
  {
    id: "collaboration",
    icon: HeartHandshake,
    title: "Collaborating & serving the scientific community",
    cute: "scientific service",
    description:
      "Working in international collaborations, receiving and giving feedback, participating in peer review and contributing to academic communities.",
    skills: ["Peer review", "Collaboration", "Feedback", "Scientific service", "International research context"],
    evidence: "Reviews for AAAI, DAC, DATE, IJCNN, DSD, NeurIPS MINT workshop and NuClear @ AAAI.",
  },
  {
    id: "leadership",
    icon: Flower2,
    title: "Leadership, teaching & organization",
    cute: "learning community",
    description:
      "Organizing workshops, mentoring students, preparing learning resources and representing an academic community.",
    skills: ["Mentoring", "Workshop design", "Tutoring", "Resource creation", "Community building"],
    evidence: "Notion Campus Leader, School of AI workshops, cybersecurity awareness presentation, student support activities.",
  },
];

const evidenceCards = [
  {
    title: "CONAS",
    type: "Framework / research project",
    text: "Hardware-Aware Neural Architecture Search framework integrating Automatic Code Optimization through the MLIR compiler to accelerate convolutional neural networks on resource-constrained devices.",
    tags: ["NAS", "Compiler", "MLIR", "Efficient AI"],
    links: [
    { label: "Code", url: "https://github.com/nousssss/COwNAS" },
  ],
  },
  {
    title: "Neural Architecture Search and Automatic Code Optimization",
    type: "Journal publication",
    text: "Survey paper published in Journal of Systems Architecture (Elsevier, Q1), analyzing techniques, trends and challenges at the intersection of NAS and automatic code optimization.",
    tags: ["Survey", "JSA", "Q1", "Research"],
    links: [
    { label: "Paper", url: "https://doi.org/10.1016/j.sysarc.2025.103645" },
  ],
  },
  {
    title: "Interoperability Solver",
    type: "Software project / internship",
    text: "ProM process mining plugin to verify conformance between event logs and process models, repair models and annotate activities based on event messages.",
    tags: ["Process Mining", "Java", "Graphs", "Plugin"],
    links: [
    { label: "Code", url: "https://github.com/nousssss/Interoperability-Solver" },
  ],
  },
  {
    title: "AI Explainability in Medical Imaging",
    type: "Research project",
    text: "Benchmarking mathematical methods to explain and interpret deep learning models for breast cancer detection.",
    tags: ["XAI", "Medical Imaging", "Deep Learning"],
    links: [
    { label: "Poster", url: "https://drive.google.com/file/d/1v7X1pXZkQozWkdDs5-o_rtxhw5rUVfsP/view" },
    { label: "Code", url: "https://github.com/nousssss/RSC-XAI" },
  ],
  },
  {
    title: "Flowshop Scheduling Optimization with AI",
    type: "Research project",
    text: "Improving a metaheuristic using machine learning techniques to solve the Flowshop scheduling problem.",
    tags: ["Optimization", "RL", "Scheduling"],
    links: [
    { label: "Preprint", url: "https://drive.google.com/file/d/1Brw8frwPgFxIVyKS3g81gz6YOK651oGz/view" },
    { label: "Code", url: "https://github.com/ilhembekkr/QTIETOIA" },
  ],
  },
  {
    title: "Community Detection in Social Networks",
    type: "Research project",
    text: "Combining combinatorial optimization and machine learning techniques to solve the community detection problem in complex networks.",
    tags: ["Graphs", "ML", "Complex Networks"],
    links: [
    { label: "Code", url: "https://github.com/nousssss/community-detection" },
  ],
  },

];

const floating = ["✦", "🌸", "✿", "🌸", "✿", "🌸", "✿", "🌸", "✿", "🌸", "✦", "✦", "🌸", "✿", "🌸", "✿", "🌸", "✿", "🌸", "✿", "🌸", "✦", "✦", "🌸", "✿", "🌸", "✿", "🌸", "✿", "🌸", "✿", "🌸", "✦"];

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function SectionTitle({ eyebrow, title, children }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="mb-3 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/70 px-4 py-2 text-sm font-semibold text-pink-700 shadow-sm backdrop-blur"
      >
        <Sparkles className="h-4 w-4" /> {eyebrow}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="font-serif text-4xl font-bold tracking-tight text-[#3F3340] md:text-5xl"
      >
        {title}
      </motion.h2>
      {children && <p className="mt-4 text-base leading-7 text-[#6A4653]/80 md:text-lg">{children}</p>}
    </div>
  );
}

function FloatingDecor() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {floating.map((item, i) => (
        <motion.span
          key={`${item}-${i}`}
          className="absolute text-2xl text-pink-300/70"
          // style={{ left: `${8 + i * 12}%`, top: `${10 + (i % 4) * 20}%` }}
          style={{ left: `${4 + (i * 11) % 92}%`, top: `${6 + (i * 17) % 88}%` }}
          animate={{ y: [0, -18, 0], rotate: [0, 8, -8, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
        >
          {item}
        </motion.span>
      ))}
    </div>
  );
}

function Nav({ dark, setDark }) {
  return (
    <div className="sticky top-0 z-50 border-b border-white/70 bg-white/60 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#home" className="flex items-center gap-2 font-serif text-xl font-bold text-pink-700">
          <span className="grid h-9 w-9 place-items-center rounded-2xl bg-pink-100 shadow-sm">
            <Cat className="h-5 w-5" />
          </span>
          Inas Portfolio
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="rounded-full px-3 py-2 text-sm font-medium text-[#6A4653] transition hover:bg-pink-100 hover:text-pink-800"
            >
              {section.label}
            </a>
          ))}
        </div>
        <button
          onClick={() => setDark(!dark)}
          className="grid h-10 w-10 place-items-center rounded-full border border-pink-200 bg-white text-pink-700 shadow-sm transition hover:scale-105"
          aria-label="Changer le thème"
        >
          {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
      </nav>
    </div>
  );
}

function Hero({ dark }) {
  return (
    <section id="home" className="relative z-10 mx-auto grid min-h-[88vh] max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-8">
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/70 px-4 py-2 text-sm font-semibold text-pink-700 shadow-sm backdrop-blur">
          <Wand2 className="h-4 w-4" /> Doctoral Skills Portfolio · Compedoc
        </div>
        <h1 className={`font-serif text-5xl font-black leading-[0.95] tracking-tight md:text-7xl ${dark ? "text-white" : "text-[#3F3340]"}`}>
          Inas' Doctoral Portfolio
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6A4653]/85">
          This portfolio is my deliverable for Compedoc 2026, a professional space to present my academic path, skills, and future professional project.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#skills" className="rounded-full bg-pink-600 px-6 py-3 font-semibold text-white shadow-lg shadow-pink-200 transition hover:-translate-y-1 hover:bg-pink-700">
            Explore my skills
          </a>
          <a href="#journey" className="rounded-full border border-pink-200 bg-white/75 px-6 py-3 font-semibold text-pink-800 shadow-sm transition hover:-translate-y-1 hover:bg-pink-50">
            View my journey
          </a>
        </div>
        <div className="mt-8 flex flex-wrap gap-3 text-sm text-[#6A4653]/80">
          {["Embedded AI", "Compilation", "Automatic Optimization", "Hardware Design"].map((tag) => (
            <span key={tag} className="rounded-full bg-white/70 px-4 py-2 shadow-sm ring-1 ring-pink-100">♡ {tag}</span>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="relative"
      >
        <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-pink-200 via-purple-200 to-yellow-100 blur-2xl" />
        <div className="relative overflow-hidden rounded-[3rem] border border-white/70 bg-white/75 p-6 shadow-2xl shadow-pink-200/60 backdrop-blur">
          <div className="rounded-[2.5rem] bg-gradient-to-br from-pink-100 via-white to-yellow-50 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-pink-500">PhD researcher</p>
                <h2 className="mt-2 font-serif text-3xl font-bold text-[#3F3340]">Inas Bachiri</h2>
              </div>
              <div className="grid h-16 w-16 place-items-center rounded-3xl bg-white shadow-sm">
                <GraduationCap className="h-8 w-8 text-pink-600" />
              </div>
            </div>
            <div className="mt-8 grid gap-4">
              {[
  "🎓 Université Polytechnique de Hauts-de-France · New York University Abu Dhabi",
  "📍 Valenciennes · France",
  "🧠 Efficient Embedded AI",
].map((x, idx) => (
                <motion.div
                  key={x}
                  animate={{ x: [0, idx % 2 ? -4 : 4, 0] }}
                  transition={{ duration: 3 + idx, repeat: Infinity, ease: "easeInOut" }}
                  className="flex items-center gap-3 rounded-3xl bg-white/85 p-4 shadow-sm"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-pink-100 text-lg">
  {x.split(" ")[0]}
</span>

<span className="font-semibold text-[#6A4653]">
  {x.split(" ").slice(1).join(" ")}
</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 rounded-3xl border border-pink-100 bg-white/70 p-5">
              <p className="font-serif text-2xl text-pink-700 text-center">“Putting the soft in software ♡”</p>
              {/* <p className="mt-2 text-sm leading-6 text-[#6A4653]/80">A portfolio to connect my technical work, research identity and doctoral skills.</p> */}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative z-10 px-4 py-20 md:px-8 ">
      <SectionTitle eyebrow="doctoral portrait" title="About me">
      </SectionTitle>
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[0.85fr_1.15fr]">
        <motion.div whileHover={{ rotate: -1, y: -4 }} className="rounded-[2.5rem] border border-pink-100 bg-white/75 p-6 shadow-xl shadow-pink-100/80 backdrop-blur">
          <div className="aspect-square rounded-[2rem] bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-50 p-8">
            <div className="grid h-full place-items-center rounded-[1.5rem] border-2 border-dashed border-pink-200 bg-white/60 text-center">
              <img
                src="images/profile.jpg"
                alt="Inas"
                className="h-full w-full rounded-[1.2rem] object-cover"
              />
            </div>
          </div>
        </motion.div>
        <div className="grid gap-6">
          <div className="rounded-[2.5rem] border border-pink-100 bg-white/75 p-8 shadow-xl shadow-pink-100/80 backdrop-blur">
            <h3 className="font-serif text-3xl font-bold text-[#3F3340]">Hi, I’m Inas ✨</h3>
            <p className="mt-4 leading-8 text-[#6A4653]/85">
              I am a second-year PhD student in computer science, enrolled in a joint program between New York University Abu Dhabi (NYUAD) and Université Polytechnique Hauts-de-France (UPHF), supported by a scholarship from INSA Hauts-de-France. I am currently carrying my research at the LAMIH lab in France.
            </p>
            <p className="mt-4 leading-8 text-[#6A4653]/85">
              My research focuses on making AI more efficient and optimized for resource-constrained devices by exploring the intersection of Neural Architecture Search, Automatic Code Optimization, and hardware accelerator design. My fields of interest include deep learning, compilers, neurosymbolic AI, analog AI, and emerging hardware architectures.
            </p>
          </div>
          {/* <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["Topic", "Edge AI + compilation"],
              ["Profile", "AI, systems & optimization"],
              ["Goal", "scientific impact"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-3xl border border-pink-100 bg-white/70 p-5 text-center shadow-sm">
                <p className="text-sm font-bold uppercase tracking-widest text-pink-500">{k}</p>
                <p className="mt-2 font-serif text-xl font-bold text-[#3F3340]">{v}</p>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="journey" className="relative z-10 bg-white/35 px-4 py-20 md:px-8">
      <SectionTitle eyebrow="timeline" title="My journey">
      </SectionTitle>
      <div className="mx-auto max-w-5xl">
        <div className="relative pl-16 md:pl-24">
          <div className="absolute left-8 top-0 h-full w-1 rounded-full bg-gradient-to-b from-pink-300 via-purple-300 to-yellow-200 md:left-10" />
          {journey.map((item, index) => (
            <motion.div
              key={`${item.year}-${item.title}`}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="relative mb-8 rounded-[2rem] border border-pink-100 bg-white/80 p-6 shadow-lg shadow-pink-100/70"
            >
              <span className="absolute left-[-2rem] top-7 flex h-14 w-14 -translate-x-1/2 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-white shadow-md ring-1 ring-pink-100 md:left-[-3.5rem] md:h-16 md:w-16">
                {item.logos?.length ? (
                  <div className="grid h-full w-full grid-cols-2 gap-0.5 p-1">
                    {item.logos.slice(0, 4).map((logo) => (
                      <img
                        key={logo.alt}
                        src={logo.src}
                        alt={logo.alt}
                        title={logo.alt}
                        className="h-full w-full rounded-full object-contain"
                      />
                    ))}
                  </div>
                ) : item.logo ? (
                  <img
                    src={item.logo}
                    alt={`${item.title} logo`}
                    className="h-full w-full object-contain p-1.5"
                  />
                ) : (
                  <span className="grid h-full w-full place-items-center bg-pink-400 text-xs font-black text-white">
                    {index + 1}
                  </span>
                )}
              </span>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="inline-flex items-center gap-2 rounded-full bg-pink-50 px-3 py-1 text-sm font-bold text-pink-700"><CalendarDays className="h-4 w-4" /> {item.year}</p>
                  <h3 className="mt-3 font-serif text-2xl font-bold text-[#3F3340]">{item.title}</h3>
                  <p className="mt-1 font-semibold text-pink-700">{item.subtitle}</p>
                </div>
              </div>
              <p className="mt-4 leading-7 text-[#6A4653]/80">{item.text}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => <span key={tag} className="rounded-full bg-yellow-50 px-3 py-1 text-sm font-medium text-[#6A4653] ring-1 ring-yellow-100">{tag}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const filtered = useMemo(() => {
    return skillGroups.filter((group) => {
      const text = `${group.title} ${group.description} ${group.skills.join(" ")} ${group.evidence}`.toLowerCase();
      const matchesQuery = text.includes(query.toLowerCase());
      const matchesFilter = filter === "all" || group.id === filter;
      return matchesQuery && matchesFilter;
    });
  }, [query, filter]);

  return (
    <section id="skills" className="relative z-10 px-4 py-20 md:px-8">
      <SectionTitle eyebrow="living framework" title="My skills">
      </SectionTitle>

      <div className="mx-auto mb-8 flex max-w-5xl flex-col gap-3 rounded-[2rem] border border-pink-100 bg-white/75 p-4 shadow-sm backdrop-blur md:flex-row">
        <label className="flex flex-1 items-center gap-3 rounded-full bg-pink-50 px-4 py-3 text-[#6A4653]">
          <Search className="h-4 w-4 text-pink-600" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a skill..."
            className="w-full bg-transparent outline-none placeholder:text-[#6A4653]/45"
          />
        </label>
        <label className="flex items-center gap-3 rounded-full bg-purple-50 px-4 py-3 text-[#6A4653]">
          <Filter className="h-4 w-4 text-pink-600" />
          <select value={filter} onChange={(e) => setFilter(e.target.value)} className="bg-transparent outline-none">
            <option value="all">All</option>
            {skillGroups.map((g) => <option key={g.id} value={g.id}>{g.title}</option>)}
          </select>
        </label>
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((group, index) => {
          const Icon = group.icon;
          return (
            <motion.article
              key={group.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              whileHover={{ y: -6, rotate: index % 2 ? 0.6 : -0.6 }}
              className="group rounded-[2.2rem] border border-pink-100 bg-white/80 p-6 shadow-xl shadow-pink-100/70 backdrop-blur"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-3xl bg-gradient-to-br from-pink-100 to-yellow-50 text-pink-700 shadow-sm">
                  <Icon className="h-7 w-7" />
                </div>
                <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-bold text-pink-600">{group.cute}</span>
              </div>
              <h3 className="mt-5 font-serif text-2xl font-bold text-[#3F3340]">{group.title}</h3>
              <p className="mt-3 leading-7 text-[#6A4653]/80">{group.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-full bg-white px-3 py-1 text-sm font-medium text-[#6A4653] ring-1 ring-pink-100">{skill}</span>
                ))}
              </div>
              <div className="mt-5 rounded-3xl bg-gradient-to-br from-pink-50 to-yellow-50 p-4">
                <p className="text-xs font-black uppercase tracking-widest text-pink-500">Possible evidence</p>
                <p className="mt-2 text-sm leading-6 text-[#6A4653]/80">{group.evidence}</p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

function Evidence() {
  return (
    <section id="evidence" className="relative z-10 bg-white/35 px-4 py-20 md:px-8">
      <SectionTitle eyebrow="evidence & traces" title="Research & projects">
      </SectionTitle>
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
        {evidenceCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className="rounded-[2.2rem] border border-pink-100 bg-white/80 p-6 shadow-lg shadow-pink-100/70"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-bold text-[#6A4653]">{card.type}</span>
              <FileText className="h-5 w-5 text-pink-600" />
            </div>
            <h3 className="mt-4 font-serif text-2xl font-bold text-[#3F3340]">{card.title}</h3>
            <p className="mt-3 leading-7 text-[#6A4653]/80">{card.text}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {card.tags.map((tag) => <span key={tag} className="rounded-full bg-pink-50 px-3 py-1 text-sm font-medium text-pink-700">#{tag}</span>)}
            </div>
            {card.links?.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {card.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-pink-700 ring-1 ring-pink-100 transition hover:bg-pink-50"
                >
                  {link.label} <ExternalLink className="h-4 w-4" />
                </a>
              ))}
            </div>
          )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}


function Project() {
  return (
    <section id="project" className="relative z-10 bg-gradient-to-br from-pink-100/70 via-white/45 to-yellow-100/60 px-4 py-20 md:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/75 px-4 py-2 text-sm font-bold text-pink-700 shadow-sm">
            <Target className="h-4 w-4" /> professional project
          </div>
          <h2 className="font-serif text-4xl font-black text-[#3F3340] md:text-5xl">The trajectory I am building</h2>
          <p className="mt-5 leading-8 text-[#6A4653]/85">
            My goal is to build an identifiable research profile around automatic optimization for efficient AI: Neural Architecture Search, compilation, software/hardware co-optimization and deployment on resource-constrained devices.
          </p>
        </div>
        <div className="rounded-[2.5rem] border border-pink-100 bg-white/80 p-6 shadow-xl shadow-pink-100/80">
          {[
            "Complete a strong and valuable PhD thesis",
            "Publish in high-quality conferences and journals",
            "Develop expertise in AI + compilation + hardware",
            "Build a visible, creative and scientifically rigorous profile",
          ].map((step, index) => (
            <div key={step} className="flex gap-4 border-b border-pink-100 py-4 last:border-b-0">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-pink-100 font-bold text-pink-700">{index + 1}</span>
              <p className="pt-1 font-medium leading-7 text-[#6A4653]">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative z-10 px-4 py-20 md:px-8">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[3rem] border border-pink-100 bg-white/80 shadow-2xl shadow-pink-100/80 backdrop-blur">
        <div className="grid gap-0 md:grid-cols-[1fr_0.9fr]">
          <div className="p-8 md:p-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-pink-50 px-4 py-2 text-sm font-bold text-pink-700">
              <Mail className="h-4 w-4" /> contact
            </div>
            <h2 className="mt-5 font-serif text-4xl font-black text-[#3F3340]">Let’s connect</h2>
            <p className="mt-4 leading-8 text-[#6A4653]/85">
              You can contact me by email or through LinkedIn, and find my work on GitHu and Google Scholar.
            </p>
            <div className="mt-8 grid gap-3">
              {[
                [Mail, "Email UPHF", "inas.bachiri@uphf.fr", "mailto:inas.bachiri@uphf.fr"],
                [Mail, "Email NYU", "inas.bachiri@nyu.edu", "mailto:inas.bachiri@nyu.edu"],
                [ExternalLink, "GitHub", "nousssss", "https://github.com/nousssss"],
                [ExternalLink, "LinkedIn", "Inas Bachiri", "https://www.linkedin.com/in/ines-bachiri/"],
                [ExternalLink, "Google Scholar", "Inas Bachiri", "https://scholar.google.com/citations?user=hrHlf7YAAAAJ&hl=en"],
              ].map(([Icon, label, value, href]) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center justify-between rounded-2xl bg-pink-50/70 p-4 font-medium text-[#6A4653] transition hover:bg-pink-100"
                >
                  <span className="flex items-center gap-3"><Icon className="h-5 w-5 text-pink-600" /> {label}: {value}</span>
                  <ChevronRight className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid place-items-center bg-gradient-to-br from-pink-200 via-purple-100 to-yellow-100 p-10 text-center">
            <div className="rounded-[2.5rem] bg-white/65 p-8 shadow-lg">
              <Flower2 className="mx-auto h-16 w-16 text-pink-600" />
              <p className="mt-5 font-serif text-3xl font-bold text-[#3F3340]">Compedoc Portfolio 2026</p>
              <p className="mt-3 text-[#6A4653]/80">Made with love and milk ♡</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [dark, setDark] = useState(false);
  return (
    <main className={cn("min-h-screen scroll-smooth font-sans", dark ? "bg-[#2A2028]" : "bg-[#FFF8F0]")}> 
      <div className={cn("relative overflow-hidden", dark ? "text-white" : "text-[#3F3340]")}> 
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(249,201,217,0.55),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(220,203,255,0.45),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(255,232,168,0.55),transparent_35%)]" />
        <div className={cn("absolute inset-0", dark ? "bg-[#2A2028]/80" : "bg-white/10")} />
        <FloatingDecor />
        <Nav dark={dark} setDark={setDark} />
        <Hero dark={dark} />
        <About />
        <Journey />
        <Skills />
        <Evidence />
        <Project />
        <Contact />
      </div>
    </main>
  );
}
