import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
export const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://xesque.rocketseat.dev/users/avatar/profile-cfa5b3a3-ab35-458d-ab1c-6da74da28a3b-1656423935381.jpg" />
          <div className={styles.authorInfo}>
            <strong>Nome Sobrenome</strong>
            <span> Cargo profission</span>
          </div>
        </div>
        <time title="11 de Maio as 08:13" dateTime="2022-05-11 08:11:30">
          Publicado
        </time>
      </header>

      <div className={styles.content}>
        <p></p>
        <p></p>
        <p></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe o seu feedback</strong>
        <textarea placeholder="Deixe um comentário." />
        <footer>
          <button type="submit"> Publicar </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
};
