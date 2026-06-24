import styles from './Loading.module.scss'

const Loading = () => {
    const circles = Array.from({ length: 15 }, (_, i) => i);

    return (
        <div className={styles.dots}>
            {circles.map((dot, index) => (
                <span key={index} style={{ "--i": index }} className={styles.dot}></span>
            ))
            }
        </div>

    )
}

export default Loading