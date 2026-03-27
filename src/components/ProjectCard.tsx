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
  const statusLabel = status === 'live' ? '● live' : status === 'api' ? '◈ api' : '○ wip'
  const statusClass = `status status-${status}`

  return (
    <div className="project-card" style={{ '--accent': accent } as React.CSSProperties}>
      <div className="card-bar">
        <span className="card-dot" />
        <span className="card-dot" />
        <span className="card-dot" />
        <span className="card-name mono">{name}/</span>
        <span className={statusClass}>{statusLabel}</span>
      </div>
      <div className="card-body">
        <p className="card-tagline">{tagline}</p>
        <p className="card-desc">{description}</p>
        <div className="card-footer">
          <div className="card-tags">
            {tags.map(t => (
              <span key={t} className="tag mono">{t}</span>
            ))}
          </div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link mono"
          >
            {url.replace('https://', '')} →
          </a>
        </div>
      </div>
    </div>
  )
}
