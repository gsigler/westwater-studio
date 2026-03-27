import ProjectCard from './ProjectCard'
import './Projects.css'

const PROJECTS: Array<{
  name: string
  url: string
  status: 'live' | 'api' | 'wip'
  tagline: string
  description: string
  tags: string[]
  accent: string
}> = [
  {
    name: 'weeksee',
    url: 'https://weeksee.co',
    status: 'live',
    tagline: 'Your family calendar, always on display.',
    description:
      'Turn any TV, tablet, or Raspberry Pi into a beautiful always-on family calendar. Connect Google Calendar, Apple Calendar, or any ICS feed. Pick a theme. Mount it on the wall.',
    tags: ['React', 'NestJS', 'PostgreSQL', 'SSE'],
    accent: '#4ade80',
  },
  {
    name: 'retroation',
    url: 'https://retroation.com',
    status: 'live',
    tagline: 'Retrospectives that don\'t suck.',
    description:
      'Real-time retro platform for agile teams. Run structured retrospectives with built-in templates, live voting, card grouping, and action item tracking — all synced across the room.',
    tags: ['React', 'NestJS', 'Socket.io', 'PostgreSQL'],
    accent: '#22d3ee',
  },
  {
    name: 'stitch-n-row',
    url: 'https://stitchnrow.com',
    status: 'live',
    tagline: 'Your patterns, organized.',
    description:
      'Upload a knitting or crochet pattern — PDF or photo — and track your progress row by row. AI extracts and structures the pattern automatically. Your place is always saved.',
    tags: ['React', 'NestJS', 'AI/OCR', 'PostgreSQL'],
    accent: '#f472b6',
  },
  {
    name: 'tendy',
    url: 'https://tendy.up.railway.app',
    status: 'api',
    tagline: 'Garden tracking, API-first.',
    description:
      'A full REST + MCP API for tracking gardens, seasons, plantings, harvests, and tasks. Built for serious growers who want to connect their data to AI tools and custom workflows.',
    tags: ['Hono', 'Drizzle', 'PostgreSQL', 'MCP'],
    accent: '#a3e635',
  },
]

export default function Projects() {
  return (
    <section className="projects">
      <div className="section-header">
        <span className="section-label"># projects</span>
      </div>
      <div className="projects-grid">
        {PROJECTS.map(p => (
          <ProjectCard key={p.name} {...p} />
        ))}
      </div>
    </section>
  )
}
