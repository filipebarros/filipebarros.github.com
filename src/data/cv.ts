import cvData from './cv.json'

export interface Profile {
    network: string
    username: string
    url: string
}

export interface Basics {
    name: string
    label: string
    summary: string
    location: string
    email: string
    phone: string
    website: string
    profiles: Profile[]
}

export interface SkillGroup {
    category: string
    items: string[]
}

export interface Work {
    company: string
    role: string
    start: string
    end: string
    summary: string
    highlights: string[]
}

export interface Education {
    institution: string
    qualification: string
    detail: string
    start: string
    end: string
}

export interface Project {
    name: string
    description: string
    url?: string
    tags?: string[]
}

export interface CV {
    basics: Basics
    skills: SkillGroup[]
    work: Work[]
    education: Education[]
    projects: Project[]
}

export const cv = cvData as CV

export default cv
