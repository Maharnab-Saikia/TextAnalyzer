import React from 'react'

export default function About(props) {



    return (
        <div className={`container border border-${props.mode === 'dark' ? 'white' : 'black'} rounded p-2`} style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <div className="p-4 mb-3 rounded" style={{ background: props.mode === 'dark' ? '#333333' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 className="fst-italic">About</h1>
                <p className="mb-0">This text analysis tool provides information on the complexity of a text, It allows you to analyse a text by counting the number of sentences, words and characters present. It also provides statistical information on the repetition of phrases and keywords. Our online text analyser / word counter is easy to use and free of charge.</p>
            </div>

        </div>
    )
}

/*const [btnText, setBtnText] = useState('Enable Dark Mode')

    const [btnType, setBtnType] = useState('btn btn-dark my-3')

    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    const toogleStyle = () => {
        if (myStyle.color === 'white') {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText('Enable Dark Mode')
            setBtnType('btn btn-dark my-3')
        }
        else {
            setMyStyle({
                color: 'white',
                backgroundColor: '#121212'
            })
            setBtnText('Enable Light Mode')
            setBtnType('btn btn-light my-3')
        }
    }

    <div className="container">
                <button onClick={toogleStyle} className={btnType}>{btnText}</button>
            </div>
    */