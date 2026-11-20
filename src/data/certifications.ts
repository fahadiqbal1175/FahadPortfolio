import certAzure from '../assets/images/cert-azure.jpg'
import certStanford from '../assets/images/cert-stanford.jpg'
import certBcgx from '../assets/images/cert-bcgx.jpg'
import certAdvancedAlgorithms from '../assets/images/cert-advanced-learning-algorithms.jpg'
import certUnsupervisedLearning from '../assets/images/cert-unsupervised-learning.jpg'
import certMLSpecialization from '../assets/images/cert-ml-specialization.jpg'

export interface Certification {
  title: string
  issuer: string
  code?: string
  image: string
}

export const certifications: Certification[] = [
  {
    title: 'Machine Learning Specialization',
    issuer: 'DeepLearning.AI & Stanford Online',
    code: '3-Course Specialization',
    image: certMLSpecialization,
  },
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
    title: 'Advanced Learning Algorithms',
    issuer: 'DeepLearning.AI & Stanford Online',
    image: certAdvancedAlgorithms,
  },
  {
    title: 'Unsupervised Learning, Recommenders, Reinforcement Learning',
    issuer: 'DeepLearning.AI & Stanford Online',
    image: certUnsupervisedLearning,
  },
  {
    title: 'Data Science Job Simulation',
    issuer: 'BCG X / Forage',
    image: certBcgx,
  },
]
