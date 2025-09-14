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
                <SkillList src={checkMarkIcon} skill="Apex Triggers & Unit Testing"/>
                <SkillList src={checkMarkIcon} skill="Asynchronous Apex (Future, Queueable)"/>
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="Lightning Web Components (LWC)"/>
                <SkillList src={checkMarkIcon} skill="Salesforce Flows & Automation"/>
                <SkillList src={checkMarkIcon} skill="Validation Rules & Record-Level Security"/>
                <SkillList src={checkMarkIcon} skill="Data Modeling (Objects, Fields, Relationships)"/>
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="Salesforce CLI & Developer Console"/>
                <SkillList src={checkMarkIcon} skill="Debug Logs & Troubleshooting"/>
                <SkillList src={checkMarkIcon} skill="Data Loader & Salesforce Inspector"/>
                <SkillList src={checkMarkIcon} skill="Ticketing & Issue Resolution (ServiceNow)"/>
            </div>
        </section>
    );    
}

export default Skills