import React, { Component } from 'react';

const Title = ({todoCount}) => {
    return (
        <div>
            <div>
                <h1>to-do ({todoCount})</h1>
            </div>
        </div>
    );
}

export default Title;