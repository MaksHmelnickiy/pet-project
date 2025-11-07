import { useParams } from "react-router-dom"
import { books } from "./bookslist"

export const Book = () => {
    const {id} = useParams()
    const book = books.find(item => item.id === id)
    if(!book) {
        return <div>Ничего не найдено</div>
    }
    return <>
      <h2>{book.title}</h2>
      <p><strong>Автор:</strong> {book.author}</p>
      <p><strong>Год:</strong> {book.year}</p>
      <p><strong>Жанр:</strong> {book.genre}</p>
    </>
}