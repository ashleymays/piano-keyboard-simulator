import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import App from "./components/App";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
