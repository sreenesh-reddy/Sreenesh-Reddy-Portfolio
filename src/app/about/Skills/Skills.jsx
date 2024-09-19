import styles from "./style.module.scss"



export default function Skills(){

const programmingskills=["Python","Java", "JavaScript", "Html", "CSS"]
const miscelskills =["Data Science", "Machine learning", "Natural language Processing"]
return(<>
    <div className={styles.container}>
        <div className={styles.title}>
            Key Skills
        </div>
        <div>
        {programmingskills.map((x)=>(
                    <span>{x}</span>
        ))}
        </div>
        <div>
        {miscelskills.map((x)=>(
                    <span>{x}</span>
        ))}
        </div>
    </div>
    </>)
}