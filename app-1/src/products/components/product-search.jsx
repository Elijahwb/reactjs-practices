const ProductSearch = ( props ) => {
    return (
        <section className="mb-5">
            <input onChange={props.handleProductSearch} type="text" value={props.filterText} className="border-[2px] p-1 w-full mt-1 px-3 py-2 bg-white shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-slate-500 focus:ring-slate-500 block sm:text-sm focus:ring-[0.1px]" placeholder="Search..." />

            <div className="flex items-center">
                <input type="checkbox" checked={props.inStockOnly} onChange={props.handleStockFilter}/>
                <div className="ml-2">Only show products in stock</div>
            </div>
        </section>
    )
}

export default ProductSearch