import Button from "./Button";
import controlButtons from "../data/controlButtons";

function Controls() {
  const buttons = controlButtons.map((button) => (
    <Button
      key={button.title}
      title={button.title}
      onChange={button.onChange}
    />
  ));
  return (
    <>
      <div className="flex-row">{buttons}</div>
      <div className="flex-row"></div>
    </>
  );
}

export default Controls;
