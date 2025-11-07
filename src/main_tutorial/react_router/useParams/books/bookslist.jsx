import { Link } from "react-router-dom";

export const books = [
  { id: "1", title: "1984", author: "Джордж Оруэлл", year: 1949, genre: "Антиутопия" },
  { id: "2", title: "Мастер и Маргарита", author: "Михаил Булгаков", year: 1967, genre: "Роман" },
  { id: "3", title: "Три товарища", author: "Эрих Мария Ремарк", year: 1936, genre: "Роман" },
  { id: "4", title: "Властелин колец", author: "Дж. Р. Р. Толкин", year: 1954, genre: "Фэнтези" },
];
export const BooksList = () => {
    return <>
        <h2>Books List</h2>
        {books.map((item) => {
            const {title,id,author,year,genre} = item
            return (
                <li key={id}>
                    <Link to={`${id}`}>ID: {id}</Link>
                    <div><i><b>Title:</b></i> {title}</div>
                    <div><i><b>Author:</b></i>  {author}</div>
                    <div><i><b>Year:</b></i>  {year}</div>
                    <div><i><b>Genre:</b></i>  {genre}</div>
                    <hr />
                </li>
            )
        })}
    </>
}