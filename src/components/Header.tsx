import styles from "./Header.module.css";
import igniteLogo from "../assets/Ignite-feed-logo.svg";
export const Header = () => {

  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="logo" />
      <strong >Ignite Feed</strong>
    </header>
  );
};
