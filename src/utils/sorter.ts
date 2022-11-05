import { Movie } from "../data/types/movies";

export const sortByReleaseDate = (array: Movie[]) => {
    return array.sort(function(a: Movie, b: Movie) {
        return new Date(a.release_date).getTime() - new Date(b.release_date).getTime();
  });
}

export const sortByChronological = (array: Movie[]) => {
    return array.sort(function(a: Movie, b: Movie) {
        return a.index - b.index;
    });
}
