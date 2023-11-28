![Picture of the main webpage](./pianoKeyboardSimulator.png)

# Play piano right in your browser.

Use your computer keyboard, mouse, tablet, or phone to play a virtual keyboard. Choose from three different instrument sounds and play whatever you want.

## Background

I've been working on this since July 2022. I generally use this as a sandbox to learn new technologies. This was the first project I built with plain JavaScript, and then it was the first project I built with React.

Since I didn't know much about testing when I first started, there are no unit or integration tests available right now. I'll continue to work on that. This release will probably be the last, but please feel free to take the source code and do whatever you want with it (attribution would be nice, too :).

## How to Use
### Option 1: Open online with CodeSandbox

<a href="https://codesandbox.io/p/github/ashleymays/piano-keyboard-simulator/master?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clpevwaan00073j6e854qn9a4%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clpevwaam00033j6em3jexkpj%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clpevwaam00053j6eqx5hkgwh%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clpevwaam00063j6eo47b3lzh%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B60%252C40%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clpevwaam00033j6em3jexkpj%2522%253A%257B%2522id%2522%253A%2522clpevwaam00033j6em3jexkpj%2522%252C%2522tabs%2522%253A%255B%255D%257D%252C%2522clpevwaam00063j6eo47b3lzh%2522%253A%257B%2522id%2522%253A%2522clpevwaam00063j6eo47b3lzh%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A5000%252C%2522id%2522%253A%2522clpg177il00it3j6ekidgm1ej%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clpg177il00it3j6ekidgm1ej%2522%257D%252C%2522clpevwaam00053j6eqx5hkgwh%2522%253A%257B%2522id%2522%253A%2522clpevwaam00053j6eqx5hkgwh%2522%252C%2522activeTabId%2522%253A%2522clpi3zko4008u3j6fzg1mltsr%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clpevwaam00043j6ehg7wf3ei%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522clpg17afr00b7efhh2a8icy1b%2522%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522id%2522%253A%2522clpi3zko4008u3j6fzg1mltsr%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D">CodeSandbox</a>

### Option 2: Install it locally

Clone the repository:

`git clone https://github.com/ashleymays/piano-keyboard-simulator.git`

Run the build:

`npm i && npm start`

The app will open in a browser window.

## License

This project uses the [MIT License](docs/LICENSE.md).
