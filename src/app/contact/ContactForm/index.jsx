import styles from './style.module.scss'

export default function index(){

    const submit=(e)=>{
        console.log('submitted');
    }
return(<>
<div className={styles.body}>
    <form>
    <label><div className={styles.indicator}></div>  What's your name?</label>
    <input placeholder='John*'/>
    <label><div className={styles.indicator}></div>What's your contact mail?</label>
    <input placeholder='xyz@gmail.com'/>
    <label><div className={styles.indicator}></div>and, what's your message?</label>
    <input placeholder='Hello, ...'/>
    <button type="submit" onClick={submit}>SUBMIT</button>
    </form>
    <div className={styles.image}>
        <img src="./contact.svg" alt="contact svg" width="300px" height="300px"/>
    </div>
</div>
</>)
}