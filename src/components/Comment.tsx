import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";
export const Comment = () => {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://xesque.rocketseat.dev/users/avatar/profile-cfa5b3a3-ab35-458d-ab1c-6da74da28a3b-1656423935381.jpg"
          />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header className={styles.commentHeader}>
            <div className={styles.commentHeaderInfo}>
              <strong>Nome Sobrenome</strong>
              <time title="11 de Maio as 08:13" dateTime="2022-05-11 08:11:30">
                Há 1h
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Conteúdo do comentário.</p>
        </div>

        <footer>
            <button className={styles.footerButton}>
                <ThumbsUp size={20}/>
                Aplaudir
                <span>20</span>
            </button>
        </footer>
      </div>
    </div>
  );
};
