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
          p="Track Your Daily Spending"
          />
          <ProjectCard src={games} 
          link="https://imzaharias.github.io/HolyPolyGames/" 
          h3="Retro Games"
          p="Classic Games"
          />
          <ProjectCard src={order}
          link="https://github.com/ImZaharias" 
          h3="Comming Soon"
          p="User-Friendly Shopping Platform "
          />
        </div>
    </section>
  );
}

export default Projects