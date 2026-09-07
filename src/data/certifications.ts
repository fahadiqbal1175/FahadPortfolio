import certAzure from '../assets/images/cert-azure.jpg'
import certStanford from '../assets/images/cert-stanford.jpg'
import certBcgx from '../assets/images/cert-bcgx.jpg'
import certKivro from '../assets/images/cert-kivro.jpg'

export interface Certification {
  title: string
  issuer: string
  code?: string
  image: string
}

export const certifications: Certification[] = [
  {
    title: 'Microsoft Azure AI Fundamentals',
    issuer: 'Microsoft',
    code: 'AI-900',
    image: certAzure,
  },
  {
    title: 'Supervised Machine Learning: Regression & Classification',
    issuer: 'DeepLearning.AI & Stanford Online',
    image: certStanford,
  },
  {
    title: 'Data Science Job Simulation',
    issuer: 'BCG X / Forage',
    image: certBcgx,
  },
  {
    title: 'Full Stack Development Internship',
    issuer: 'Kivro Solutions',
    code: 'Excellent Performer',
    image: certKivro,
  },
]
