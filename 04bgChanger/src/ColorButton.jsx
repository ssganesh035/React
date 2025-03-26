function ColorButton(props) {
    return (
        <button onClick={()=> props.setColor(props.color)} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:props.color}}>{props.color}</button>
    )
}

export default ColorButton;