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
                    Aspiring Salesforce Developer
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
                    Transitioning into Tech | Focused on Salesforce Development
                </p>
                <h3>
                    My Journey
                </h3>
                <p className={styles.description}>
                I hold a degree in Forestry & Natural Environment Management and served seven 
                years in the Hellenic Army, developing strong discipline and adaptability. In 2024, 
                I transitioned into tech through an intensive coding bootcamp, discovering my 
                passion for software development. While working and pursuing a Master’s in Informatics 
                at the University of Piraeus, i&apos;m now focused on building full-stack Salesforce applications 
                using Apex, LWC, and platform tools.
                </p>   
            </div>
        </section>
    );
}

export default Hero;