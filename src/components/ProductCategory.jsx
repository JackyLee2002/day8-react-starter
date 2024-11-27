import "./ProductItem"
import ProductItem from "./ProductItem"
import "./ProductCategory.css"

export default function ProductCategory({productCategory}) {
  return (
    <div style={{width: "100%"}}>
        <span className="product-name">{productCategory.name}</span>
        {productCategory.productItems.map((productItem) => {
            return <ProductItem productItem={productItem}/>
        })}
    </div>
  )
}
