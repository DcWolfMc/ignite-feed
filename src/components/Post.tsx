import { EventHandler, FormEvent, FormEventHandler, FunctionComponent, useState } from "react";
import { PostType } from "../@types/@types";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export const Post: FunctionComponent<PostType> = ({
  author,
  content,
  publishedAt,
}) => {

  const [comment, setComment] = useState<string>('')
  const [commentList, setCommentList] = useState<string[]>([]);
  
  const publichedDateFormatted = format(
    publishedAt,
    "dd 'de' LLLL 'às' HH:mm",
    {
      locale: ptBR,
    }
  );
  const diferenceToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });
  const handleNewComment = (e:FormEvent) =>{
    e.preventDefault();
    setCommentList([...commentList, comment])
    setComment('');
    console.log(commentList);
    
  }
  const handleDeleteComment = (commentToDelete: string)=>{
    let listWithoutDeletedComment = commentList.filter((comment)=>{
      return comment !== commentToDelete
    })
    setCommentList(listWithoutDeletedComment);
  }
  const isTextareaEmpty = comment === '';
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarURL} />
          <div className={styles.authorInfo}>
            <strong> {author.name} </strong>
            <span> {author.role} </span>
          </div>
        </div>
        <time
          title={publichedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {diferenceToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleNewComment} className={styles.commentForm}>
        <strong>Deixe o seu feedback</strong>
        <textarea 
          value={comment}
          onChange={(e)=>setComment(e.target.value)}
          placeholder="Deixe um comentário."
        />
        <footer>
          <button type="submit" disabled={isTextareaEmpty}> Publicar </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {commentList.map((comment)=>{
          return <Comment key={comment} content={comment} onDeleteComment={handleDeleteComment}/>
          
        })}
        
      </div>
    </article>
  );
};
