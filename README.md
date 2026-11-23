# Vasisht Suresh - Machine Learning & AI Engineer Portfolio

A sleek, responsive, high-performance portfolio website built with **React**, **Vite**, and **Tailwind CSS**, designed specifically for presenting research, machine learning projects, and technical skills to tech recruiters and engineering managers.

---

## 🚀 Features

- **Recruiter-Centric Layout**: Instant overview of core achievements, IEEE accepted publication, GPA (8.71), and tech stack.
- **Projects Showcase**: Interactive cards featuring benchmark metrics (Pairwise Accuracy, NDCG@5, Spearman Correlation), architecture breakdown, and GitHub links.
- **Peer-Reviewed Publications**: Detailed highlight card for **Neurodapt** (GRPO reinforcement learning note-rewriter accepted at IEEE ICCSAI).
- **Interactive Experience & Certifications**: Chronological history at Evoastra Ventures & Coincent, plus verified certifications (NPTEL, Azure, AWS, IBM, Google).
- **One-Click Email Copy & Direct Contact**: Instant clipboard feedback for seamless outreach.
- **Free Hosting Ready**: Preconfigured with GitHub Actions for automated, 100% free deployment to **GitHub Pages**.

---

## 🛠️ Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```
The optimized static build will be generated in `./dist`.

---

## 🌐 Deploying to GitHub Pages (100% Free)

### Step 1: Create a GitHub Repository
1. Go to [github.com/new](https://github.com/new)
2. Name your repository (e.g., `portfolio` or `<your-username>.github.io`)
3. Keep it **Public** and do not add a README (since you already have one)

### Step 2: Push your code
In this directory, run:
```bash
git init
git add .
git commit -m "feat: initial portfolio website"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

### Step 3: Enable GitHub Pages with GitHub Actions
1. On your GitHub repository page, click **Settings** (top tab).
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment > Source**, change the dropdown from **Deploy from a branch** to **GitHub Actions**.
4. That's it! The included `.github/workflows/deploy.yml` workflow will automatically trigger, build the website, and publish it live for free at:
   ```
   https://<your-username>.github.io/<your-repo-name>/
   ```
   *(Or `https://<your-username>.github.io/` if your repository is named `<your-username>.github.io`)*.

---

## ✏️ Customization

All your profile details, links, metrics, and content are centralized in one clean configuration file:
- Open [`src/data/portfolioData.js`](./src/data/portfolioData.js) to edit your LinkedIn URL, GitHub profile link, project links, or add new papers and projects anytime.
