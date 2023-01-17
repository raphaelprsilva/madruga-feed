import { Header } from './components/Header';

import styles from './App.module.css';

import { Post } from './Post';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Raphael"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magni voluptates neque quia fugiat, ex quos cumque, dolorem ut laudantium quidem deserunt. Molestias consequuntur, facere laborum placeat iusto accusantium quo."
          />
          <Post
            author="Rodrigo"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magni voluptates neque quia fugiat, ex quos cumque, dolorem ut laudantium quidem deserunt. Molestias consequuntur, facere laborum placeat iusto accusantium quo."
          />
        </main>
      </div>
    </div>
  );
}
