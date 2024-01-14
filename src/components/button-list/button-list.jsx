import { Button } from '~/components/button';

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

export function ButtonList() {
  return (
    <div className="button-list">
      {buttons.map((button) => (
        <Button
          key={button.title}
          {...button}
        />
      ))}
    </div>
  );
}
