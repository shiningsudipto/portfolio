export interface TProject {
  _id: string;
  img: string;
  title: string;
  slug: string;
  description: string;
  technology: string;
  liveUrl: string;
  clientRepo: string;
  serverRepo: string;
  tools: string;
  serial: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface TExperience {
  _id: string;
  position: string;
  company: string;
  companyUrl: string;
  date: string;
  current: boolean;
  description: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  serial: string;
}

export interface TTechnology {
  _id: string;
  category: string;
  items: string[];
  __v: number;
}
