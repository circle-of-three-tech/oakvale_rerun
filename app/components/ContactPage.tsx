'use client';

import Footer from './Footer';
import { Mail, MapPin, Globe } from 'lucide-react';
  
type Page = 'home' | 'about' | 'services' | 'corporates' | 'academic' | 'donors' | 'government' | 'contact';

interface ContactPageProps {
  onNavigate: (page: Page) => void;
}

export default function ContactPage({ onNavigate }: ContactPageProps) {
  return ( 
    <div className="pt-[2.5rem]">
      <div className="contact-hero pt-10 relative w-full" style={{
      backgroundImage: 'url(/contact.png)',

      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-5" /> 
      <div className="contact-hero-inner relative z-10"> 
        <h1>Work with Oakvale <em style={{ fontStyle: 'italic', color: 'var(--mint)' }}>Learning</em></h1>
        <p>We work with a small number of institutional partners at any one time. If your project aligns with our areas of expertise, we would like to hear from you.</p>
      </div>
      </div>

      <div className="contact-body">
        <div className="contact-info">
          <h3>Before you get in touch</h3>
          <p>We are best placed to support organisations working on workforce, leadership and organisational development across Africa, particularly where there is intent to build something that lasts rather than deliver a one-off training event. We welcome enquiries at any stage, including early-stage programme scoping and proposal development.</p>
          <div className="contact-detail">
            <div className="contact-detail-icon"><Mail size={20} /></div>
            <div className="contact-detail-text"><small>General Enquiries</small><a href="mailto:hello@oakvaleltd.com">hello@oakvaleltd.com</a></div>
          </div>
          <div className="contact-detail">
            <div className="contact-detail-icon"><MapPin size={20} /></div>
            <div className="contact-detail-text"><small>Base Location</small>United Kingdom and Nigeria</div>
          </div>
          <div className="contact-detail">
            <div className="contact-detail-icon"><Globe size={20} /></div>
            <div className="contact-detail-text"><small>Programme Delivery</small>Africa and the Global South</div>
          </div>
          
        </div>

        <div className="contact-form">
          <h3>Send us a message</h3>
          <p>Tell us about your organisation and what you are working on. We will follow up within 3 working days.</p>
          <div className="form-row">
            <div className="form-group"><label>First Name</label><input type="text" placeholder="Your first name" /></div>
            <div className="form-group"><label>Last Name</label><input type="text" placeholder="Your last name" /></div>
          </div>
          <div className="form-group"><label>Organisation</label><input type="text" placeholder="Your organisation name" /></div>
          <div className="form-group"><label>Email Address</label><input type="email" placeholder="your@organisation.org" /></div>
          <div className="form-group">
            <label>Type of Enquiry</label>
            <select>
              <option value="">Select enquiry type...</option>
              <option>Workforce Development Programme</option>
              <option>Organisational &amp; Leadership Development</option>
              <option>Academic Curriculum Co-Development</option>
              <option>Technology-Enabled Learning</option>
              <option>Proposal Partnership / Joint Bid</option>
              <option>Government / Public Sector Enquiry</option>
              <option>General Partnership Enquiry</option>
            </select>
          </div>
          <div className="form-group"><label>Tell us about your project</label><textarea placeholder="Briefly describe your organisation, the challenge you are working on, and what kind of support you are looking for..." /></div>
          <button className="form-submit">Send Enquiry</button>
        </div>
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
