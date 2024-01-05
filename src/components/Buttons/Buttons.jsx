import Button from '~/components/Button';

const buttons = [
  {
    title: 'Acoustic Grand',
    directory: 'acoustic-grand',
    isDefault: true
  },
  {
    title: 'Electric Piano',
    directory: 'electric-piano',
    isDefault: false
  },
  {
    title: '8-Bit',
    directory: '8-bit',
    isDefault: false
  }
];

function Buttons() {
  return (
    <div className="buttons">
      {buttons.map((button) => (
        <Button key={button.title} {...button} />
      ))}
    </div>
  );
}

export default Buttons;
