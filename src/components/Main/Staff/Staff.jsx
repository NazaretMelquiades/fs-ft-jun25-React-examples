import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { DNA, FidgetSpinner, ProgressBar } from 'react-loader-spinner';
import PokemonCard from "./PokemonCard";

const Staff = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      const resp = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await resp.json();

      // Simulamos un retardo de 2 segundos
      await new Promise((resolve, reject) => setTimeout(resolve, 2000));

      setPokemons(data.results); // [] de pokemons de la API
    };
    getPokemons();
  }, []);

  const renderPokemons = () => {
      return pokemons.map((pokemon, i) => <PokemonCard pokemon={pokemon} key={uuidv4()} />);
  };

  return <section className="staff">
      {pokemons.length!=0? renderPokemons():<>
          <DNA
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
          />

          <FidgetSpinner
            visible={true}
            height="80"
            width="80"
            ariaLabel="fidget-spinner-loading"
            wrapperStyle={{}}
            wrapperClass="fidget-spinner-wrapper"
            />

          <ProgressBar
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass=""
            />
        </>
    }
  </section>

};

export default Staff;