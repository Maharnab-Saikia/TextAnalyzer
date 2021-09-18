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

    const handleDownloadClick = () => {
        let newText = text;
        setText(newText)
    }

    const handleCopyClick = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
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
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ background: props.mode === 'dark' ? '#333333' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8" placeholder="Enter text here..."></textarea>
                </div>
                <button className="btn btn-primary m-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary m-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary m-1" onClick={handleReverseClick}>Reverse Text</button>
                <button className="btn btn-primary m-1" onClick={handleRemovePuncClick}>Remove Punctuation</button>
                <button className="btn btn-primary m-1" onClick={handleRemoveClick}>Remove Extra Whitespaces</button>
                <button className="btn btn-primary m-1" onClick={handleDownloadClick}>Download Text</button>
                <button className="btn btn-primary m-1" onClick={handleCopyClick}>Copy Text</button>
                <button className="btn btn-primary m-1" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summery</h2>
                <li>{text.split(" ").filter(item => item).length} Words and {text.length} Characters.</li>
                <li>{0.008 * text.split(' ').length} Minutes Readtime.</li>
                <h2>Preview</h2>
                <p className={`border border-${props.mode === 'dark' ? 'white' : 'black'} rounded p-2`}>{text.length > 0 ? text : 'Enter something in the text box above to preview it here...'}</p>
            </div>
        </>
    )
}
