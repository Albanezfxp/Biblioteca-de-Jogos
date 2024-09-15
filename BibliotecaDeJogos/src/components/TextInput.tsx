import "../index.css";

export default function TextInput({
  id,
  label,
  value,
  setValue,
}: {
  id: string;
  label: string;
  value: string;
  setValue: any;
}) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        name={id}
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
