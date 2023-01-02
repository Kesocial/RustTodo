import "./Tarea.css"
function Tarea({ title, description, state }) {
    return (
        <section className="Tarea">
            <h3>{title}</h3>
            <p>{description}</p>
            <span>{state}</span>
        </section>
    )
}

export { Tarea }
