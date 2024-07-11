import arrowIcon from './arrow-icon.png';

type ArrowIconProps = {
  direction: 'up' | 'down';
};

export const ArrowIcon = ({ direction }: ArrowIconProps) => {
  return (
    <img
      className={`arrow-icon arrow-icon--${direction}`}
      alt=""
      src={arrowIcon}
    />
  );
};
