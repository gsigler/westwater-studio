import './ProjectCard.css'

interface ProjectCardProps {
  name: string
  url: string
  status: 'live' | 'api' | 'wip'
  tagline: string
  description: string
  tags: string[]
  accent: string
}

export default function ProjectCard({
  name,
  url,
  status,
  tagline,
  description,
  tags,
  accent,
}: ProjectCardProps) {
  const statusColors: Record<string, string> = {
    live: '#4ade80',
    api: '#22d3ee',
    wip: '#64748B',
  }
  const statusDotColor = statusColors[status] ?? '#64748B'

  return (
    <div className="project-card" style={{ '--accent': accent } as React.CSSProperties}>
      <div className="card-header">
        <div className="card-title-row">
          <span className="card-name">{name}</span>
          <span className="card-status-dot" style={{ background: statusDotColor }} title={status} />
        </div>
        <p className="card-tagline">{tagline}</p>
      </div>
      <div className="card-body">
        <p className="card-desc">{description}</p>
        <div className="card-footer">
          <div className="card-tags">
            {tags.map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            {url.replace('https://', '')} →
          </a>
        </div>
      </div>
    </div>
  )
}
