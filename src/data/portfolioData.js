export const personalInfo = {
  name: "Vasisht Suresh",
  role: "Machine Learning & Systems",
  location: "Bengaluru, India",
  phone: "+91-8762548767",
  email: "vasisht765@gmail.com",
  linkedin: "https://www.linkedin.com/in/vasisht-suresh/",
  github: "https://github.com/VasishtGit",
  bio: "CS student working across machine learning pipelines, transformer architectures, and backend infrastructure. Currently experimenting with clause-level narrative memorability and reinforcement learning for educational cognition.",
  status: "Available for ML / Backend roles & internships"
};

export const quickStats = [
  { label: "B.E. Computer Science", detail: "VTU • CGPA 8.71" },
  { label: "Research", detail: "Accepted at IEEE ICCSAI" },
  { label: "Core Stack", detail: "PyTorch • Transformers • FastAPI" },
  { label: "Location", detail: "Bengaluru, India" }
];

export const projects = [
  {
    title: "Semantic Memorability Ranker",
    role: "ML & NLP Pipeline",
    year: "2025 – 2026",
    summary:
      "A clause-level memorability prediction model using ModernBERT with custom Clause Attention, Memory Projection, and a learnable Semantic Memory module.",
    highlights: [
      "Built an end-to-end NLP pipeline translating human retellings into discrete memorability targets.",
      "Trained with dual regression and pairwise ranking objectives.",
      "Achieved 0.5549 pairwise accuracy, 0.2729 Spearman correlation, and 0.7086 NDCG@5 on held-out test clauses."
    ],
    tech: ["PyTorch", "ModernBERT", "Clause Attention", "Hugging Face", "Ranking Loss"],
    repo: "https://github.com/VasishtGit",
    stats: [
      { key: "Pairwise Acc", val: "0.5549" },
      { key: "Spearman", val: "0.2729" },
      { key: "NDCG@5", val: "0.7086" }
    ]
  },
  {
    title: "TraceAI — Decision Auditing System",
    role: "Backend & Systems",
    year: "2025",
    summary:
      "A specialized backend system designed to trace, log, and audit autonomous AI agent decisions for accountability and reproducible debugging.",
    highlights: [
      "Designed resilient relational schemas using SQLAlchemy ORM with PostgreSQL.",
      "Implemented versioned schema migrations via Alembic for reliable zero-downtime evolution.",
      "Built high-throughput REST APIs using FastAPI, Pydantic, and async HTTPX."
    ],
    tech: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "Pydantic", "Docker"],
    repo: "https://github.com/VasishtGit",
    stats: [
      { key: "Design", val: "Async REST" },
      { key: "Storage", val: "PostgreSQL" },
      { key: "Audit", val: "Immutable" }
    ]
  },
  {
    title: "Ridge-Based Fingerprint Recognition",
    role: "Computer Vision & Embedded (Team Lead)",
    year: "2024",
    summary:
      "Real-time biometric recognition pipeline integrating optical hardware sensor streaming via serial interface with adaptive OpenCV image enhancement.",
    highlights: [
      "Led a 4-person engineering team handling hardware interfacing and algorithmic matching.",
      "Implemented adaptive Gabor filtering, ridge enhancement, and minutiae extraction routines in C++.",
      "Formulated similarity scoring algorithms resilient to partial and rotated impressions."
    ],
    tech: ["C++", "OpenCV", "Gabor Filtering", "Serial I/O", "Signal Processing"],
    repo: "https://github.com/VasishtGit",
    stats: [
      { key: "Team", val: "4 Engineers" },
      { key: "Latency", val: "Real-time" },
      { key: "Core", val: "C++ & OpenCV" }
    ]
  }
];

export const publication = {
  title: "Neurodapt: Cognitively-Aligned Reinforcement Learning for Memory-Optimized Note Rewriting",
  status: "Accepted",
  venue: "IEEE ICCSAI Conference, Galgotias University, Noida",
  year: "2026",
  abstract:
    "We introduce a reinforcement learning framework using Group Relative Policy Optimization (GRPO) to iteratively adapt educational material for long-term human retention without sacrificing factual precision.",
  breakdown: [
    {
      title: "Clause Segmentation",
      desc: "Transformer-based decomposition to parse complex prose into discrete cognitive units."
    },
    {
      title: "Memory Ranking Module",
      desc: "Clause-level ranker pre-trained on empirical Hippocorpus recall retention distributions."
    },
    {
      title: "Multi-Objective Reward",
      desc: "Simultaneous optimization of Semantic Centrality, Fact Verification, and BERTScore Recall."
    }
  ],
  keywords: ["Reinforcement Learning", "GRPO", "Memory Retention", "Transformers", "IEEE"]
};

export const experiences = [
  {
    role: "Artificial Intelligence Intern",
    company: "Evoastra Ventures Pvt Ltd",
    location: "Bengaluru",
    period: "Feb 2026 – Mar 2026",
    bullets: [
      "Architected an LLM and biomedical NLP pipeline to parse clinical trial inclusion/exclusion criteria for patient matching using ClinicalBERT and FAISS.",
      "Benchmarked dense semantic retrieval against rule-based and TF-IDF baselines using F1-score and Precision@5."
    ],
    tags: ["ClinicalBERT", "FAISS", "Vector Search", "Evaluation"]
  },
  {
    role: "Data Science Trainee Intern",
    company: "Coincent",
    location: "Bengaluru",
    period: "Nov 2024 – Dec 2024",
    bullets: [
      "Conducted exploratory data analysis, feature engineering, and trained classification baselines on structured datasets.",
      "Evaluated model generalization across k-fold cross-validation, precision, recall, and ROC-AUC curves."
    ],
    tags: ["Scikit-learn", "Pandas", "Feature Engineering", "Python"]
  }
];

export const technicalSkills = [
  {
    domain: "Deep Learning & ML",
    items: ["PyTorch", "Hugging Face Transformers", "ModernBERT", "BERT", "Scikit-learn", "GRPO", "Neural Networks"]
  },
  {
    domain: "NLP & Retrieval",
    items: ["LLM Workflows", "LangChain", "LangSmith", "Semantic Search", "FAISS Vector DB", "Embeddings", "Tokenization"]
  },
  {
    domain: "Backend & Systems",
    items: ["FastAPI", "Django REST Framework", "PostgreSQL", "SQLAlchemy", "Alembic", "Pydantic", "HTTPX", "Supabase"]
  },
  {
    domain: "Languages & Tooling",
    items: ["Python", "C++", "C", "Java", "JavaScript", "OpenCV", "Git", "Pytest", "ONNX", "Linux"]
  }
];

export const education = [
  {
    institution: "AMC Engineering College (VTU)",
    degree: "B.E. in Computer Science and Engineering",
    period: "2023 – Present",
    score: "CGPA 8.71 (up to 6th sem)"
  },
  {
    institution: "Alpine PU Composite College",
    degree: "Pre-University (10+2)",
    period: "2021 – 2023",
    score: "77%"
  },
  {
    institution: "Chrysalis High School",
    degree: "10th Grade (CBSE)",
    period: "2020 – 2021",
    score: "94.4%"
  }
];

export const certifications = [
  { name: "NPTEL Data Science for Engineers (72%)", org: "NPTEL / IIT" },
  { name: "NPTEL Introduction to IoT (96%)", org: "NPTEL / IIT" },
  { name: "Microsoft Azure Data Fundamentals", org: "Microsoft" },
  { name: "Google Student Ambassador", org: "Google" },
  { name: "AWS Cloud Web Application Builder", org: "AWS" },
  { name: "AWS IPv6 Connectivity Course", org: "AWS" },
  { name: "IBM Agile Explorer", org: "IBM" }
];
