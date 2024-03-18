import React, { useState } from 'react';
import axios from 'axios';

function ImageUpload({ onUpload }) {
    const [image, setImage] = useState(null);

    const handleFileChange = (event) => {
        setImage(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!image) return;

        const formData = new FormData();
        formData.append('image', image);

        try {
            const response = await axios.post('/api/upload/image', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            onUpload(response.data.imageUrl);
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
}

export default ImageUpload;
