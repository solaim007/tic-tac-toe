import React from 'react';

const Square = (props)=>{
    return (
        <div className='square'
        onClick={props.onClick}
        style={{
            border: '1px solid black',
            height: '150px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

        }}
        >

            <h2>{props.value}</h2>
        </div>
    );
};
export default Square;