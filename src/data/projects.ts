import mediLensArtwork from '../assets/images/projects/medilens.png'
import movieLensArtwork from '../assets/images/projects/movielens.png'
import wellPulseArtwork from '../assets/images/projects/wellpulse.png'

export interface ProjectMedia {
  src?: string
  alt: string
  mediaType?: 'image' | 'video' | 'gif'
  youtubeUrl?: string
}

export interface ProjectLink {
  href?: string
  label: string
  disabled?: boolean
}

export interface ProjectSections {
  overview: string
  problem: string
  approach: string[]
  technology: string[]
  results: string[]
}

export type ProjectVisualVariant = 'medilens' | 'movielens' | 'wellpulse'

export interface Project {
  slug: string
  number: string
  category: string
  name: string
  description: string
  artwork: string
  artworkAlt: string
  visualVariant: ProjectVisualVariant
  links: ProjectLink[]
  media: ProjectMedia
  sections: ProjectSections
}

export const projects: Project[] = [
  {
    slug: 'medilens',
    number: '01',
    category: 'Team Lead & AI Engineer',
    name: 'MediLens',
    description: 'An AI-powered medication assistant that turns pill detection and prescription scanning into a reliable daily routine.',
    artwork: mediLensArtwork,
    artworkAlt: 'MediLens illustration with pills, phone, and prescription',
    visualVariant: 'medilens',
    links: [
      { href: 'https://github.com/Wcoder547/MediLens.git', label: 'GitHub' },
      { href: 'https://youtu.be/_Fszlqpgr1g', label: 'Demo Video' },
    ],
    media: {
      alt: 'MediLens demo video',
      youtubeUrl: 'https://youtu.be/_Fszlqpgr1g',
    },
    sections: {
      overview: 'MediLens is an AI-powered Android application built to help patients — particularly those on multi-drug or long-term regimens — stay consistent with their medication schedules. It was developed as a Final Year Project, with Fahad serving as Team Lead and AI Engineer alongside two teammates, under academic supervision.',
      problem: 'Medication non-adherence is a widespread issue, especially for elderly patients and those managing chronic conditions. Missed doses, difficulty reading handwritten or complex prescriptions, and the absence of a reliable reminder system all contribute to poor health outcomes. Most existing medication apps rely on manual data entry, which patients often skip or use inconsistently.',
      approach: [
        'Real-time pill detection using computer vision, so users can identify medication directly through their camera instead of manual entry.',
        'Prescription scanning, extracting structured medication data (drug name, dosage, frequency) directly from a photographed prescription.',
        'Smart reminders with caregiver alerts that persist reliably even after a device reboot, closing the gap where most reminder apps silently fail.',
      ],
      technology: [
        'Computer Vision: YOLOv11 for real-time pill detection (99.0% mAP)',
        'OCR + NLP: Donut OCR for prescription text extraction, paired with Gemini for Named Entity Recognition to structure the extracted data',
        'Mobile: Native Android app built in Kotlin, with a custom Material Design UI (XML/MaterialCardView)',
        'Reliability: Reboot-persistent reminder/notification system with caregiver alerting',
      ],
      results: [
        'Achieved 99.0% mAP on real-time pill detection',
        'Delivered a fully working end-to-end pipeline: scan → detect → extract → remind',
        'Completed as a full academic Final Year Project with formal documentation and faculty evaluation',
        'Published with GitHub repository and demo video for portfolio presentation.',
      ],
    },
  },
  {
    slug: 'movielens-recommender',
    number: '02',
    category: 'Solo Project',
    name: 'MovieLens Recommender',
    description: 'A production-style recommendation system shipped as a tested FastAPI service with a live demo.',
    artwork: movieLensArtwork,
    artworkAlt: 'MovieLens illustration with laptop and media recommendations',
    visualVariant: 'movielens',
    links: [
      { href: 'https://github.com/fahadiqbal1175/movielens-recommender_ml_project', label: 'GitHub' },
      { href: 'https://movielens-recommender-a4je.onrender.com/', label: 'Live Demo' },
    ],
    media: {
      src: '/assets/videos/movielens_recommender.gif',
      alt: 'MovieLens Recommender FastAPI and Docker deployment demo',
      mediaType: 'gif',
    },
    sections: {
      overview: 'A production-style movie recommendation system built on the MovieLens 25M dataset — designed not as a notebook exercise, but as a fully deployed, end-to-end ML product with a live API and demo interface.',
      problem: 'Most recommendation system projects stop at offline accuracy metrics in a notebook and never become something a user can actually interact with. The real engineering challenges — cold-start users, memory-constrained deployment, serving latency, and reproducible packaging — are usually skipped. This project set out to solve all of them, not just the modeling part.',
      approach: [
        'Data loading, validation, and exploratory analysis with a proper temporal train/test split (avoiding data leakage)',
        'Popularity-based baseline, followed by ALS collaborative filtering for candidate generation',
        'A ranking model layered on top, evaluated using Precision@K, Recall@K, NDCG@K, and Hit Rate@K — deliberately going beyond RMSE-only evaluation',
        'Explicit cold-start handling for new/unseen users',
        'Exported trained artifacts and wrapped them in a FastAPI service',
        'Containerized with Docker and deployed live to Render',
        'Built a themed demo frontend calling the live recommendation endpoint',
      ],
      technology: [
        'ML: Python, Pandas, NumPy, Scikit-learn, ALS-based collaborative filtering',
        'Serving: FastAPI (REST API with /health and /recommend/{user_id} endpoints)',
        'Infra: Docker, deployed on Render',
        'Testing: pytest test suite',
        'Frontend: Lightweight HTML/CSS/JS demo UI served via the same FastAPI app',
      ],
      results: [
        'Diagnosed and fixed a production out-of-memory crash by re-engineering the seen-movies data structure (from Python sets to typed NumPy arrays), cutting memory usage from ~1.7GB down to ~450MB',
        'Successfully deployed and verified live at a public URL, with both personalized and cold-start recommendations confirmed working',
        'Full local and Dockerized test suite passing',
        'Delivered with a polished README covering architecture, API usage, and deployment/memory-optimization notes',
      ],
    },
  },
  {
    slug: 'wellpulse',
    number: '03',
    category: 'In Progress',
    name: 'WellPulse',
    description: 'An ML-first wellbeing pipeline with explainable predictions and production-minded MLOps.',
    artwork: wellPulseArtwork,
    artworkAlt: 'WellPulse illustration with laptop and wellbeing gauge',
    visualVariant: 'wellpulse',
    links: [
      { href: 'https://github.com/fahadiqbal1175/wellpulse_ml_project', label: 'GitHub' },
      { label: 'Live Demo — Coming Soon', disabled: true },
    ],
    media: {
      alt: 'WellPulse project artwork',
      src: wellPulseArtwork,
      mediaType: 'image',
    },
    sections: {
      overview: 'WellPulse is an ML-first project that predicts a student\'s wellbeing/mental-health score from their social media usage and behavioral survey data — built with the rigor of a real MLOps pipeline rather than a single trained model.',
      problem: 'There\'s a well-documented link between heavy social media use and declining mental wellbeing among students, but no simple, interpretable way to estimate an individual\'s risk level from their own usage patterns. Most solutions in this space are either purely academic (a single accuracy number) or opaque black-box models with no explainability.',
      approach: [
        'Data pipeline and cleaning, followed by EDA and feature engineering on the Students\' Social Media Addiction dataset',
        'Baseline model comparison (multiple regressors)',
        'Advanced modeling with LightGBM/XGBoost and randomized hyperparameter search — when tuning didn\'t beat the simpler baseline, that was documented as an honest finding rather than reworked to manufacture a win',
        'Final model selection based on rigorous test-set comparison, including risk-tier precision/recall and subgroup error analysis',
        'SHAP-based explainability so predictions aren\'t a black box',
        'Full MLflow experiment tracking and model registry, with automatic Staging/Production promotion logic',
        'A FastAPI inference service exposing the production model for real-time predictions',
      ],
      technology: [
        'ML: Python, Scikit-learn (Decision Tree, Random Forest), LightGBM, XGBoost',
        'Explainability: SHAP',
        'MLOps: MLflow (experiment tracking + model registry with alias-based promotion)',
        'Serving: FastAPI (/health, /api/v1/predict)',
        'Testing: pytest',
      ],
      results: [
        'Final selected model: tuned Random Forest, test MAE 0.2356 — outperforming the untuned Decision Tree on RMSE and R² while nearly matching it on MAE',
        '139 MLflow-tracked experiment runs across baseline and advanced modeling phases',
        'Automatic model promotion pipeline based on beating the current production model',
        'Inference API fully tested (49/49 tests passing) and verified against live HTTP requests',
      ],
    },
  },
]
