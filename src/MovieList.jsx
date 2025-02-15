import { useState } from 'react';

const MoviesList = () => {
    const [movies, setMovies] = useState([
        { title: 'Django', genre: 'Western', description: 'is a 2012 American revisionist Western film written and directed by Quentin Tarantino. Set in the Antebellum South, the film follows Django, a freed slave who teams up with a German bounty hunter named Dr. King Schultz. Together, they embark on a mission to rescue Djangos wife, Broomhilda, from the cruel plantation owner Calvin Candie.The film is known for its stylized violence, sharp dialogue, and exploration of themes such as slavery, revenge, and justice. It stars Jamie Foxx, Christoph Waltz, Leonardo DiCaprio, Kerry Washington, and Samuel L.Jackson.', isOpen: false },
        { title: 'Harlem Nights', genre: 'Comedy-Drama', description: 'is a 1989 American crime comedy-drama film directed by Eddie Murphy, who also stars in the movie alongside Richard Pryor and Redd Foxx. The story is set in the 1930s and follows the lives of the owners and employees of an upscale nightclub in Harlem, New York. The plot centers around their efforts to protect their business from hostile competitors and corrupt police officers. The film features a mix of comedy, action, and drama, and is noted for its impressive cast of legendary comedians and entertainers. "Harlem Nights" received mixed reviews from critics upon its release, but has since gained a cult following for its humor and performances. It is considered a classic of African American cinema and a notable entry in Eddie Murphys filmography.', isOpen: false },
        { title: 'Gone in 60 Seconds', genre:'Action', description: 'Gone in 60 Seconds is a 2000 action film directed by Dominic Sena and starring Nicolas Cage, Angelina Jolie, Giovanni Ribisi, Christopher Eccleston, Robert Duvall, Vinnie Jones, and Will Patton. The film is a remake of the 1974 film of the same name. The plot follows a retired car thief who is forced to steal 50 cars in one night to save his brother from a crime boss. The film received mixed reviews from critics but was a commercial success, grossing over $237 million worldwide. It is known for its high-octane action sequences and car chases, as well as its ensemble cast. Gone in 60 Seconds has since become a cult classic among fans of the action genre.', isOpen: false },
        { title: 'Pulp Fiction', genre: 'Crime', description: 'Pulp Fiction is a 1994 crime film written and directed by Quentin Tarantino. The film is known for its nonlinear narrative structure, eclectic dialogue, and eclectic cast of characters. It features multiple storylines that intertwine in unexpected ways, following the lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of armed robbers. Pulp Fiction received widespread critical acclaim upon its release and won the Palme dOr at the 1994 Cannes Film Festival. It is considered one of the greatest films of all time and has had a significant impact on popular culture. The film was a commercial success, grossing over $200 million worldwide. Pulp Fiction is known for its stylish direction, sharp dialogue, and memorable performances, particularly by John Travolta, Uma Thurman, and Samuel L. Jackson.', isOpen: false },
        { title: 'The Matrix', genre: 'Sci-Fi Action', description: 'The Matrix is a 1999 science fiction film written and directed by the Wachowskis. The film stars Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving, and Joe Pantoliano. It depicts a dystopian future in which humanity is unknowingly trapped inside a simulated reality created by intelligent machines. The story follows a computer hacker who discovers the truth about his world and joins a group of rebels in their fight against the machines. The Matrix received widespread critical acclaim upon its release and was praised for its groundbreaking visual effects, action sequences, and philosophical themes. The film was a commercial success, grossing over $460 million worldwide. It won four Academy Awards and spawned two sequels, The Matrix Reloaded and The Matrix Revolutions.', isOpen: false },
    ]);
    const [showAction, setShowAction] = useState(false);

    const toggleDetails = (index) => {
        const updatedMovies = movies.map((movie, i) => {
            if (i === index) {
                return { ...movie, isOpen: !movie.isOpen };
            }
            return movie;
        });
        setMovies(updatedMovies);
    };
    const removeMovie = (index) => {
        const updatedMovies = movies.filter((_, i) => i !== index);
        setMovies(updatedMovies);
    };
    const toggleGenreView = () => {
        setShowAction(!showAction);
    };

    const filteredMovies = showAction ? movies.filter(movie => movie.genre === 'Action') : movies;
   
    return (
        <div>
            <h1>Favorite Movies</h1>
            <button onClick={toggleGenreView}></button>
            {showAction ? 'Show All' : 'Show Action'}
            <ul>
                {filteredMovies.map((movie, index) => (
                    <li key={index}>
                        <h2>{movie.title}</h2>
                        <button onClick={() => toggleDetails(index)}>
                            {movie.isOpen ? 'Hide Details' : 'Show Details'}
                        </button>
                        {movie.isOpen && <p>{movie.description}</p>}
                        <button onClick={() => removeMovie(index)}>Remove</button>
                    </li>
                ))}

            </ul>
        </div>
    );
};

export default MoviesList;