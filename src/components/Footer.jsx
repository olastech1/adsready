import Link from "next/link";
import { FileText } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Brand */}
        <div>
          <Link href="/" className="nav-logo" style={{ fontSize: '1.25rem' }}>
            <FileText size={22} />
            Olaniyi Careers
          </Link>
          <p className="footer-brand-desc">
            Build professional resumes in minutes with our intuitive builder. 
            Backed by expert career advice and industry-specific templates to 
            help you land your dream job.
          </p>
        </div>

        {/* Product */}
        <div>
          <h4 className="footer-heading">Product</h4>
          <Link href="/builder" className="footer-link">Resume Builder</Link>
          <Link href="/software-engineer-resume-templates" className="footer-link">Templates</Link>
          <Link href="/blog" className="footer-link">Career Hub</Link>
        </div>

        {/* Company */}
        <div>
          <h4 className="footer-heading">Company</h4>
          <Link href="/about" className="footer-link">About Us</Link>
          <Link href="/contact" className="footer-link">Contact</Link>
          <Link href="/blog" className="footer-link">Blog</Link>
        </div>

        {/* Legal */}
        <div>
          <h4 className="footer-heading">Legal</h4>
          <Link href="/privacy-policy" className="footer-link">Privacy Policy</Link>
          <Link href="/terms-of-service" className="footer-link">Terms of Service</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} Olaniyi Careers. All rights reserved.</span>
        <span>Made with purpose to help you succeed.</span>
      </div>
    </footer>
  );
}
