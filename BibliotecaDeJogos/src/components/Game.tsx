import "../index.css";

export default function Game({
  title,
  cover,
  onRemove,
}: {
  title: string;
  cover: string;
  onRemove: any;
}) {
  return (
    <div>
      <img src={cover} alt="" />
      <div>
        <h2>{title}</h2>
        <button onClick={onRemove}>Remover</button>
      </div>
    </div>
  );
}
