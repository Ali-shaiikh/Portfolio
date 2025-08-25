import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import ParticleBackground from './components/ParticleBackground';
import HeroContent from './components/HeroContent';
import QuickNavigation from './components/QuickNavigation';
import FloatingElements from './components/FloatingElements';
import emailjs from '@emailjs/browser';

const HeroLaunchSequence = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  useEffect(() => {
    // Simulate loading sequence
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const handleExploreClick = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e?.target?.name]: e?.target?.value
    });
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Option 1: EmailJS (requires setup)
      // await emailjs.send(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   {
      //     from_name: formData.name,
      //     from_email: formData.email,
      //     message: formData.message,
      //   },
      //   'YOUR_PUBLIC_KEY'
      // );

      // Option 2: Simple console log for now (you can replace with actual email service)
      console.log('Contact Form Submission:', {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date().toISOString()
      });

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Show success message
      alert('Thank you for your message! I\'ll get back to you soon.');
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      alert('Sorry, there was an error sending your message. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const skills = [
    { name: 'Python', level: 95, color: 'text-tech-blue', icon: 'Code' },
    { name: 'SQL', level: 90, color: 'text-tech-purple', icon: 'Database' },
    { name: 'JavaScript', level: 85, color: 'text-tech-emerald', icon: 'Code' },
    { name: 'C++', level: 80, color: 'text-tech-orange', icon: 'Code' },
    { name: 'FastAPI', level: 90, color: 'text-tech-blue', icon: 'Zap' },
    { name: 'React', level: 85, color: 'text-tech-purple', icon: 'Layers' },
    { name: 'TensorFlow', level: 88, color: 'text-tech-emerald', icon: 'Brain' },
    { name: 'PyTorch', level: 87, color: 'text-tech-orange', icon: 'Brain' },
    { name: 'Google Cloud', level: 92, color: 'text-tech-blue', icon: 'Cloud' },
    { name: 'Docker', level: 83, color: 'text-tech-purple', icon: 'Box' }
  ];

  const certifications = [
    {
      title: 'Google Cloud Arcade Facilitator',
      organization: 'Google Cloud',
      year: '2025',
      badge: '/assets/images/facilitator.webp'
    },
    {
      title: 'AWS Academy Cloud Foundations',
      organization: 'Amazon Web Services',
      year: '2022',
      badge: '/assets/images/aws.png'
    },
    {
      title: 'Analyze Images with the Cloud Vision API Skill Badge',
      organization: 'Google Cloud',
      year: '2024',
      badge: '/assets/images/gc.png'
    },
    {
      title: 'Postman API Fundamentals Student Expert',
      organization: 'Postman',
      year: '2023',
      badge: '/assets/images/postman.png'
    },
    {
      title: 'GenAI 101 with Pieces',
      organization: 'Pieces',
      year: '2025',
      badge: '/assets/images/pieces.png'
    },
    {
      title: 'AWS Academy Data Engineering',
      organization: 'Amazon Web Services',
      year: '2023',
      badge: '/assets/images/aws2.png'
    }
  ];

  const projects = [
    {
      title: 'Querify',
      description: 'AI-powered natural language to SQL query conversion platform that makes database querying accessible to non-technical users.',
      tech: ['Python', 'FastAPI', 'OpenAI API', 'PostgreSQL', 'React'],
      features: [
        'Natural language processing for SQL generation',
        'Real-time query validation and optimization',
        'Interactive database schema visualization',
        'Multi-database support'
      ],
      status: 'Production',
      link: '#'
    },
    {
      title: 'Quizzora',
      description: 'Interactive learning platform with AI-generated quizzes and personalized learning paths for various technical subjects.',
      tech: ['Python', 'TensorFlow', 'React', 'Node.js', 'MongoDB'],
      features: [
        'AI-powered quiz generation',
        'Adaptive learning algorithms',
        'Progress tracking and analytics',
        'Collaborative learning features'
      ],
      status: 'Development',
      link: '#'
    }
  ];

  const experiences = [
    {
      role: 'Google Cloud Arcade Co-Facilitator',
      organization: 'Google Cloud',
      period: '2023 - Present',
      description: 'Leading community initiatives and workshops to help 2000+ learners gain hands-on experience with Google Cloud technologies.',
      achievements: [
        'Facilitated 50+ hands-on labs and workshops',
        'Mentored 2000+ students in cloud computing',
        'Achieved 95% completion rate in programs',
        'Built comprehensive learning resources'
      ]
    },
    {
      role: 'ArcadeOps Community Co-Founder',
      organization: 'ArcadeOps',
      period: '2023 - Present',
      description: 'Co-founded and built a thriving community of 400+ cloud enthusiasts focused on practical learning and skill development.',
      achievements: [
        'Grew community from 0 to 400+ members',
        'Organized 30+ technical events',
        'Created mentorship programs',
        'Established industry partnerships'
      ]
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-tech overflow-hidden data-stream">
      {/* Header */}
      <Header />
      
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Floating Elements */}
      <FloatingElements />
      
      {/* Loading Overlay */}
      <div className={`fixed inset-0 bg-background z-50 flex items-center justify-center transition-opacity duration-1000 ${
        isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}>
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin mb-4 mx-auto glow-blue"></div>
          <p className="font-mono text-accent animate-pulse">Loading Future Interface...</p>
        </div>
      </div>

      {/* Main Content */}
      <main className={`relative z-10 transition-all duration-1000 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}>
        {/* Hero Section */}
        <section id="hero" className="min-h-screen">
          <HeroContent onExploreClick={handleExploreClick} />
        </section>
        
        {/* About Me Section */}
        <section id="about" className="min-h-screen py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-space text-4xl md:text-5xl font-bold text-foreground mb-6">
                About <span className="holographic-text">Me</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-neural mx-auto glow-blue mb-8 quantum-glow"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:col-span-1">
                <h3 className="font-space text-2xl font-semibold text-accent mb-6 text-glow-blue flex items-center">
                  <Icon name="BookOpen" className="mr-3 text-tech-emerald" />
                  My Mission
                </h3>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p className="text-lg">
                    I am an aspiring technologist dedicated to making a positive impact on our planet through innovative AI solutions and cloud technologies. My journey began with curiosity about how technology can solve real-world problems.
                  </p>
                  <p className="text-lg">
                    Currently pursuing my Bachelor of Engineering while actively contributing to the tech community through education and mentorship. I believe in the power of knowledge sharing and collaborative learning.
                  </p>
                  <p className="text-lg">
                    As a Google Cloud Arcade Co-Facilitator, I've mentored 2000+ students and co-founded the ArcadeOps Community with 400+ members, focusing on practical cloud learning and skill development.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="text-center p-4 bg-tech-blue/10 rounded-lg border border-tech-blue/30 interactive-element neural-network">
                    <div className="text-2xl font-bold text-tech-blue">2000+</div>
                    <div className="text-sm text-muted-foreground">Students Mentored</div>
                  </div>
                  <div className="text-center p-4 bg-tech-purple/10 rounded-lg border border-tech-purple/30 interactive-element neural-network animation-delay-200">
                    <div className="text-2xl font-bold text-tech-purple">400+</div>
                    <div className="text-sm text-muted-foreground">Community Members</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1 flex justify-center items-center">
                <div className="glass-card p-6 interactive-element text-center">
                  <Image 
                    src="/assets/images/IMG_3771.jpeg" 
                    alt="Ali Shaikh" 
                    className="w-80 h-96 rounded-lg object-cover border-2 border-tech-blue/30 glow-blue mb-4 mx-auto"
                  />
                  <div className="text-center">
                    <h4 className="font-space text-xl font-semibold text-foreground mb-2">Ali Shaikh</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Google Cloud Arcade Facilitator (2x) | Aspiring Software Engineer | Full Stack Development | Cloud & AI/ML Enthusiast
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen py-20 px-6 circuit-pattern">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-space text-4xl md:text-5xl font-bold text-foreground mb-6">
                Technical <span className="holographic-text">Skills</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-hologram mx-auto glow-hologram mb-8 quantum-glow"></div>
            </div>

            <div className="mt-16">
              <h3 className="font-space text-2xl font-bold text-foreground mb-8 text-center">
                <Icon name="Code" className="inline-block mr-2 text-tech-emerald" />
                Tech Stack
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                <div className="glass-card p-4 text-center interactive-element neural-network border-t-2 border-blue-500">
                  <Icon name="Brain" className="text-2xl mb-2 text-blue-500 mx-auto" />
                  <h4 className="font-space text-sm font-semibold text-foreground mb-2">AI/ML</h4>
                  <p className="text-xs text-muted-foreground">TensorFlow, PyTorch, Scikit-learn, neural networks, and machine learning models.</p>
                </div>
                <div className="glass-card p-4 text-center interactive-element neural-network animation-delay-200 border-t-2 border-cyan-500">
                  <Icon name="Cloud" className="text-2xl mb-2 text-cyan-500 mx-auto" />
                  <h4 className="font-space text-sm font-semibold text-foreground mb-2">Cloud Computing</h4>
                  <p className="text-xs text-muted-foreground">Google Cloud, AWS services, Docker, Kubernetes, and cloud architecture.</p>
                </div>
                <div className="glass-card p-4 text-center interactive-element neural-network animation-delay-300 border-t-2 border-yellow-500">
                  <Icon name="Code" className="text-2xl mb-2 text-yellow-500 mx-auto" />
                  <h4 className="font-space text-sm font-semibold text-foreground mb-2">Web Development</h4>
                  <p className="text-xs text-muted-foreground">React, FastAPI, Node.js, modern web technologies and frameworks.</p>
                </div>
                <div className="glass-card p-4 text-center interactive-element neural-network animation-delay-400 border-t-2 border-teal-500">
                  <Icon name="Database" className="text-2xl mb-2 text-teal-500 mx-auto" />
                  <h4 className="font-space text-sm font-semibold text-foreground mb-2">Database Systems</h4>
                  <p className="text-xs text-muted-foreground">PostgreSQL, MongoDB, SQL, data modeling, and database optimization.</p>
                </div>
                <div className="glass-card p-4 text-center interactive-element neural-network animation-delay-500 border-t-2 border-purple-500">
                  <Icon name="Users" className="text-2xl mb-2 text-purple-500 mx-auto" />
                  <h4 className="font-space text-sm font-semibold text-foreground mb-2">Community Leadership</h4>
                  <p className="text-xs text-muted-foreground">Google Cloud Arcade facilitation, mentoring 2000+ students, and community building.</p>
                </div>
                <div className="glass-card p-4 text-center interactive-element neural-network animation-delay-600 border-t-2 border-pink-500">
                  <Icon name="Zap" className="text-2xl mb-2 text-pink-500 mx-auto" />
                  <h4 className="font-space text-sm font-semibold text-foreground mb-2">Full Stack</h4>
                  <p className="text-xs text-muted-foreground">End-to-end development, API design, system architecture, and deployment.</p>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="font-space text-2xl font-bold text-foreground mb-8 text-center">
                <Icon name="BarChart3" className="inline-block mr-2 text-tech-emerald" />
                Technical Skills
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
                {skills?.map((skill, index) => (
                  <div key={skill?.name} className="glass-card p-4 text-center interactive-element neural-network" style={{animationDelay: `${index * 100}ms`}}>
                    <Icon name={skill?.icon} className={`text-2xl mb-2 mx-auto ${skill?.color}`} />
                    <h4 className="font-space text-sm font-semibold text-foreground mb-2">{skill?.name}</h4>
                    <div className="progress-bar h-2 mb-2">
                      <div 
                        className="progress-fill h-full"
                        style={{ 
                          width: `${skill?.level}%`,
                          animationDelay: `${index * 200}ms`
                        }}
                      ></div>
                    </div>
                    <span className={`font-mono text-xs font-bold ${skill?.color}`}>{skill?.level}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-space text-4xl md:text-5xl font-bold text-foreground mb-6">
                Featured <span className="holographic-text">Projects</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-neural mx-auto glow-blue mb-8 quantum-glow"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects?.map((project, index) => (
                <div key={project?.title} className="glass-card p-8 h-full interactive-element" style={{animationDelay: `${index * 300}ms`}}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-space text-2xl font-bold text-accent text-glow-blue">{project?.title}</h3>
                    <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                      project?.status === 'Production' ?'bg-tech-emerald/20 text-tech-emerald border border-tech-emerald/30' :'bg-tech-orange/20 text-tech-orange border border-tech-orange/30'
                    } neural-network`}>
                      {project?.status}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">{project?.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-space text-sm font-semibold text-tech-purple mb-3 text-glow-purple">Key Features:</h4>
                    <ul className="space-y-2">
                      {project?.features?.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground hover-lift">
                          <div className="w-2 h-2 bg-tech-blue rounded-full mr-3 glow-blue"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-space text-sm font-semibold text-tech-emerald mb-3 text-glow-emerald">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project?.tech?.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-muted/20 text-xs rounded-full border border-tech-blue/30 text-foreground interactive-element neural-network">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button
                    variant="outline"
                    onClick={() => window?.open(project?.link, '_blank')}
                    className="w-full border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white glow-blue interactive-element"
                    iconName="ExternalLink"
                    iconPosition="right"
                  >
                    View Project
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="min-h-screen py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-space text-4xl md:text-5xl font-bold text-foreground mb-6">
                <Icon name="Award" className="inline-block mr-3 text-tech-emerald" />
                Certifications & Badges
              </h2>
              <div className="w-24 h-1 bg-gradient-hologram mx-auto glow-hologram mb-4 quantum-glow"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Professional credentials demonstrating expertise across cloud platforms and technologies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications?.map((cert, index) => (
                <div key={cert?.title} className="glass-card p-6 interactive-element neural-network" style={{animationDelay: `${index * 100}ms`}}>
                  <div className="text-center mb-4">
                    <Image 
                      src={cert?.badge} 
                      alt={cert?.title}
                      className="w-20 h-20 mx-auto mb-3 object-contain"
                      onError={(e) => {
                        e.target.src = "/assets/images/no_image.png"
                      }}
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="font-space text-lg font-semibold text-foreground mb-2">{cert?.title}</h4>
                    <p className="text-sm text-tech-blue mb-1">{cert?.organization}</p>
                    <span className="text-xs text-muted-foreground bg-muted/20 px-2 py-1 rounded-full">
                      {cert?.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen py-20 px-6 data-stream">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-space text-4xl md:text-5xl font-bold text-foreground mb-6">
                Professional <span className="holographic-text">Experience</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-hologram mx-auto glow-hologram mb-8 quantum-glow"></div>
            </div>

            <div className="space-y-8">
              {experiences?.map((exp, index) => (
                <div key={exp?.role} className="glass-card p-8 interactive-element" style={{animationDelay: `${index * 200}ms`}}>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                      <h3 className="font-space text-xl font-bold text-accent mb-2 text-glow-blue">{exp?.role}</h3>
                      <h4 className="font-space text-lg font-semibold text-tech-purple mb-2 text-glow-purple">{exp?.organization}</h4>
                      <span className="text-sm text-muted-foreground bg-muted/20 px-3 py-1 rounded-full border border-tech-blue/30 neural-network">
                        {exp?.period}
                      </span>
                    </div>
                    
                    <div className="lg:col-span-2">
                      <p className="text-muted-foreground mb-6 leading-relaxed">{exp?.description}</p>
                      
                      <div>
                        <h5 className="font-space text-sm font-semibold text-tech-emerald mb-3 text-glow-emerald">Key Achievements:</h5>
                        <ul className="space-y-2">
                          {exp?.achievements?.map((achievement, idx) => (
                            <li key={idx} className="flex items-start text-sm text-muted-foreground hover-lift">
                              <div className="w-2 h-2 bg-tech-blue rounded-full mr-3 mt-2 glow-blue flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-space text-4xl md:text-5xl font-bold text-foreground mb-6">
                <span className="holographic-text">Education</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-neural mx-auto glow-blue mb-8 quantum-glow"></div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="glass-card p-8 interactive-element">
                <div className="text-center mb-8">
                  <h3 className="font-space text-3xl font-bold text-accent mb-4 text-glow-blue">Bachelor of Engineering</h3>
                  <div className="w-16 h-1 bg-gradient-neural mx-auto glow-blue mb-4 quantum-glow"></div>
                  <p className="text-xl text-tech-purple font-semibold mb-2 text-glow-purple">Computer Science & Engineering</p>
                  <span className="text-muted-foreground">2022 - 2026 (Expected)</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-space text-lg font-semibold text-tech-emerald mb-4 text-glow-emerald">Core Subjects</h4>
                    <ul className="space-y-2">
                      {[
                        'Data Structures & Algorithms',
                        'Machine Learning',
                        'Database Management Systems',
                        'Computer Networks',
                        'Software Engineering',
                        'Artificial Intelligence'
                      ]?.map((subject, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground hover-lift">
                          <div className="w-2 h-2 bg-tech-emerald rounded-full mr-3 glow-emerald"></div>
                          {subject}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-space text-lg font-semibold text-tech-orange mb-4 text-glow-orange">Certifications</h4>
                    <ul className="space-y-2">
                      {[
                        'Google Cloud Professional',
                        'AWS Cloud Practitioner',
                        'TensorFlow Developer',
                        'MongoDB University',
                        'Docker Certified Associate',
                        'Kubernetes Fundamentals'
                      ]?.map((cert, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground hover-lift">
                          <div className="w-2 h-2 bg-tech-orange rounded-full mr-3 glow-orange"></div>
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-muted/20">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="p-4 bg-tech-blue/10 rounded-lg border border-tech-blue/30 interactive-element neural-network">
                      <div className="text-2xl font-bold text-tech-blue">7</div>
                      <div className="text-sm text-muted-foreground">Current CGPA</div>
                    </div>
                    <div className="p-4 bg-tech-purple/10 rounded-lg border border-tech-purple/30 interactive-element neural-network animation-delay-200">
                      <div className="text-2xl font-bold text-tech-purple">5+</div>
                      <div className="text-sm text-muted-foreground">Projects Completed</div>
                    </div>
                    <div className="p-4 bg-tech-emerald/10 rounded-lg border border-tech-emerald/30 interactive-element neural-network animation-delay-300">
                      <div className="text-2xl font-bold text-tech-emerald">10+</div>
                      <div className="text-sm text-muted-foreground">Certifications</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-20 px-6 circuit-pattern">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-space text-4xl md:text-5xl font-bold text-foreground mb-6">
                Get In <span className="holographic-text">Touch</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-hologram mx-auto glow-hologram mb-8 quantum-glow"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ready to collaborate on exciting projects or discuss opportunities? 
                Let's build something amazing together!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="glass-card p-8 interactive-element">
                <h3 className="font-space text-2xl font-semibold text-accent mb-6 text-glow-blue">Send Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    type="text"
                    name="name"
                    label="Your Name"
                    value={formData?.name}
                    onChange={handleInputChange}
                    required
                    className="tech-border"
                  />
                  
                  <Input
                    type="email"
                    name="email"
                    label="Your Email"
                    value={formData?.email}
                    onChange={handleInputChange}
                    required
                    className="tech-border"
                  />
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Your Message <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData?.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 tech-border"
                      placeholder="Tell me about your project or just say hello..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-tech-blue text-white hover:bg-tech-blue/90 glow-intense-blue interactive-element ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                    iconName={isSubmitting ? "Loader" : "Send"}
                    iconPosition="right"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="glass-card p-8 interactive-element animation-delay-200">
                  <h3 className="font-space text-2xl font-semibold text-tech-purple mb-6 text-glow-purple">Contact Info</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 hover-lift">
                      <div className="w-12 h-12 bg-tech-blue/20 rounded-lg flex items-center justify-center neural-network">
                        <Icon name="Mail" size={24} className="text-tech-blue" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Email</p>
                        <p className="text-muted-foreground">alishaikhh15@email.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 hover-lift">
                      <div className="w-12 h-12 bg-tech-purple/20 rounded-lg flex items-center justify-center neural-network">
                        <Icon name="Phone" size={24} className="text-tech-purple" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Phone</p>
                        <p className="text-muted-foreground">+91 8169566689</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 hover-lift">
                      <div className="w-12 h-12 bg-tech-emerald/20 rounded-lg flex items-center justify-center neural-network">
                        <Icon name="MapPin" size={24} className="text-tech-emerald" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Location</p>
                        <p className="text-muted-foreground">Mumbai, India</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-8 interactive-element animation-delay-400">
                  <h3 className="font-space text-2xl font-semibold text-tech-emerald mb-6 text-glow-emerald">Social Links</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      variant="outline"
                      onClick={() => window?.open('https://linkedin.com/in/ali-shaikhh', '_blank')}
                      className="border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white glow-blue interactive-element"
                      iconName="Linkedin"
                      iconPosition="left"
                    >
                      LinkedIn
                    </Button>
                    
                    <Button
                      variant="outline"
                      onClick={() => window?.open('https://github.com/Ali-shaiikh', '_blank')}
                      className="border-tech-purple text-tech-purple hover:bg-tech-purple hover:text-white glow-purple interactive-element"
                      iconName="Github"
                      iconPosition="left"
                    >
                      GitHub
                    </Button>
                    
                    <Button
                      variant="outline"
                      onClick={() => window?.open('https://x.com/alishaiikhh', '_blank')}
                      className="border-tech-emerald text-tech-emerald hover:bg-tech-emerald hover:text-white glow-emerald interactive-element"
                      iconName="Twitter"
                      iconPosition="left"
                    >
                      Twitter
                    </Button>
                    
                    <Button
                      variant="outline"
                      onClick={() => window?.open('https://credly.com/users/ali-shaikhh', '_blank')}
                      className="border-tech-orange text-tech-orange hover:bg-tech-orange hover:text-white glow-orange interactive-element"
                      iconName="Award"
                      iconPosition="left"
                    >
                      Credly
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Quick Navigation */}
      <QuickNavigation />

      {/* Tech Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none z-5">
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
          ></div>
        </div>
      </div>

      {/* Ambient Tech Glow Effects */}
      <div className="fixed inset-0 pointer-events-none z-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tech-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tech-purple/10 rounded-full blur-3xl animate-pulse animation-delay-300"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tech-emerald/5 rounded-full blur-3xl animate-pulse animation-delay-500"></div>
        <div className="absolute top-3/4 left-1/3 w-80 h-80 bg-hologram-blue/8 rounded-full blur-3xl animate-pulse animation-delay-700"></div>
      </div>
    </div>
  );
};

export default HeroLaunchSequence;