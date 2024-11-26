import Bar from "./components/bar"
import Buttons from "./components/Buttons"

export default function Home() {
  return (
    <div>
      <Bar value={90} label="Test"></Bar>
      <Buttons></Buttons>
    </div>
  );
}
