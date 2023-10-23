import { getInstrumentAudio } from './Button.functions';

function Button({ title, isDefault }) {
    const handleClick = () => {
        const audio = getInstrumentAudio(title);
    };
    return (
        <label className="control-btn-container">
            <input
                type="radio"
                name="instrument"
                value={title}
                defaultChecked={isDefault}
                onChange={handleClick}
            />
            <span className="control-btn">{title}</span>
        </label>
    );
}

export default Button;
