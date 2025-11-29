import { type SchemaTypeDefinition } from 'sanity'
import profile from './profile'
import skill from './skill'
import experience from './experience'
import education from './education'
import service from './service'
import contact from './contact'
import siteSettings from './siteSettings'
import navigation from './navigation'
import project from './project'
import testimonial from './testimonial'
import certification from './certification'
import achievement from './achievement'
import blog from './blog'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    profile,
    project,
    skill,
    experience,
    education,
    testimonial,
    certification,
    achievement,
    blog,
    service,
    contact,
    siteSettings,
    navigation,
  ],
}
