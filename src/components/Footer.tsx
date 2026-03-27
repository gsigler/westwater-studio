import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <span className="footer-text mono">
        © {year} Westwater Studio
      </span>
      <span className="footer-sep mono"> · </span>
      <span className="footer-text mono" style={{ color: 'var(--muted)' }}>
        Utah, USA
      </span>
    </footer>
  )
}
