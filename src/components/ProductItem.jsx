import "./ProductItem.css"

export default function ProductItem() {
    let productItem = {
        name: "Football",
        price: 49.99,
        status: false
    }
    return (
        <div className="product-item-wrapper">
        <span>{productItem.name}</span>
        <span>{productItem.price}</span>
        <span>{!!productItem.status ? "In stock": "Out of stock"}</span>
        </div>
    )
}
