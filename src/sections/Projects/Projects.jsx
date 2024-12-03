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
          h3="My Expenses"
          p="Expense Tracker App"
          />
          <ProjectCard src={games} 
          link="https://github.com/ImZaharias/JavaScript-Games" 
          h3="My Games"
          p="JavaScript Games"
          />
          <ProjectCard src={order}
          link="https://github.com/ImZaharias" 
          h3="Coming Soon"
          p="Order Management App"
          />
        </div>
    </section>
  );
}

export default Projects