const Button = ({title, isActive, onSelect }) => {

    const active = isActive ? "btn-warning" : "btn-primary"
    return(
        <button className={` btn ${active}`} onClick={ () => selecter()} >
            {title}
        </button>
    )
}

export default Button