import React from 'react'

// Nested Components, React Tools

export default function Nested() {
    return (
        <div>
            <Person />
            <Message />
        </div>
    )
}

const Person = () => <h2>John German</h2>;
const Message = () => {
    return <p>This is the message inside the component.</p>
};
