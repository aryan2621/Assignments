
import './App.css';
import { useState } from "react";
import Axios from "axios"

function App() {
  const [pokemon, setPokemon] = useState("");
  const [chosen, setChosen] = useState(false);
  const [pokemonf, setPokemonf] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    type: "",
  });
  const searchPokemon = (event) => {
    event.preventDefault();
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((result) => {
      console.log(result);
      setPokemonf({
        name: pokemon,
        species: result.data.species.name,
        img: result.data.sprites.other.dream_world.front_default,
        hp: result.data.stats[0].base_stat,
        attack: result.data.stats[1].base_stat,
        defense: result.data.stats[2].base_stat,
        type: result.data.types[0].type.name
      });
      setChosen(true);
    });
  }


  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">Pokemon</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </nav>
      <div className="title_section">
        <h3 class="mt-4">Pokemon App</h3>
        <form onSubmit={searchPokemon}>
          <input class="form-control" type="text" placeholder=" Enter the Name" onChange={(e) => { setPokemon(e.target.value) }} />

          <button class="btn mt-4 btn-info" type="submit" >Search Pokemon</button>
        </form>
      </div>
      <div className="container">
        {!chosen ? (<div class="mt-4 alert alert-danger" role="alert">Please select the correct Choice</div>) : (
          <>
            <div className="mt-4 alert alert-info" role="alert">
              Success
            </div>
            <div class="card w-25 m-auto">
              <img class="img-thumbnail" src={pokemonf.img} alt="" />
              <ul class="list-group list-group-flush table-hover">
                <li class="list-group-item">Name : {pokemonf.name}</li>
                <li class="list-group-item">Species : {pokemonf.species}</li>
                <li class="list-group-item">Type : {pokemonf.type}</li>
                <li class="list-group-item">Hp : {pokemonf.hp}</li>
                <li class="list-group-item">Attack : {pokemonf.attack}</li>
                <li class="list-group-item">Defense : {pokemonf.defense}</li>
              </ul>
            </div>

          </>
        )}
      </div>
      <footer class="page-footer font-small bg-dark mt-4" >
        <div class="footer-copyright text-light text-center py-3">© 2021 Copyright
        </div>
      </footer>
    </div>
  );
}

export default App;
