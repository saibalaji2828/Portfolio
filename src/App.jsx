import "./App.css";

import aiResumeAnalyzerImage from "./assets/images/ai-resume-analyzer.png";
import expenseTrackerImage from "./assets/images/personal img.png";
import portfolioImage from "./assets/images/portfolio img.png";
import profileImage from "./assets/images/profile.jpeg";

// Certificate images
import aiQuizCertificate from "./assets/images/ai quiz.jpeg";
import generativeAICertificate from "./assets/images/generative ai2.png";
import deloitteCertificate from "./assets/images/deloitte1.png";

function App() {
  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="nav-container">

          <a href="#home" className="logo">
            SAI BALAJI
          </a>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#certificates">Certificates</a>
            <a href="#contact">Contact</a>
          </div>

          <a href="#contact" className="nav-talk">
            Let's Talk
          </a>

        </div>
      </nav>


      {/* ================= HOME ================= */}
      <section id="home" className="home-section">

        <div className="home-container">

          <div className="home-content">

            <p className="home-small-text">
              WELCOME TO MY PORTFOLIO
            </p>

            <h1>
              Hi, I'm
              <br />
              <span>Sai Balaji Reddy</span>
            </h1>

            <h2>
              Computer Science and Engineering
              <br />
              <span>(AI & ML)</span>
            </h2>

            <p className="home-description">
              Passionate about building real-world projects
              and exploring new technologies.
            </p>

            <div className="home-buttons">

              <a href="#projects" className="primary-btn">
                View Projects
              </a>

              <a href="#contact" className="secondary-btn">
                Contact Me
              </a>

            </div>

            <div className="social-links">

              <a
                href="https://github.com/saibalaji2828/Portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/sai-balaji-reddy-0aa8a62b7"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>

            </div>

          </div>


          <div className="home-image-container">

            <div className="home-image-circle">

              <img
                src={profileImage}
                alt="Sai Balaji Reddy"
              />

            </div>

          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}
      <section id="about" className="about-section">

        <div className="about-container">

          {/* LEFT SIDE */}

          <div className="about-intro">

            <p className="about-small-title">
              ABOUT ME
            </p>

            <h2>
              Get to Know
              <br />
              <span>Me</span> Better
            </h2>

            <div className="about-line"></div>

            <p className="about-description">
              I am N. Sai Balaji Reddy, a B.Tech CSE (AI & ML)
              student who is passionate about technology,
              problem-solving, and building real-world applications.
            </p>

            <p className="about-description">
              I enjoy learning new tools and continuously improving
              my skills in web development and artificial intelligence.
              I aim to use my knowledge and creativity to develop
              useful solutions and meaningful projects.
            </p>

            <div className="about-socials">

              <a
                href="https://www.linkedin.com/in/sai-balaji-reddy-0aa8a62b7"
                target="_blank"
                rel="noopener noreferrer"
                className="about-social"
                aria-label="LinkedIn"
              >
                in
              </a>

              <a
                href="https://github.com/saibalaji2828"
                target="_blank"
                rel="noopener noreferrer"
                className="about-social"
                aria-label="GitHub"
              >
                Git
              </a>

              <a
                href="#contact"
                className="about-social"
                aria-label="Email"
              >
                ✉
              </a>

            </div>

          </div>


          {/* RIGHT SIDE */}

          <div className="about-cards">

            {/* EDUCATION */}

            <div className="about-card">

              <div className="about-card-icon">
                🎓
              </div>

              <div className="about-card-content">

                <h3>
                  Education
                </h3>

                <strong>
                  B.Tech CSE (AI & ML)
                </strong>

                <p>
                  Sri Venkateswara College
                  <br />
                  of Engineering
                </p>

                <p>
                  2023 – 2027 | <strong>CGPA: 7.36</strong>
                </p>

              </div>

            </div>


            {/* LOCATION */}

            <div className="about-card">

              <div className="about-card-icon">
                📍
              </div>

              <div className="about-card-content">

                <h3>
                  Location
                </h3>

                <p className="about-large-text">
                  Tirupati,
                  <br />
                  Andhra Pradesh
                </p>

              </div>

            </div>


            {/* INTERESTS */}

            <div className="about-card">

              <div className="about-card-icon">
                🎯
              </div>

              <div className="about-card-content">

                <h3>
                  Interests
                </h3>

                <p className="about-interest-text">
                  Web Development,
                  <br />
                  Artificial Intelligence,
                  <br />
                  Machine Learning,
                  <br />
                  Problem Solving,
                  <br />
                  Building Real-World Projects
                </p>

              </div>

            </div>


            {/* CAREER GOAL */}

            <div className="about-card">

              <div className="about-card-icon">
                💡
              </div>

              <div className="about-card-content">

                <h3>
                  Career Goal
                </h3>

                <p>
                  To work on innovative technologies,
                  build meaningful solutions, and grow
                  as a developer in the fields of Web
                  Development and Artificial Intelligence.
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* BOTTOM STATS */}

        <div className="about-stats">

          <div className="about-stat">

            <div className="about-stat-icon">
              &lt;/&gt;
            </div>

            <div>

              <strong>
                3
              </strong>

              <span>
                Projects
              </span>

            </div>

          </div>


          <div className="about-stat">

            <div className="about-stat-icon">
              🎓
            </div>

            <div>

              <strong>
                7.36
              </strong>

              <span>
                CGPA
              </span>

            </div>

          </div>


          <div className="about-stat">

            <div className="about-stat-icon">
              📅
            </div>

            <div>

              <strong>
                2027
              </strong>

              <span>
                Graduation Year
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}
      <section id="skills" className="skills-section">

        <div className="section-heading">

          <p className="section-small-title">
            MY SKILLS
          </p>

          <h2>
            Technical <span>Skills</span>
          </h2>

          <div className="section-line"></div>

        </div>


        <div className="skills-container">

          <div className="skill-box">

            <h3>
              Programming Languages
            </h3>

            <div className="skill-list">
              <span>Python</span>
            </div>

          </div>


          <div className="skill-box">

            <h3>
              Frontend
            </h3>

            <div className="skill-list">
              <span>React.js</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Tailwind CSS</span>
              <span>Bootstrap</span>
            </div>

          </div>


          <div className="skill-box">

            <h3>
              Backend
            </h3>

            <div className="skill-list">
              <span>Node.js</span>
              <span>Express.js</span>
            </div>

          </div>


          <div className="skill-box">

            <h3>
              Tools
            </h3>

            <div className="skill-list">
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
            </div>

          </div>

        </div>

      </section>


      {/* ================= EXPERIENCE ================= */}
      <section id="experience" className="experience-section">

        <div className="section-heading">

          <p className="section-small-title">
            MY EXPERIENCE
          </p>

          <h2>
            Academic & <span>Projects</span>
          </h2>

          <div className="section-line"></div>

        </div>


        <div className="experience-container">

          {/* EXPERIENCE 01 */}

          <div className="experience-item">

            <div className="experience-dot"></div>

            <div className="experience-content">

              <span className="experience-date">
                2026 - Present
              </span>

              <h3>
                Academic & Independent Projects
              </h3>

              <p>
                Worked on practical projects involving web
                development, computer vision, and application
                development to strengthen technical and
                problem-solving skills.
              </p>

              <ul className="experience-features">

                <li>
                  Developed responsive web applications.
                </li>

                <li>
                  Worked on computer vision and AI-based projects.
                </li>

                <li>
                  Practiced real-world problem solving.
                </li>

              </ul>

              <div className="experience-tech">
                <span>React.js</span>
                <span>Python</span>
                <span>JavaScript</span>
              </div>

            </div>

          </div>


          {/* EXPERIENCE 02 */}

          <div className="experience-item">

            <div className="experience-dot"></div>

            <div className="experience-content">

              <span className="experience-date">
                Virtual Internship
              </span>

              <h3>
                Deloitte Virtual Internship
              </h3>

              <p>
                Completed virtual internship and training
                activities focused on data analytics,
                professional skills, and practical problem
                solving.
              </p>

              <ul className="experience-features">

                <li>
                  Worked on practical business scenarios.
                </li>

                <li>
                  Developed analytical and problem-solving skills.
                </li>

                <li>
                  Gained exposure to professional work practices.
                </li>

              </ul>

              <div className="experience-tech">
                <span>Data Analytics</span>
                <span>Problem Solving</span>
                <span>Professional Skills</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}
      <section id="projects" className="projects-section">

        <div className="projects-heading">

          <p className="projects-small-title">
            MY PROJECTS
          </p>

          <h2>
            Featured <span>Projects</span>
          </h2>

          <div className="projects-heading-line"></div>

          <p className="projects-subtitle">
            Here are some of the projects I have worked on to
            apply my skills and solve real-world problems.
          </p>

        </div>


        <div className="projects-list">

          {/* PROJECT 01 */}

          <div className="project-card">

            <div className="project-image-container">

              <img
                src={aiResumeAnalyzerImage}
                alt="AI Resume Analyzer"
                className="project-image"
              />

            </div>


            <div className="project-content">

              <div className="project-number">
                01
              </div>

              <h3>
                AI Resume Analyzer
              </h3>

              <div className="project-tech">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Node.js</span>
              </div>

              <p>
                Built an AI-powered application that analyzes resumes,
                identifies relevant skills, and provides feedback to
                help users improve their resumes.
              </p>


              <div className="project-buttons">

                <a
                  href="https://github.com/saibalaji2828/ai-resume-analyzer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn github-btn"
                >

                  <span className="github-symbol">
                    GitHub
                  </span>

                  View Code

                  <span>
                    ↗
                  </span>

                </a>

                <a
                  href="https://ai-resume-analyzer-3pvx.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn live-btn"
                >

                  <span>
                    🔗
                  </span>

                  Live Demo

                  <span>
                    ↗
                  </span>

                </a>

              </div>

            </div>

          </div>


          {/* PROJECT 02 */}

          <div className="project-card">

            <div className="project-image-container">

              <img
                src={expenseTrackerImage}
                alt="Personal Expense Tracker"
                className="project-image"
              />

            </div>


            <div className="project-content">

              <div className="project-number">
                02
              </div>

              <h3>
                Personal Expense Tracker
              </h3>

              <div className="project-tech">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>

              <p>
                Developed an application to record,
                categorize, and track personal expenses
                for better budget management.
              </p>


              <div className="project-buttons">

                <a
                  href="https://github.com/saibalaji2828/personal-expense-tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn github-btn"
                >

                  <span className="github-symbol">
                    GitHub
                  </span>

                  View Code

                  <span>
                    ↗
                  </span>

                </a>


                <a
                  href="https://personal-expense-tracker-ruby-rho.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn live-btn"
                >

                  <span>
                    🔗
                  </span>

                  Live Demo

                  <span>
                    ↗
                  </span>

                </a>

              </div>

            </div>

          </div>


          {/* PROJECT 03 */}

          <div className="project-card">

            <div className="project-image-container">

              <img
                src={portfolioImage}
                alt="Portfolio Website"
                className="project-image"
              />

            </div>


            <div className="project-content">

              <div className="project-number">
                03
              </div>

              <h3>
                Portfolio Website
              </h3>

              <div className="project-tech">
                <span>HTML</span>
                <span>CSS</span>
              </div>

              <p>
                Built a personal portfolio website to showcase
                projects, technical skills, and professional
                information.
              </p>


              <div className="project-buttons">

                <a
                  href="https://github.com/saibalaji2828/Portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn github-btn"
                >

                  <span className="github-symbol">
                    GitHub
                  </span>

                  View Code

                  <span>
                    ↗
                  </span>

                </a>


              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CERTIFICATES ================= */}
      <section id="certificates" className="certificates-section">

        <div className="section-heading">

          <p className="section-small-title">
            MY CERTIFICATES
          </p>

          <h2>
            Certificates & <span>Achievements</span>
          </h2>

          <div className="section-line"></div>

          <p className="certificates-subtitle">
            Here are some of the certifications I have earned to enhance
            my skills and knowledge in different technologies.
          </p>

        </div>


        <div className="certificates-container">

          {/* CERTIFICATE 01 - INDIA AI QUIZ */}

          <div className="certificate-card">

            <div className="certificate-placeholder">

              <img
                src={aiQuizCertificate}
                alt="India AI Quiz Certificate"
                className="certificate-image"
              />

            </div>

            <div className="certificate-info">

              <h3>
                India AI Quiz Certificate
              </h3>

              <p>
                Infosys
              </p>

              <a
                href={aiQuizCertificate}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-btn"
              >
                <span>
                  View Certificate
                </span>

                <span>
                  ↗
                </span>
              </a>

            </div>

          </div>


          {/* CERTIFICATE 02 - GENERATIVE AI */}

          <div className="certificate-card">

            <div className="certificate-placeholder">

              <img
                src={generativeAICertificate}
                alt="Generative AI Certificate"
                className="certificate-image"
              />

            </div>

            <div className="certificate-info">

              <h3>
                Generative AI Certificate
              </h3>

              <p>
                Online Course
              </p>

              <a
                href={generativeAICertificate}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-btn"
              >
                <span>
                  View Certificate
                </span>

                <span>
                  ↗
                </span>
              </a>

            </div>

          </div>


          {/* CERTIFICATE 03 - DELOITTE */}

          <div className="certificate-card">

            <div className="certificate-placeholder">

              <img
                src={deloitteCertificate}
                alt="Deloitte Certificate"
                className="certificate-image"
              />

            </div>

            <div className="certificate-info">

              <h3>
                Deloitte Certificate
              </h3>

              <p>
                Deloitte
              </p>

              <a
                href={deloitteCertificate}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-btn"
              >
                <span>
                  View Certificate
                </span>

                <span>
                  ↗
                </span>
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}
      <section id="contact" className="contact-section">

        {/* Decorative background elements */}
        <div className="contact-orb contact-orb-left"></div>
        <div className="contact-orb contact-orb-right"></div>
        <div className="contact-dot-grid contact-dot-grid-left"></div>
        <div className="contact-dot-grid contact-dot-grid-right"></div>

        <div className="section-heading contact-heading">

          <p className="section-small-title">
            GET IN TOUCH
          </p>

          <h2>
            Contact <span>Me</span>
          </h2>

          <div className="section-line"></div>

          <p className="contact-intro">
            Feel free to reach out for collaborations, opportunities,
            <br className="contact-intro-break" />
            or just a friendly hello!
          </p>

        </div>


        <div className="contact-container">

          {/* CONTACT INFORMATION */}
          <div className="contact-card contact-info-card">

            <h3>
              Contact <span>Information</span>
            </h3>

            <p className="contact-card-description">
              Here are the best ways to reach me. I'll try to get back to
              you as soon as possible.
            </p>

            <div className="contact-details">

              <a
                href="mailto:saibalajireddy82@gmail.com"
                className="contact-detail"
              >
                <span className="contact-detail-icon">✉</span>

                <span className="contact-detail-content">
                  <strong>Email</strong>
                  <span>saibalajireddy82@gmail.com</span>
                </span>
              </a>


              <div className="contact-detail">
                <span className="contact-detail-icon">⌖</span>

                <span className="contact-detail-content">
                  <strong>Location</strong>
                  <span>Tirupati, Andhra Pradesh, India</span>
                </span>
              </div>

            </div>


            <div className="contact-divider"></div>


            <div className="contact-connect">

              <h3>
                Connect with <span>Me</span>
              </h3>

              <p>
                You can also find me on these platforms.
              </p>


              <div className="contact-socials">

                <a
                  href="https://www.linkedin.com/in/sai-balaji-reddy-0aa8a62b7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social"
                  aria-label="LinkedIn"
                >
                  <span className="contact-social-icon">in</span>
                  <span>LinkedIn</span>
                </a>


                <a
                  href="https://github.com/saibalaji2828"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social"
                  aria-label="GitHub"
                >
                  <span className="contact-social-icon">◉</span>
                  <span>GitHub</span>
                </a>


                <a
                  href="mailto:saibalajireddy82@gmail.com"
                  className="contact-social"
                  aria-label="Email"
                >
                  <span className="contact-social-icon">✉</span>
                  <span>Email</span>
                </a>

              </div>

            </div>

          </div>


          {/* SEND MESSAGE */}
          <div className="contact-card contact-message-card">

            <h3>
              Send Me a <span>Message</span>
            </h3>

            <p className="contact-card-description">
              Have a question, project idea, or just want to say hi?
              Fill out the form below and I'll get back to you.
            </p>


            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Your message has been submitted.");
              }}
            >

              <div className="contact-form-row">

                <div className="contact-input-wrapper">
                  <span className="contact-input-icon">♙</span>

                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                  />
                </div>


                <div className="contact-input-wrapper">
                  <span className="contact-input-icon">✉</span>

                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                  />
                </div>

              </div>


              <div className="contact-input-wrapper">
                <span className="contact-input-icon">◇</span>

                <input
                  type="text"
                  placeholder="Subject"
                  required
                />
              </div>


              <div className="contact-input-wrapper contact-textarea-wrapper">
                <span className="contact-input-icon">▢</span>

                <textarea
                  placeholder="Your Message"
                  rows="6"
                  required
                ></textarea>
              </div>


              <button
                type="submit"
                className="contact-submit-btn"
              >
                <span>➤</span>
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <p>
          © 2026 Sai Balaji Reddy. All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;