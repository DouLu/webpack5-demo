export default function Blog() {
  const list = Array(12).fill(1);
  return (
    <div>
      {list.map((i, index) => (
        <li key={i + index}>{i + index}</li>
      ))}
    </div>
  );
}
