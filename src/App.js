import React, { useState } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';

function App() {
  const [selectedImage, setselectedImage] = useState(null);

  return (
    <div className="App">
      <Title/>
      <UploadForm />
      <ImageGrid setselectedImage={setselectedImage} />
      { selectedImage && (
        <Modal selectedImage={selectedImage} setselectedImage={setselectedImage} />
      )}
    </div>
  );
}

export default App;
