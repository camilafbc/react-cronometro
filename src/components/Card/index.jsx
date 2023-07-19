import styles from './styles.module.css';

function Card({entrada}){
    return (
        <div className={styles.card}>{entrada}</div>
    )
}

export default Card