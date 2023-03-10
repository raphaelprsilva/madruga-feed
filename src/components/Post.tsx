import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Comment } from './Comment';
import { Avatar } from './Avatar';

import styles from './Post.module.css';

interface IAuthor {
  name: string;
  role: string;
  avatarUrl: string;
}

interface IContent {
  type: 'link' | 'paragraph';
  content: string;
}

interface IPost {
  author: IAuthor;
  content: IContent[];
  publishedAt: number | Date;
}

export function Post({ author, content, publishedAt }: IPost) {
  const [comments, setComments] = useState(['Post show de bola']);
  const [newComment, setNewComment] = useState('');

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    },
  );

  const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComments(event: FormEvent) {
    event.preventDefault();

    setComments([...comments, newComment]);
    setNewComment('');
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewComment(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    console.log(event);
    event.target.setCustomValidity('Este campo é obrigatório');
  }

  function checkCommentEmpty() {
    return newComment.length === 0;
  }

  function deleteComments(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(
      (comment) => comment !== commentToDelete,
    );
    setComments(commentsWithoutDeletedOne);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toString()}
        >
          {publishedDateRelativeNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link') {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComments} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          value={newComment}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          placeholder="Deixe um comentário"
          required
        />

        <footer>
          <button type="submit" disabled={checkCommentEmpty()}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={deleteComments}
          />
        ))}
      </div>
    </article>
  );
}
