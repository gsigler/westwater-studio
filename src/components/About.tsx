import './About.css'

export default function About() {
  return (
    <section className="about">
      <div className="section-header">
        <span className="section-label"># about</span>
      </div>
      <div className="about-terminal">
        <div className="about-line">
          <span className="about-key">name</span>
          <span className="about-sep"> = </span>
          <span className="about-str">"Grady Sigler"</span>
        </div>
        <div className="about-line">
          <span className="about-key">location</span>
          <span className="about-sep"> = </span>
          <span className="about-str">"Utah, USA"</span>
        </div>
        <div className="about-line">
          <span className="about-key">family</span>
          <span className="about-sep"> = </span>
          <span className="about-str">"Married, father of 4"</span>
        </div>
        <div className="about-line">
          <span className="about-key">role</span>
          <span className="about-sep"> = </span>
          <span className="about-str">"Software developer &amp; indie maker"</span>
        </div>
        <div className="about-line about-line-comment">
          <span className="about-comment">// building useful things in the margins</span>
        </div>
        <div className="about-line">
          <span className="about-key">github</span>
          <span className="about-sep"> = </span>
          <a
            href="https://github.com/gsigler"
            target="_blank"
            rel="noopener noreferrer"
            className="about-link mono"
          >
            "github.com/gsigler"
          </a>
        </div>
      </div>
    </section>
  )
}
