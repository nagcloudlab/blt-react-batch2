import React, { useState, useEffect } from "react";
import Review from "./Review";
import ReviewForm from "./ReviewForm";

import { addToCart } from "../actions/cart";
import { getReviews, postReview } from "../api";

import { useDispatch } from "react-redux";

function Product({ value: product }) {
  const [currentTab, setCurrentTab] = useState(1);
  const [reviews, setReviews] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentTab === 3)
      getReviews(product.id).then((response) => {
        setReviews(response.data);
      });
  }, [currentTab]);

  const handleTabChange = (e, tabIndex) => {
    e.preventDefault();
    setCurrentTab(tabIndex);
  };

  const handleNewReview = (review) => {
    postReview(product.id, review).then((response) => {
      setReviews([response.data, ...reviews]);
    });
  };

  const renderReviews = () => {
    return reviews.map((review, idx) => {
      return <Review key={idx} value={review} />;
    });
  };
  const renderTabPanel = (product) => {
    switch (currentTab) {
      case 1:
        return <div>{product.description}</div>;
      case 2:
        return <div>Not Yet</div>;
      case 3:
        return (
          <div>
            {" "}
            <ReviewForm onNewReview={handleNewReview} /> {renderReviews()}
          </div>
        );
      default:
        return null;
    }
  };

  const handleBuy = () => {
    console.log("buying product");
    const action = addToCart(product, 1);
    dispatch(action);
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
                  onClick={(e) => handleBuy()}
                >
                  Buy
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
  return <div>{renderProduct(product)}</div>;
}

export default Product;
