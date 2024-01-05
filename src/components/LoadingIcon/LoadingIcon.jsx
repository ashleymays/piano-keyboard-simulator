import { useContext } from 'react';
import MainContext from '@/context';
import LoadingImage from '@/images/loadingIcon.png';

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
