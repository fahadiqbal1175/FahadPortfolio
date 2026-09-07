export interface ProjectImage {
  src: string
  alt: string
}

export interface Project {
  number: string
  category: string
  name: string
  link?: string
  linkLabel?: string
  col1Images: ProjectImage[]
  col2Image: ProjectImage
}

export const projects: Project[] = [
  {
    number: '01',
    category: 'Team Lead & AI Engineer',
    name: 'MediLens',
    link: 'https://github.com/Wcoder547/MediLens.git',
    linkLabel: 'GitHub',
    col1Images: [
      {
        src: '',
        alt: 'MediLens — Real-time pill detection with YOLOv11',
      },
      {
        src: '',
        alt: 'MediLens — Prescription OCR pipeline',
      },
    ],
    col2Image: {
      src: '',
      alt: 'MediLens — Medication assistant app interface',
    },
  },
  {
    number: '02',
    category: 'Solo Project',
    name: 'MovieLens Recommender',
    link: 'https://movielens-recommender-a4je.onrender.com/',
    linkLabel: 'Live Demo',
    col1Images: [
      {
        src: '',
        alt: 'MovieLens — Recommendation engine UI',
      },
      {
        src: '',
        alt: 'MovieLens — ALS model evaluation metrics',
      },
    ],
    col2Image: {
      src: '',
      alt: 'MovieLens — FastAPI + Docker deployment',
    },
  },
  {
    number: '03',
    category: 'In Progress',
    name: 'WellPulse',
    link: undefined,
    linkLabel: 'Coming Soon',
    col1Images: [
      {
        src: '',
        alt: 'WellPulse — Health AI project preview',
      },
      {
        src: '',
        alt: 'WellPulse — Model architecture preview',
      },
    ],
    col2Image: {
      src: '',
      alt: 'WellPulse — Application preview',
    },
  },
]
