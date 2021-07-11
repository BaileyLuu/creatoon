import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [totalReactPackages, setTotalReactPackages] = useState(null);
  const [originalImage, setOriginalImage] = useState("")
  const [base64, setBase64] = useState("");

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch('https://api.npms.io/v2/search?q=react')
      .then(response => response.json())
      .then(data => setTotalReactPackages(data.total));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);
  

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    console.log(file);
    const base64Img = await convertToBase64(file);
    console.log(base64Img);
    setBase64(base64Img);
    setOriginalImage(base64Img);
  };


  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      }
    })
  }

  return (
    <div className="App">
      <input type="file" onChange={(e) => {
        uploadImage(e);
      }} />
      <br></br>

      {/* display the original/submitted image */}
      <img src={originalImage} />
      {/* //-------------------------// */}

      {/* display the cartonnify image */}
      <img src={base64} />
       {/* //-------------------------// */}

      <div>Total package: {totalReactPackages}</div>
      
    </div>
   


  );
}

export default App;
