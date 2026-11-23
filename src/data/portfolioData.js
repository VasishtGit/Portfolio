export const personalInfo = {
  name: "Vasisht Suresh",
  title: "AI & Machine Learning Engineer",
  subtitle: "Specializing in NLP, Transformer Architectures & Intelligent Systems",
  location: "Bengaluru, India",
  phone: "+91-8762548767",
  email: "vasisht765@gmail.com",
  linkedin: "https://linkedin.com",
  github: "https://github.com",
  summary:
    "Computer Science and Engineering student with hands-on experience in Machine Learning, Deep Learning, NLP, and AI. Skilled in PyTorch, Transformers, neural networks, supervised learning, model evaluation, embeddings, and PostgreSQL. Experienced in developing and evaluating ML models and AI-driven backend systems using FastAPI and SQLAlchemy."
};

export const stats = [
  { label: "CGPA (VTU)", value: "8.71" },
  { label: "Research Paper", value: "IEEE Accepted" },
  { label: "Core Focus", value: "LLMs & NLP" },
  { label: "Certifications", value: "7+" }
];

export const skillsData = {
  "Machine Learning & Deep Learning": [
    "PyTorch",
    "Transformers (Hugging Face)",
    "ModernBERT",
    "BERT",
    "Scikit-learn",
    "Feature Engineering",
    "Model Evaluation",
    "Cross-Validation",
    "Neural Networks"
  ],
  "NLP & LLMs": [
    "Large Language Models (LLMs)",
    "LangChain",
    "LangSmith",
    "Semantic Search",
    "FAISS",
    "Tokenization",
    "Embeddings",
    "ClinicalBERT"
  ],
  "Backend & Systems": [
    "FastAPI",
    "Django",
    "Django REST Framework",
    "REST APIs",
    "SQLAlchemy",
    "Pydantic",
    "HTTPX",
    "PostgreSQL",
    "Supabase",
    "Alembic"
  ],
  "Programming & Dev": [
    "Python",
    "C++",
    "C",
    "Java",
    "JavaScript",
    "Git & GitHub",
    "Pytest",
    "ONNX",
    "OpenCV",
    "VS Code"
  ]
};

export const experiences = [
  {
    role: "Artificial Intelligence Intern",
    company: "EVOASTRA VENTURES PVT LTD",
    location: "Bengaluru, India",
    period: "Feb 2026 – Mar 2026",
    badge: "Recent",
    bullets: [
      "Built an LLM + biomedical NLP pipeline for clinical trial eligibility extraction and patient-trial matching using ClinicalBERT and FAISS.",
      "Benchmarked semantic retrieval against rule-based and TF-IDF baselines using F1-score and Precision@5."
    ],
    tech: ["ClinicalBERT", "FAISS", "LLMs", "Biomedical NLP", "TF-IDF", "Evaluation Metrics"]
  },
  {
    role: "Data Science Trainee Intern",
    company: "Coincent",
    location: "Bengaluru",
    period: "Nov 2024 – Dec 2024",
    badge: "Completed",
    bullets: [
      "Performed Exploratory Data Analysis (EDA), engineered features, and trained classification models on structured datasets using Scikit-learn.",
      "Evaluated model performance using cross-validation, Accuracy, Precision, Recall, and F1-score."
    ],
    tech: ["Python", "Scikit-learn", "Pandas", "EDA", "Classification", "Model Validation"]
  }
];

export const publications = [
  {
    title: "Neurodapt: Cognitively-Aligned Reinforcement Learning for Memory-Optimized Note Rewriting",
    venue: "IEEE ICCSAI Conference, Galgotias University, Noida",
    status: "Accepted",
    abstract:
      "Proposed a reinforcement learning framework using Group Relative Policy Optimization (GRPO) to rewrite educational notes for improved long-term human memory retention while preserving factual fidelity.",
    highlights: [
      "Designed a modular pipeline combining transformer-based clause segmentation, a clause-level Memory Ranking Module trained on Hippocorpus narrative recall data, and a multi-objective reward model.",
      "Optimized reward objectives: Semantic Centrality, Memory Verification, and BERTScore Recall."
    ],
    tags: ["Reinforcement Learning", "GRPO", "Transformers", "NLP", "Cognitive AI", "IEEE ICCSAI"]
  }
];

export const projects = [
  {
    id: "semantic-memorability-ranker",
    title: "Semantic Memorability Ranker",
    tagline: "Clause-level narrative memorability prediction with ModernBERT",
    tech: ["Python", "PyTorch", "ModernBERT", "Clause Attention", "NLP Pipeline"],
    metrics: [
      { label: "Pairwise Acc", val: "0.5549" },
      { label: "Spearman Corr", val: "0.2729" },
      { label: "NDCG@5", val: "0.7086" }
    ],
    description:
      "Developed an end-to-end NLP pipeline for predicting clause-level memorability from human narrative retellings, training with regression and pairwise ranking objectives.",
    bullets: [
      "Designed ModernBERT architecture with Clause Attention, Memory Projection, and a learnable Semantic Memory module.",
      "Evaluated on a held-out benchmark across 9 stories and 413 clauses.",
      "Constructed custom memorability targets derived directly from human retention experiments."
    ],
    github: "https://github.com",
    featured: true
  },
  {
    id: "traceai",
    title: "TraceAI – AI Decision Auditing System",
    tagline: "Enterprise backend for LLM agent decision traceability & audit logging",
    tech: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "Pydantic"],
    metrics: [
      { label: "Architecture", val: "REST API" },
      { label: "Database", val: "PostgreSQL" },
      { label: "Audit Trails", val: "Immutable" }
    ],
    description:
      "Backend system built to record AI agent decisions and maintain structured audit trails for full decision traceability and compliance.",
    bullets: [
      "Designed resilient PostgreSQL data schema using SQLAlchemy ORM.",
      "Automated reproducible database migrations using Alembic.",
      "Structured for microsecond-level telemetry and high concurrency ingestion."
    ],
    github: "https://github.com",
    featured: true
  },
  {
    id: "fingerprint-recognition",
    title: "Ridge-Based Fingerprint Enhancement System",
    tagline: "Real-time biometric pipeline with adaptive Gabor filtering & serial I/O",
    tech: ["C++", "OpenCV", "Adaptive Gabor Filtering", "Serial Communication", "Hardware"],
    metrics: [
      { label: "Team Size", val: "4 members (Lead)" },
      { label: "Processing", val: "Real-time" },
      { label: "Stack", val: "C++ & OpenCV" }
    ],
    description:
      "Real-time biometric fingerprint recognition pipeline integrating hardware sensor input via serial communication with computer vision filtering.",
    bullets: [
      "Led a 4-member engineering team to design the hardware-software integration.",
      "Implemented adaptive Gabor filtering, ridge enhancement, and minutiae extraction with OpenCV.",
      "Developed robust similarity scoring algorithms for accurate biometric authentication."
    ],
    github: "https://github.com",
    featured: false
  }
];

export const education = [
  {
    degree: "B.E. in Computer Science and Engineering",
    institution: "AMC Engineering College, Bengaluru (VTU)",
    period: "2023 – Present",
    score: "CGPA: 8.71 (up to 6th sem)",
    scoreType: "CGPA",
    badge: "Current Degree"
  },
  {
    degree: "Pre-University (10+2)",
    institution: "Alpine PU Composite College, Bengaluru",
    period: "2021 – 2023",
    score: "77%",
    scoreType: "Percentage"
  },
  {
    degree: "High School (10th, CBSE)",
    institution: "Chrysalis High School, Bengaluru",
    period: "2020 – 2021",
    score: "94.4%",
    scoreType: "Percentage"
  }
];

export const certifications = [
  { name: "NPTEL Data Science for Engineers (72%)", issuer: "NPTEL / IIT", link: "#" },
  { name: "NPTEL Intro to IoT (96%)", issuer: "NPTEL / IIT", link: "#" },
  { name: "Microsoft Azure Data Fundamentals", issuer: "Microsoft", link: "#" },
  { name: "Google Student Ambassador", issuer: "Google", link: "#" },
  { name: "AWS Cloud Web Application Builder", issuer: "Amazon Web Services", link: "#" },
  { name: "AWS IPv6 Connectivity Course", issuer: "Amazon Web Services", link: "#" },
  { name: "IBM Agile Explorer", issuer: "IBM", link: "#" }
];
