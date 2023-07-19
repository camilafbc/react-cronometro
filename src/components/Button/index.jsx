import styles from './styles.module.css';

function Button({ onClick, textButton}){
    return (
        <button
            className={styles.btn} 
            onClick={onClick}>
                {textButton}
        </button>
    )
}

export default Button