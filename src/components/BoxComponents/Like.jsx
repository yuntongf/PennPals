import React, { useState } from 'react';

const Like = ({message}) => {
   let classesLike = "btn btn-sm col-3 btn-outline-dark";
   if (message.liked) classesLike = "btn btn-sm col-3 btn-outline-danger";
   return (
      <btn className={classesLike} > 
         <i>&#x2665;</i> {message.liked ? message.likes : <span></span>}
      </btn>
   );
}

export default Like;