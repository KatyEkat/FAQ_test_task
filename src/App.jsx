import FaqIcon from "./components/FaqIcon/FaqIcon";
import styles from "./App.module.css";
import Categories from "./components/Categories";
import { categories } from "./MockData/MockData";

function App() {
  return (
    <div className={styles.main}>
      <FaqIcon />
      <Categories  data={categories} />
    </div>
  );
}

export default App;
