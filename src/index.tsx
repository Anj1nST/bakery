import ReactDOM from "react-dom/client";

import RootConfig from "./router";
import "./styles.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<RootConfig />);
