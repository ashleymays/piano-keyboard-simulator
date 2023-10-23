import Keyboard from '../Keyboard';
import LoadingIcon from '../LoadingIcon';
import PopupButtons from '../PopupButtons';

function App() {
    return (
        <>
            <Keyboard />
            <PopupButtons />
            <LoadingIcon isAppLoading={false} />
            {/* isAppLoading should be a Redux state */}
        </>
    );
}

export default App;
