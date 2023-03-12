import { ThumbsUp, Trash } from "phosphor-react";
import React from "react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/LucasAlberty.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lucas Alberty</strong>
              <time
                title="17 de Julho ás 08:13h"
                dateTime="17/07/2022 08:13:30"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
                <Trash size={24} />   
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
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
