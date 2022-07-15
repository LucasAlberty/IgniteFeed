import { Header } from "./components/Header";
import { Post } from "./Post";
import {Sidebar} from "./components/Sidebar"
import "./global.css";
import styles from "./App.module.css";
export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Lucas Alberty Borges"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <Post
            author="Alberty Lucas"
            content="Lorem ipsum dolor sit amet consectetur adipisicin elit."
          />
        </main>
      </div>
    </div>
  );
}
