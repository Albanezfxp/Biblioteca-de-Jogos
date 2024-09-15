import { useState } from "react";
import TextInput from "./TextInput";
import "../index.css";

interface NewGameFormProps {
  addGame: (game: { title: string; cover: string }) => void;
}

export default function NewGameForm({ addGame }: NewGameFormProps) {
  const handleSubmit = (ev: any) => {
    ev.preventDefault();
    addGame({ title, cover });
    setTitle("");
    setCover("");
  };
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  return (
    <form id="formContainer" onSubmit={handleSubmit}>
      <div>
        <TextInput
          id="title"
          label="Titulo"
          value={title}
          setValue={setTitle}
        ></TextInput>
      </div>
      <div>
        <TextInput
          id="cover"
          label="Capa"
          value={cover}
          setValue={setCover}
        ></TextInput>
      </div>
      <button type="submit">Adicionar</button>
    </form>
  );
}
