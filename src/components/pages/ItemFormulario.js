function ItemFormulario(props) {
    return (
        <div>
            <p>
                <label for={props.name}>{props.name}: </label>
                <input type={props.tipo} name={props.name} id={props.name} placeholder={props.ph} />
            </p>
        </div>

    )
}
export default ItemFormulario