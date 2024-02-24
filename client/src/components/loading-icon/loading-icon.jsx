import { useSelector } from 'react-redux';
import { loadingIcon } from '~/images';

export function LoadingIcon() {
  const isLoading = useSelector((state) => state.audio.isLoading);

  if (isLoading) {
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
