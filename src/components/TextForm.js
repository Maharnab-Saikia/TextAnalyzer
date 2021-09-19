import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Converted to Uppercase!', 'success');
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('Converted to Lowercase!', 'success');

    }

    const handleReverseClick = () => {
        let newText = text.split('').reverse().join('');
        setText(newText)
        props.showAlert('Text Reversed!', 'success');
    }

    const handleRemovePuncClick = () => {
        let newText = text.replace(/[.,/#!$%^&*;:{}=\-_`~()@]/g, "");
        setText(newText)
        props.showAlert('Punctuations are Removed!', 'success');
    }

    const handleRemoveClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '))
        props.showAlert('Extra Whitespaces are Removed!', 'success');
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert('Text Copied!', 'success');
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText)
        props.showAlert('Text has been Cleared!', 'success');
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState("");

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2 className="my-3">{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ background: props.mode === 'dark' ? '#333333' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8" placeholder="Enter text here..."></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleReverseClick}>Reverse Text</button>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleRemovePuncClick}>Remove Punctuation</button>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleRemoveClick}>Remove Extra Whitespaces</button>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleCopyClick}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleClearClick}>Clear Text</button>
            </div>


            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Summery:</h2>
                <p className="form-control mb-1" style={{ background: props.mode === 'dark' ? '#333333' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Words and {text.length} Characters.</p>
                <p className="form-control" style={{ background: props.mode === 'dark' ? '#333333' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>{0.008 * text.split(' ').filter((element) => { return element.length !== 0 }).length} Minutes Readtime.</p>
            </div>


            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Preview:</h2>
                <p className="form-control" style={{ background: props.mode === 'dark' ? '#333333' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>{text.length > 0 ? text : 'Nothing to preview!'}</p>
            </div>
        </>
    )
}
