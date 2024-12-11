import React from 'react';

const Tag = ({ data }) => {
  return (
    <div className=' bg-primary text-center rounded-md px-2 py-1 shadow-md text-xs text-secondary'>
      {data}
    </div>
  );
};

export default Tag;
