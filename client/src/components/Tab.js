import { useState } from "react";

const dummyRecordings = [
    {
        id: 1,
        title: 'something.mp3',
        url: 'akjdsnflakjsdfka'
    },
    {
        id: 2,
        title: 'here.mp3',
        url: 'aksjdbflqoiwvofqh'
    },
    {
        id: 3,
        title: 'again.mp3',
        url: 'ygrbflkhdbfvkjs'
    },
    {
        id: 4,
        title: 'wish.mp3',
        url: 'laehgb'
    },
    {
        id: 5,
        title: 'i.mp3',
        url: 'lvhjbeog'
    },
    {
        id: 6,
        title: 'could.mp3',
        url: 'i3urbgkjdfnvsdkfnv'
    },
    {
        id: 7,
        title: 'run.mp3',
        url: 'wlhnvwov'
    },
    {
        id: 8,
        title: 'away.mp3',
        url: 'iwjenrvpwuev'
    },
    {
        id: 9,
        title: 'for.mp3',
        url: 'ieuvqop3ruv'
    },
    {
        id: 10,
        title: 'good.mp3',
        url: 'liefhbvqlebvioquebfv'
    }
]

const instruments = [
    {
        title: 'Acoustic Grand',
        icon: 'lkjdnvqoeurvq'
    },
    {
        title: 'Electric Piano',
        icon: 'alkjdflkhebv'
    },
    {
        title: 'Music Box',
        icon: 'ienuvqnerviqenv'
    },
    {
        title: '8-Bit',
        icon: 'eqifbuqleinlqkjwn'
    }
]

const tabs = [
    {
        id: 'Instruments',
        content: instruments, 
    },
    {
        id: 'Recordings',
        content: dummyRecordings
    }
];

function Tab() {
    const [currentTab, setCurrentTab] = useState('Instruments');

    

    return <h1 className="tab-title" key={title} onClick={() => setCurrentTab(title)}>{title}</h1>
}

export default Tab;