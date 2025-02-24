const Button = ({title, isActive, selected }) => {

    const active = isActive ? "btn-warning" : "btn-primary"
    return(
        <button className={` btn ${active}`} onClick={ () => selected()} >
            {title}
        </button>
    )
}

export default Button