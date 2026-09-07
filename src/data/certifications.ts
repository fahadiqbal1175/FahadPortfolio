export interface Certification {
  title: string
  issuer: string
  code?: string
  image?: string
}

export const certifications: Certification[] = [
  {
    title: 'Microsoft Azure AI Fundamentals',
    issuer: 'Microsoft',
    code: 'AI-900',
    image: '',
  },
  {
    title: 'Supervised Machine Learning: Regression & Classification',
    issuer: 'DeepLearning.AI & Stanford Online',
    image: '',
  },
]
