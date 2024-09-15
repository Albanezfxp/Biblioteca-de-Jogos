import { useState } from "react";

type Game = {
  id: number;
  title: string;
  cover: string;
};
export default function useGameCollection() {
  const [games, setGames] = useState<Game[]>(() => {
    const storedGames = localStorage.getItem("obc-game-lib");
    if (!storedGames) return [];
    return JSON.parse(storedGames);
  });

  const addGame = ({ title, cover }: { title: string; cover: string }) => {
    //Cria um id aleatorio para ter uma melhor reutilização.
    const id = Math.floor(Math.random() * 10000);
    //Objeto "game" com um id, um titulo e uma capa
    const game = { id, title, cover };
    // Separou todos os elementos atuais e criou um novo array com o jogo que acabou de salvar
    setGames((state) => {
      const newState = [...state, game];
      //add o game ao localStorage
      localStorage.setItem("obc-game-lib", JSON.stringify(newState));
      return newState;
    });
  };

  const removeGame = (id: number) => {
    //Filtra todos os jogos que não quer remover e remove aquele. Sempre que o "id" for diferente do "game.id" que quer remover, vai manter.
    setGames((state) => {
      const newState = state.filter((game) => game.id !== id);
      //Remove o game do logalStorage
      localStorage.setItem("obc-game-lib", JSON.stringify(newState));
      return newState;
    });
  };

  return { games, addGame, removeGame };
}
