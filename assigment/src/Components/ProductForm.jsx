import { Button, TextField } from '@mui/material';
import React from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';


const ProductForm = () => {
  const VisuallyHiddenInput = styled('input')({
    display: 'none',
  });

  return (
    <div className="form-container"> 
      <h2 className="form-title">Add New Product</h2>

      <TextField 
        type="text" 
        label="Title" 
        variant="filled" 
        className="form-input" 
      />
      <br /><br /><br />

      <Button
        component="label"
        variant="outlined"
        size="large"
        startIcon={<CloudUploadIcon />}
        className="form-button"
      >
        Upload Image
        <VisuallyHiddenInput
          type="file"
          onChange={(event) => console.log(event.target.files)}
        />
      </Button>
      <br /><br /><br />

      <TextField 
        type='number'
        label="Price" 
        variant="filled" 
        className="form-input" 
      />
      <br /><br /><br />

      <TextField 
        type='text'
        label="Category" 
        variant="filled" 
        className="form-input" 
      />
      <br /><br /><br />

      <Button variant="contained" className="form-submit-button">
        ADD
      </Button>
    </div>
  );
};

export default ProductForm;
