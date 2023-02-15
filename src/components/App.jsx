import { useRef } from "react";
import { useGetData } from "../hooks/useGetData";
import User from "./User";

export default function App (){
    //usamos el hook userRef para capturar el input
    const inputRef = useRef()
/* pasamos el fetch a custom hooks*/
const {data:{ users}, loading, setData} = useGetData('https://dummyjson.com/users');

const handleSubmit = (event) => {
    event.preventDefault()
    const query = inputRef.current.value

    fetch(`https://dummyjson.com/users/search?q=${query}`)
    .then(res => res.json())
    .then(setData);
};

    return(
        <section className="container text-white py-4">
            <h1 className="text-center">Lista de Usuarios</h1>
            {loading && <p className="text-center">...loading</p>}
            {!loading && (
                <>
                <form className="py-4" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input ref={inputRef} type="search" className="form-control" />
                        <button className="btn btn-success">Buscar</button>
                    </div>
                </form>
                    <div className="row gy-4">
                        {users.length !== 0 && 
                        users.map((user) => (
                            <div key={user.id} className="col-12 col-sm-6 col-md-3 ">
                                <User  {...user}  />
                            </div>
                        ) )}
                        {users.length === 0 && <p>No hay usuarios</p>}
                    </ div>
                </>
                )}
            </section>
    )
}