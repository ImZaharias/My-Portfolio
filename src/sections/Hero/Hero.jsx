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
                    My Journey
                </h3>
                <p className={styles.description}>
                I graduated in 2016 with a degree in Forestry & Natural Environment Management 
                from the Agricultural University of Athens (AUA). After seven years of service in 
                the Hellenic Army, I transitioned to the technology sector in 2024 by completing an 
                intensive six-month coding bootcamp, Coding Factory, at the Athens University of Economics 
                and Business (AUEB). Currently, I am pursuing a Master΄s in Informatics at the University 
                of Piraeus (UNIPI), driven by a passion for programming and a strong desire to build a career in tech.
                </p>   
            </div>
        </section>
    );
}

export default Hero;