import React, { useState } from "react";
import "../styles.css";
import RevealOnScroll from "./RevealOnScroll";
import Starfield from "./Starfield";

const blogPosts = [
  {
    id: 1,
    title: "My Journey: From Learning React to Building Production Apps",
    date: "January 27, 2025",
    category: "Learning",
    excerpt: "Reflecting on my growth as a developer, from first learning React hooks to deploying full-stack applications. Key lessons learned and skills developed along the way.",
    content: `Today marks another milestone in my developer journey. I've been reflecting on how far I've come since I first started learning React. 

What started as simple component creation has evolved into building complex, production-ready applications. The key has been consistent daily practice and tackling real-world problems.

**Key Improvements This Week:**
- Mastered React hooks optimization
- Improved state management patterns
- Better understanding of performance optimization
- Enhanced debugging skills

Every day brings new challenges and learning opportunities. The most important lesson? Never stop building, never stop learning.`,
    tags: ["React", "Learning", "Growth", "Development"],
    readTime: "3 min read"
  },
  {
    id: 2,
    title: "Optimizing Performance: Lessons from Building Scalable Apps",
    date: "January 25, 2025",
    category: "Technical",
    excerpt: "Discovering performance bottlenecks and implementing solutions. How I reduced load times by 60% and improved user experience.",
    content: `Performance optimization has become a daily focus. Working on large-scale applications taught me the importance of efficient code.

**Performance Wins:**
- Implemented code splitting
- Optimized bundle sizes
- Reduced API call overhead
- Improved rendering performance

The best part? Seeing the impact on real users. Faster load times mean better engagement and happier clients.`,
    tags: ["Performance", "Optimization", "React", "Best Practices"],
    readTime: "5 min read"
  },
  {
    id: 3,
    title: "Building Better Developer Habits: My Daily Routine",
    date: "January 23, 2025",
    category: "Productivity",
    excerpt: "How I structure my day for maximum productivity and continuous learning. Tips for staying motivated and growing as a developer.",
    content: `Consistency is key in development. I've developed a daily routine that helps me stay productive and continuously improve.

**My Daily Routine:**
- Morning: Code review and planning
- Afternoon: Focused development time
- Evening: Learning new technologies
- Night: Reflecting on the day's progress

Small daily improvements compound over time. What seemed impossible months ago is now routine.`,
    tags: ["Productivity", "Habits", "Growth", "Routine"],
    readTime: "4 min read"
  },
  {
    id: 4,
    title: "Mastering Git: From Basic Commits to Advanced Workflows",
    date: "January 20, 2025",
    category: "Tools",
    excerpt: "Leveling up my Git skills and implementing better version control practices. How proper Git workflow improved my collaboration.",
    content: `Git is more than just version control—it's a way of thinking about code evolution. I've been diving deeper into advanced Git workflows.

**Git Improvements:**
- Better commit message practices
- Understanding rebase vs merge
- Implementing feature branch workflows
- Using Git hooks for quality checks

Better Git practices mean smoother collaboration and cleaner project history.`,
    tags: ["Git", "Version Control", "Tools", "Collaboration"],
    readTime: "4 min read"
  },
  {
    id: 5,
    title: "Debugging Like a Pro: Tools and Techniques That Save Hours",
    date: "January 18, 2025",
    category: "Technical",
    excerpt: "Learning advanced debugging techniques and tools that have dramatically reduced my bug-fixing time. From console.log to professional debugging.",
    content: `Debugging is an art form. I've been investing time in learning better debugging techniques, and it's paying off.

**Debugging Tools I Love:**
- React DevTools for component inspection
- Chrome DevTools for performance profiling
- VS Code debugging features
- Error tracking tools

The right tools and techniques can turn hours of frustration into minutes of problem-solving.`,
    tags: ["Debugging", "Tools", "Problem Solving", "Development"],
    readTime: "3 min read"
  },
  {
    id: 6,
    title: "From Code to Deployment: My CI/CD Learning Journey",
    date: "January 15, 2025",
    category: "DevOps",
    excerpt: "Setting up automated deployment pipelines and understanding the power of CI/CD. How automation changed my development workflow.",
    content: `Automation is a game-changer. Learning CI/CD has transformed how I deploy applications and manage releases.

**CI/CD Benefits:**
- Automated testing before deployment
- Consistent deployment process
- Faster release cycles
- Reduced manual errors

Every deployment is now smoother and more reliable. The time invested in learning CI/CD is already paying dividends.`,
    tags: ["CI/CD", "DevOps", "Automation", "Deployment"],
    readTime: "5 min read"
  }
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [filterCategory, setFilterCategory] = useState("All");

  const categories = ["All", ...new Set(blogPosts.map(post => post.category))];
  const filteredPosts = filterCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === filterCategory);

  const openPost = (post) => {
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closePost = () => {
    setSelectedPost(null);
  };

  if (selectedPost) {
    return (
      <>
        <Starfield />
        <article className="blog-post-view" itemScope itemType="https://schema.org/BlogPosting">
          <div className="blog-post-container">
            <button className="back-button" onClick={closePost}>
              ← Back to Blog
            </button>
            <header className="blog-post-header">
              <span className="blog-category">{selectedPost.category}</span>
              <h1 itemProp="headline">{selectedPost.title}</h1>
              <div className="blog-meta">
                <time itemProp="datePublished" dateTime={selectedPost.date}>
                  {selectedPost.date}
                </time>
                <span>•</span>
                <span>{selectedPost.readTime}</span>
              </div>
              <div className="blog-tags">
                {selectedPost.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
            </header>
            <div className="blog-post-content" itemProp="articleBody">
              {selectedPost.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  const text = paragraph.replace(/\*\*/g, '');
                  return <h3 key={index} className="blog-subheading">{text}</h3>;
                }
                if (paragraph.startsWith('- ')) {
                  const items = paragraph.split('\n').filter(item => item.startsWith('- '));
                  return (
                    <ul key={index} className="blog-list">
                      {items.map((item, i) => (
                        <li key={i}>{item.replace('- ', '')}</li>
                      ))}
                    </ul>
                  );
                }
                return <p key={index} className="blog-paragraph">{paragraph}</p>;
              })}
            </div>
            <footer className="blog-post-footer">
              <div itemProp="author" itemScope itemType="https://schema.org/Person">
                <meta itemProp="name" content="Rajan Thakkar" />
              </div>
              <button className="back-button" onClick={closePost}>
                ← Back to Blog
              </button>
            </footer>
          </div>
        </article>
      </>
    );
  }

  return (
    <>
      <Starfield />
      <section id="blog" className="blog-section">
        <h2 className="section-title">📝 Blog: Day-to-Day Improvements</h2>
        <p className="section-subtitle">
          Sharing my journey as a developer, documenting daily learnings, challenges, and growth.
        </p>
        
        <RevealOnScroll>
          <div className="blog-filters">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${filterCategory === category ? 'active' : ''}`}
                onClick={() => setFilterCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="blog-grid">
            {filteredPosts.map(post => (
              <article 
                key={post.id} 
                className="blog-card"
                itemScope 
                itemType="https://schema.org/BlogPosting"
              >
                <div className="blog-card-header">
                  <span className="blog-card-category">{post.category}</span>
                  <time itemProp="datePublished" dateTime={post.date} className="blog-card-date">
                    {post.date}
                  </time>
                </div>
                <h3 className="blog-card-title" itemProp="headline">
                  {post.title}
                </h3>
                <p className="blog-card-excerpt" itemProp="description">
                  {post.excerpt}
                </p>
                <div className="blog-card-footer">
                  <div className="blog-card-tags">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="blog-tag-small">{tag}</span>
                    ))}
                  </div>
                  <div className="blog-card-meta">
                    <span>{post.readTime}</span>
                    <button 
                      className="read-more-btn"
                      onClick={() => openPost(post)}
                      aria-label={`Read more about ${post.title}`}
                    >
                      Read More →
                    </button>
                  </div>
                </div>
                <meta itemProp="author" content="Rajan Thakkar" />
              </article>
            ))}
          </div>
        </RevealOnScroll>

        <div className="wave-overlay">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path
              fill="#6bc1ff10"
              fillOpacity="1"
              d="M0,160L48,144C96,128,192,96,288,117.3C384,139,480,213,576,234.7C672,256,768,224,864,202.7C960,181,1056,171,1152,165.3C1248,160,1344,160,1392,160L1440,160V320H0Z"
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Blog;

