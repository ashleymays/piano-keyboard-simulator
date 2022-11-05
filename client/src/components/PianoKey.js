function PianoKey(props) {
    return <button 
                name="piano-key" 
                className={`flex flex-column ${props.keyColor}-key`} 
                type="button"
                value={props.keyboardKey}>
                    {props.keyboardKey}
            </button>;
}

export default PianoKey;