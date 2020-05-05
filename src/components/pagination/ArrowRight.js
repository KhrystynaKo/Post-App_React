import React, { useContext } from "react";
import { Context } from "../../context";
import { usePaginate } from "../../hooks/usePaginate";

const ArrowRight = () => {
  const { totalCount, stateParams, dispatch } = useContext(Context);
  const { nextPage } = usePaginate(totalCount, stateParams, dispatch);

  return (
    <li>
      <a onClick={() => nextPage()} href="#">
        <span uk-pagination-next="true" />
      </a>
    </li>
  );
};

export default ArrowRight;
