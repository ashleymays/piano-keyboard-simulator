function PianoKey({ computerKey, color }) {
    const className = `piano-key flex-column align-items-center justify-content-end ${color}-key`;
    return (
        <button name="piano-key" className={className} type="button" value={computerKey}>
            {computerKey}
        </button>
    );
}

export default PianoKey;
