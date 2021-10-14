import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';


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
        <div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2 className="my-3">{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ background: props.mode === 'dark' ? '#333333' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8" placeholder="Enter text here..."></textarea>
                </div>
                <Button variant="contained" className="m-1" disabled={text.length === 0} onClick={handleUpClick}>Convert to Uppercase</Button>
                <Button variant="contained" className="m-1" disabled={text.length === 0} onClick={handleLoClick}>Convert to Lowercase</Button>
                <Button variant="contained" className="m-1" disabled={text.length === 0} onClick={handleReverseClick}>Reverse Text</Button>
                <Button variant="contained" className="m-1" disabled={text.length === 0} onClick={handleRemovePuncClick}>Remove Punctuation</Button>
                <Button variant="contained" className="m-1" disabled={text.length === 0} onClick={handleRemoveClick}>Remove Extra Whitespaces</Button>
                <Button variant="contained" className="m-1" disabled={text.length === 0} onClick={handleCopyClick}>Copy Text</Button>
                <Button variant="contained" className="m-1" disabled={text.length === 0} onClick={handleClearClick}>Clear Text</Button>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Summery:</h2>
                <List id="list">
                    <ListItem>
                        <ListItemText>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Words and {text.length} Characters.</ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText>{0.008 * text.split(' ').filter((element) => { return element.length !== 0 }).length} Minutes Readtime.</ListItemText>
                    </ListItem>
                </List>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Preview:</h2>
                <p className="form-control p-3" style={{ background: props.mode === 'dark' ? '#333333' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>{text.length > 0 ? text : 'Nothing to preview!'}</p>
            </div>
        </div>
    )
}

//container