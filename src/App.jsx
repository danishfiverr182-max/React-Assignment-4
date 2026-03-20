import React from "react";
import ProductCard from "./components/Productcard";

function App() {
  // ─── Task 3: Product Data (passed as props to each ProductCard) ───────────
  const products = [
    {
      id: 1,
      title: 'Apple MacBook Pro 14" M3 Chip: 16GB RAM, 512GB SSD, Space Gray',
      price: "$1,599.00",
      description:
        "Supercharged by the M3 chip, MacBook Pro delivers exceptional performance for demanding tasks. Features a stunning Liquid Retina XDR display, all-day battery life, and a sleek aluminium design.",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80",
      rating: 4.5,
      reviews: 3248,
    },
    {
      id: 2,
      title:
        "Samsung Galaxy S24 Ultra: 12GB RAM, 256GB, Titanium Black, Snapdragon 8 Gen 3",
      price: "$1,199.00",
      description:
        "The most powerful Galaxy smartphone ever. Built-in S Pen, 200MP quad camera system, 6.8-inch Dynamic AMOLED 2X display with 120Hz refresh rate, and AI-powered features.",
      image:
        "https://images.unsplash.com/photo-1706989239865-25552e6f2c9a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FsYXh5JTIwczI0JTIwdWx0cmF8ZW58MHwwfDB8fHww",
      rating: 4.5,
      reviews: 5812,
    },
    {
      id: 3,
      title:
        "Sony WH-1000XM5 Wireless Noise Cancelling Headphones: 30Hr Battery, Black",
      price: "$279.99",
      description:
        "Industry-leading noise cancellation with Auto NC Optimizer. Exceptional sound quality with HD Noise Cancelling Processor QN1. Multipoint connection, speak-to-chat, and Alexa built-in.",
      image:
        "https://images.unsplash.com/photo-1628116709703-c1c9ad550d36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhlYWRwaG9uZXN8ZW58MHwwfDB8fHww",
      rating: 4.5,
      reviews: 9104,
    },
    {
      id: 4,
      title:
        'Dell UltraSharp 27" 4K USB-C Monitor: IPS, 60Hz, HDR400, U2723DE',
      price: "$449.99",
      description:
        "Stunning 4K IPS panel with wide color coverage (100% sRGB, 98% DCI-P3). Built-in USB-C hub with 90W power delivery and RJ45 Ethernet. Ideal for creative professionals.",
      image:
        "https://cdn.pixabay.com/photo/2017/01/22/12/07/imac-1999636_1280.png",
      rating: 4,
      reviews: 2167,
    },
    {
      id: 5,
      title:
        "Logitech MX Master 3S Wireless Mouse: 8000 DPI, Quiet Clicks, Ergonomic",
      price: "$99.99",
      description:
        "The most advanced Master Series mouse. Ultra-fast MagSpeed scroll wheel, any-surface tracking, Logi Bolt wireless for a secure connection, and up to 70 days battery life.",
      image:
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80",
      rating: 4.5,
      reviews: 7456,
    },
    {
      id: 6,
      title:
        "Canon EOS R50 Mirrorless Camera: 24.2MP, 4K Video, Wi-Fi, Content Creator Kit",
      price: "$679.99",
      description:
        "Perfect camera for content creators and beginners. Lightweight body, vertical 4K video shooting, Dual Pixel CMOS AF II, and easy smartphone transfer via Canon Camera Connect app.",
      image:
        "https://cdn.pixabay.com/photo/2025/01/17/23/53/analog-camera-9341083_1280.jpg",
      rating: 4,
      reviews: 1893,
    },
  ];

  return (
    <div>
      <header className="amazon-header">
        <a className="amazon-logo" href="#top">
          Amazone
        </a>

        <div className="amazon-search-bar">
          <input type="text" placeholder="Search products, brands and more…" />
          <button>🔍︎</button>
        </div>

        <nav className="amazon-nav-links">
          <span>Hello, Sign in<br /><strong>Account &amp; Lists</strong></span>
          <span>Returns<br /><strong>&amp; Orders</strong></span>
          <span className="cart" >🛒 <strong>Cart</strong></span>
        </nav>
      </header>

      <div className="amazon-subnav">
        <span>☰ All</span>
        <span>Today's Deals</span>
        <span>Electronics</span>
        <span>Computers</span>
        <span>Mobiles</span>
        <span>Cameras</span>
        <span>Accessories</span>
        <span>Home & Kitchen</span>
        <span>Fashion</span>
        <span>Books</span>
      </div>

      <h2 className="page-heading">
        Featured <span>Products</span>
      </h2>

      {/* ── Task 6: product-container (CSS Grid) ────────────── */}
      {/* ── Task 3: Rendering multiple ProductCards with props ─ */}
      <main className="product-container">
        {products.map((product) => (
          // Task 2 & 3: Passing props from parent (App) to child (ProductCard)
          // Task 5: Button text passed as children prop
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            image={product.image}
            rating={product.rating}
            reviews={product.reviews}
          >
            Buy Now
          </ProductCard>
        ))}
      </main>

      <footer className="amazon-footer">
        <p>
          <a href="#top">Back to top</a>
        </p>
        <p>
          <a href="#">Conditions of Use</a>
          <a href="#">Privacy Notice</a>
          <a href="#">Help</a>
        </p>
        <p>© 2026 Amazone.com, Inc. or its affiliates. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;