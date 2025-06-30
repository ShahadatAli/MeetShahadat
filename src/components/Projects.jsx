import React, { useState, useEffect, useRef } from "react";
import "../styling/Projects.css";

const projects = [
  {
    title: "Adiyatbd.com | An e-commerce Website",
    description:
      "Developed a full-stack e-commerce site with product listings, cart, and secure checkout.",
    link: "https://adiyatbd.com",
    type: "DevVerse",
    stack: [
      { name: "WordPress", icon: "fa-brands fa-wordpress" },
      { name: "Elementor", icon: "fa-brands fa-elementor" },
      { name: "woocommerce", icon: "fa-brands fa-wordpress" },
    ],
    image: "/images/adiyatbd.png", // 👈 add your image here (place in public/images folder)
  },
  {
    title: "Payment Gateway Plugin",
    description:
      "Built and documented payment plugin for Opencart using PHP and integrated APIs.",
    link: "https://github.com/your-repo",
    type: "DevVerse",
  },
  {
    title: "UI Design Portfolio",
    description:
      "Collection of modern and minimal user interface designs created with Figma.",
    link: "https://figma.com/your-designs",
    type: "DesignVerse",
  },
];

const Projects = () => {
  const canvasRef = useRef(null);
  const [activeTab, setActiveTab] = useState("DevVerse");

  useEffect(() => {
    // Save original body background and override
    const originalBackground = document.body.style.background;
    document.body.style.background = "black";

    // Setup canvas
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    const letters =
      "アァイィウウェエオカガキギクグケゲコゴサザシジスズセゼソゾタダチッヂヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = new Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0F0";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);
    window.addEventListener("resize", setCanvasSize);

    return () => {
      // Cleanup
      clearInterval(interval);
      window.removeEventListener("resize", setCanvasSize);
      document.body.style.background = originalBackground;
    };
  }, []);

  const filteredProjects = projects.filter(
    (project) => project.type === activeTab
  );

  return (
    <div className="project-container">
      {/* Matrix Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      />
      <div className="intro-text project-heading"><h1>Welcome To The Matrix</h1>
      <p className="project-heading-choice">CHOOSE YOUR PILL</p>
      </div>
      
      
      
      
      <div id="firstFilter" className="filter-switch mx-auto my-6">
        <input
          type="radio"
          id="option1"
          name="options"
          checked={activeTab === "DevVerse"}
          onChange={() => setActiveTab("DevVerse")}
        />
        <label className="option" htmlFor="option1">
          DevVerse
        </label>

        <input
          type="radio"
          id="option2"
          name="options"
          checked={activeTab === "DesignVerse"}
          onChange={() => setActiveTab("DesignVerse")}
        />
        <label className="option" htmlFor="option2">
          DesignVerse
        </label>

        <span className="background"></span>
      </div>

      {/* Project List */}
      <div className="project-wrapper">
        <div className="project-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-text">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.stack && (
                  <div className="stack-used">
                    <strong>Stacks & Frameworks used:</strong>
                    <div
                      className="stack-icons"
                      style={{
                        display: "flex",
                        gap: "10px",
                        marginTop: "4px",
                        flexWrap: "wrap",
                      }}
                    >
                      {project.stack.map((tech, i) => (
                        <div
                          key={i}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                          }}
                        >
                          {tech.icon && (
                            <i
                              className={tech.icon}
                              style={{ fontSize: "1rem", color: "#ccc" }}
                            ></i>
                          )}
                          <span style={{ fontSize: "0.9rem", color: "#ccc" }}>
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <br />
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 font-medium hover:underline"
                >
                  View Project →
                </a>
              </div>

              {/* Image preview on the right */}
              {project.image && (
                <div className="project-image">
                  <img src={project.image} alt={`${project.title} preview`} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
