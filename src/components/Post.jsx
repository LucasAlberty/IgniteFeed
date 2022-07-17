import styles from './Post.module.css';

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src='https://avatars.githubusercontent.com/u/61556295?v=4'/>
                    <div className={styles.authorInfo}>
                        <strong>Lucas Alberty</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title='17 de Julho ás 08:13h' dateTime='17/07/2022 08:13:30'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉 <a href='#'>jane.design/doctorcare</a></p>

                <p><a href='#'>#novoprojeto #nlw #rocketseat</a></p> 

            </div>
        </article>
    )
}