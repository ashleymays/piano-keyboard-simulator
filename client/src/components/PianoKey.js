function PianoKey(props) {
    return <button 
                name="piano-key" 
                className={`flex-column ${props.keyColor}-key`} 
                type="button" 
                onKeyDown={props.onKeyDown}
                value={props.keyboardKey}>
                    {props.keyboardKey}
            </button>;
}

export default PianoKey;