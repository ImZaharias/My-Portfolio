import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import expense from './../../assets/expense.png';
import order from './../../assets/order.png';
import games from '../../assets/games.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
          <ProjectCard src={expense} 
          link="https://github.com/ImZaharias/ExpenseTrackerApp" 
          h3="Expense Tracker"
          p="Desktop app with JavaFX & MySQL"
          />
          <ProjectCard src={games} 
          link="https://github.com/ImZaharias/HolyPolyGames"
          h3="Retro Games"
          p="Mini browser games using JS, HTML, CSS"
          />
          <ProjectCard src={order}
          link="https://github.com/ImZaharias/AnswerTrackerApp" 
          h3="Answer Tracker"
          p="Web app that tracks quiz accuracy."
          />
          <ProjectCard src={order}
          link="https://github.com/ImZaharias/atropos_ai_v3"
          h3="Atropos AI v3"
          p="AI-powered automation showing your tech future"
          />
          <ProjectCard src={order}
          link="https://github.com/ImZaharias/Smart-Camping"
          h3="Smart Camping"
          p="Smart camping desktop app with modern UI using C#"
          />
          <ProjectCard src={order}
          link="https://github.com/ImZaharias/Greekbeaches"
          h3="Greek Beaches"
          p="Desktop App the best beaches in Greece using C#"
          />
          <ProjectCard src={order}
          link="https://github.com/ImZaharias/Esport_Shop"
          h3="Esports Shop"
          p="E-commerce shop focused on training gear"
          />
          <ProjectCard src={order}
          link="https://github.com/ImZaharias/E-Commerce-Store" 
          h3="E-Commerce Store"
          p="Full-featured AI-Generative Art store with modern UI"
          />
          <ProjectCard src={games}
          link="https://github.com/ImZaharias/Mock-Exam-Fundamentals-Oop" 
          h3="OOP Mock Exam"
          p="Mock exam app covering core OOP concepts"
          />
          <ProjectCard src={games}
          link="https://github.com/ImZaharias/Salesforce-Platform-Developer-I-Mock-Exam" 
          h3="Salesforce PD-I Mock Exam"
          p="Mock exam for Salesforce Developer I certification"
          />
        </div>
    </section>
  );
}

export default Projects