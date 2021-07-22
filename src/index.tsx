import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const renderApp = () => {
  return ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderApp();

if (module.hot) {
  module.hot.accept(renderApp);
}
