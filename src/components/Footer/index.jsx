import './Footer.styles.css'

function Footer() {
  const currentYear = new Date().getFullYear()
  return <p className="footer__text">&copy; {currentYear} Ecom web app</p>
}

export default Footer
