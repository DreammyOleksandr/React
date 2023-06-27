import ReactDOM from "react-dom/client";
import Header from "./Layout/header";
import Counter from "./components/counter/counter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header></Header>
    <Counter></Counter>
  </div>
);
