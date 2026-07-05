import React, { useState } from 'react';

// SVG Icons helper component
const Icon = ({ name, size = 20, className = "" }) => {
  const icons = {
    award: (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
    book: (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
        <path d="M6 6h10M6 10h10M6 14h10" />
      </svg>
    ),
    calendar: (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
        <line x1="16" x2="16" y1="2" y2="6" />
        <line x1="8" x2="8" y1="2" y2="6" />
        <line x1="3" x2="21" y1="10" y2="10" />
      </svg>
    ),
    cpu: (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect width="16" height="16" x="4" y="4" rx="2" />
        <rect width="6" height="6" x="9" y="9" rx="1" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
      </svg>
    ),
    download: (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
      </svg>
    ),
    fileText: (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4M10 9H8M16 13H8M16 17H8" />
      </svg>
    ),
    map: (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M3 6 9 3l6 3 6-3v15l-6 3-6-3-6 3Z" />
        <path d="M9 3v15M15 6v15" />
      </svg>
    ),
    check: (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M20 6 9 17l-5-5" />
      </svg>
    ),
    user: (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    activity: (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    terminal: (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" x2="20" y1="19" y2="19" />
      </svg>
    )
  };
  return icons[name] || null;
};

export default function App() {
  const [activeKolbTab, setActiveKolbTab] = useState('ce');
  const [activeWorkshop, setActiveWorkshop] = useState(0);

  // Student Info
  const student = {
    name: "Somula Sudharshan Reddy",
    regNo: "252U1R1231",
    program: "B.Tech (Computer Science & Engineering - Core)",
    section: "CSE-CORE-1E",
    year: "1st Year",
    academicYear: "2025-2026",
    center: "Centre for Talent Enrichment (CTE)",
    elective: "Sports"
  };

  // Workshops Data
  const workshops = [
    {
      title: "Robo Race: Line Follower Robot",
      id: "roborace",
      date: "28 Apr, 2026",
      icon: "cpu",
      bgColor: "rgba(99, 102, 241, 0.1)",
      borderColor: "rgba(99, 102, 241, 0.2)",
      snapshot: "Date: 28 April, 2026",
      overview: "A hands-on technical session focused on the complete build and programming cycle of a Line Follower Robot. The workshop used Arduino UNO microcontrollers, L298N motor drivers, and infrared (IR) sensor arrays to construct a physical agent capable of tracking and following a high-contrast path on a track.",
      participation: "I participated as an active builder. I received a pre-built mechanical chassis, allowing me to focus on wiring the electronics, connecting the sensor array outputs to the Arduino digital/analog pins, and writing the control logic in C++ within the Arduino IDE. I calibrated the sensors and tested the robot's performance on a physical test track.",
      skills: "Hardware integration, Arduino microcontroller programming, motor driver circuitry (H-Bridge concepts via the L298N chip), sensor threshold comparator logic, PWM (Pulse Width Modulation) for motor speed control, and debugging electrical circuits using diagnostic LEDs.",
      learned: "I learned how a microcontroller acts as the central processor in a hardware loop, reading inputs from IR phototransistors (which detect black vs. white surfaces based on reflection intensity) and executing conditional control loops to adjust motor states (Forward, Left, Right, Stop) dynamically.",
      challenges: "A major challenge was sensor calibration. The reflectance values shifted under different lighting conditions, causing the robot to lose track of the line at sharp turns. I overcame this by implementing a calibration routine in the code, which normalized the threshold values before starting the run.",
      academicConnection: "This workshop directly connects to computer architecture and embedded systems. Writing code that interacts directly with registers and GPIO pins helped me understand how low-level software drives physical hardware, a core topic in CSE.",
      practical: "I can apply the feedback loop logic learned here to write software-based controllers. For instance, in game development or basic simulation programs, understanding how to adjust speed or steering based on positional error is a valuable mechanic.",
      personalReflection: "During the Line Follower robot build, I realized how delicate hardware-software interactions can be. Seeing the robot adjust its trajectory in real time was extremely rewarding. However, calibrating the sensors under the classroom lights was challenging, as the ambient light values kept drifting. The exercise taught me that coding in a simulation is very different from deploying software on actual hardware."
    },
    {
      title: "AI RoboDog: Vision & Motion Control",
      id: "robodog",
      date: "5 May, 2026",
      icon: "activity",
      bgColor: "rgba(13, 148, 136, 0.1)",
      borderColor: "rgba(13, 148, 136, 0.2)",
      snapshot: "Date: 5 May, 2026",
      overview: "An introductory session exploring the fundamentals of quadrupedal robotic motion, sensory perception, and autonomous navigation. The workshop focused on the integration of artificial intelligence and computer vision to enable robotic systems to navigate real-world environments dynamically.",
      participation: "I attended the workshop as an observer and participant in the interactive demonstrations. I examined how different gaits (like trot and walk) are modeled mathematically and observed live demonstrations of real-time object tracking and obstacle avoidance.",
      skills: "Quadruped robotics kinematics, gait patterns, sensory perception systems (ultrasonic sensors, LiDAR, and cameras), computer vision algorithms for edge detection, and autonomous navigation architectures (SLAM).",
      learned: "I learned how robots perceive spatial layouts and map their surroundings using sensor fusion. I gained an understanding of path planning, which allows an autonomous system to compute an optimal route through a maze of obstacles in real time.",
      challenges: "The demonstration highlighted the difficulty of computing real-time kinematics. Processing high-frequency sensor data while maintaining balance requires substantial processing power and efficient algorithms, showing the practical limits of edge computing.",
      academicConnection: "This relates directly to the study of algorithms (such as A* and Dijkstra's for pathfinding) and artificial intelligence. Seeing these concepts implemented in physical hardware showed how abstract graph theory is applied in robotics.",
      practical: "The pathfinding and mapping concepts are directly applicable to software simulation, game design (writing AI pathfinding scripts), and database search optimizations where path cost is calculated.",
      personalReflection: "Watching the AI RoboDog navigate objects in real time was fascinating. It showed me how computer vision can bridge the digital and physical worlds. The complexity of modeling four-legged walking patterns (locomotion kinematics) made me appreciate the math behind computer science and gave me a strong motivation to study matrix operations and vector algebra."
    },
    {
      title: "Gesture Tech",
      id: "gesture",
      date: "15 Apr, 2026",
      icon: "terminal",
      bgColor: "rgba(217, 119, 6, 0.1)",
      borderColor: "rgba(217, 119, 6, 0.2)",
      snapshot: "Date: 15 April, 2026",
      overview: "A specialized technical workshop focusing on human-machine interaction through motion tracking. Participants explored how data from spatial sensors can be translated into real-time control signals for mechanical and software systems.",
      participation: "I participated in the experimental lab, wiring an Inertial Measurement Unit (IMU) sensor to a processing board. I wrote code to capture raw accelerometer and gyroscope outputs and map these values to control a software cursor and simulated mechanical robotic arm on a PC.",
      skills: "Inertial measurement unit (IMU) interfacing, spatial coordinate tracking, angular velocity and acceleration calculations (pitch, roll, yaw), HMI design, and signal processing filters (low-pass filtering).",
      learned: "I learned how motion in physical space is quantized into numerical values by accelerometers and gyroscopes. I learned how these data points must be cleaned of high-frequency noise and drift using software filters before being translated into coordinates.",
      challenges: "A major challenge was sensor drift. The gyroscope readings accumulated minor errors over time, causing the screen cursor to slowly drift even when the sensor was stationary. I resolved this by applying a basic complementary filter in the software to combine accelerometer and gyroscope data.",
      academicConnection: "This workshop connects to human-computer interaction (HCI) and mathematical foundations of computer graphics. Translating 3D coordinate rotations into 2D screens uses matrix transformations, which are fundamental in computer graphics and game engine design.",
      practical: "I can use these sensor mapping concepts to develop alternative accessibility inputs for software applications (e.g., head-tracking or hand-gesture inputs for users with physical impairments).",
      personalReflection: "The Gesture Tech workshop was highly engaging because it felt like creating a new gaming controller. Tuning the software filter to eliminate cursor jitter was difficult, but it showed me the value of digital signal processing. Understanding how orientation angles (pitch, roll, yaw) are calculated has sparked my curiosity about computer graphics and VR systems."
    },
    {
      title: "Base44 Hands-On App Building",
      id: "base44",
      date: "18 Nov, 2025",
      icon: "award",
      bgColor: "rgba(16, 185, 129, 0.1)",
      borderColor: "rgba(16, 185, 129, 0.2)",
      snapshot: "Date: 18 November, 2025",
      overview: "A comprehensive hands-on workshop focused on AI-powered, no-code application development. The session walked participants through the design, database modeling, and deployment of cloud applications, progressing from simple layouts to interactive, AI-integrated workflows.",
      participation: "I completed all three progressive levels of the workshop. I built a functional Quiz App, designed a Job Board application with database tables, and configured a mock AI Interview Prep tool by integrating external automation services to handle AI prompts.",
      skills: "No-code software architecture, visual UI editing, database schema design (relational data models), user authentication flow, workflow automation (using n8n-style integrations), and API connectivity with language models.",
      learned: "I learned how modern web applications are structured. Even without writing code, I had to define data types, model database relationships (e.g. mapping a job posting to a company record), and structure conditional logic flows (e.g. sending an email upon user registration).",
      challenges: "During Level 3, configuring the automation workflows to pass data from the application database to the AI model API required exact parameter formatting. I initially encountered empty payload responses, which I resolved by mapping the JSON data fields correctly in the workflow builder.",
      academicConnection: "This connects directly to software engineering, database management systems (DBMS), and web architecture. Understanding data modeling, schema relations, and API endpoints is critical for full-stack software development.",
      practical: "I can use these no-code and workflow automation concepts to build quick prototypes of ideas. This allows for rapid validation of software designs before committing to writing custom backend and frontend code.",
      personalReflection: "The Base44 workshop was incredibly eye-opening because it showed how quickly ideas can be turned into functional apps. Connecting the app database to external API automation steps felt like building legos with data. While I enjoy writing raw code, seeing the speed of no-code tools and AI-driven workflows has shown me how to prototype projects rapidly for my classes and hackathons."
    }
  ];

  // Self Assessment Ratings
  const selfAssessment = [
    { name: "Skill Development", score: 4, desc: "Practical ability improvement compared to the beginning of the year." },
    { name: "Application of Learning", score: 4, desc: "Effectively applying club learnings in academics or personal life." },
    { name: "Confidence & Expression", score: 4, desc: "Increase in confidence, stage presence, or self-expression." },
    { name: "Teamwork & Collaboration", score: 4, desc: "Working with peers, coordinating, and contributing to group success." },
    { name: "Discipline & Commitment", score: 4, desc: "Consistency, punctuality, and dedication developed through activities." },
    { name: "Creativity & Innovation", score: 4, desc: "Enhancement of creativity, problem-solving, or innovative thinking." },
    { name: "Overall Learning Outcome", score: 4, desc: "Summary of overall growth through the club this year." },
    { name: "Knowledge of Club Discipline", score: 3, desc: "New knowledge or techniques learned in the club." },
    { name: "Emotional & Social Growth", score: 3, desc: "Gaining emotional balance, resilience, and social bonding." }
  ];

  // Kolb Cycle stages text
  const kolbCycle = {
    ce: {
      title: "Concrete Experience",
      desc: "My concrete experience involved active participation in four hands-on sessions: assembling and coding a line-follower robot, analyzing kinematics and vision demonstrations of the quadruped AI RoboDog, wiring and mapping sensor inputs from IMUs in Gesture Tech, and building web apps using no-code database platforms in the Base44 workshop."
    },
    ro: {
      title: "Reflective Observation",
      desc: "During the sessions, I observed how minor real-world variations alter logic outcomes: ambient light shifting sensor thresholds, gyroscopic drift accumulating orientation errors, and database relational errors breaking subsequent application workflows. This taught me the importance of feedback loops, filters, and schema planning."
    },
    ac: {
      title: "Abstract Conceptualization",
      desc: "I connected these practical activities to core computer science theory: the line follower as a closed-loop feedback controller, RoboDog locomotion as SLAM navigation and sensor fusion, Gesture Tech coordinate mapping as 3D rotational matrix transformations, and the Base44 workshop as the Model-View-Controller (MVC) architectural pattern."
    },
    ae: {
      title: "Active Experimentation",
      desc: "I plan to apply these concepts in my coursework and projects: leveraging no-code services for quick UI prototyping, using mathematical filters for signal processing, and designing robust data schemas for relational databases. These workshops serve as a strong foundation for future hands-on experimentation."
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      {/* Deployment Link Banner / PDF Header */}
      <div style={{
        background: 'rgba(99, 102, 241, 0.1)',
        borderBottom: '1px solid rgba(99, 102, 241, 0.2)',
        padding: '12px 24px',
        textAlign: 'center',
        fontSize: '14px',
        fontFamily: 'var(--font-heading)',
        color: '#f8fafc',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '8px',
        zIndex: 100
      }}>
        <span>🌐 <strong>Deployment Link:</strong></span>
        <a href="https://term-4-portofolio.vercel.app/" target="_blank" rel="noopener noreferrer" style={{
          color: '#6366f1',
          textDecoration: 'underline',
          fontWeight: '600'
        }}>
          https://term-4-portofolio.vercel.app/
        </a>
      </div>

      {/* Hero Section */}
      <section style={{ padding: '80px 0 40px 0', position: 'relative' }}>
        {/* Glow circles */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '15%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'var(--primary-glow)',
          filter: 'blur(120px)',
          zIndex: -1,
          animation: 'pulseGlow 10s infinite'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '15%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'var(--secondary-glow)',
          filter: 'blur(120px)',
          zIndex: -1,
          animation: 'pulseGlow 8s infinite alternate'
        }} />

        <div className="container animate-fade-in" style={{ textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            padding: '6px 16px',
            borderRadius: '30px',
            fontSize: '13px',
            color: 'var(--text-secondary)',
            marginBottom: '24px',
            fontFamily: 'var(--font-heading)'
          }}>
            <Icon name="award" size={14} style={{ color: 'var(--secondary-color)' }} />
            Centre for Talent Enrichment (CTE) Portfolio
          </div>
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '16px'
          }}>
            Annual Reflective <span className="text-gradient">Portfolio</span>
          </h1>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '18px',
            maxWidth: '700px',
            margin: '0 auto 32px auto'
          }}>
            An interactive repository documenting technical enrichment, practical system architecture, and experiential learning reflections for the academic year 2025–2026.
          </p>
        </div>
      </section>

      {/* Student Profile Section (Institutional Center row removed) */}
      <section style={{ padding: '60px 0' }} id="profile">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div className="glass-panel animate-fade-in" style={{ padding: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{
                  background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)',
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)'
                }}>
                  <Icon name="user" size={24} style={{ color: 'white' }} />
                </div>
                <div>
                  <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 700 }}>Student Profile</h2>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Official University Record</p>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { label: "Full Name", value: student.name },
                  { label: "Registration No.", value: student.regNo },
                  { label: "Degree Program", value: student.program },
                  { label: "Section / Group", value: student.section },
                  { label: "Academic Year", value: student.academicYear },
                  { label: "Talent Enrichment Elective Name", value: student.elective }
                ].map((item, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    paddingBottom: '10px'
                  }}>
                    <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>{item.label}</span>
                    <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel animate-fade-in" style={{
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '380px',
              textAlign: 'center'
            }}>
              <div style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                width: '200px',
                height: '240px',
                border: '2px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                marginBottom: '16px'
              }}>
                <img 
                  src="/student.jpg" 
                  alt="Student Academic Photo" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }} 
                />
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 600, marginBottom: '4px' }}>
                {student.name}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                Student Photo Record
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section style={{ padding: '60px 0', background: 'rgba(6, 9, 19, 0.4)' }} id="introduction">
        <div className="container">
          <div className="glass-panel" style={{ padding: '40px' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', fontWeight: 700, marginBottom: '20px', color: '#6366f1' }}>
              1. Introduction
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: 'var(--text-secondary)', fontSize: '16px' }}>
              <p>
                During the academic year 2025-2026, I enrolled in the activities coordinated by the Centre for Talent Enrichment (CTE). The primary purpose of the CTE program is to supplement formal undergraduate engineering education with practical, hands-on exposure to emerging technologies and diverse collaborative activities. As a first-year student pursuing a Bachelor of Technology in Computer Science and Engineering (CSE-Core), participating in these specialized workshops allowed me to bridge the gap between abstract programming concepts and physical computing applications.
              </p>
              <p>
                Engaging in enrichment activities beyond the regular academic curriculum has played an important role in my initial professional development. It provided me with a structured framework to explore fields like robotics, embedded systems, and AI-powered software design. Throughout the year, I participated in four major technical workshops: the Robo Race Line Follower Robot build, the AI RoboDog motion and perception session, the Gesture Tech sensor control lab, and the Base44 Hands-On App Building workshop.
              </p>
              <p>
                This reflective portfolio documentation serves as an authentic record of my learning journey. It outlines the technical skills, practical workflows, and theoretical concepts I explored. Writing these reflections in a structured format has helped me consolidate my understanding and identify how the topics I learned relate directly to my primary field of computer science. This record stands as a foundation for my future academic projects, technical collaborations, and developmental goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Table Section */}
      <section style={{ padding: '60px 0' }} id="overview">
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', fontWeight: 700, marginBottom: '12px' }}>
            2. Overview of Participation
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>
            A verified list of workshops attended under the CTE program.
          </p>

          <div className="glass-panel" style={{ overflowX: 'auto', padding: '16px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid rgba(255,255,255,0.08)' }}>
                  <th style={{ padding: '16px 8px', color: 'var(--text-primary)', fontWeight: 600, width: '10%' }}>S.No.</th>
                  <th style={{ padding: '16px 8px', color: 'var(--text-primary)', fontWeight: 600, width: '65%' }}>Event Name</th>
                  <th style={{ padding: '16px 8px', color: 'var(--text-primary)', fontWeight: 600, width: '25%' }}>Date</th>
                </tr>
              </thead>
              <tbody>
                {workshops.map((w, index) => (
                  <tr key={index} style={{
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    transition: 'var(--transition-fast)'
                  }} className="table-row-hover">
                    <td style={{ padding: '16px 8px', color: 'var(--text-secondary)' }}>{index + 1}</td>
                    <td style={{ padding: '16px 8px', fontWeight: 600, color: '#f8fafc' }}>{w.title}</td>
                    <td style={{ padding: '16px 8px', color: 'var(--text-secondary)' }}>{w.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Kolb's Learning Cycle Section */}
      <section style={{ padding: '60px 0', background: 'rgba(6, 9, 19, 0.4)' }} id="kolb">
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', fontWeight: 700, marginBottom: '12px' }}>
            3. Reflection on Learning Journey (Kolb's Cycle)
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>
            Interactive exploration of the Experiential Learning stages.
          </p>

          <div className="glass-panel" style={{ padding: '40px' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              marginBottom: '30px',
              overflowX: 'auto',
              gap: '12px'
            }}>
              {[
                { id: 'ce', label: '1. Concrete Experience' },
                { id: 'ro', label: '2. Reflective Observation' },
                { id: 'ac', label: '3. Abstract Conceptualization' },
                { id: 'ae', label: '4. Active Experimentation' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveKolbTab(tab.id)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    padding: '12px 16px',
                    color: activeKolbTab === tab.id ? 'var(--primary-color)' : 'var(--text-secondary)',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    fontSize: '15px',
                    cursor: 'pointer',
                    borderBottom: `2px solid ${activeKolbTab === tab.id ? 'var(--primary-color)' : 'transparent'}`,
                    transition: 'var(--transition-fast)',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="animate-fade-in" style={{ minHeight: '180px' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', fontWeight: 600, marginBottom: '16px', color: '#f8fafc' }}>
                {kolbCycle[activeKolbTab].title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.8 }}>
                {kolbCycle[activeKolbTab].desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Event Switcher Section */}
      <section style={{ padding: '60px 0' }} id="detailed-records">
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', fontWeight: 700, marginBottom: '12px' }}>
            4. Detailed Workshop & Event Learning Records
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>
            Select a technical elective from the sidebar below to review its comprehensive syllabus, skills, and academic links.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '32px' }} className="grid-2">

            {/* Sidebar list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {workshops.map((w, index) => (
                <button
                  key={index}
                  onClick={() => setActiveWorkshop(index)}
                  style={{
                    background: activeWorkshop === index ? w.bgColor : 'rgba(255,255,255,0.02)',
                    border: '1px solid',
                    borderColor: activeWorkshop === index ? w.borderColor : 'rgba(255,255,255,0.06)',
                    borderRadius: '12px',
                    padding: '16px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    color: activeWorkshop === index ? 'var(--text-primary)' : 'var(--text-secondary)',
                    transition: 'var(--transition-fast)'
                  }}
                  className="sidebar-btn"
                >
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: activeWorkshop === index ? 'var(--primary-color)' : 'rgba(255,255,255,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}>
                    <Icon name={w.icon} size={16} />
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '14px', flex: 1 }}>{w.title}</div>
                </button>
              ))}
            </div>

            {/* Display Pane */}
            <div className="glass-panel animate-fade-in" style={{ padding: '40px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 700, color: '#f8fafc' }}>
                  {workshops[activeWorkshop].title}
                </h3>
              </div>

              {/* Snapshot Banner */}
              <div style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '8px',
                padding: '12px 16px',
                fontSize: '13px',
                color: 'var(--text-secondary)',
                marginBottom: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
              }}>
                <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>A. Event Snapshot</div>
                <div>{workshops[activeWorkshop].snapshot}</div>
              </div>

              {/* 10 Part Layout */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {[
                  { section: "B. Event Overview", text: workshops[activeWorkshop].overview },
                  { section: "C. My Participation", text: workshops[activeWorkshop].participation },
                  { section: "D. Concepts & Skills Explored", text: workshops[activeWorkshop].skills, isHighlight: true },
                  { section: "E. What I Learned", text: workshops[activeWorkshop].learned },
                  { section: "F. Challenges & Observations", text: workshops[activeWorkshop].challenges },
                  { section: "G. Connection to Academic Field", text: workshops[activeWorkshop].academicConnection },
                  { section: "H. Practical Application", text: workshops[activeWorkshop].practical },
                ].map((sec, idx) => (
                  <div key={idx} style={{
                    borderLeft: sec.isHighlight ? '3px solid var(--secondary-color)' : '2px solid rgba(255,255,255,0.06)',
                    paddingLeft: '16px'
                  }}>
                    <h4 style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '14px',
                      fontWeight: 700,
                      color: sec.isHighlight ? 'var(--secondary-color)' : 'var(--text-primary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      marginBottom: '6px'
                    }}>
                      {sec.section}
                    </h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>{sec.text}</p>
                  </div>
                ))}

                {/* Personal Reflection Section (Editable card look) */}
                <div style={{
                  background: 'rgba(245, 158, 11, 0.03)',
                  border: '1px solid rgba(245, 158, 11, 0.12)',
                  borderRadius: '12px',
                  padding: '24px'
                }}>
                  <h4 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '14px',
                    fontWeight: 700,
                    color: '#f59e0b',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <Icon name="fileText" size={14} /> I. Personal Reflection
                  </h4>
                  <p style={{ color: 'var(--text-primary)', fontSize: '15px', fontStyle: 'italic', lineHeight: 1.7 }}>
                    "{workshops[activeWorkshop].personalReflection}"
                  </p>
                  <div style={{
                    marginTop: '12px',
                    fontSize: '12px',
                    color: 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <Icon name="check" size={12} /> Student reflection verified & logged
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Transferable Skills Section */}
      <section style={{ padding: '60px 0', background: 'rgba(6, 9, 19, 0.4)' }} id="transferable-skills">
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', fontWeight: 700, marginBottom: '12px' }}>
            5. Application of Learning (Transferable Skills Matrix)
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>
            A mapping of elective activities to immediate practical applications and future B.Tech engineering uses.
          </p>

          <div className="grid-2">
            {[
              {
                title: "Embedded Control Systems",
                subtitle: "Robo Race: Line Follower Robot",
                concept: "Feedback control loop logic, GPIO pins, and motor speed modulation (PWM).",
                app: "Debugging physical electronics circuits and basic sensor wiring.",
                future: "Implementing motion controllers in microcontrollers and robotics projects."
              },
              {
                title: "Kinematics & perception",
                subtitle: "AI RoboDog: Vision & Motion Control",
                concept: "Sensor fusion principles, path planning, and spatial mapping algorithms.",
                app: "Analyzing autonomous vehicle and navigation systems.",
                future: "Designing AI-based pathfinding routines in simulation code."
              },
              {
                title: "Signal Processing & HMI",
                subtitle: "Gesture Tech Workshop",
                concept: "Data acquisition from IMUs, noise filtering, and 3D coordinate rotation.",
                app: "Building head-tracking control or gestural inputs.",
                future: "Designing accessibility interfaces and human-computer interactions."
              },
              {
                title: "Rapid Software Prototyping",
                subtitle: "Base44 Hands-On App Building",
                concept: "Relational database schema modeling, visual UI layout, and API integration.",
                app: "Rapid prototyping of web application frontends.",
                future: "Structuring full-stack projects and design validation."
              }
            ].map((skill, index) => (
              <div key={index} className="glass-panel" style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 700, color: '#f8fafc' }}>
                    {skill.title}
                  </h3>
                  <span style={{ fontSize: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', padding: '2px 10px', borderRadius: '20px', color: 'var(--text-secondary)' }}>
                    {skill.subtitle}
                  </span>
                </div>
                <div>
                  <div style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--secondary-color)', fontWeight: 600, marginBottom: '4px' }}>Key Technical Concept</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>{skill.concept}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--accent-color)', fontWeight: 600, marginBottom: '4px' }}>Immediate Application</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>{skill.app}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', textTransform: 'uppercase', color: '#a855f7', fontWeight: 600, marginBottom: '4px' }}>Future B.Tech Use</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>{skill.future}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Self Assessment Section */}
      <section style={{ padding: '60px 0' }} id="self-assessment">
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', fontWeight: 700, marginBottom: '12px' }}>
            6. Self-Assessment Competency Matrix
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>
            Honest evaluation metrics across major development dimensions. Preserved from the official submission document.
          </p>

          <div className="grid-2">

            {/* Progress Gauges */}
            <div className="glass-panel" style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 600, marginBottom: '10px' }}>Competency Scores</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {selfAssessment.map((sa, idx) => {
                  const percentage = (sa.score / 5) * 100;
                  return (
                    <div key={idx}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px' }}>
                        <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{sa.name}</span>
                        <span style={{ fontWeight: 700, color: 'var(--secondary-color)' }}>{sa.score} / 5 ({percentage}%)</span>
                      </div>
                      <div style={{ background: 'rgba(255,255,255,0.04)', height: '6px', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{
                          background: 'linear-gradient(90deg, var(--primary-color) 0%, var(--secondary-color) 100%)',
                          width: `${percentage}%`,
                          height: '100%',
                          borderRadius: '4px'
                        }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Interpretation */}
            <div className="glass-panel" style={{ padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 600, marginBottom: '16px' }}>Interpretation of Results</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: 'var(--text-secondary)', fontSize: '15px' }}>
                  <p>
                    A review of my self-assessment ratings indicates areas of strength and developmental opportunities. I rated my 'Skill Development', 'Confidence & Expression', and 'Teamwork' at 4 (Good), reflecting the growth I experienced through group problem-solving and technical tasks. Coordinating with peers during the robotics calibration and app building sessions strengthened my collaborative skills.
                  </p>
                  <p>
                    Conversely, my 'Knowledge of Club Discipline' and 'Emotional & Social Growth' are rated at 3 (Satisfactory). These ratings reflect that as a first-year student, I am still building a fundamental technical vocabulary and adapting to the collaborative dynamics of college-level technical clubs. These scores serve as a realistic benchmark, reminding me to focus on deepening my understanding of core principles in future workshops.
                  </p>
                </div>
              </div>

              <div style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '8px',
                padding: '16px',
                fontSize: '13px',
                color: 'var(--text-muted)',
                marginTop: '24px'
              }}>
                Scale: 1 = Beginner | 2 = Developing | 3 = Satisfactory | 4 = Good | 5 = Excellent
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Achievements and Certificates Section */}
      <section style={{ padding: '60px 0', background: 'rgba(6, 9, 19, 0.4)' }} id="achievements">
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', fontWeight: 700, marginBottom: '12px' }}>
            7. Achievements, Recognitions, & Evidence
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>
            Verified certificates of completion.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>

            {/* Verified Cert Display */}
            <div className="glass-panel" style={{ padding: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--secondary-color)', fontWeight: 600, marginBottom: '16px' }}>
                <Icon name="check" size={16} /> Verified Achievement
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 700, marginBottom: '24px' }}>
                Base44 Hands-On App Building Workshop Certificate
              </h3>

              <div style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '16px',
                padding: '24px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <img
                  src="/Base 44 WorkShop.png"
                  alt="Base 44 Workshop Certificate"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '400px',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                />
              </div>
              <div style={{ textAlign: 'center', marginTop: '16px', fontSize: '13px', color: 'var(--text-secondary)' }}>
                Figure 7.1: Certificate of Completion - Somula Sudharshan Reddy (Issue Date: 18/11/25)
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Conclusion & Goals Section */}
      <section style={{ padding: '60px 0' }} id="conclusion">
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', fontWeight: 700, marginBottom: '12px' }}>
            8. Conclusion & Future Roadmap
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>
            Summarizing developmental milestones and future B.Tech engineering project timelines.
          </p>

          <div className="grid-2">
            <div className="glass-panel" style={{ padding: '40px' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 600, marginBottom: '16px' }}>Reflection Summary</h3>
              <div style={{ color: 'var(--text-secondary)', fontSize: '15px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p>
                  My participation in the Centre for Talent Enrichment electives during the 2025-2026 academic year has provided a valuable introduction to practical technology. It allowed me to apply the coding and logic concepts learned in my CSE coursework to physical systems and interactive applications. Through these workshops, I gained an initial understanding of feedback control loops, sensor calibration, relational database structures, and HMI mapping.
                </p>
                <p>
                  This experience has shown me that combining programming with hardware or no-code workflows creates highly engaging developer experiences. I have built foundational skills that will serve as a starting point for more complex systems in my later years of study.
                </p>
              </div>
            </div>

            {/* Goals roadmap */}
            <div className="glass-panel" style={{ padding: '40px' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 600, marginBottom: '24px' }}>Future Project Roadmap</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {[
                  {
                    step: "1",
                    title: "Advanced Embedded Project",
                    desc: "Build a microcontroller project that incorporates sensor tracking and wireless data logging, applying skills from the Robo Race and Gesture Tech workshops."
                  },
                  {
                    step: "2",
                    title: "Full-Stack Custom Development",
                    desc: "Study database design (SQL/NoSQL) and backend routing in detail, moving from no-code interfaces to custom code implementations."
                  },
                  {
                    step: "3",
                    title: "Group Collaborations",
                    desc: "Participate in college hackathons and group robotics events to strengthen teamwork and rapid-prototyping capabilities."
                  }
                ].map((item, index) => (
                  <div key={index} style={{ display: 'flex', gap: '16px' }}>
                    <div style={{
                      background: 'var(--primary-color)',
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '14px',
                      fontWeight: 700,
                      color: 'white',
                      flexShrink: 0
                    }}>
                      {item.step}
                    </div>
                    <div>
                      <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '15px', fontWeight: 600, color: '#f8fafc' }}>
                        {item.title}
                      </h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '13px', marginTop: '4px' }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Area */}
      <footer style={{
        background: '#04060d',
        borderTop: '1px solid var(--card-border)',
        padding: '40px 0',
        marginTop: 'auto',
        color: 'var(--text-secondary)',
        fontSize: '14px'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>SOMULA SUDHARSHAN REDDY</div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>
              B.Tech Computer Science and Engineering | Reg: 252U1R1231
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div>Centre for Talent Enrichment (CTE)</div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>
              Academic Year 2025–2026. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
