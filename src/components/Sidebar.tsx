import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />
      <div className={styles.profile}>
        <Avatar src="https://xesque.rocketseat.dev/users/avatar/profile-cfa5b3a3-ab35-458d-ab1c-6da74da28a3b-1656423935381.jpg" />
        <strong>Nome Sobrenome</strong>
        <span>Cargo</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};
