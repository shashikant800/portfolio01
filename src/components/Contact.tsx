import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Replace with your Google Apps Script Web App URL
  const scriptUrl = 'https://script.google.com/macros/s/AKfycbwGDQdouQmICbfSmyKifG-ZKUQoIwElMXgOndEgn1gjA7G86iUrzw90sAn5la0O9LRpuA/exec';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Create form data to send
      const formPayload = new URLSearchParams();
      formPayload.append('name', formData.name);
      formPayload.append('email', formData.email);
      formPayload.append('subject', formData.subject);
      formPayload.append('message', formData.message);
      formPayload.append('timestamp', new Date().toISOString());

      // First try POST request
      let response;
      try {
        console.log('Attempting POST request to:', scriptUrl);
        response = await fetch(scriptUrl, {
          method: 'POST',
          body: formPayload,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });
        console.log('POST response status:', response.status);
      } catch (postError) {
        console.log('POST failed, trying GET', postError);
        // If POST fails, try GET as fallback
        const getUrl = `${scriptUrl}?name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}&subject=${encodeURIComponent(formData.subject)}&message=${encodeURIComponent(formData.message)}`;
        console.log('Attempting GET request to:', getUrl);
        response = await fetch(getUrl, {
          method: 'GET',
          mode: 'no-cors',
        });
        
        // With no-cors mode we can't check response status, so we'll assume success
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        return;
      }

      // Check if response is ok (status 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Try to parse JSON response
      let result;
      try {
        result = await response.json();
        console.log('Response from server:', result);
      } catch (parseError) {
        console.error('Error parsing response:', parseError);
        throw new Error('Invalid response from server');
      }

      if (result.result === 'success') {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(result.error || 'Failed to submit form');
      }
    } catch (error: unknown) {
      console.error('Error submitting form:', error);
      let errorMessage = 'Failed to submit form. Please try again later.';
      if (error instanceof Error) {
        errorMessage = `Failed to submit form. ${error.message}`;
      }
      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "shashi98_soe@jnu.ac.in",
      link: "mailto:shashi98_soe@jnu.ac.in",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+916299599968",
      link: "tel:+916299599968",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "delhi , India",
      link: "#",
      color: "from-orange-500 to-red-500"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/shashikant800",
      icon: Github,
      color: "hover:text-gray-800",
      description: "Check out my code"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shashi-kant-b83a44258/",
      icon: Linkedin,
      color: "hover:text-blue-600",
      description: "Let's connect professionally"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Get In <span className="bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Let's Connect</h3>
              <p className="text-blue-100 text-lg leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with amazing people. 
                Whether you have a project in mind or just want to chat about technology, 
                feel free to reach out!
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 group"
                  >
                    <div className={`p-4 bg-gradient-to-r ${info.color} rounded-lg mr-6 group-hover:scale-110 transition-transform duration-200`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg">{info.title}</h4>
                      <p className="text-blue-100">{info.content}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-white font-semibold text-lg mb-6">Follow Me</h4>
              <div className="flex space-x-6">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                      title={social.description}
                    >
                      <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white hover:scale-110 transition-all duration-300">
                        <Icon size={24} className="text-white group-hover:text-gray-800" />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-8">Send Message</h3>
            
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center">
                <CheckCircle size={20} className="text-green-400 mr-3" />
                <span className="text-green-100">Message sent successfully! I'll get back to you soon.</span>
              </div>
            )}

            {submitError && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center">
                <AlertCircle size={20} className="text-red-400 mr-3" />
                <span className="text-red-100">{submitError}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-blue-100 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-blue-100 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-blue-100 font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
                  placeholder="Project discussion"
                />
              </div>

              <div>
                <label className="block text-blue-100 font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 px-8 rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <span>Sending...</span>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={20} />
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