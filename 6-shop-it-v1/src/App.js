import React, { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "laptop",
      description: "this is a laptop",
      price: 2000,
      isAvailable: true,
      isBuyable: true,
      image: "images/Laptop.png",
    },
    {
      id: 1,
      name: "mobile",
      description: "this is a mobile",
      price: 2000,
      isAvailable: true,
      isBuyable: true,
      image: "images/Mobile.png",
    },
  ]);
  const [currentTab, setCurrentTab] = useState(1);

  const handleTabChange = (e, tabIndex) => {
    e.preventDefault();
    setCurrentTab(tabIndex);
  };

  const renderTabPanel = (product) => {
    switch (currentTab) {
      case 1:
        return <div>{product.description}</div>;
      case 2:
        return <div>Not Yet</div>;
      case 3:
        return <div>None Yet</div>;
      default:
        return null;
    }
  };

  const renderProduct = (product) => {
    if (product.isAvailable) {
      return (
        <div className="card" key={product.id}>
          <div className="card-body">
            <div className="row">
              <div className="col-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="img-fluid"
                />
              </div>
              <div className="col-8">
                <div className="card-title">{product.name}</div>
                <div className="card-text">&#8377; {product.price}</div>
                <button
                  disabled={!product.isBuyable}
                  className="btn btn-primary"
                >
                  Add to cart
                </button>
                <ul className="nav nav-tabs mt-3">
                  <li className="nav-item">
                    <a
                      className={
                        currentTab === 1 ? "nav-link active" : "nav-link"
                      }
                      onClick={(e) => handleTabChange(e, 1)}
                      href="#"
                    >
                      Description
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={
                        currentTab === 2 ? "nav-link active" : "nav-link"
                      }
                      onClick={(e) => handleTabChange(e, 2)}
                      href="#"
                    >
                      Spec..
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={
                        currentTab === 3 ? "nav-link active" : "nav-link"
                      }
                      href="#"
                      onClick={(e) => handleTabChange(e, 3)}
                    >
                      Reviews
                    </a>
                  </li>
                </ul>
                {renderTabPanel(product)}
              </div>
            </div>
          </div>
        </div>
      );
    } else return null;
  };

  const renderProducts = () => {
    return products.map((product) => {
      return renderProduct(product);
    });
  };

  return (
    <div className="container">
      <div className="display-1">shop-IT</div>
      <hr />
      {renderProducts()}
    </div>
  );
}

export default App;
