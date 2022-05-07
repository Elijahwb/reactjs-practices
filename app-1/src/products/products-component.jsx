import React from "react"
import ProductSearch from "./components/product-search"
import ProductsTable from "./components/products-table"

class ProductsComponent extends React.Component {
    constructor(props) {
        super (props)

        this.state = {
            filterText: '',
            inStockOnly: false,
        }
    }

    handleProductSearch = (event) => {
        this.setState(() => {
            return { filterText: event.target.value }
        })
    }

    handleStockFilter = (event) => this.setState(() => {
        return { inStockOnly: event.target.checked }
    }) 
    render () {
        return (
            <section className="w-full grid justify-center">
                <h3 className="text-4xl my-5">Products Component</h3>
                
                <ProductSearch filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} handleProductSearch={this.handleProductSearch} handleStockFilter={this.handleStockFilter} />
                <ProductsTable filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} />
            </section>
        )
    }
}


export default ProductsComponent