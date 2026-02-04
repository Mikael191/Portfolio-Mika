export type View = 'HOME' | 'PROJECTS' | 'ABOUT' | 'CONTACT';

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  status: 'ONLINE' | 'IN_DEV' | 'ARCHIVED';
  version: string;
  image: string;
}

export interface Skill {
  name: string;
  level: number; // 1-100
  color: string;
}

export interface Achievement {
  id: string;
  title: string;
  date: string;
  description: string;
  icon: string;
}