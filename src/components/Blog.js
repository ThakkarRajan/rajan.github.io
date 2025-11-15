import React, { useState, useEffect, useRef } from "react";
import "../styles.css";
import RevealOnScroll from "./RevealOnScroll";
import Starfield from "./Starfield";

const blogPosts = [
  {
    id: 1,
    title: "I've Worked With 50+ Clients. Here's What Actually Matters When Hiring a Developer",
    date: "January 28, 2025",
    category: "For Clients",
    excerpt: "After years of working with clients, I've seen what makes projects succeed or fail. Here's the honest truth about what you should really look for.",
    content: `I've been on both sides - as a developer working with clients, and helping clients find the right developers. Let me share what I've learned from 50+ projects.

**The Portfolio Test (It's Not What You Think)**

Here's the thing: a flashy portfolio doesn't always mean a great developer. I've seen developers with stunning portfolios who couldn't deliver, and developers with simple portfolios who were absolute rockstars.

**What actually matters:**
- Can you USE their projects? Not just look at screenshots - actually interact with them
- Do they explain their process? The best developers can walk you through WHY they made certain choices
- Are the projects recent? Tech moves fast. If their last project was 3 years ago, that's a red flag

**Real Talk: Technical Skills**

Yes, React and Node.js matter. But here's what matters MORE:
- Can they explain complex things simply? If they can't explain it to you, they might not understand it themselves
- How do they handle "I don't know"? The best developers say "Let me research that" instead of making something up
- Do they ask questions? A developer who doesn't ask questions is dangerous

**The Communication Test**

I once had a client tell me: "I don't care if you're the best developer in the world. If I can't reach you, you're useless to me."

**Look for developers who:**
- Respond within 24 hours (even if it's just "Got it, working on it")
- Send weekly updates without you asking
- Explain things in plain English, not tech jargon
- Admit when they're stuck (and tell you what they're doing about it)

**The Problem-Solving Test**

Ask them: "Tell me about a time something went wrong."

**Good answer:** "We had a bug that took 3 days to fix. Here's what happened, what I tried, and what finally worked."

**Bad answer:** "Nothing ever goes wrong" or "I don't remember"

Real developers have war stories. If they don't, they're either lying or haven't worked on real projects.

**Business Understanding (This One's Huge)**

The difference between a good developer and a great one? Great developers understand your BUSINESS, not just your code.

**Ask yourself:**
- Do they ask about your users?
- Do they suggest features that make business sense?
- Do they understand budget constraints?
- Can they explain WHY something costs what it costs?

**The Red Flags I've Seen:**

🚩 "I can build that in a week" (for a 3-month project)
🚩 Ghosting you for days
🚩 Can't show you a single working project
🚩 Gets defensive when you ask questions
🚩 Only talks in tech terms you can't understand

**The Bottom Line**

The best developer isn't always the cheapest, or the one with the fanciest portfolio. It's the one who:
- Understands your vision
- Communicates clearly
- Solves problems creatively
- Cares about your success, not just their code

I've seen $500 projects fail and $50,000 projects succeed. The difference? The developer's ability to understand both code AND business.

**What's your experience been?** Have you hired developers before? What made the difference between a good experience and a bad one?`,
    tags: ["Hiring", "For Clients", "Developer Guide", "Business"],
    readTime: "6 min read"
  },
  {
    id: 2,
    title: "Why Full Stack Developers Are Worth the Investment",
    date: "January 27, 2025",
    category: "For Clients",
    excerpt: "Understanding the value of hiring a full stack developer versus separate frontend and backend developers. Why versatility matters for your business.",
    content: `As a business owner, you might wonder: should I hire separate frontend and backend developers, or invest in a full stack developer? Here's why full stack developers are often the better choice:

**Cost Efficiency**
- One developer instead of two
- Lower overhead and management complexity
- Faster project completion
- Better budget control

**Seamless Integration**
Full stack developers understand:
- How frontend and backend work together
- The entire development process
- Potential integration issues before they happen
- End-to-end user experience

**Faster Development**
- No waiting for handoffs between teams
- Quicker problem-solving
- Better understanding of the full system
- Reduced communication overhead

**Versatility**
A good full stack developer can:
- Work on any part of your project
- Adapt to changing requirements
- Handle unexpected challenges
- Scale with your business needs

**Better Communication**
- Single point of contact
- Clearer project vision
- Consistent coding style
- Easier to explain technical decisions

**When Full Stack Makes Sense:**
- Small to medium-sized projects
- Startups and MVPs
- Projects needing quick turnaround
- Budget-conscious businesses
- Projects requiring flexibility

**What to Look For:**
- Strong portfolio across different project types
- Experience with modern technologies
- Good communication skills
- Problem-solving ability
- Business understanding

**Remember:** A skilled full stack developer can deliver complete solutions efficiently, making them a smart investment for growing businesses.

Looking for a full stack developer who understands both code and business? Let's talk!`,
    tags: ["Full Stack", "For Clients", "Business Value", "Investment"],
    readTime: "5 min read"
  },
  {
    id: 3,
    title: "I Spent 4 Hours Debugging This React Mistake. Don't Make the Same One",
    date: "January 26, 2025",
    category: "Learning",
    excerpt: "True story: I spent half my day fixing something that should have taken 5 minutes. Here are the React mistakes that cost me hours (and how to avoid them).",
    content: `Last week, I spent 4 hours debugging a React component. The bug? I forgot to add a key prop to a list.

4 hours. For a key prop.

We've all been there - those moments where you're pulling your hair out, only to realize the solution was embarrassingly simple. So let me save you some time with the mistakes that have cost me hours:

**1. The Missing Key Prop (My 4-Hour Nightmare)**

I was rendering a list of users. Everything worked fine... until I tried to delete one. React got confused about which element was which, and chaos ensued.

**The fix:** Always add keys. Even if React doesn't complain, your future self will thank you.

\`\`\`jsx
// Bad
{users.map(user => <UserCard user={user} />)}

// Good
{users.map(user => <UserCard key={user.id} user={user} />)}
\`\`\`

**2. Mutating State Directly (The Silent Bug)**

I once spent 2 hours wondering why my component wasn't re-rendering. Turns out I was mutating state directly instead of creating a new object.

**The mistake:**
\`\`\`jsx
const [user, setUser] = useState({ name: 'John' });
user.name = 'Jane'; // ❌ This doesn't trigger re-render!
\`\`\`

**The fix:**
\`\`\`jsx
setUser({ ...user, name: 'Jane' }); // ✅ This works!
\`\`\`

React needs to see a NEW object reference to know something changed. This one gets everyone.

**3. Functions Inside Render (The Performance Killer)**

I was creating a new function on every render. My app was slow, and I couldn't figure out why. Turns out, every child component was re-rendering unnecessarily.

**The mistake:**
\`\`\`jsx
<div onClick={() => handleClick(id)}>Click me</div> // New function every render!
\`\`\`

**The fix:**
\`\`\`jsx
const handleClick = useCallback((id) => {
  // handle click
}, [dependencies]);

<div onClick={() => handleClick(id)}>Click me</div>
\`\`\`

Or better yet, use useCallback or define it outside the component.

**4. The useEffect Memory Leak (The One That Crashed My App)**

I added a setInterval in useEffect and forgot to clean it up. My app started using more and more memory until it crashed. Oops.

**Always clean up:**
\`\`\`jsx
useEffect(() => {
  const interval = setInterval(() => {
    // do something
  }, 1000);
  
  return () => clearInterval(interval); // ✅ Don't forget this!
}, []);
\`\`\`

**5. Overusing useEffect (The Unnecessary Hook)**

I was using useEffect to calculate something that could have been computed directly. Made my code more complex than it needed to be.

**Before:**
\`\`\`jsx
const [fullName, setFullName] = useState('');
useEffect(() => {
  setFullName(\`\${firstName} \${lastName}\`);
}, [firstName, lastName]);
\`\`\`

**After:**
\`\`\`jsx
const fullName = \`\${firstName} \${lastName}\`; // Much simpler!
\`\`\`

Not everything needs useEffect. Sometimes, just calculate it directly.

**The Lesson**

Every developer makes these mistakes. The difference between junior and senior developers? Seniors have made MORE mistakes, so they know what to avoid.

**What's your most embarrassing React bug?** Share it in the comments - let's learn from each other's mistakes!`,
    tags: ["React", "Common Mistakes", "Tips", "Learning"],
    readTime: "5 min read"
  },
  {
    id: 4,
    title: "I Almost Quit Coding 3 Times. Here's What Kept Me Going",
    date: "January 25, 2025",
    category: "Productivity",
    excerpt: "There were moments I wanted to throw my laptop out the window. But I didn't quit. Here's what got me through the tough times.",
    content: `I'm going to be honest with you: I almost quit coding three times.

**The First Time:** I was stuck on a bug for 3 days. Nothing made sense. I thought "Maybe I'm just not cut out for this."

**The Second Time:** I saw a job posting requiring 5 years of experience. I had 6 months. I thought "I'll never catch up."

**The Third Time:** I spent a week building something, only to realize someone else had built it better in 2 hours. I thought "What's the point?"

But I didn't quit. And I'm glad I didn't. Here's what kept me going:

**1. I Found My "Why"**

Not the generic "I want to be a developer" why. The REAL why.

For me, it was: "I want to build things that help people. I want to solve problems. I want to create something from nothing."

When I felt like quitting, I'd remember: I'm not just learning code. I'm learning to CREATE.

**2. I Started Celebrating Tiny Wins**

Fixed a bug? That's a win. Learned what useEffect does? That's a win. Got your first "Hello World" to work? HUGE win.

I started keeping a "wins" journal. Every day, I'd write down one thing I learned or one problem I solved. Looking back at it now, I can see how far I've come.

**3. I Found My People**

I joined a Discord server for developers. For the first time, I realized: everyone struggles. Everyone gets stuck. Everyone feels like an imposter sometimes.

Having people who understood what I was going through? Game changer.

**4. I Learned to Walk Away**

This was the hardest lesson. When I'm stuck, my instinct is to keep pushing. But sometimes, the best thing you can do is walk away.

I've solved more bugs after a good night's sleep than I have by staying up all night.

**5. I Built Stupid Things**

Not everything has to be a portfolio piece. Sometimes, you just need to build something silly.

I built a website that only displays cat memes. I built a calculator that gives wrong answers on purpose. I built things just because they were fun.

It reminded me: coding can be FUN. It doesn't always have to be serious.

**6. I Stopped Comparing**

This was huge. I stopped looking at other developers' portfolios and thinking "I'll never be that good."

Instead, I started thinking: "That's cool. How can I learn from it?"

Comparison is the thief of joy. Your journey is YOUR journey.

**The Reality**

Learning to code is hard. There will be days when you want to quit. There will be bugs that make you question everything. There will be moments when you feel like you're not good enough.

But here's what I've learned: every developer has been there. Every senior developer was once a beginner who wanted to quit.

**The difference between those who make it and those who don't?**

They didn't quit. They kept going. They asked for help. They celebrated small wins. They took breaks when they needed to.

**You can do this.**

What's kept you going when you wanted to quit? Share your story - someone needs to hear it.`,
    tags: ["Motivation", "Learning", "Community", "Mental Health"],
    readTime: "6 min read"
  },
  {
    id: 5,
    title: "I Used to Ask Bad Questions. Here's What I Learned About Getting Help",
    date: "January 23, 2025",
    category: "Productivity",
    excerpt: "I used to ask 'why doesn't this work?' and wonder why no one helped me. Then I learned how to ask questions that actually get answers.",
    content: `I used to be terrible at asking for help.

I'd post in Discord: "My code doesn't work. Help?"

Crickets.

Then I'd get frustrated: "Why won't anyone help me?!"

The problem wasn't that people didn't want to help. The problem was that I was asking a question that was impossible to answer.

Here's what I learned:

**The Bad Question (What I Used to Do)**

"Hey, my React component isn't working. Can someone help?"

**Why it's bad:**
- No context
- No code
- No error message
- No indication of what I tried
- Basically asking someone to read my mind

**The Good Question (What I Do Now)**

"Hey, I'm trying to update state in React but the component isn't re-rendering. Here's my code:

\`\`\`jsx
const [count, setCount] = useState(0);
count = 5; // This doesn't work
\`\`\`

I've tried using setCount(5) but that didn't work either. No error message, it just doesn't update. Any ideas?"

**Why it's better:**
- Clear problem statement
- Shows code (minimal, relevant)
- Explains what I tried
- Shows I've put in effort

**The Framework I Use Now:**

**1. What am I trying to do?**
"I'm trying to update a counter when a button is clicked."

**2. What's happening instead?**
"The counter stays at 0, even though I'm calling setCount."

**3. What have I tried?**
"I tried setCount(5), I checked the console for errors, I verified the button click is working."

**4. What's the actual code?**
\`\`\`jsx
// Minimal, relevant code snippet
\`\`\`

**5. What's the error?**
"Error: Cannot read property 'map' of undefined" (include the FULL error message!)

**Real Example:**

**Before:**
"useEffect isn't working help"

**After:**
"I'm trying to fetch data when the component mounts using useEffect, but it's running on every render instead of just once. Here's my code:

\`\`\`jsx
useEffect(() => {
  fetchData();
}); // Missing dependency array
\`\`\`

I've tried adding an empty dependency array but then it doesn't fetch at all. What am I missing?"

**The Difference?**

The second question:
- Shows I understand the problem
- Shows I've tried to solve it
- Makes it easy for someone to help
- Helps others learn too

**Pro Tips:**

✅ **Format your code** - Use code blocks, proper indentation
✅ **Be specific** - "useState isn't working" vs "useState hook isn't updating my component"
✅ **Show effort** - List what you've tried
✅ **Include errors** - The full error message, not just "it errors"
✅ **Say thank you** - When someone helps, acknowledge it

**The Result?**

When I started asking better questions:
- I got answers faster
- The answers were more helpful
- People were more willing to help
- I learned more from the process

**Remember:** Good questions show respect for other people's time. They show you've put in effort. And they get you better answers.

**What's the best question you've asked (or been asked)?** Share it - let's help each other ask better questions!`,
    tags: ["Communication", "Problem Solving", "Community", "Tips"],
    readTime: "5 min read"
  },
  {
    id: 6,
    title: "I Got My Code Torn Apart in a Review. Here's What I Learned",
    date: "January 20, 2025",
    category: "Collaboration",
    excerpt: "My first code review was brutal. But it taught me more than any tutorial. Here's how to give and receive feedback that actually helps.",
    content: `My first code review was... rough.

I spent hours on a feature, submitted it for review, and got back 47 comments. Forty-seven.

My first thought: "They hate my code. They hate me."

My second thought: "I'm terrible at this. I should quit."

But then I realized: those 47 comments weren't attacks. They were lessons. And they made me a better developer.

Here's what I've learned about code reviews:

**Giving Feedback (The Art of Being Helpful)**

**1. Start with What's Good**

Before you point out what's wrong, point out what's RIGHT. It sets a positive tone.

"Great job on the error handling! One small suggestion on line 42..."

**2. Explain the Why**

Don't just say "change this." Explain WHY.

❌ "This is wrong."
✅ "This could cause a memory leak because..."

**3. Ask Questions, Don't Just Dictate**

Sometimes code looks wrong, but there might be a reason.

"Could you explain why you chose this approach? I'm wondering if we could optimize it by..."

**4. Be Specific**

Vague feedback helps no one.

❌ "This could be better"
✅ "Consider extracting this into a separate function for reusability"

**Receiving Feedback (The Hard Part)**

**1. Separate Your Code from Your Identity**

This was the hardest lesson. Your code isn't YOU. Criticism of your code isn't criticism of you.

**2. Ask Questions**

If feedback is unclear, ask! "Could you clarify what you mean by...?"

**3. Thank Your Reviewers**

They took time to help you. Acknowledge it. "Thanks for the thorough review! I'll address these points."

**4. Learn, Don't Defend**

Your first instinct might be to defend your code. Resist it. Instead, ask: "What can I learn from this?"

**Real Example:**

**Bad Review:**
"Your code is messy. Fix it."

**Good Review:**
"Great work on the feature! I noticed a few things that could help:
- Line 15: Consider extracting this logic into a helper function for reusability
- Line 32: This might cause a race condition. Have you considered using async/await?
- Overall: The logic is solid, just needs some refactoring for maintainability"

**The Difference?**

The second review:
- Acknowledges what's good
- Explains WHY changes are needed
- Provides actionable feedback
- Maintains a positive tone

**My Code Review Rules:**

✅ **Be kind, not nice** - Real feedback helps more than empty praise
✅ **Explain the why** - Help others understand, not just fix
✅ **Ask questions** - Sometimes there's a reason for "bad" code
✅ **Praise good work** - Positive feedback matters too
✅ **Don't take it personally** - It's about the code, not you
✅ **Learn from it** - Every review is a learning opportunity

**The Result?**

After that brutal first review, I:
- Learned more in one day than I had in weeks
- Became a better developer
- Started giving better reviews myself
- Realized code reviews are a gift, not a punishment

**Remember:** Code reviews aren't about finding fault. They're about making everyone better. The best teams have the best code reviews.

**What's your code review story?** Have you had a review that changed how you code? Share it - let's learn from each other!`,
    tags: ["Code Review", "Collaboration", "Teamwork", "Communication"],
    readTime: "6 min read"
  },
  {
    id: 7,
    title: "I Have 5 Years of Experience and Still Feel Like a Fraud",
    date: "January 18, 2025",
    category: "Productivity",
    excerpt: "I've been coding for years, shipped dozens of projects, and still sometimes think 'I don't know what I'm doing.' Here's how I deal with it.",
    content: `I'm going to tell you something I don't usually admit:

Even after 5 years of coding, shipping multiple projects, and working with real clients... I still sometimes feel like a fraud.

There are days when I look at other developers' code and think: "I'll never be that good."

There are moments when I'm stuck on a problem and think: "A real developer would know this."

There are times when I see a job posting and think: "I don't have enough experience."

**Sound familiar?**

If you've ever felt this way, you're not alone. And here's the thing: feeling like an imposter doesn't mean you ARE one.

**Why We Feel This Way:**

**1. Technology Moves Fast**

By the time you learn React, there's Next.js. By the time you learn Next.js, there's something new. It's impossible to know everything, and that's okay.

**2. We See Everyone's Highlight Reel**

LinkedIn shows the promotions, the launches, the successes. It doesn't show the 3am debugging sessions, the failed projects, the "I have no idea what I'm doing" moments.

**3. We're Our Own Worst Critics**

We know every mistake we've made, every bug we've introduced, every time we've been stuck. Others don't see that. They see the finished product.

**How I Deal With It:**

**1. I Talk About It**

I started being honest about feeling like an imposter. Guess what? Almost every developer I know feels the same way sometimes.

**2. I Keep a "Wins" Folder**

Every time I solve a hard problem, ship a feature, or get positive feedback, I save it. When I'm feeling like a fraud, I look back at it.

**3. I Remember: Everyone Starts Somewhere**

That senior developer with 10 years of experience? They were once a junior who googled "how to center a div."

**4. I Focus on Learning, Not Knowing**

Instead of "I should know this," I think "I'm learning this." Growth mindset changes everything.

**5. I Help Others**

Teaching someone else reminds me how much I actually know. When I explain something to a beginner, I realize: "Oh, I do know this stuff."

**6. I Accept That It's Normal**

Feeling like an imposter doesn't go away. But I've learned to recognize it, acknowledge it, and not let it stop me.

**The Reality:**

- Every developer feels like an imposter sometimes
- The ones who seem confident? They've just learned to fake it
- Feeling like an imposter often means you're growing
- The best developers are the ones who never stop learning

**What I've Learned:**

Imposter syndrome isn't a bug - it's a feature. It means:
- You care about doing good work
- You're pushing yourself to grow
- You're aware of what you don't know (which is actually a strength)

**The Secret?**

Everyone feels like an imposter. The difference? Some people let it stop them. Others keep going anyway.

**You belong here. You know more than you think. And you're going to be okay.**

**Have you experienced imposter syndrome?** How do you deal with it? Share your story - someone needs to hear they're not alone.`,
    tags: ["Mental Health", "Imposter Syndrome", "Growth", "Community"],
    readTime: "5 min read"
  },
  {
    id: 8,
    title: "The Best Free Resources for Developers (That Actually Helped Me)",
    date: "January 15, 2025",
    category: "Resources",
    excerpt: "Learning to code doesn't have to be expensive. Here are the free resources that actually helped me grow as a developer - and can help you too.",
    content: `There are so many resources out there, but which ones are actually worth your time? Here are the free resources that genuinely helped me:

**Learning Platforms:**

**1. freeCodeCamp**
Comprehensive curriculum, completely free. Great for structured learning.

**2. MDN Web Docs**
The best documentation for web technologies. Bookmark it, you'll use it constantly.

**3. JavaScript.info**
Deep dives into JavaScript concepts. Perfect for understanding the "why" behind the code.

**4. YouTube Channels**
- Traversy Media (great tutorials)
- The Net Ninja (clear explanations)
- Web Dev Simplified (concept breakdowns)

**Practice & Community:**

**5. GitHub**
Contribute to open source, see how others code, build your portfolio.

**6. Stack Overflow**
When you're stuck, chances are someone else was too. Learn to search effectively.

**7. Dev.to**
Great articles, friendly community, real developer experiences.

**8. Discord Communities**
Find communities for your tech stack. Real-time help and support.

**Tools:**

**9. VS Code**
Free, powerful editor with amazing extensions.

**10. Chrome DevTools**
Learn to use it properly - it's a game-changer for debugging.

**Remember:** The best resource is the one you actually use. Try a few, stick with what works for you, and keep learning!

What free resources have helped you? Share them with fellow developers!`,
    tags: ["Resources", "Learning", "Free Tools", "Education"],
    readTime: "6 min read"
  },
  {
    id: 9,
    title: "Questions Every Client Should Ask Before Hiring a Developer",
    date: "January 22, 2025",
    category: "For Clients",
    excerpt: "Make sure you're hiring the right developer for your project. Here are essential questions to ask before making your decision.",
    content: `Hiring a developer is a big decision. To ensure you're making the right choice, here are crucial questions every client should ask:

**About Experience and Skills:**

**1. "Can you show me examples of similar projects you've completed?"**
- Look for relevant experience
- Check if they've solved similar problems
- Verify the quality of their work

**2. "What technologies do you specialize in?"**
- Ensure they match your project needs
- Check if they stay updated with modern tools
- Ask about their learning process

**3. "How do you handle projects that require skills you haven't used before?"**
- Shows problem-solving ability
- Demonstrates willingness to learn
- Indicates honesty and transparency

**About Process and Communication:**

**4. "How do you communicate progress and handle updates?"**
- Regular updates are crucial
- Clear communication prevents misunderstandings
- Ask about their preferred communication tools

**5. "What's your development process?"**
- Do they plan before coding?
- How do they handle changes?
- What's their testing approach?

**6. "How do you handle bugs and issues after launch?"**
- Post-launch support is important
- Understand their maintenance approach
- Clarify warranty or support period

**About Timeline and Budget:**

**7. "What's a realistic timeline for this project?"**
- Beware of unrealistic promises
- Ask about potential delays
- Understand their availability

**8. "What's included in your quote?"**
- Avoid hidden costs
- Understand what you're paying for
- Ask about revision policies

**9. "How do you handle scope changes?"**
- Projects often evolve
- Understand change request process
- Know how additional costs are handled

**About Reliability:**

**10. "Can you provide references from previous clients?"**
- Talk to past clients
- Ask about their experience
- Verify reliability and professionalism

**11. "What happens if you can't complete the project?"**
- Understand their commitment
- Ask about backup plans
- Check their availability

**12. "How do you ensure code quality and maintainability?"**
- Code should be clean and documented
- Ask about their coding standards
- Understand long-term maintenance

**Red Flags:**
- Unwillingness to answer questions
- Vague or evasive responses
- Pressure to make quick decisions
- Unrealistic promises
- No portfolio or references

**Green Flags:**
- Clear, detailed answers
- Willingness to explain technical concepts
- Honest about limitations
- Provides references readily
- Asks clarifying questions about your needs

**Remember:** A good developer will welcome your questions and be transparent about their process. Don't hesitate to ask - it's your project and your investment!

Ready to discuss your project? Let's have a conversation about your needs!`,
    tags: ["Hiring", "For Clients", "Questions", "Business"],
    readTime: "7 min read"
  },
  {
    id: 10,
    title: "Why Your Business Needs a Developer Who Understands Both Code and Business",
    date: "January 20, 2025",
    category: "For Clients",
    excerpt: "The best developers don't just write code - they understand your business goals and help you achieve them. Here's why this matters.",
    content: `When hiring a developer, technical skills are important - but they're not everything. The best developers understand both code and business. Here's why this matters:

**Business-Aware Developers:**

**1. They Understand Your Goals**
- They ask "why" before "how"
- They align technical decisions with business objectives
- They suggest solutions that grow your business
- They think beyond just writing code

**2. They Provide Strategic Value**
- Suggest features that drive revenue
- Identify opportunities for improvement
- Recommend technologies that scale
- Think long-term, not just immediate needs

**3. They Communicate in Business Terms**
- Explain technical concepts clearly
- Translate tech jargon into business value
- Help you make informed decisions
- Keep you updated in ways you understand

**4. They Balance Quality and Speed**
- Understand when to move fast vs. perfect
- Know what features matter most
- Prioritize based on business impact
- Deliver value incrementally

**5. They Think About Users**
- Understand your target audience
- Consider user experience
- Build features users actually want
- Focus on solving real problems

**What This Means for Your Project:**

**Better ROI**
- Features that drive business value
- Solutions that scale efficiently
- Reduced need for rework
- Faster time to market

**Smarter Decisions**
- Technical advice aligned with goals
- Cost-effective solutions
- Future-proof choices
- Better resource allocation

**Smoother Process**
- Clear communication
- Realistic expectations
- Proactive problem-solving
- Better project management

**How to Identify Business-Aware Developers:**

**Look for:**
- Questions about your business goals
- Interest in your target market
- Suggestions beyond just coding
- Understanding of your industry
- Focus on user experience

**Ask:**
- "How would you approach this from a business perspective?"
- "What features would drive the most value?"
- "How can we balance speed and quality?"
- "What would you recommend for long-term growth?"

**Red Flags:**
- Only talks about technical details
- Doesn't ask about your business
- Focuses only on code, not outcomes
- Can't explain business value
- No interest in your goals

**Remember:** The best developers are partners in your success. They write great code AND help you achieve your business objectives. That's the kind of developer worth investing in.

Looking for a developer who understands both code and business? Let's discuss how I can help achieve your goals!`,
    tags: ["Business", "For Clients", "Strategy", "Value"],
    readTime: "6 min read"
  }
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [filterCategory, setFilterCategory] = useState("All");
  const blogPostRef = useRef(null);
  const blogSectionRef = useRef(null);

  const categories = ["All", ...new Set(blogPosts.map(post => post.category))];
  const filteredPosts = filterCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === filterCategory);

  // Handle initial scroll to blog section if hash is #blog
  useEffect(() => {
    if (window.location.hash === '#blog' && blogSectionRef.current) {
      setTimeout(() => {
        const elementPosition = blogSectionRef.current.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - 100;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 100);
    }
  }, []);

  // Scroll to blog post view when it opens
  useEffect(() => {
    if (selectedPost && blogPostRef.current) {
      setTimeout(() => {
        blogPostRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [selectedPost]);

  const openPost = (post) => {
    setSelectedPost(post);
    // Update URL hash
    window.history.pushState(null, '', `#blog-post-${post.id}`);
  };

  const closePost = () => {
    setSelectedPost(null);
    // Update URL hash back to blog section
    window.history.pushState(null, '', '#blog');
    // Scroll to blog section
    setTimeout(() => {
      const blogSection = document.getElementById('blog');
      if (blogSection) {
        blogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  if (selectedPost) {
    return (
      <>
        <Starfield />
        <article ref={blogPostRef} className="blog-post-view" itemScope itemType="https://schema.org/BlogPosting">
          <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": selectedPost.title,
              "description": selectedPost.excerpt,
              "datePublished": selectedPost.date,
              "author": {
                "@type": "Person",
                "name": "Rajan Thakkar",
                "url": "https://rajan.codes"
              },
              "publisher": {
                "@type": "Person",
                "name": "Rajan Thakkar",
                "url": "https://rajan.codes"
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://rajan.codes/#blog-post-${selectedPost.id}`
              },
              "articleSection": selectedPost.category,
              "keywords": selectedPost.tags.join(", "),
              "inLanguage": "en-US",
              "url": `https://rajan.codes/#blog-post-${selectedPost.id}`,
              "wordCount": selectedPost.content.split(/\s+/).length
            })
          }} />
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
                // Convert markdown bold (**text**) to HTML
                const processBold = (text) => {
                  const parts = text.split(/(\*\*.*?\*\*)/g);
                  return parts.map((part, i) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                      const boldText = part.replace(/\*\*/g, '');
                      return <strong key={i}>{boldText}</strong>;
                    }
                    return part;
                  });
                };

                if (paragraph.startsWith('**') && paragraph.endsWith('**') && paragraph.split('**').length === 3) {
                  // Single line heading with **
                  const text = paragraph.replace(/\*\*/g, '');
                  return <h3 key={index} className="blog-subheading">{text}</h3>;
                }
                if (paragraph.startsWith('- ')) {
                  const items = paragraph.split('\n').filter(item => item.startsWith('- '));
                  return (
                    <ul key={index} className="blog-list">
                      {items.map((item, i) => (
                        <li key={i}>{processBold(item.replace('- ', ''))}</li>
                      ))}
                    </ul>
                  );
                }
                return <p key={index} className="blog-paragraph">{processBold(paragraph)}</p>;
              })}
            </div>
            <footer className="blog-post-footer">
              <div itemProp="author" itemScope itemType="https://schema.org/Person">
                <meta itemProp="name" content="Rajan Thakkar" />
                <meta itemProp="url" content="https://rajan.codes" />
              </div>
              <meta itemProp="publisher" content="Rajan Thakkar" />
              <meta itemProp="articleSection" content={selectedPost.category} />
              <meta itemProp="keywords" content={selectedPost.tags.join(", ")} />
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
      <section ref={blogSectionRef} id="blog" className="blog-section">
        <div className="blog-header-wrapper">
          <h2 className="section-title">📚 Developer Blog</h2>
          <p className="section-subtitle">
            Sharing experiences, tips, and insights for fellow developers. Learn from my mistakes, celebrate wins together, and grow as a community.
          </p>
        </div>
        
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
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": post.title,
                    "description": post.excerpt,
                    "datePublished": post.date,
                    "author": {
                      "@type": "Person",
                      "name": "Rajan Thakkar",
                      "url": "https://rajan.codes"
                    },
                    "publisher": {
                      "@type": "Person",
                      "name": "Rajan Thakkar"
                    },
                    "mainEntityOfPage": {
                      "@type": "WebPage",
                      "@id": `https://rajan.codes/#blog-post-${post.id}`
                    },
                    "articleSection": post.category,
                    "keywords": post.tags.join(", "),
                    "inLanguage": "en-US",
                    "url": `https://rajan.codes/#blog-post-${post.id}`
                  })
                }} />
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
                      type="button"
                      className="read-more-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        openPost(post);
                      }}
                      aria-label={`Read more about ${post.title}`}
                    >
                      Read More →
                    </button>
                  </div>
                </div>
                <div itemProp="author" itemScope itemType="https://schema.org/Person">
                  <meta itemProp="name" content="Rajan Thakkar" />
                  <meta itemProp="url" content="https://rajan.codes" />
                </div>
                <meta itemProp="publisher" content="Rajan Thakkar" />
                <meta itemProp="articleSection" content={post.category} />
                <meta itemProp="keywords" content={post.tags.join(", ")} />
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

