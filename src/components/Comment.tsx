import { ThumbsUp, Trash } from "phosphor-react";
import { FunctionComponent, useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

interface CommentProps{
  content: string
  onDeleteComment:(commentToDelete: string) => void

}
export const Comment:FunctionComponent<CommentProps> = ({content, onDeleteComment}) => {
  const [applause, setApplause] = useState<number>(0)
  const handleDeleteComment = () =>{
    onDeleteComment(content)
  }
  function handleApplause(){
    setApplause((prev)=>prev+1)
  }

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
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
            <button onClick={handleApplause}  className={styles.footerButton}>
                <ThumbsUp size={20}/>
                Aplaudir
                <span>{applause}</span>
            </button>
        </footer>
      </div>
    </div>
  );
};
