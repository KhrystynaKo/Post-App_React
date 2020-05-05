import React, { useContext } from "react";
import { Context } from "../../context";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import { usePaginate } from "../../hooks/usePaginate";

const Pagination = () => {
  const { totalCount, stateParams, dispatch } = useContext(Context);
  const { pageNumbers, paginate } = usePaginate(
    totalCount,
    stateParams,
    dispatch
  );

  return (
    <ul
      className="uk-pagination uk-flex-center uk-flex-middle"
      uk-margin="true"
    >
      {stateParams.currentPage > 1 && <ArrowLeft />}

      {pageNumbers.map(number => (
        <li
          key={number}
          className={number === stateParams.currentPage ? "uk-active" : ""}
        >
          <a onClick={() => paginate(number)} href="#">
            {number}
          </a>
        </li>
      ))}
      {pageNumbers[pageNumbers.length - 1] !== stateParams.currentPage && (
        <ArrowRight />
      )}
    </ul>
  );
};

export default Pagination;
