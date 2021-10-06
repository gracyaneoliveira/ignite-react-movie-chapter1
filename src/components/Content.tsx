import '../styles/content.scss';
import { MovieCard } from './MovieCard';

interface ContentProps {
  movies: MovieProps[];
  gender: string;
}

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function Content({gender, movies}: ContentProps) {
return  <div className="container">
          <header>
            <span className="category">Categoria:<span> {gender}</span></span>
          </header>

          <main>
            <div className="movies-list">
              {movies.map(movie => (
                <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
              ))}
            </div>
          </main>
        </div>
}