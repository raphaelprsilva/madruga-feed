import styles from './Header.module.css';

import madrugaLogo from '../assets/madruga-logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={madrugaLogo} alt="Logotipo do Madruga" />
    </header>
  );
}
