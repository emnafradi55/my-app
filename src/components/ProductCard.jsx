function ProductCard({ product }) {
  return (
    <div className="card">

      <img
        src={product.thumbnail}
        alt={product.title}
      />

      <h3>{product.title}</h3>

      <p>Price: ${product.price}</p>

      <p>Rating: ⭐ {product.rating}</p>

    </div>
  );
}

export default ProductCard;