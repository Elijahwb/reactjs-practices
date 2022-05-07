const ProductRow = ( props ) => {
    return (
        <div className="w-full grid grid-cols-2">
            <div className={`${!props.stocked ? 'text-red-500' : '' }`} >{props.name}</div>
            <div>{props.price}</div>
        </div>
    )
}

export default ProductRow