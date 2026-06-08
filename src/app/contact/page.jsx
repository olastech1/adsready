"use client";

import { useState } from "react";
import { Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would send to an API endpoint
    setSubmitted(true);
  };

  const update = (field, value) => setFormData({ ...formData, [field]: value });

  if (submitted) {
    return (
      <div className="content-page" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <CheckCircle size={64} color="var(--success)" style={{ marginBottom: '1.5rem' }} />
        <h1 style={{ fontSize: '2rem' }}>Message Sent!</h1>
        <p style={{ color: 'var(--text-muted)', maxWidth: '500px', marginTop: '1rem' }}>
          Thank you for reaching out. We typically respond within 24-48 hours during business days. 
          Check your email for a confirmation.
        </p>
      </div>
    );
  }

  return (
    <div className="content-page" style={{ maxWidth: '1000px' }}>
      <h1>Get in Touch</h1>
      <p className="page-date">We would love to hear from you</p>

      <p>
        Have a question, suggestion, or just want to say hello? Fill out the form below or reach us 
        through any of the channels listed. Our team is here to help you make the most of Olaniyi Careers.
      </p>

      <div className="contact-grid">
        {/* Contact Form */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Your Name</label>
            <input
              className="form-input"
              type="text"
              placeholder="John Smith"
              value={formData.name}
              onChange={e => update('name', e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              className="form-input"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={e => update('email', e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Subject</label>
            <input
              className="form-input"
              type="text"
              placeholder="How can we help?"
              value={formData.subject}
              onChange={e => update('subject', e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea
              className="form-input"
              rows={6}
              placeholder="Tell us more about your question or feedback..."
              value={formData.message}
              onChange={e => update('message', e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.85rem' }}>
            <Send size={18} />
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div>
          <div className="glass-panel" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--text-light)' }}>Contact Information</h3>

            <div className="contact-info-item">
              <div className="contact-icon">
                <Mail size={20} color="var(--accent)" />
              </div>
              <div>
                <div style={{ fontWeight: 600, marginBottom: '0.2rem', fontSize: '0.95rem' }}>Email</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>support@olaniyi.me</div>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <MapPin size={20} color="var(--accent)" />
              </div>
              <div>
                <div style={{ fontWeight: 600, marginBottom: '0.2rem', fontSize: '0.95rem' }}>Location</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>San Francisco, CA, USA</div>
              </div>
            </div>

            <div className="contact-info-item" style={{ marginBottom: 0 }}>
              <div className="contact-icon">
                <Clock size={20} color="var(--accent)" />
              </div>
              <div>
                <div style={{ fontWeight: 600, marginBottom: '0.2rem', fontSize: '0.95rem' }}>Response Time</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Within 24-48 business hours</div>
              </div>
            </div>
          </div>

          <div className="glass-panel">
            <h3 style={{ marginBottom: '0.75rem', fontSize: '1.1rem', color: 'var(--text-light)' }}>FAQ</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>
              Before reaching out, you might find your answer in our Career Hub articles. 
              We cover common questions about resume formatting, ATS optimization, and job search strategies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
