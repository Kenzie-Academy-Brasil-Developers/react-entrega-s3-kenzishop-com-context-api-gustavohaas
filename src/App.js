import './App.css';
import Routes from './pages/Routes';
import { CartProvider } from './providers/cart';

function App() {

  return (
    <div className="App">

        <CartProvider>
          <Routes/>
        </CartProvider>

    </div>
  );
}

export default App;
