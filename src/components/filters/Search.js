import React, { useContext } from "react";
import { Context } from "../../context";

const Search = () => {
  const { stateParams, dispatch, state } = useContext(Context);

  return (
    <form className="uk-search uk-search-default uk-width-medium uk-margin-remove uk-margin-right">
      <span uk-search-icon="true" />
      {state.loader && (
        <span
          className="uk-search-icon uk-search-icon-flip"
          uk-spinner="ratio: 0.6"
        />
      )}
      <input
        className="uk-search-input"
        type="search"
        value={stateParams.search}
        placeholder="Search..."
        onChange={e =>
          dispatch({ type: "setSearch", payload: e.target.value.trim() })
        }
      />
    </form>
  );
};

export default Search;
