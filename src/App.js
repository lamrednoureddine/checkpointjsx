import React from 'react';
import productData from './product.json';
import './App.css'; // Importez votre fichier CSS pour les styles.

function App() {
  const { name, price, description, image } = productData;
   const firstName ="zsqd"
  return (

    <>
      <h1 className="product-title"   >This is My Product</h1>
    <div className="app-container" >
      <div className="product-card"   >
        <img src={image} alt={name} className="product-image" />
        <h2 className="product-name">{name}</h2>
        <p className="product-price">Prix : {price}</p>
        <p className="product-description">{description}</p>
        

      </div>
    </div>
    {firstName  &&<> <img src="../smartphone.jpeg" alt='bjbhvhj'/> <h1>my phone</h1></>} 

</>
  );
}

export default App;
