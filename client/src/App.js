import Piano from "./components/Piano";
import Controls from "./components/Controls";

function App() {
    return (
        <section className="piano-container">
            <Controls />
            <Piano />
        </section>
    )
}

export default App;