import React from "react";

function ProductCard({
  name,
  description,
  image,
  price,
  mrp,
  rating,
  reviews,
}) {
  const discount = Math.round(((mrp - price) / mrp) * 100);

  return (
    <div
      style={{
        backgroundColor: "white",
        border: "1px solid #ddd",
        borderRadius: "10px",
        width: "240px",
        padding: "15px",
        boxShadow: "0 3px 10px rgba(0,0,0,0.12)",
        transition: "0.2s",
      }}
    >
      {/* Product Image */}
      <div
        style={{
          width: "100%",
          height: "180px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f8f8f8",
          borderRadius: "8px",
          marginBottom: "12px",
        }}
      >
        <img
          src={image}
          alt={name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            borderRadius: "8px",
          }}
        />
      </div>

      {/* Product Name */}
      <h3
        style={{
          fontSize: "18px",
          margin: "8px 0",
          color: "#222",
        }}
      >
        {name}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: "14px",
          color: "#666",
          margin: "6px 0",
          minHeight: "38px",
        }}
      >
        {description}
      </p>

      {/* Rating */}
      <div style={{ margin: "8px 0" }}>
        <span
          style={{
            backgroundColor: "#388e3c",
            color: "white",
            padding: "4px 7px",
            borderRadius: "5px",
            fontSize: "13px",
            fontWeight: "bold",
          }}
        >
          {rating} ★
        </span>

        <span
          style={{
            color: "#777",
            fontSize: "13px",
            marginLeft: "7px",
          }}
        >
          ({reviews.toLocaleString("en-IN")})
        </span>
      </div>

      {/* Price */}
      <div style={{ marginTop: "10px" }}>
        <span
          style={{
            fontSize: "21px",
            fontWeight: "bold",
            color: "#111",
          }}
        >
          ₹{price.toLocaleString("en-IN")}
        </span>

        <span
          style={{
            textDecoration: "line-through",
            color: "#777",
            fontSize: "14px",
            marginLeft: "8px",
          }}
        >
          ₹{mrp.toLocaleString("en-IN")}
        </span>
      </div>

      {/* Discount */}
      <div
        style={{
          color: "#008000",
          fontSize: "14px",
          fontWeight: "bold",
          marginTop: "5px",
        }}
      >
        {discount}% off
      </div>

      {/* Add to Cart */}
      <button
        style={{
          width: "100%",
          marginTop: "12px",
          backgroundColor: "#ff9f00",
          color: "white",
          border: "none",
          padding: "11px",
          borderRadius: "5px",
          fontSize: "15px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Add to Cart
      </button>

      {/* Buy Now */}
      <button
        style={{
          width: "100%",
          marginTop: "8px",
          backgroundColor: "#fb641b",
          color: "white",
          border: "none",
          padding: "11px",
          borderRadius: "5px",
          fontSize: "15px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Buy Now
      </button>
    </div>
  );
}

function Blocks() {
  const productdetails = [
    {
      name: "iPhone 17",
      description: "Latest Apple smartphone",
      price: 82900,
      mrp: 89900,
      rating: 4.7,
      reviews: 12543,
      image:
        "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=600&q=80",
    },

    {
      name: "Lenovo Laptop",
      description: "High performance laptop",
      price: 65999,
      mrp: 79999,
      rating: 4.5,
      reviews: 8432,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80",
    },

    {
      name: "Samsung Tablet",
      description: "Portable Android tablet",
      price: 32999,
      mrp: 39999,
      rating: 4.4,
      reviews: 5632,
      image:
        "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=600&q=80",
    },

    {
      name: "Sony Headphones",
      description: "Wireless noise cancelling headphones",
      price: 12999,
      mrp: 17999,
      rating: 4.6,
      reviews: 15432,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    },

    {
      name: "Canon Camera",
      description: "Professional digital camera",
      price: 74999,
      mrp: 89999,
      rating: 4.5,
      reviews: 4218,
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80",
    },

    {
      name: "HP Laptop",
      description: "Reliable everyday laptop",
      price: 54999,
      mrp: 64999,
      rating: 4.3,
      reviews: 7381,
      image:
        "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=600&q=80",
    },

    {
      name: "Dell Laptop",
      description: "Business performance laptop",
      price: 62999,
      mrp: 74999,
      rating: 4.4,
      reviews: 6241,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80",
    },

    {
      name: "Oppo Mobile",
      description: "Affordable Android smartphone",
      price: 24999,
      mrp: 29999,
      rating: 4.2,
      reviews: 9845,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
    },

    {
      name: "Vivo Mobile",
      description: "Stylish smartphone with great camera",
      price: 27999,
      mrp: 32999,
      rating: 4.4,
      reviews: 7654,
      image:
        "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80",
    },

    {
      name: "Wireless Earbuds",
      description: "Bluetooth earbuds with charging case",
      price: 1999,
      mrp: 3999,
      rating: 4.3,
      reviews: 24567,
      image:
        "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=600&q=80",
    },

    {
      name: "Gaming Headset",
      description: "Premium gaming headphones",
      price: 3499,
      mrp: 5999,
      rating: 4.5,
      reviews: 11432,
      image:
        "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=600&q=80",
    },

    {
      name: "Smart Watch",
      description: "Fitness and health smartwatch",
      price: 2999,
      mrp: 4999,
      rating: 4.2,
      reviews: 18765,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    },

    {
      name: "Gaming Mouse",
      description: "RGB wireless gaming mouse",
      price: 1499,
      mrp: 2499,
      rating: 4.4,
      reviews: 8721,
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=600&q=80",
    },

    {
      name: "Mechanical Keyboard",
      description: "RGB mechanical gaming keyboard",
      price: 2999,
      mrp: 4999,
      rating: 4.6,
      reviews: 6321,
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
    },

    {
      name: "Bluetooth Speaker",
      description: "Portable wireless speaker",
      price: 2499,
      mrp: 3999,
      rating: 4.5,
      reviews: 14231,
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#f1f3f6",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#2874f0",
          marginBottom: "30px",
        }}
      >
        Product Catalog
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "25px",
          justifyContent: "center",
        }}
      >
        {productdetails.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            description={product.description}
            image={product.image}
            price={product.price}
            mrp={product.mrp}
            rating={product.rating}
            reviews={product.reviews}
          />
        ))}
      </div>
    </div>
  );
}

export default Blocks;