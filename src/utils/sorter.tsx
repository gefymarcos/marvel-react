export const sortByReleaseDate = (array: any) => {
    return array.sort(function(a: any, b: any) {
      // @ts-ignore
        return new Date(a.release_date) - new Date(b.release_date);
  });
}

export const sortByChronological = (array: any) => {
    return array.sort(function(a: any, b: any) {
        // @ts-ignore
        return a.index - b.index;
    });
}