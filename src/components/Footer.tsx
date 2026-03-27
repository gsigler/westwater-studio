import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <span className="footer-text">© {year} Westwater Studio</span>
      <span className="footer-sep">·</span>
      <span className="footer-text">Utah, USA</span>
    </footer>
  )
}
