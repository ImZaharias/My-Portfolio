import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import githubIcon from '../../assets/github-dark.svg';
import linkedinIcon from '../../assets/linkedin-dark.svg';

function Hero() {
    return (
        <section id='hero' className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img className={styles.hero} src={heroImg} alt="Profile picture of Zacharias Polytseris" />
            </div>
            <div className={styles.info}>
                <h1>
                    Zacharias
                    <br />
                    Polytseris
                </h1>
                <h2>
                    Junior Developer
                </h2>
                <span>
                    <a href="https://github.com/ImZaharias?tab=repositories" target='_blank'>
                        <img src={githubIcon} alt="Github icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/zacharias-polytseris/" target='_blank'>
                        <img src={linkedinIcon} alt="Linkedin icon" />
                    </a>
                </span>
                <p>
                    Ready to Code, Test, and Learn!
                </p>
                <h3>
                    Resume
                </h3>
                <p className={styles.description}>
                I am a graduate of the Coding Factory (AUEB) and currently 
                pursuing a Master’s in Computer Science at the University 
                of Piraeus (UNIPI), focusing on software development. I 
                hold a degree in Forestry and Environmental Studies and 
                have spent six years in an elite military unit, where I 
                developed strong skills in teamwork, discipline, and 
                problem-solving.
                </p>   
            </div>
        </section>
    );
}

export default Hero;