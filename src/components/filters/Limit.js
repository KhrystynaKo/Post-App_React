import React, { useContext } from "react";
import { Context } from "../../context";

const Limit = () => {
  const { stateParams, dispatch } = useContext(Context);

  const changeLimit = value => {
    dispatch({ type: "setLimit", payload: value });
    dispatch({ type: "setStart", payload: "" });
    dispatch({ type: "setEnd", payload: "" });
    dispatch({ type: "setLoadPosts", payload: 3 });
  };
  return (
    <select
      className="uk-select uk-width-small uk-margin-left"
      value={stateParams.limit}
      onChange={e => changeLimit(e.target.value)}
    >
      <option value="6">6</option>
      <option value="12">12</option>
      <option value="24">24</option>
    </select>
  );
};

export default Limit;
