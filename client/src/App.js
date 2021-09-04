import 'bootstrap/dist/css/bootstrap.min.css';
import  Appnavbar from './components/Appnavbar';
import './App.css';
import ShoppingList from './components/shoppinglist';

function App() {
  return (
    <div className="App">
      <Appnavbar />
      <ShoppingList />
    </div>
  );
}

export default App;
