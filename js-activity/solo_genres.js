export function getSoleRepresentative(books){
    const genres = books.map(book => books.genre);
    const soloGenres = genres.filter(function(genre, index, bookGenres) {
        return bookGenres.indexOf(genre) === index && bookGenres.lastIndexOf(genre) === index;
    })

    return soloGenres;
}