import logo from './logo.svg';
import './App.css';
import ProductItem from './components/ProductItem';
import ProductCategory from './components/ProductCategory';


function App() {
  let productCategory = {
    name: "Spoting Goods",
    productItems: [
      {
        name: "Football",
        price: 49.99,
        status: true
      },
      {
        name: "Baseball",
        price: 9.99,
        status: true
      },
      {
        name: "Tennis Racquet",
        price: 29.99,
        status: false
      }
    ]
  }

  
  return (
    <div className="App">
      <ProductCategory productCategory={productCategory} />
    </div>
  );
}

export default App;
