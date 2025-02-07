// src/components/ImageUploader.jsx
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import styled from 'styled-components';

const DropArea = styled.div`
  border: 2px dashed #ccc;
  padding: 2rem;
  margin: 1rem auto;
  width: 80%;
  text-align: center;
  cursor: pointer;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  margin: 1rem;
  background-color: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonText};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const ImageUploader = () => {
  const [uploadedImage, setUploadedImage] = useState(null); // For original image preview
  const [processedImage, setProcessedImage] = useState(null); // For bg removed image
  const [file, setFile] = useState(null); // Actual file object
  const [loading, setLoading] = useState(false); // Loading state

  // When image is dropped
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setFile(file);
    setUploadedImage(URL.createObjectURL(file));
    setProcessedImage(null); // Reset processed image on new upload
  }, []);

  // Function to call API and remove background
  const handleRemoveBackground = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append('image_file', file);
    setLoading(true); // Start loading

    try {
      const response = await axios.post(
        'https://api.remove.bg/v1.0/removebg',
        formData,
        {
          responseType: 'blob',
          headers: {
            'X-Api-Key': 'yNcmaqHjVJ6dbkP5WERqRXUM', // Replace with your API key
            'Content-Type': 'multipart/form-data'
          }
        }
      );
      const imageUrl = URL.createObjectURL(response.data);
      setProcessedImage(imageUrl);
    } catch (error) {
      console.error('Error removing background', error);
    } finally {
      setLoading(false); // Stop loading whether successful or not
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*' });

  return (
    <div>
      <DropArea {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag & drop an image here, or click to select one</p>
      </DropArea>

      {uploadedImage && (
        <div>
          <h3>Original Image</h3>
          <img
            src={uploadedImage}
            alt="Original"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <div>
            <Button onClick={handleRemoveBackground} disabled={loading}>
              {loading ? 'Processing...' : 'Remove Background'}
            </Button>
          </div>
        </div>
      )}

      {processedImage && (
        <div>
          <h3>Background Removed</h3>
          <img
            src={processedImage}
            alt="Processed"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <br />
          <a href={processedImage} download="eklak-bg.png">
            <Button>Download Image</Button>
          </a>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
