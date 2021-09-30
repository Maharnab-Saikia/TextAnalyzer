import React from 'react'

function Alert(props) {
    const capitalized = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        props.alert && <div id="snackbar" className={props.alertf} style={{ background: props.mode === 'dark' ? 'white' : '#333333', color: props.mode === 'dark' ? 'black' : 'white' }}>
            <strong>{capitalized(props.alert.type)}</strong>: {props.alert.msg}
        </div>
    )
}

export default Alert