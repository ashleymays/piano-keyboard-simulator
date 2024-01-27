import { useContext } from 'react';
import { MainContext } from '~/context';
import { loadingIcon } from '~/images';

export function LoadingIcon() {
  const { isAppLoading } = useContext(MainContext);

  if (isAppLoading) {
    return (
      <div className="overlay">
        <img
          className="loading-icon"
          alt="loading icon"
          src={loadingIcon}
        />
      </div>
    );
  }
}
