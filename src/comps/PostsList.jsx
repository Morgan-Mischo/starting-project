import Post from './Post';
import styles from './PostsList.module.css';

function PostsList() {
    return ( 
    <ul className={styles.posts}> 
        <Post author="Morgan" body="likes to program" />
        <Post author="Taylor" body="likes medicine" />
    </ul>
    ); 
}

export default PostsList; 