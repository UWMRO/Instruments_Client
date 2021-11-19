import React from 'react';

function ImageCaptureControls() {
  const i = 2;
  const onClick = () => {
    console.log('TODO: capture image logic')
    fetch('/temperature')
  }

  return (
    <div>
      <img src="" />
      <button onClick={onClick}>Capture image</button>
    </div>
  )
}

export default ImageCaptureControls;
