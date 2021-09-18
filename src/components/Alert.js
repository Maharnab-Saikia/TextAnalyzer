import React from 'react'

function Alert(props) {
    const capitalized = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} fade show position-absolute m-2`} role="alert">
            <strong>{capitalized(props.alert.type)}</strong>: {props.alert.msg}
        </div>
    )
}

export default Alert