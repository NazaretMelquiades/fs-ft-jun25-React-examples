import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom';

    // http://localhost:5173/product/2?limit=2
    // http://localhost:5173/product/3?limit=2&sort=asc
    // http://localhost:5173/product/4?limit=2&sort=desc

function ProductDetail() {
  const { id } = useParams(); // Param
  const location = useLocation();

  // Parseo manual de query params
  const searchParams = new URLSearchParams(location.search);
  const limit = searchParams.get('limit'); // Query param
  const sort = searchParams.get('sort');    // Query param

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulación de una llamada a la API para obtener los productos
    const fetchProducts = async () => {
      // Aquí iría la lógica para obtener los productos desde una API
      const response = await fetch(`https://fakestoreapi.com/products/${id}?limit=${limit}`);
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }
  , [id,limit]);

  return (
    <div>
      <h1>Detalle del Producto</h1>
      <p>ID: {id}</p>
      <p>Título: {products.title}</p>
      <p>Precio: {products.price} €</p>
      <p>Límite: {limit}</p>
      <p>Orden: {sort}</p>
    </div>
  );
}

export default ProductDetail;