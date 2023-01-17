import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src="https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"
        className={styles.cover}
      />

      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://f.i.uol.com.br/fotografia/2019/05/30/15592342355cf006bb66026_1559234235_1x1_md.jpg"
        />
        <strong>Ramon Valdez</strong>
        <span>Web developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
