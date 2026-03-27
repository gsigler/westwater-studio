import './About.css'

export default function About() {
  return (
    <section className="about">
      <div className="section-header">
        <span className="section-label">About</span>
      </div>
      <div className="about-content">
        <p className="about-bio">
          I'm Grady Sigler — a software developer and indie maker based in Utah, USA.
          Married, father of four. I build useful software in the margins: tools that
          solve real problems for real people, without the startup theater.
        </p>
        <div className="about-meta">
          <div className="about-row">
            <span className="about-key">GitHub</span>
            <a
              href="https://github.com/gsigler"
              target="_blank"
              rel="noopener noreferrer"
              className="about-link"
            >
              github.com/gsigler
            </a>
          </div>
          <div className="about-row">
            <span className="about-key">Location</span>
            <span className="about-val">Utah, USA</span>
          </div>
        </div>
      </div>
    </section>
  )
}
