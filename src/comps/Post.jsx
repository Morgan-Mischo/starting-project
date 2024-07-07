import styles from './Post.module.css'; 

function Post(props) {
props.author
props.body
    return (
        <div className={styles.post}>
            <p className={styles.author}>{props.author}</p>
            <p className={styles.text}>{props.body}</p>
        </div>
    );
}
export default Post; 
