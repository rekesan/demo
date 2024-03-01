import { Book } from "./books_data";
// export function getSoleRepresentative(books): {
//     const genres = books.map(book => book.genre);
//     const soloGenres = genres.filter(function(genre, index, bookGenres) {
//         return bookGenres.indexOf(genre) === index && bookGenres.lastIndexOf(genre) === index;
//     })

//     const soloBooks = books.filter(book => soloGenres.includes(book.genre));
//     return soloBooks;
// }


export function getSoleRepresentative(books:Book[]): Book[] {
    const genres:string[] = books.map(book => book.genre);
    const soloGenres:string[] = genres.filter(function(genre, index, bookGenres): boolean {
        return bookGenres.indexOf(genre) === index && bookGenres.lastIndexOf(genre) === index;
    });
    
    const soloBooks = books.filter(book => soloGenres.includes(book.genre));
    return soloBooks;    
};

