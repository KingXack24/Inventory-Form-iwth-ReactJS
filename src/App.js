import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddInventory from "./components/classComponent";
import AddProduct from "./components/funcComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Product Inventory form in ReactJS</h1>
        {/* <AddInventory /> */}
        <AddProduct />
      </header>
    </div>
  );
}

export default App;
