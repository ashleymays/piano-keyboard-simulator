import Button from './Button';

function Controls() {
  return (
    <>
      <div className="flex-row">
        <Button>Sustain</Button>
        <Button>Soften</Button>
        <Button>Keyboard</Button>
      </div>
      <div className="flex-row"></div>
    </>
  );
}

export default Controls;
