import React, { useState } from 'react';

const AboutMePage = (props) => {
  return (
    <>
      <div className="flex justify-center">
        <img src='about.jpg' style={{height:200, width:157}}/>
      </div>
      <div className="flex justify-center">
          <div className="text-2xl block">
            我是台大電機系學生何景盛，希望各位手下留情。
          </div>
      </div>
    </>
  );
}

export default AboutMePage;
