import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:
        'https://f.i.uol.com.br/fotografia/2019/05/30/15592342355cf006bb66026_1559234235_1x1_md.jpg',
      name: 'Ramon Valdez',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala turma!' },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projetinho no meu repo.',
      },
      { type: 'link', content: 'github.com/ramon' },
    ],
    publishedAt: new Date('2023-03-19 12:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        'https://images.unsplash.com/photo-1600697394936-59934aa5951f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
      name: 'Juan Martinez',
      role: 'Web Designer',
    },
    content: [
      { type: 'paragraph', content: 'Fala turma!' },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projetinho no meu repo.',
      },
      { type: 'link', content: 'github.com/juan' },
    ],
    publishedAt: new Date('2023-03-10 12:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
