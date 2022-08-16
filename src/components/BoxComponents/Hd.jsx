import React, { useState } from 'react';

const Hd = ({message}) => {
   return (
      <div className="w-100 flex-column justify-content-between">
         <h5 className="mb-1"> {message.title} </h5>
         <small > Aug 15 </small>
      </div>
   );
}

export default Hd;