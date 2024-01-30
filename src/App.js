import "./App.css";
import Post from "./component/Post";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Post />
    </div>
  );
}

export default App;
