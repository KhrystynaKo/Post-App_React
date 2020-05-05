import React, { useContext } from "react";
import { Context } from "../../context";

const View = () => {
  const { stateParams, dispatch } = useContext(Context);

  return (
    <div className="uk-button-group uk-margin-left">
      <button
        className={`uk-button uk-button-default ${
          stateParams.view === "grid" ? "uk-active" : ""
        }`}
        onClick={() => dispatch({ type: "setView", payload: "grid" })}
      >
        <span uk-icon="icon:  grid" />
      </button>
      <button
        className={`uk-button uk-button-default ${
          stateParams.view === "list" ? "uk-active" : ""
        }`}
        onClick={() => dispatch({ type: "setView", payload: "list" })}
      >
        <span uk-icon="icon:  list" />
      </button>
    </div>
  );
};

export default View;
