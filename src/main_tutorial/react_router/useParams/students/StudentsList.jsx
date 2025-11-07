import { NavLink, Outlet, useNavigate } from "react-router-dom";


export const StudentsList = () => {
    const students = [
  {
    id: "1",
    name: "Александр",
    age: 20,
    group: "A1"
  },
  {
    id: "2",
    name: "Мария",
    age: 19,
    group: "B1"
  },
  {
    id: "3",
    name: "Дмитрий",
    age: 21,
    group: "A1"
  },
  {
    id: "4",
    name: "Екатерина",
    age: 22,
    group: "C1"
  },
  {
    id: "5",
    name: "Иван",
    age: 20,
    group: "B1"
  }
];
    const navigate = useNavigate()
    return (
        <>
            {students.map((item) => {
                return <div key={item.id}>
                    <button onClick={() => navigate(item.id)}>ID: {item.id}</button>
                    <div>Name: {item.name}</div>
                    <div>Age: {item.age}</div>
                    <div>Group: {item.group}</div>
                    <hr />
                </div>
            })}
            <Outlet />
        </>
    )
}