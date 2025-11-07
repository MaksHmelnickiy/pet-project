import { UseStatate } from './main_tutorial/hooks/useState/useState';
import { UseEffect } from './main_tutorial/hooks/useEffect/useEffect';
import { RenderLists } from './main_tutorial/hooks/rendering_list/render_list';
import { Route, Routes } from 'react-router-dom';
import { JSX } from './main_tutorial/JSX';
import { UseNavigate } from './main_tutorial/react_router/useNavigate/useNavigate';
import { AddCarForm } from './main_tutorial/react_router/useNavigate/carsTask/AddCarForm';
import { CarsLayout } from './main_tutorial/react_router/useNavigate/carsTask/CarsLayout';
import { StudentsLayout } from './main_tutorial/react_router/useNavigate/studentsTask/StudentsLayout';
import { AddStudentsForm } from './main_tutorial/react_router/useNavigate/studentsTask/AddStudentsForm';
import { UseParams } from './main_tutorial/react_router/useParams/useParams';
import { Student } from './main_tutorial/react_router/useParams/students/Students';
import { StudentsList } from './main_tutorial/react_router/useParams/students/StudentsList';
import { BooksList } from './main_tutorial/react_router/useParams/books/bookslist';
import { Book } from './main_tutorial/react_router/useParams/books/book';
import { UseSearchParams } from './main_tutorial/react_router/useSearchParams/useSearchParams';
import { Fruits } from './main_tutorial/react_router/useSearchParams/fruits/fruits';
import { Fruit } from './main_tutorial/react_router/useSearchParams/fruits/fruit';
import { ProductList } from './main_tutorial/react_router/useSearchParams/market/productList';
import { SmartphonesList } from './main_tutorial/react_router/useSearchParams/smartphones/smartphones';
import { Automobiles } from './main_tutorial/react_router/useSearchParams/autoMobile/auto';
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/JSX' element={<JSX />} />
      <Route path='/useState' element={<UseStatate />} />
      <Route path='/useEffect' element={<UseEffect />} />
      <Route path='/renderList' element={<RenderLists />} />
      <Route path='/useNavigate' element={<UseNavigate />} >
        <Route path='carsLayout' element={<CarsLayout />}>
          <Route path='createCar' element={<AddCarForm />} />
        </Route>
        <Route path='studentsLayout' element={<StudentsLayout />}>
          <Route path='createStudents' element={<AddStudentsForm />} />
        </Route>
      </Route>
      <Route path='/useParams' element={<UseParams />}>
        <Route path="students" element={<StudentsList />} />
        <Route path="students/:id" element={<Student />} />
        <Route path="books" element={<BooksList />} />
        <Route path="books/:id" element={<Book />} />
      </Route>
      <Route path='/useSearchParams' element={<UseSearchParams />} >
        <Route path='fruits' element={<Fruits />} />
        <Route path='fruits/:id' element={<Fruit />} />
        <Route path='market' element={<ProductList />} />
        <Route path='smartphones' element={<SmartphonesList />} />
        <Route path='automobiles' element={<Automobiles />} />
      </Route>
      <Route path="*" element={<div>Страница не найдена</div>} />
    </Routes>
  )
}