import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import styles from "./App.module.css";
import "./global.css";
import { PostType } from "./@types/@types";

function App() {
  const postMock: PostType[] = [
    {
      id: 1,
      author: {
        avatarURL:
          "https://xesque.rocketseat.dev/users/avatar/profile-cfa5b3a3-ab35-458d-ab1c-6da74da28a3b-1656423935381.jpg",
        name: "Daniel Colares",
        role: "Developer - Frontend",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa 👋 " },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        { type: "link", content: "👉 jane.design/doctorcare" },
      ],
      publishedAt: new Date("2022-07-05 20:00:00"),
    },
    {
      id: 2,
      author: {
        avatarURL: "https://github.com/barretodotcom.png",
        name: "Lucas Barreto",
        role: "Analista de Dados",
      },
      content: [
        { type: "paragraph", content: "Fala pessoal 👋" },
        {
          type: "paragraph",
          content:
            "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 ",
        },
        {
          type: "link",
          content: "Acesse e deixe seu feedback 👉 devonlane.design",
        },
      ],
      publishedAt: new Date("2022-07-06 12:01:52"),
    },
  ];
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {postMock.map((post: PostType) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
