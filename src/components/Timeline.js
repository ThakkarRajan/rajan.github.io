import React, { useEffect, useRef, useState } from "react";
import "../styles.css";

const experienceEntries = [
  {
    title: "Vosyn – Full Stack Developer",
    time: "Aug 2024 – Present",
    icon: "💻",
  },
  {
    title: "Freelancer – Web & Mobile Dev",
    time: "Aug 2022 – Present",
    icon: "🌐",
  },
  {
    title: "Inferenz - Machine Learning Engineer",
    time: "Aug 2022 – Present",
    icon: "🧠",
  },
];

const educationEntries = [
  { title: "Mobile Application Development - George Brown College", time: "2024", icon: "📱" },
  { title: "Big Data Solution Architecture - Conestoga College", time: "2023", icon: "📊" },
  { title: "M.sc. in AI & ML - Gujarat University", time: "2022", icon: "🎓" },
  { title: "Bachelor of Computer Application - Marwadi University", time: "2020", icon: "🏫" },
];

const Timeline = () => (
  <>
    <section id="timeline" className="timeline">
      <h2 className="timeline-heading">Journey</h2>

      <h3 className="timeline-subheading">💼 Experience</h3>
      <div className="timeline-container">
        {experienceEntries.map((entry, i) => (
          <TimelineItem key={i} entry={entry} isLeft={i % 2 === 0} />
        ))}
      </div>

      <h3 className="timeline-subheading">🎓 Education</h3>
      <div className="timeline-container">
        {educationEntries.map((entry, i) => (
          <TimelineItem key={i} entry={entry} isLeft={i % 2 === 0} />
        ))}
      </div>
    </section>
  </>
);

const TimelineItem = ({ entry, isLeft }) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setVisible(true);
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`timeline-item ${isLeft ? "left" : "right"} ${
        visible ? "visible" : ""
      }`}
    >
      <div className="content">
        <h3>{entry.title}</h3>
        <span>{entry.time}</span>
        <span className="entry-icon">{entry.icon}</span>
      </div>
    </div>
  );
};

export default Timeline;
