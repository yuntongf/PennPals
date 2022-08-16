import React, { useState } from 'react';

const Dropdown = () => {
   return (
      <div class="btn-group dropleft position-absolute bottom-0 end-0 m-1">
         <button type="button" class="btn btn-outline-secondary btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         </button>

         <div class="dropdown-menu">
            <button class="dropdown-item" type="button">reply</button>
            <button class="dropdown-item" type="button">Something else here</button>
            <button class="dropdown-item btn-outline-danger" type="button">report</button>
         </div>
      </div>
   );
}

export default Dropdown;