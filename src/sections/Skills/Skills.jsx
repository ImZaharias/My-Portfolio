import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';

function Skills() {
    return ( 
        <section id="Skills" className={styles.container}>
            <h1 className='sectionTitle'>Skills</h1>
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="Java"/>
                <SkillList src={checkMarkIcon} skill="Spring Boot"/>
                <SkillList src={checkMarkIcon} skill="Node.js"/>
                <SkillList src={checkMarkIcon} skill="Express.js"/>
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="React.js"/>
                <SkillList src={checkMarkIcon} skill="Angular"/>
                <SkillList src={checkMarkIcon} skill="JavaScript"/>
                <SkillList src={checkMarkIcon} skill="TailwindCSS"/>
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="MySQL"/>
                <SkillList src={checkMarkIcon} skill="MongoDB"/>
                <SkillList src={checkMarkIcon} skill="SQL Server"/>
                <SkillList src={checkMarkIcon} skill="Git & GitHub"/>
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="Postman "/>
                <SkillList src={checkMarkIcon} skill="Selenium"/>
                <SkillList src={checkMarkIcon} skill="JUnit"/>
                <SkillList src={checkMarkIcon} skill="Debugging Tools"/>
            </div>
        </section>
    );    
}

export default Skills