import React, { useState, useEffect } from 'react';

const projects = [
  {
    title: "Ricochet",
    category: "SaaS Platform",
    image: "/images/ricochet mockup.png",
    description: "Design and prototyping website for Ricochet.",
    year: "2026"
  },
  {
    title: "Amore",
    category: "Hospitality",
    image: "/images/amore mockup.png",
    description: "Boise Restaurant website design and development.",
    year: "2025"
  },
  {
    title: "Clearfeed",
    category: "Open Source",
    image: "/images/clearfeed.png",
    description: "Private RSS feed reader desktop app interface.",
    year: "2025"
  },
  {
    title: "Fastburger",
    category: "Hospitality",
    image: "/images/fastburger.png",
    description: "Burger Restaurant brand and web presence.",
    year: "2025"
  },
  {
    title: "Arrowleaf",
    category: "Hospitality",
    image: "/images/arrowleaf.png",
    description: "Restaurant website design and development.",
    year: "2024"
  },
  {
    title: "Boise Analog",
    category: "Community",
    image: "/images/analogmockup.png",
    description: "Film photography club identity and web.",
    year: "2025"
  }
];

const graphicDesign = [
  {
    title: "Ricochet",
    category: "Asset Design",
    image: "/images/Hourly Sales.PNG",
    description: "Visual assets for SaaS platform.",
    year: "2026"
  },
  {
    title: "Boise Analog Club",
    category: "Brand Identity",
    image: "/images/analogflyer.png",
    description: "Marketing materials and brand identity.",
    year: "2025"
  },
  {
    title: "Lost River Knives",
    category: "Brand Identity",
    image: "/images/LRK.jpg",
    description: "Brand identity and visual system.",
    year: "2025"
  },
  {
    title: "Ricochet",
    category: "Asset Design",
    image: "/images/Exportable tables.PNG",
    description: "Visual assets for SaaS platform.",
    year: "2026"
  },
  {
    title: "Boise Analog Club",
    category: "Poster Design",
    image: "/images/propagranda 3.png",
    description: "Promotional poster design.",
    year: "2025"
  },
  {
    title: "Boise Analog Club",
    category: "Brand Identity",
    image: "/images/BAC FEBUARY.png",
    description: "Monthly event marketing design.",
    year: "2025"
  },
  {
    title: "Westside Gunn",
    category: "Album Art Design",
    image: "/images/westsidegun mockup 1.png",
    description: "Concept album artwork design.",
    year: "2025"
  },
  {
    title: "Creationbase",
    category: "Asset Design",
    image: "/images/launch art.png",
    description: "Digital assets for launch campaign.",
    year: "2025"
  },
  {
    title: "Parallax Zine",
    category: "Brand Identity",
    image: "/images/parallax shirt 3.jpg",
    description: "Merchandise design and branding.",
    year: "2025"
  },
  {
    title: "Open Netizen",
    category: "Brand Identity",
    image: "/images/OPEN NETIZEN.jpg",
    description: "Brand identity and visual system.",
    year: "2025"
  },
  {
    title: "Paradox Labs",
    category: "Brand Identity",
    image: "/images/paradoxlabscard.jpg",
    description: "Business card and identity design.",
    year: "2025"
  },
  {
    title: "Moab Brewery",
    category: "Illustration",
    image: "/images/beer-3.jpg",
    description: "Label illustration and design.",
    year: "2025"
  },
  {
    title: "Conway The Machine",
    category: "Album Art Design",
    image: "/images/conway the machine 1 mockup.png",
    description: "Concept album artwork design.",
    year: "2025"
  },
  {
    title: "Boise Analog Club",
    category: "Brand Identity",
    image: "/images/bac.png",
    description: "Logo and visual identity system.",
    year: "2025"
  }
];

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="app">
      {/* Header */}
      <header style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        padding: 'var(--spacing-md)', 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        zIndex: 100,
        mixBlendMode: 'difference',
        color: '#fff'
      }}>
        <div className="logo small-text">
          Forrest Tindall<br />
          Design & Dev
        </div>
        <div className="small-text" style={{ textAlign: 'right' }}>
          Boise, ID<br />
          {time}
        </div>
      </header>

      {/* Hero */}
      <section style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'flex-end', 
        padding: 'var(--spacing-md) var(--spacing-md) var(--spacing-xl)',
        borderBottom: '1px solid #000'
      }}>
        <h1 style={{ 
          fontFamily: 'var(--font-display)', 
          fontSize: 'var(--fs-display)', 
          lineHeight: 0.8,
          textTransform: 'uppercase',
          letterSpacing: '-0.04em',
          marginBottom: 'var(--spacing-lg)'
        }}>
          Visual<br />
          System<br />
          Design
        </h1>
        <div className="flex" style={{ justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <p className="small-text" style={{ maxWidth: '300px' }}>
            Specializing in brand identity, interface design, and full-stack development. Creating cutting-edge digital experiences with a focus on typography and performance.
          </p>
          <div className="small-text">
            (SCROLL)
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section style={{ padding: 'var(--spacing-xxl) var(--spacing-md)' }}>
        <div className="flex" style={{ justifyContent: 'space-between', marginBottom: 'var(--spacing-xl)', alignItems: 'baseline' }}>
          <h2 className="section-title" style={{ fontSize: 'var(--fs-xl)', marginBottom: 0 }}>Web Design</h2>
          <span className="small-text">Index (01)</span>
        </div>
        
        <div className="project-grid">
          {projects.map((project, index) => (
            <article key={index} className="project-card">
              <div style={{ 
                marginBottom: 'var(--spacing-sm)', 
                overflow: 'hidden',
                border: '1px solid #000',
                aspectRatio: '1/1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent'
              }}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  style={{ 
                    width: 'auto',
                    height: '100%',
                    maxWidth: 'none',
                    display: 'block',
                    transition: 'all 0.5s ease',
                    filter: 'grayscale(100%)',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.filter = 'grayscale(0%)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.filter = 'grayscale(100%)';
                  }}
                />
              </div>
              <div className="flex" style={{ justifyContent: 'space-between', borderTop: '1px solid #000', paddingTop: 'var(--spacing-xs)' }}>
                <div>
                  <h3 className="small-text" style={{ fontWeight: 'bold' }}>{project.title}</h3>
                  <p className="small-text" style={{ opacity: 0.7 }}>{project.description}</p>
                </div>
                <div className="small-text" style={{ textAlign: 'right' }}>
                  <div>{project.category}</div>
                  <div>{project.year}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Graphic Design */}
      <section style={{ padding: 'var(--spacing-xxl) var(--spacing-md)', background: '#000', color: '#fff' }}>
        <div className="flex" style={{ justifyContent: 'space-between', marginBottom: 'var(--spacing-xl)', alignItems: 'baseline' }}>
          <h2 className="section-title" style={{ fontSize: 'var(--fs-xl)', marginBottom: 0, color: '#fff' }}>Graphic Design</h2>
          <span className="small-text">Index (02)</span>
        </div>

        <div className="project-grid" style={{ alignItems: 'start' }}>
          {graphicDesign.map((project, i) => (
             <article key={i} className="project-card">
                <div style={{ 
                 marginBottom: 'var(--spacing-sm)', 
                 overflow: 'hidden',
                 border: '1px solid #333',
                 aspectRatio: '1/1',
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                 backgroundColor: '#000'
               }}>
                 <img 
                    src={project.image} 
                    alt={project.title} 
                    style={{ 
                      width: 'auto',
                      height: '100%',
                      maxWidth: 'none',
                      display: 'block',
                      transition: 'all 0.5s ease',
                      filter: 'grayscale(100%)'
                    }} 
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.filter = 'grayscale(0%)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.filter = 'grayscale(100%)';
                    }}
                    loading="lazy" 
                  />
               </div>
              <div className="flex" style={{ justifyContent: 'space-between', borderTop: '1px solid #333', paddingTop: 'var(--spacing-xs)' }}>
                <div>
                  <h3 className="small-text" style={{ fontWeight: 'bold' }}>{project.title}</h3>
                  <p className="small-text" style={{ opacity: 0.7 }}>{project.description}</p>
                </div>
                <div className="small-text" style={{ textAlign: 'right' }}>
                  <div>{project.category}</div>
                  <div>{project.year}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer / Contact */}
      <section style={{ padding: 'var(--spacing-xxl) var(--spacing-md)', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <h2 className="section-title">Let's Work<br />Together</h2>
        </div>
        
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-xl)' }}>
          <div>
            <p className="small-text" style={{ marginBottom: 'var(--spacing-md)' }}>CONTACT</p>
            <ul className="small-text">
              <li><a href="mailto:hello@forresttindall.com" style={{ wordBreak: 'break-all' }}>FORREST.TINDALL@GMAIL.COM</a></li>
              <li><a href="www.instagram.com/forrest.tindall/">INSTAGRAM</a></li>
              <li><a href="https://www.linkedin.com/in/forrest-tindall/">LINKEDIN</a></li>
            </ul>
          </div>
          <div>
            <p className="small-text" style={{ marginBottom: 'var(--spacing-md)' }}>SERVICES</p>
            <ul className="small-text">
              <li>VISIAL SYSTEM DESIGN</li>
              <li>WEB DEVELOPMENT</li>
              <li>BRAND IDENTITY</li>
              <li>ART DIRECTION</li>
            
            </ul>
          </div>
        </div>

        <div style={{ marginTop: 'var(--spacing-xxl)', borderTop: '1px solid #000', paddingTop: 'var(--spacing-sm)' }} className="flex">
          <p className="small-text" style={{ flex: 1 }}>© 2026 FORREST TINDALL</p>
          <p className="small-text">DESIGNED & CODED IN BOISE, ID</p>
        </div>
      </section>
    </div>
  )
}

export default App
