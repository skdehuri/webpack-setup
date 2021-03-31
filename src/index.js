import { render } from "react-dom";
import App from "./components/App";
import "./styles/index.scss";

const message = "webpack setup added";
console.log(message);

render(<App />, document.getElementById("root"));
