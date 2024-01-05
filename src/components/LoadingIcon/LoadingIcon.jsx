import { useContext } from 'react';
import MainContext from 'src/context';
import LoadingImage from 'src/images/loadingIcon.png';

function LoadingIcon() {
  const { isAppLoading } = useContext(MainContext);

  return (
    isAppLoading && (
      <div className="overlay">
        <img className="loading-icon" alt="loading icon" src={LoadingImage} />
      </div>
    )
  );
}

export default LoadingIcon;
