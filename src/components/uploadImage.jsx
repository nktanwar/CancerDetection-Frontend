import React, { useRef, useState } from "react";
import axios from "axios";

export default function UploadImage({ isDarkMode }) {
    const [Image, setImage] = useState(null);
    const [response, setResponse] = useState(null);
    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(false); // New loading state
    const imgRef = useRef(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!Image) {
            alert('Please select an image first');
            return;
        }
        setLoading(true); // Set loading to true when the form is submitted
        const formdata = new FormData();
        const headers = {
            'Content-Type': 'multipart/form-data'
        };
        formdata.append('image', Image);
        try {
            const apiResponse = await axios.post('/api/api/predict', formdata, { headers });
            console.log("sent");
            setResponse(apiResponse.data.prediction); // Store the prediction value
            console.log("response", apiResponse.data);
        } catch (error) {
            console.error("error sending data:", error);
        } finally {
            setLoading(false); // Stop loading after the response is received or error occurs
        }
    };

    const handleUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setPreview(URL.createObjectURL(file));
            setImage(file);
        }
    };

    return (
        <div className={`flex flex-col items-center w-full p-6 ${isDarkMode ? 'bg-gradient-to-r from-teal-700 to-blue-900' : 'bg-gradient-to-r from-green-400 to-blue-500'} rounded-lg shadow-lg transition-transform transform hover:scale-110`}>
            <h3 className="text-white text-3xl font-bold mb-4">Upload Image</h3>
            <h5 className="text-white text-center mb-6">Drag or drop your files here or click on upload</h5>

            <div className="border-2 border-dashed border-white w-full max-w-lg h-64 flex items-center justify-center overflow-hidden rounded-lg shadow-md transition-transform transform hover:scale-105">
                {Image && (
                    <img
                        src={preview}
                        alt="preview"
                        ref={imgRef}
                        className="max-w-full max-h-full object-contain transition-opacity duration-500"
                    />
                )}
            </div>

            <form onSubmit={handleSubmit} className="flex justify-between w-full max-w-lg mt-6">
                <input
                    type="file"
                    accept="image/*"
                    name="image"
                    onChange={handleUpload}
                    className="text-white bg-transparent border-2 border-white p-2 rounded-lg w-full mr-2 hover:bg-white hover:text-black transition duration-300"
                />
                <button
                    type="submit"
                    className="bg-white text-black font-bold text-sm py-2 px-4 rounded-md hover:bg-gray-300 transition duration-300"
                >
                    Diagnose
                </button>
            </form>

            {/* Display loading animation while the request is being processed */}
            {loading && (
                <div className="text-white p-3 mt-4 text-center">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-white"></div>
                    <p>Processing...</p>
                </div>
            )}

            {/* Display response when loading is finished */}
            {!loading && response !== null && (
                <div className="text-white p-3 mt-4 text-center">
                    {response === 0 
                        ? <h1 className="text-green-500">Congratulations, you don't have skin cancer.</h1> 
                        : <h1 className="text-red-500">Please consult a doctor. You may have skin cancer.</h1>
                    }
                </div>
            )}
        </div>
    );
}
