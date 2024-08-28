import ReactDOM from "react-dom/client";
import App from "./App/Index";
import initializeParse from "./api/initializeParse";

initializeParse();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
