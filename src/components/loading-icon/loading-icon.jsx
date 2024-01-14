import { useContext } from 'react';
import { MainContext } from '~/context';
import LoadingImage from '~/images/loadingIcon.png';

export function LoadingIcon() {
  const { isAppLoading } = useContext(MainContext);

  if (isAppLoading) {
    return (
      <div className="overlay">
        <img
          className="loading-icon"
          alt="loading icon"
          src={LoadingImage}
        />
      </div>
    );
  }
}
