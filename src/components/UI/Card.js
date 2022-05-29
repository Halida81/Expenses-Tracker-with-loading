import './Card.css'

function Card(props) {
    const classes= "card " + props.className
    return (
        <div className={classes}>
            {/* HEADER */}
            {props.children}
            {/* FOOTER */}
        </div>
    )
}
export default Card