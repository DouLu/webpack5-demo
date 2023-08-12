export default function Blog() {
  const list = Array(10).fill(1);
  const test = 12,
    a = "a";
  return (
    <div>
      {list.map((i, index) => (
        <li key={i + index}>{i + index}</li>
      ))}
    </div>
  );
}
