import { iMovies, iMoviesIndex } from './movies'

export const getMovies = async () => {
    const dataCache = localStorage.getItem("data");
    if (!dataCache) {
        const allPromisses = iMovies.map(async ({ id }) => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=dd56b7e44e8566c416554768d7815d9d`)

            return await response.json();
        })
        return Promise.all(allPromisses).then(values => addIndex(values))
    } else {
        return JSON.parse(dataCache)
    }
}

const addIndex = (array: any) => {
    return array.map((ar: any) => {
        // @ts-ignore
        return { ...ar, index: iMoviesIndex[ar.id].index }
    })
}
