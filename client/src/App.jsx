import Piano from './components/Piano';
import Screen from './components/Screen';
import Controls from './components/Controls';
import OctaveControls from './components/OctaveControls';

function App() {
  return (
    <section className="piano-container absolute-center flex-column">
      <div className="top-row">
        <Controls />
        <Screen />
        <div className="flex-column align-items-end">
          <h1>ARTURIA</h1>
          <h5>Virtual Keyboard</h5>
        </div>
      </div>

      <div className="bottom-row justify-space-btwn">
        <OctaveControls />
        <Piano />
      </div>
    </section>
  );
}

export default App;
