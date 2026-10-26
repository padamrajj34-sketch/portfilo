import { useEffect, useMemo, useState } from 'react'

const projects = [
  { title: 'StudyWithGame', category: 'Full-stack', description: 'A game-inspired learning platform for Class 11 and 12 students, combining quizzes, progression, leaderboards, and teacher-managed question content.', stack: ['PHP', 'MySQL', 'JavaScript', 'CSS'], status: 'In active development', accent: 'lime' },
  { title: 'Answer Sheet Review', category: 'Web app', description: 'A practical submission workflow where students upload multiple answer-sheet images and teachers review, organize, and assess their work.', stack: ['PHP', 'MySQL', 'File uploads', 'Responsive UI'], status: 'Built project', accent: 'blue' },
  { title: 'Quiz Platform', category: 'Full-stack', description: 'A timed quiz experience with categories, randomized questions, score tracking, a leaderboard, and an admin-managed question bank.', stack: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'], status: 'Built project', accent: 'coral' },
]
const skills = [
  { name: 'HTML & CSS', category: 'Web fundamentals', stage: 'Using in projects', progress: 72 },
  { name: 'JavaScript', category: 'Programming language', stage: 'Building confidence', progress: 58 },
  { name: 'PHP', category: 'Backend development', stage: 'Using in projects', progress: 68 },
  { name: 'MySQL & SQL', category: 'Database', stage: 'Building confidence', progress: 55 },
  { name: 'C++', category: 'Programming language', stage: 'Practicing fundamentals', progress: 46 },
  { name: 'React', category: 'Frontend framework', stage: 'Currently learning', progress: 30 },
]
const experience = [
  'Completed assigned software-development and code-maintenance tasks.',
  'Practised debugging, problem solving, and professional remote workflows.',
  'Implemented technical feedback under guidance and collaborated remotely.',
]
const Arrow = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
const External = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 5h5v5M10 14 19 5M19 14v5H5V5h5" /></svg>

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('darbin-theme') || 'dark')
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState('All')
  const [formStatus, setFormStatus] = useState('Your email app will open with your message ready to send.')
  const categories = useMemo(() => ['All', ...new Set(projects.map(project => project.category))], [])
  const shownProjects = filter === 'All' ? projects : projects.filter(project => project.category === filter)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('darbin-theme', theme)
  }, [theme])

  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target) }
    }), { threshold: 0.12 })
    document.querySelectorAll('[data-reveal]').forEach(element => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  function sendMessage(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`${data.get('subject')} — from ${data.get('name')}`)
    const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`)
    setFormStatus('Opening your email app…')
    window.location.href = `mailto:padamraji34@gmail.com?subject=${subject}&body=${body}`
  }

  return <div className="site-shell">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="topbar">
      <a className="brand" href="#top" aria-label="Darbin Joshi, home"><span className="brand-mark">DJ</span><span className="brand-text">Darbin Joshi<small>Computer Engineer</small></span></a>
      <nav className={`nav ${menuOpen ? 'open' : ''}`} id="main-nav" aria-label="Main navigation">{[['about','About'],['experience','Experience'],['projects','Projects'],['skills','Skills'],['contact','Contact']].map(([id,label])=><a key={id} href={`#${id}`} onClick={()=>setMenuOpen(false)}>{label}</a>)}</nav>
      <div className="header-actions"><button className="theme-toggle" type="button" onClick={()=>setTheme(theme === 'light' ? 'dark' : 'light')} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`} title="Switch color theme"><span>Theme</span></button><a className="mini-cta" href="#contact">Let's talk <Arrow /></a><button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="main-nav" aria-label="Toggle navigation" onClick={()=>setMenuOpen(!menuOpen)}><span></span><span></span></button></div>
    </header>
    <main id="main-content">
      <section className="hero" id="top">
        <div className="hero-copy"><div className="availability"><span></span>Open to internships &amp; junior opportunities</div><p className="eyebrow">B.E. Computer Engineering · Kathmandu University</p><h1>I build web experiences that feel <em>clear, useful and alive.</em></h1><p className="hero-intro">I’m Darbin, an early-career developer in Nepal turning ideas into responsive, practical web products with PHP, MySQL, JavaScript, and a lot of curiosity.</p><div className="hero-actions"><a className="button primary" href="#projects">Explore my work <Arrow /></a><a className="button secondary" href="./assets/files/Darbin_Joshi_CV.pdf" target="_blank" rel="noreferrer">View résumé <External /></a></div></div>
        <div className="hero-visual" aria-label="Developer profile summary"><div className="orbit orbit-one"></div><div className="orbit orbit-two"></div><div className="profile-disc"><span className="disc-kicker">Hello, I'm</span><strong>DJ</strong><span>Dhulikhel, Nepal</span></div><div className="floating-note note-code"><span>Current focus</span><strong>Full-stack web</strong></div><div className="floating-note note-exp"><span>Industry experience</span><strong>6-month internship</strong></div><div className="code-chip chip-one">&lt;build /&gt;</div><div className="code-chip chip-two">{'{ learn }'}</div></div>
        <div className="hero-foot"><span>Scroll to explore</span><div className="scroll-line"></div><span>Portfolio · 2026</span></div>
      </section>
      <section className="marquee" aria-label="Technology highlights"><div><span>HTML</span><i>✦</i><span>CSS</span><i>✦</i><span>JavaScript</span><i>✦</i><span>PHP</span><i>✦</i><span>MySQL</span><i>✦</i><span>C++</span><i>✦</i><span>React</span></div></section>
      <section className="section about" id="about" data-reveal><div className="section-label"><span>01</span>About me</div><div className="about-grid"><div><h2>Curious by nature.<br/><span>Practical by choice.</span></h2></div><div className="about-copy"><p className="lead">I’m a first-year Computer Engineering student who learns best by building real things—from educational platforms to full-stack quiz systems.</p><p>My internship at EasyMy Learning introduced me to professional development workflows, debugging, feedback, and maintaining code in a remote team. Now I’m deepening my fundamentals while creating products that solve real student problems.</p><div className="values"><span><b>01</b>Learn deliberately</span><span><b>02</b>Build for people</span><span><b>03</b>Improve continuously</span></div></div></div></section>
      <section className="section experience" id="experience" data-reveal><div className="section-label light"><span>02</span>Experience</div><div className="experience-grid"><div className="experience-heading"><p>Where I've contributed</p><h2>Learning through<br/>real work.</h2></div><div><article className="experience-card"><div className="experience-date">Nov 2025 — May 2026</div><div><p className="role-type">Professional experience</p><h3>Junior Software Developer Intern</h3><a href="https://www.easymylearning.com" target="_blank" rel="noreferrer">EasyMy Learning Pvt. Ltd. <External /></a><ul>{experience.map(item=><li key={item}>{item}</li>)}</ul></div></article></div></div></section>
      <section className="section projects" id="projects" data-reveal><div className="projects-head"><div><div className="section-label"><span>03</span>Selected projects</div><h2>Ideas turned into<br/><span>working software.</span></h2></div><div className="filters" aria-label="Filter projects">{categories.map(category=><button key={category} type="button" className={filter===category?'active':''} aria-pressed={filter===category} onClick={()=>setFilter(category)}>{category}</button>)}</div></div><div className="project-list">{shownProjects.map(project=><article key={project.title} className={`project-row ${project.accent}`} data-category={project.category}><span className="project-number">{String(projects.indexOf(project)+1).padStart(2,'0')}</span><div className="project-main"><div className="project-meta"><span>{project.category}</span><span>{project.status}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="project-stack">{project.stack.map(item=><span key={item}>{item}</span>)}</div></div><div className="project-glyph" aria-hidden="true"><span>{String(projects.indexOf(project)+1).padStart(2,'0')}</span><Arrow /></div></article>)}</div><p className="project-note">I’m happy to explain the architecture, decisions, and lessons from each project in an interview. Project links will be added as they’re published.</p></section>
      <section className="section skills" id="skills" data-reveal><div className="skills-intro"><div className="section-label light"><span>04</span>Skills</div><h2>A growing toolkit,<br/>grounded in fundamentals.</h2><p>I care about clean interfaces, understandable code, reliable data, and improving with every build.</p></div><div className="skill-progress-area"><p className="skill-note">A snapshot of what I’m practicing and applying in projects. Progress grows with every build.</p><div className="skill-progress-grid">{skills.map(skill=><article className="skill-progress-card" key={skill.name}><div className="skill-card-head"><div><h3>{skill.name}</h3><p>{skill.category}</p></div></div><div className="skill-track" role="img" aria-label={`${skill.name}: ${skill.stage}`}><span style={{'--skill-progress': `${skill.progress}%`}} /></div><div className="skill-card-foot"><span>Progress</span><strong>{skill.stage}</strong></div></article>)}</div></div></section>      <section className="section education" id="education" data-reveal><div className="section-label"><span>05</span>Education</div><div className="education-grid"><h2>Engineering the<br/><span>foundation.</span></h2><div className="education-list"><article><span className="education-year">2026 — Present</span><div><h3>B.E. Computer Engineering</h3><p>Kathmandu University · Dhulikhel, Nepal</p><small>First year · Programming, mathematics, engineering, and software foundations</small></div></article><article><span className="education-year">Completed</span><div><h3>Higher Secondary Education (+2)</h3><p>Nepal Education Board · Computer Science</p></div></article></div></div></section>
      <section className="contact" id="contact" data-reveal><div className="contact-copy"><div className="section-label light"><span>06</span>Contact</div><p className="contact-kicker">Have a role, project, or idea?</p><h2>Let's build something<br/><em>worth using.</em></h2><p>I’m open to internships, junior web-development opportunities, mentorship, and thoughtful collaborations.</p><div className="contact-links"><a href="mailto:padamraji34@gmail.com">padamraji34@gmail.com <Arrow /></a><a href="tel:+9779824645273">+977 982-4645273 <Arrow /></a></div></div><form className="contact-form" onSubmit={sendMessage}><div className="field-row"><label>Your name<input name="name" autoComplete="name" maxLength="120" placeholder="Jane Smith" required/></label><label>Email address<input name="email" type="email" autoComplete="email" maxLength="190" placeholder="jane@company.com" required/></label></div><label>Subject<input name="subject" maxLength="180" placeholder="Internship or project opportunity" required/></label><label>What would you like to discuss?<textarea name="message" rows="5" minLength="10" maxLength="3000" placeholder="Tell me about the opportunity or project…" required/></label><div className="form-foot"><button className="button primary" type="submit">Send message <Arrow /></button><span id="form-status" role="status" aria-live="polite">{formStatus}</span></div></form></section>
    </main>
    <footer><a className="brand footer-brand" href="#top"><span className="brand-mark">DJ</span><span className="brand-text">Darbin Joshi<small>Computer Engineer</small></span></a><p>Designed with intent. Built with curiosity.</p><div><a href="mailto:padamraji34@gmail.com">Email</a><a href="https://github.com/padamrajj34-sketch" target="_blank" rel="noreferrer">GitHub</a><a href="#top">Back to top ↑</a></div><small>© {new Date().getFullYear()} Darbin Joshi. All rights reserved.</small></footer>
  </div>
}

