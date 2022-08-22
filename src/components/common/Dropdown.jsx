import React, { useState } from 'react';

const Dropdown = () => {
   return (
      <div className="btn-group dropleft position-absolute bottom-5 end-0 me-3">
         <button type="button" id="dropdownMenuLink" className="btn btn-outline-secondary btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         </button>

         <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <button className="dropdown-item" type="button">reply</button>
            <button className="dropdown-item" type="button">Something else here</button>
            <button className="dropdown-item btn-outline-danger" type="button">report</button>
         </div>
      </div>

   );
}

export default Dropdown;