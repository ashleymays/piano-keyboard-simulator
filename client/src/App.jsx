import GlobalContext from 'src/providers';
import Keyboard from 'src/components/Keyboard';

function App() {
  return (
    <GlobalContext>
      <Keyboard />
    </GlobalContext>
  );
}

export default App;
