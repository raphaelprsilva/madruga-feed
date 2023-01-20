import { Comment } from './Comment';
import styles from './Post.module.css';
import { Avatar } from './Avatar';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src="https://f.i.uol.com.br/fotografia/2019/05/30/15592342355cf006bb66026_1559234235_1x1_md.jpg"
          />
          <div className={styles.authorInfo}>
            <strong>Ramon Valdez</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time
          title="16 de Janeiro de 2023, às 18h e 23 min"
          dateTime="2023-16-01 18:23:34"
        >
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala turma!</p>
        <p>Acabei de subir mais um projetinho no meu repo.</p>
        <p>
          👉🏾 <a href="">github.com/ramon</a>
        </p>
        <p>
          <a href="">#projetinho</a> <a href="">#bora</a>{' '}
          <a href="">#vamoquevamo</a>{' '}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
