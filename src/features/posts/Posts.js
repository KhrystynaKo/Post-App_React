import React, { useReducer, Suspense } from "react";
import { Context } from "../../context";
import { usePaginate } from "../../hooks/usePaginate";
import usePost from "../../hooks/usePost";
import { mainStatesReducer } from "../../mainStatesReducer";
import LoadMore from "../../components/LoadMore";
import Pagination from "../../components/pagination/Pagination";
import FilterBar from "../filters/FilterBar";
const PostsGrid = React.lazy(() => import("./PostsGrid"));
const PostsList = React.lazy(() => import("./PostsList"));

function Posts() {
  const initialState = {
    start: "",
    end: "",
    currentPage: 1,
    limit: 6,
    search: "",
    order: "asc",
    view: "grid",
    loadPosts: 3
  };

  const [stateParams, dispatch] = useReducer(mainStatesReducer, initialState);

  const sort = "title";

  const { state, totalCount, data } = usePost(
    `?q=${stateParams.search}&_sort=${sort}&_order=${
      stateParams.order
    }&_limit=${stateParams.limit}&_start=${stateParams.start}&_end=${
      stateParams.end
    }`
  );

  const { pageNumbers } = usePaginate(totalCount, stateParams, dispatch);

  return (
    <Context.Provider
      value={{
        stateParams,
        dispatch,
        state,
        totalCount
      }}
    >
      <FilterBar />
      <Suspense
        fallback={
          <span
            className="uk-search-icon uk-search-icon-flip"
            uk-spinner="ratio: 0.6"
          />
        }
      >
        {stateParams.view === "grid" && <PostsGrid posts={data} />}
        {stateParams.view === "list" && <PostsList posts={data} />}
      </Suspense>
      {totalCount >= 1 &&
        pageNumbers[pageNumbers.length - 1] !== stateParams.currentPage && (
          <LoadMore loader={state.loader} />
        )}
      {totalCount >= 1 && <Pagination posts={data} totalPosts={totalCount} />}
    </Context.Provider>
  );
}

export default Posts;
