import React from 'react';

const Logo = (props) => {
    return (
        <div>
            <img src="./imports/logo.png" alt="" width={props.width} height={props.height} />
        </div>
    );
};

export default Logo;