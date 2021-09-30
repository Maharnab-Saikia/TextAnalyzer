import React from 'react'

function Alert(props) {
    const capitalized = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        props.alert && <div id="snackbar" className={props.alertf}>
            <strong>{capitalized(props.alert.type)}</strong>: {props.alert.msg}
        </div>
    )
}

export default Alert