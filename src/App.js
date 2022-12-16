import React, { useEffect, useState } from "react";
import { RECENT_BASE_URL, SEARCH_BASE_URL } from "./config";
import Header from "./components/Layout/Header";
import MovieGroup from "./components/Layout/MovieGroup";

import MovieDetail from "./components/Layout/MovieDetail";
import Modal from "./components/UI/Modal";

function App() {
  const [movies, setMovies] = useState([]);
  const [isError, setIsError] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [clickedMovie, setClickedMovie] = useState({});
  useEffect(() => {
    async function fetchMovies(endpoint) {
      try {
        const res = await fetch(endpoint).then((res) => {
          return res.json();
        });
        setMovies(() => {
          return res.results;
        });
      } catch (err) {
        setIsError(true);
      }
    }

    const fetchData = setTimeout(() => {
      if (searchTerm.length === 0) {
        fetchMovies(RECENT_BASE_URL);
      } else {
        fetchMovies(SEARCH_BASE_URL + searchTerm);
      }
    }, 500);

    return () => {
      clearTimeout(fetchData);
    };
  }, [searchTerm, setIsError, setMovies]);
  const [modalIsShown, setModalIsShown] = useState(false);

  function onInputChange(term) {
    setSearchTerm(() => {
      return term;
    });
  }
  const movieClickHandler = (movie) => {
    setModalIsShown(true);
    setClickedMovie(() => {
      return movie;
    });
  };

  const movieExitHandler = () => {
    setModalIsShown(false);
  };

  const title =
    searchTerm.length === 0 ? "Most Recent Movies" : "Search Result";

  if (isError) {
    return (
      <Modal>
        There is some error! Please try again later or refresh now!!
      </Modal>
    );
  }

  return (
    <>
      {modalIsShown ? (
        <MovieDetail movie={clickedMovie} movieExitHandler={movieExitHandler} />
      ) : (
        <></>
      )}
      <Header onInputChange={onInputChange} />
      <hr />
      <main>
        {(movies.length > 0 || searchTerm.length > 0) && (
          <MovieGroup
            movieClickHandler={movieClickHandler}
            movies={movies}
            title={title}
          />
        )}
      </main>
    </>
  );
}

export default App;
