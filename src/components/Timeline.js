import React, { useEffect, useRef, useState } from "react";
import "../styles.css";

const experienceEntries = [
  {
    title: "SnapCycle – Full Stack Developer",
    time: "June 2025 – Present",
  },
  {
    title: "Vosyn – Full Stack Developer (Internship)",
    time: "Aug 2024 – Apr 2025",
  },
  {
    title: "Freelancer – Web & Mobile Dev",
    time: "Aug 2022 – Present",
  },
  {
    title: "Inferenz - Machine Learning Engineer",
    time: "Aug 2022 – Jun 2023",
  },
];

const educationEntries = [
  {
    title: "Mobile Application Development and Strategy - George Brown College",
    time: "Jan 2024 – Dec 2024",
  },
  {
    title: "Big Data Solution Architecture - Conestoga College",
    time: "Jan 2023 – Aug 2023",
  },
  {
    title:
      "M.Sc. in Artificial Intelligence and Machine Learning - Gujarat University",
    time: "Jun 2020 – Jul 2022",
  },
  {
    title: "Bachelor of Computer Application - Marwadi University",
    time: "Jul 2017 – Jun 2020",
  },
];

const Timeline = () => (
  <>
    <section id="timeline" className="timeline" itemScope itemType="https://schema.org/Person">
      <h2 className="timeline-heading">Journey</h2>

      <h3 className="timeline-subheading">Experience</h3>
      <div className="timeline-container" itemScope itemType="https://schema.org/ItemList">
        {experienceEntries.map((entry, i) => (
          <TimelineItem key={i} entry={entry} isLeft={i % 2 === 0} />
        ))}
      </div>

      <h3 className="timeline-subheading">Education</h3>
      <div className="timeline-container" itemScope itemType="https://schema.org/ItemList">
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
      </div>
    </div>
  );
};

export default Timeline;
