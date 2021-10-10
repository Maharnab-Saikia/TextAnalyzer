import React from 'react'
import Button from '@mui/material/Button';
import CoffeeIcon from '@mui/icons-material/Coffee';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function About(props) {

    return (
        <div className={`container border border-${props.mode === 'dark' ? 'white' : 'black'} rounded p-2`} style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <div className="p-4 mb-3 rounded" style={{ background: props.mode === 'dark' ? '#333333' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2 className="fst-italic">About Website</h2>
                <p className="mb-5">This text analysis tool provides information on the complexity of a text, It allows you to analyse a text by counting the number of sentences, words and characters present. It also provides statistical information on the repetition of phrases and keywords. Our online text analyser / word counter is easy to use and free of charge.</p>
                <h2 className="fst-italic">About Developer</h2>
                <p className="mb-5">Hi, I am <strong>Maharnab Saikia</strong> a Web Developer and a Programmer from Assam, India. I am
                    currently learning MERN stack and Django framework. This is a Text Analyzer website made with React, this is my first react
                    project.</p>
                <h3 className="fst-italic">Thank you for visiting my website,</h3>
                <p>I am still a student, so a coffee would come in handy.</p>

                <Button variant="contained" href="https://www.buymeacoffee.com/Maharnab" className="m-2" style={{ background: '#FFDD00', color: 'black' }} startIcon={<CoffeeIcon />}>Buy me a Coffee</Button>

                <Button variant="contained" href="https://github.com/Maharnab-Saikia/TextAnalyzer" className="m-2" style={{ background: '#24292F', color: 'white' }} startIcon={<GitHubIcon />}>Open Source</Button>
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