import CategoryHeader from './category-header'
import ProductRow from './product-row'
import productsList from '../products-data'

const ProductsTable = ({ filterText, inStockOnly }) => {
    const filteredProducts = productsList.filter((product) => {
        if (inStockOnly) {
            if (product.stocked && product.name.toLowerCase().includes(filterText.toLowerCase())) return product
        }
            
        else {
            if (product.name.toLowerCase().includes(filterText.toLowerCase())) return product
        }

        return null
        
    })

    const uiproductLists = filteredProducts.map((product) => <ProductRow key={product.name} name={product.name} price={product.price} stocked={product.stocked} />)

    return (
        <section>
            {/* Table headers */}
            <div className="grid grid-cols-2">
                <h4 className="font-bold">Name</h4>
                <h4 className="font-bold">Price</h4>
            </div>
            {/* End of table headers */}

            <CategoryHeader />
            { uiproductLists }
        </section>
    )
}

export default ProductsTable