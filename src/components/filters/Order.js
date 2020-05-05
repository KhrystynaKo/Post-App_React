import React, { useContext } from "react";
import { Context } from "../../context";

const Order = () => {
  const { stateParams, dispatch } = useContext(Context);

  return (
    <select
      className="uk-select uk-width-small uk-margin-auto-left"
      value={stateParams.order}
      onChange={e => dispatch({ type: "setOrder", payload: e.target.value })}
    >
      <option value="asc">ASC</option>
      <option value="desc">DESC</option>
    </select>
  );
};

export default Order;
