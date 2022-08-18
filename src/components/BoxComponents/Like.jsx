import React, { useState } from 'react';

const Like = ({ message, handleLike }) => {
   let classesLike = "btn mb-2 me-2 col-1 btn-outline-dark";
   if (message.liked) classesLike = "btn me-2 mb-2 btn-outline-danger";
   return (
      <btn onClick={() => handleLike(message, 'm')} className={classesLike} style={{ width: 70 }}>
         <i>&#x2665;</i> {message.likes}
      </btn>
   );
}

export default Like;