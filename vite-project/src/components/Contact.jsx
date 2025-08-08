import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // EmailJS Configuration
    const serviceID = 'service_9452ei9';     
    const templateID = 'template_bgq0w89';   
    const publicKey = 'wwhlYBF9uIqUIjD8M';         

    // Backup solution: Open Gmail compose if EmailJS fails
    // Backup solution: Open Gmail compose if EmailJS fails
    const fallbackToGmail = () => {
      const subject = `Portfolio Contact from ${formData.name}`;
      const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
      const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=ayushchoudhary6603@gmail.com&su=${encodeURIComponent(subject)}&body=${body}`;
      
      window.open(mailtoLink, '_blank');
      alert('Gmail will open to send your message directly to Ayush!');
      setFormData({ name: '', email: '', message: '' });
      setIsLoading(false);
    };

    // EmailJS sending
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: 'Ayush',
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Thank you for your message! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
        setIsLoading(false);
      }, (error) => {
        console.log('FAILED...', error);
        alert('Sorry, there was an error sending your message. Opening Gmail as backup...');
        fallbackToGmail();
      });
  };

  return (
    <section className="py-24 px-[5%] bg-white" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side - Contact Info */}
          <div>
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-6">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Let's work together on your next project
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question, want to collaborate, or just want to say hello, 
              I'd love to hear from you.
            </p>
            
            {/* Contact Methods */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 text-xl">📧</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                  <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=ayushchoudhary6603@gmail.com&su=Hello%20Ayush&body=Hi%20Ayush,%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.%0D%0A%0D%0ABest%20regards"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  >
                    ayushchoudhary6603@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 text-xl">📱</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">+91 8368462519</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 text-xl">📍</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Location</h3>
                  <p className="text-gray-600">New Delhi, India</p>
                </div>
              </div>
            </div>
            
            {/* Social Links - Only LinkedIn and GitHub */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <h3 className="font-bold text-gray-900 mb-6">Follow me</h3>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/ayush-choudhary-29aa01325/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group"
                  title="LinkedIn"
                >
                  <img 
                    src="/icons8-linkedin-48.png" 
                    alt="LinkedIn" 
                    className="w-6 h-6 group-hover:brightness-0 group-hover:invert transition-all duration-300"
                  />
                </a>
                <a 
                  href="https://github.com/AyushChoudhary6" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-800 transition-all duration-300 group"
                  title="GitHub"
                >
                  <img 
                    src="/icons8-github-50.png" 
                    alt="GitHub" 
                    className="w-6 h-6 group-hover:brightness-0 group-hover:invert transition-all duration-300"
                  />
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Side - Contact Form */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send me a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none transition-all duration-300"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full font-medium py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 ${
                  isLoading 
                    ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                {isLoading ? (
                  <>
                    <span className="animate-spin">⌛</span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <span>✈️</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
