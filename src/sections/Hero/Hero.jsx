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
                    <a href="https://github.com/ImZaharias" target='_blank'>
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
                    My Journey
                </h3>
                <p className={styles.description}>
                I hold a degree in Forestry & Natural Environment Management from Technological Educational Institute
                of Central Greece and served seven years in the Hellenic Army, where I developed 
                strong discipline and problem-solving skills. In 2024, I transitioned to tech by completing 
                an intensive coding bootcamp, Coding Factory at the Athens University of Economics & 
                Business, discovering my passion for programming. Currently, I work as a data entry 
                agent while pursuing a Master’s in Informatics at the University of Piraeus, aiming 
                to combine my unique background and growing expertise to build a successful career in technology.
                </p>   
            </div>
        </section>
    );
}

export default Hero;