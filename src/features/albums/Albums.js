import React, { useContext } from "react";
import LoadMore from "./LoadMore";
import Pagination from "./pagination/Pagination";
import { Context } from "../context";
// import usePost from "../hooks/usePost";

const Albums = () => {
  return (
    <>
      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
            <div>
              <div className="uk-card uk-card-default uk-margin-medium-bottom uk-light">
                <img
                  src="https://picsum.photos/600/400"
                  alt=""
                  uk-cover="true"
                />
                <canvas width="600" height="400" />
                <div className="uk-overlay-primary uk-position-cover" />
                <div className="uk-overlay uk-overlay-primary uk-position-bottom">
                  <p>
                    Default Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.
                  </p>
                </div>

                <div className="uk-position-top-right uk-overlay">
                  <a href="href" uk-icon="icon: heart; ratio: 2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LoadMore />
      <Pagination />
    </>
  );
};
export default Albums;
