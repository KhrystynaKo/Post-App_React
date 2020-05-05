import React from "react";
import Search from "../../components/filters/Search";
import Order from "../../components/filters/Order";
import Limit from "../../components/filters/Limit";
import View from "../../components/filters/View";

const Filters = () => {
  return (
    <div className="uk-margin-medium-bottom uk-flex">
      <Search />
      <Order />
      <Limit />
      <View />
    </div>
  );
};

export default Filters;
