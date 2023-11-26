import GlobalContext from './provider';
import Keyboard from './components/Keyboard';

function App() {
    return (
        <GlobalContext>
            <Keyboard />
        </GlobalContext>
    );
}

export default App;
