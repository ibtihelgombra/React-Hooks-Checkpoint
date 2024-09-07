import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);

    const addMovie = (movie) => {
        setMovies([...movies, movie]);
        setFilteredMovies([...movies, movie]); // Update filtered list
    };

    const applyFilter = ({ title, rating }) => {
        const filtered = movies.filter(movie => {
            return (
                (title ? movie.title.toLowerCase().includes(title.toLowerCase()) : true) &&
                (rating ? movie.rating >= rating : true)
            );
        });
        setFilteredMovies(filtered);
    };

    return (
        <div className="app">
            <Filter onFilter={applyFilter} />
            <MovieList movies={filteredMovies} />
            <button onClick={() => addMovie({ title: 'New Movie', description: 'Description here', posterURL: 'url_here', rating: 5 })}>
                Add Movie
            </button>
        </div>
    );
};

export default App;
