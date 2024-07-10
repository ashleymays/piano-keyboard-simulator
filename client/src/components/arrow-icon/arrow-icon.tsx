type ArrowIconProps = {
  direction: 'up' | 'down';
};

export const ArrowIcon = ({ direction }: ArrowIconProps) => {
  return (
    <span className="arrow-icon">
      {direction === 'up' ? <>&#128897;</> : <>&#128899;</>}
    </span>
  );
};
