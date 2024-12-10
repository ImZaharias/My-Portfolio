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
                <SkillList src={checkMarkIcon} skill="Javascript"/>
                <SkillList src={checkMarkIcon} skill="React.js"/>
                <SkillList src={checkMarkIcon} skill="TypeScript"/>
                <SkillList src={checkMarkIcon} skill="HTML5"/>
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="SQL"/>
                <SkillList src={checkMarkIcon} skill="PostgreSQL"/>
                <SkillList src={checkMarkIcon} skill="MongoDB"/>
                <SkillList src={checkMarkIcon} skill="Git"/>
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="JUnit"/>
                <SkillList src={checkMarkIcon} skill="Selenium"/>
                <SkillList src={checkMarkIcon} skill="Mockito"/>
                <SkillList src={checkMarkIcon} skill="TDD"/>
            </div>
        </section>
    );    
}

export default Skills