import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://img.estadao.com.br/fotos/crop/1200x1200/resources/jpg/6/2/1529523448026.jpg" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Ramon Valdez</strong>
              <time
                title="16 de Janeiro de 2023, às 18h e 23 min"
                dateTime="2023-16-01 18:23:34"
              >
                Cerca de 1 hora atrás
              </time>
            </div>
            <button title="Deletar comantário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom, show de bola.✌🏾</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
