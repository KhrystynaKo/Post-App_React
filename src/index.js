import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./features/app/App";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";

UIkit.use(Icons);

ReactDOM.render(<App />, document.getElementById("root"));
