import SearchPokemon from "./components/SearchBar";
import PokemonGrid from "./components/Grid";
import Pagination from "./components/Pagination";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./App.css";

function App() {
  return (
    <div className="main-page">
      <Provider store={store}>
        <header>
          <h1>Julian Emmanuel Uitz Gamboa</h1>
          <h5>Examen Tecnico Junior Frontend</h5>
        </header>

        <main>
          <SearchPokemon />

          <div className="main-grid">
            <PokemonGrid />
          </div>

          <Pagination />
        </main>
      </Provider>
    </div>
  );
}

export default App;