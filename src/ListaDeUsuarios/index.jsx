import React, { useState } from "react"
import "./ListaDeUsuarios.css"
function ListaDeUsuarios({ users, Component }) {
    const [id, setId] = useState(0)
    const activar = (userID) => {
        if (id === userID) {
            setId(null)
        } else {
            setId(userID)
        }
    }

    return (
        <section className="ListaDeUsuarios">
            <header className="ListaDeUsuarios-titulo">
                <h1 className="titulo">Usuarios</h1>
            </header>

            {!users ? (
                <React.Fragment></React.Fragment>
            ) : (
                users.map((user) =>
                    user._id.$oid === id ? (
                        <Component
                            onClick={() => activar(user._id.$oid)}
                            nombre={user.name}
                            id={user._id.$oid}
                            email={user.password}
                            key={user._id.$oid}
                            activo="activo"
                        />
                    ) : (
                        <Component
                            onClick={() => activar(user._id.$oid)}
                            nombre={user.name}
                            id={user._id.$oid}
                            email={user.password}
                            key={user._id.$oid}
                            activo=""
                        />
                    )
                )
            )}
        </section>
    )
}

export { ListaDeUsuarios }
