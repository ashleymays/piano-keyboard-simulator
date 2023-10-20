import LoadingImage from "../../assets/images/loadingIcon.png";

function LoadingIcon() {
  return (
    <div className="overlay">
      <img className="loading-icon" alt="loading icon" src={LoadingImage} />
    </div>
  );
}

export default LoadingIcon;
