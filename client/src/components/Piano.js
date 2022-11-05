import PianoKey from "./PianoKey";

function Piano() {
    return (
        <div id="piano" className="flex">
            <PianoKey keyColor="white" keyboardKey="q" />
            <PianoKey keyColor="black" keyboardKey="2" />
            <PianoKey keyColor="white" keyboardKey="w" />
            <PianoKey keyColor="black" keyboardKey="3" />
            <PianoKey keyColor="white" keyboardKey="e" />
            <PianoKey keyColor="white" keyboardKey="r" />
            <PianoKey keyColor="black" keyboardKey="5" />
            <PianoKey keyColor="white" keyboardKey="t" />
            <PianoKey keyColor="black" keyboardKey="6" />
            <PianoKey keyColor="white" keyboardKey="y" />
            <PianoKey keyColor="black" keyboardKey="7" />
            <PianoKey keyColor="white" keyboardKey="u" />
            <PianoKey keyColor="white" keyboardKey="i" />
            <PianoKey keyColor="black" keyboardKey="9" />
            <PianoKey keyColor="white" keyboardKey="o" />
            <PianoKey keyColor="black" keyboardKey="0" />
            <PianoKey keyColor="white" keyboardKey="p" />
            <PianoKey keyColor="white" keyboardKey="[" />
            <PianoKey keyColor="black" keyboardKey="=" />
            <PianoKey keyColor="white" keyboardKey="]" />
            <PianoKey keyColor="black" keyboardKey="a" />
            <PianoKey keyColor="white" keyboardKey="z" />
            <PianoKey keyColor="black" keyboardKey="s" />
            <PianoKey keyColor="white" keyboardKey="x" />
            <PianoKey keyColor="white" keyboardKey="c" />
            <PianoKey keyColor="black" keyboardKey="f" />
            <PianoKey keyColor="white" keyboardKey="v" />
            <PianoKey keyColor="black" keyboardKey="g" />
            <PianoKey keyColor="white" keyboardKey="b" />
            <PianoKey keyColor="white" keyboardKey="n" />
            <PianoKey keyColor="black" keyboardKey="j" />
            <PianoKey keyColor="white" keyboardKey="m" />
            <PianoKey keyColor="black" keyboardKey="k" />
            <PianoKey keyColor="white" keyboardKey="," />
            <PianoKey keyColor="black" keyboardKey="l" />
            <PianoKey keyColor="white" keyboardKey="." />
            <PianoKey keyColor="white" keyboardKey="/" />
        </div>
    )
}

export default Piano;