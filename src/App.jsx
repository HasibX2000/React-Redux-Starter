import Shop from "./Components/Shop";
import Cart from "./Components/Cart";

const App = () => {
  return (
    <div className="p-5 flex gap-10 flex-col lg:flex-row">
      <Shop />
      <Cart />
    </div>
  );
};

export default App;
