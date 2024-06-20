import { Bars } from 'react-loader-spinner';

export const Spinner = () => {
  return (
    <div className="spinner-wrapper">
      <Bars
        height="50"
        width="50"
        wrapperClass="spinner"
        color="#e2e2e2"
        visible={true}
      />
    </div>
  );
};
