import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';

function Skills() {
    return ( 
        <section id="Skills" className={styles.container}>
            <h1 className='sectionTitle'>Skills</h1>
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="Apex (OOP, DML, Logic)"/>
                <SkillList src={checkMarkIcon} skill="SOQL (Salesforce Query Language)"/>
                <SkillList src={checkMarkIcon} skill="Apex Triggers"/>
                <SkillList src={checkMarkIcon} skill="Apex Unit Testing"/>
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="Data Modeling (Objects, Fields, Relationships)"/>
                <SkillList src={checkMarkIcon} skill="Validation Rules & Record-Level Security"/>
                <SkillList src={checkMarkIcon} skill="Developer Console & Debug Logs"/>
                <SkillList src={checkMarkIcon} skill="Salesforce Flow Basics"/>
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="Platform Development Basics"/>
                <SkillList src={checkMarkIcon} skill="Asynchronous Apex (Future, Queueable)"/>
                <SkillList src={checkMarkIcon} skill="Lightning Web Components"/>
                <SkillList src={checkMarkIcon} skill="Salesforce DX & CLI"/>
            </div>
        </section>
    );    
}

export default Skills