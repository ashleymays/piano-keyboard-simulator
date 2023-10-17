import Button from "./Button";
import buttonsData from "../../data/buttons";

function Buttons() {
  const buttons = buttonsData.map((button) => (
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
