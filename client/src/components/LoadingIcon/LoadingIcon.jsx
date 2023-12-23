import LoadingImage from 'src/images/loadingIcon.png';

function LoadingIcon({ isAppLoading }) {
  if (isAppLoading) {
    return (
      <div className="overlay">
        <img className="loading-icon" alt="loading icon" src={LoadingImage} />
      </div>
    );
  }
}

export default LoadingIcon;
