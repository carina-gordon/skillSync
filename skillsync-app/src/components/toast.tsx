import React from 'react';


const Toast = ({ message }: { message: string }) => (
    <div style={{ display: message ? 'block' : 'none', position: 'fixed', bottom: '10px', right: '10px', backgroundColor: 'black', color: 'white', padding: '10px' }}>
      {message}
    </div>
  );

export default Toast;