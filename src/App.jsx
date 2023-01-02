import "./App.css"
import React, { useEffect, useState } from "react"
import { Sidebar } from "./Sidebar"
import { MainContainer } from "./MainContainer"
import { Header } from "./Header"
import { Content } from "./Content"
import { Footer } from "./Footer"
import { Tarea } from "./Tarea"
import { ListaDeUsuarios } from "./ListaDeUsuarios"
import { ListaTareasSeccion } from "./ListaTareasSeccion"
import { Nav } from "./Nav"
import { Usuario } from "./Usuario"
import axios from "axios"

function App(props) {
    const [users, setUsers] = useState(undefined)
    const [todos, setTodos] = useState(undefined)
    const [cargando, setCargando] = useState("Cargando")
    useEffect(() => {
        axios
            .request({
                url: "http://127.0.0.1:8000/users",
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((result) => {
                setUsers(result.data)
                console.log(result.data)
            })
            .catch((e) => {
                setUsers(null)
            })
        axios
            .request({
                url: "http://127.0.0.1:8000/todos",
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((result) => {
                setTodos(result.data)
                console.log(result.data)
            })
            .catch((e) => {
                setTodos(null)
            })
    }, [])

    return (
        <>
            <Nav />
            <Header />
            <Content>
                <MainContainer>
                    <header className="Arriba">
                        <ListaTareasSeccion />
                    </header>
                    <footer className="Abajo">
                        {todos ? (
                            todos.map((todo) => (
                                <Tarea
                                    key={todo._id.$oid}
                                    title={todo.title}
                                    description={todo.description}
                                    state={todo.state}
                                ></Tarea>
                            ))
                        ) : (
                            <div>Cargando</div>
                        )}
                    </footer>
                </MainContainer>
                <Sidebar>
                    {users ? (
                        <ListaDeUsuarios Component={Usuario} users={users} />
                    ) : (
                        <div>Cargando</div>
                    )}
                </Sidebar>
            </Content>
            <Footer />
            <div className={`${cargando === "Cargando" ? "Cargando" : ""}`}>
                <div className="lineaCarga"></div>
            </div>
        </>
    )
}

export default App
