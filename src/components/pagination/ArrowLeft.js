import React, { useContext } from "react";
import { Context } from "../../context";
import { usePaginate } from "../../hooks/usePaginate";

const ArrowLeft = () => {
  const { totalCount, stateParams, dispatch } = useContext(Context);
  const { prevPage } = usePaginate(totalCount, stateParams, dispatch);

  return (
    <li>
      <a onClick={() => prevPage()} href="#">
        <span uk-pagination-previous="true" />
      </a>
    </li>
  );
};

export default ArrowLeft;
