import React, { useState } from 'react';

const MyAccountPage = (props) => {
  return (
    <div style={{margin: 30}}>
        <h1 className="text-2xl block ">ID: {props.signedUser.id}</h1>
        <h1 className="text-2xl block ">Username: {props.signedUser.username}</h1>
    </div>
  );
}

export default MyAccountPage;
