export interface ProjectImage {
  src: string
  alt: string
  mediaType?: 'image' | 'video' | 'gif'
  youtubeUrl?: string
}

export interface Project {
  slug: string
  number: string
  category: string
  name: string
  description: string
  link?: string
  linkLabel?: string
  col1Images: ProjectImage[]
  col2Image: ProjectImage
}

export const projects: Project[] = [
  {
    slug: 'medilens',
    number: '01',
    category: 'Team Lead & AI Engineer',
    name: 'MediLens',
    description: 'A medication assistant that combines real-time pill detection with prescription OCR to make everyday medication management more reliable.',
    link: 'https://github.com/Wcoder547/MediLens.git',
    linkLabel: 'GitHub',
    col1Images: [
      {
        src: '/assets/videos/medilens-demo-1.mp4',
        alt: 'MediLens - Real-time pill detection with YOLOv11',
        mediaType: 'video',
      },
      {
        src: '/assets/videos/medilens-demo-2.mp4',
        alt: 'MediLens - Prescription OCR pipeline',
        mediaType: 'video',
      },
    ],
    col2Image: {
      src: '',
      alt: 'MediLens - Medication assistant app interface',
    },
  },
  {
    slug: 'movielens-recommender',
    number: '02',
    category: 'Solo Project',
    name: 'MovieLens Recommender',
    description: 'A recommendation engine that turns movie preferences into personalized suggestions through an accessible FastAPI-powered interface.',
    link: 'https://movielens-recommender-a4je.onrender.com/',
    linkLabel: 'Live Demo',
    col1Images: [
      {
        src: '',
        alt: 'MovieLens - Recommendation engine UI',
      },
      {
        src: '',
        alt: 'MovieLens - ALS model evaluation metrics',
      },
    ],
    col2Image: {
      src: '/assets/videos/movielens_recommender.gif',
      alt: 'MovieLens - FastAPI + Docker deployment',
      mediaType: 'gif',
    },
  },
  {
    slug: 'wellpulse',
    number: '03',
    category: 'In Progress',
    name: 'WellPulse',
    description: 'An in-progress health AI project focused on making useful wellness insights easier to understand and act on.',
    link: 'https://github.com/fahadiqbal1175/wellpulse_ml_project',
    linkLabel: 'GitHub',
    col1Images: [
      {
        src: '',
        alt: 'WellPulse - Health AI project preview',
      },
      {
        src: '',
        alt: 'WellPulse - Model architecture preview',
      },
    ],
    col2Image: {
      src: '',
      alt: 'WellPulse - Application preview',
    },
  },
]
