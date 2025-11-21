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
                    Salesforce Application Developer
                </h2>
                <span>
                    <a href="https://github.com/ImZaharias" target='_blank'>
                        <img src={githubIcon} alt="Github icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/zacharias-polytseris/" target='_blank'>
                        <img src={linkedinIcon} alt="Linkedin icon" />
                    </a>
                </span>
                <p>
                    MSc Informatics Student (UniPi) | Salesforce PD1 Certified
                </p>
                <h3>
                    My Journey
                </h3>
                <p className={styles.description}>
                I hold a BSc in Forestry & Natural Environment and served six years in the Hellenic 
                Army (Special Forces), developing discipline, teamwork, and adaptability. In 2024, 
                I transitioned into technology through the Coding Factory bootcamp (AUEB) and 
                started my MSc in Informatics at the University of Piraeus. Since May 2025, I&apos;ve 
                been working as a Salesforce Application Developer, focusing on Apex, Flows, and 
                data management.
                </p>   
            </div>
        </section>
    );
}

export default Hero;