import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useFavorites } from "../../hooks/useFavorites";
import { FavoriteContext } from "../../context";

import MainLayout from "../../layout/MainLayout";

const Albums = React.lazy(() => import("../albums/Albums"));
const Posts = React.lazy(() => import("../posts/Posts"));
const Post = React.lazy(() => import("../post/Post"));

function App() {
  const { favorites, setFavorites } = useFavorites();

  return (
    <Router>
      <FavoriteContext.Provider
        value={{
          favorites,
          setFavorites
        }}
      >
        <MainLayout>
          <Suspense fallback={<div>loading...</div>}>
            <Switch>
              <Route exact path="/">
                <Posts />
              </Route>
              <Route path="/post/:id">
                <Post />
              </Route>
              <Route path="/albums">
                <Albums />
              </Route>
            </Switch>
          </Suspense>
        </MainLayout>
      </FavoriteContext.Provider>
    </Router>
  );
}

export default App;
