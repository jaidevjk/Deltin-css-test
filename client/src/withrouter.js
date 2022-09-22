import React from 'react';

export default function withRoot(Component) {
  function WithRoot(props) {
    return (
      
        <Component {...props} />
     
    );
  }

  return WithRoot;
}