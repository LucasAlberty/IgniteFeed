import { Header } from "./components/Header";
import {Post} from "./Post";
import './styles.css'
export function App() {
  return (
    <div>
      <Header/>

      <Post 
        author='Lucas Alberty'
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <Post 
        author='Alberty Lucas'
        content="Lorem ipsum dolor sit amet consectetur adipisicin elit."
      />
      
      
    </div>
  );
}


