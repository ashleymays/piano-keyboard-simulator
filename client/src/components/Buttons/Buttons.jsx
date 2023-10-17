import Button from "./Button";
import controlButtons from "../../data/controlButtons";

function Buttons() {
  const buttons = controlButtons.map((button) => (
    <Button
      key={button.title}
      title={button.title}
      onChange={button.onChange}
    />
  ));
  return (
    <div className="buttons flex-row justify-content-space-btwn">{buttons}</div>
  );
}

export default Buttons;
