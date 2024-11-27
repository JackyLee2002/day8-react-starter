import "./ProductItem.css"

export default function ProductItem({productItem}) {

    const isProducInStock = !!productItem.status

    return (
        <div className="product-item-wrapper">
        <span className={isProducInStock ? "in-stock" : "out-of-stock"}>{productItem.name}</span>
        <span>{productItem.price}</span>
        <span>{isProducInStock ? "In stock": "Out of stock"}</span>
        </div>
    )
}
