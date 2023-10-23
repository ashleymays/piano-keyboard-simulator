import Keyboard from '../Keyboard';
import LoadingIcon from '../LoadingIcon';

function App() {
    return (
        <>
            <Keyboard />
            <LoadingIcon isAppLoading={false} />
            {/* isAppLoading should be a Redux state */}
        </>
    );
}

export default App;
