var express = require("express");
var router = express.Router();

const products = [
  {
    id: 1,
    name: "laptop",
    description: "this is a laptop",
    price: 2000,
    isAvailable: true,
    isBuyable: true,
    image: "/images/Laptop.png",
  },
  {
    id: 2,
    name: "mobile",
    description: "this is a mobile",
    price: 2000,
    isAvailable: true,
    isBuyable: true,
    image: "/images/Mobile.png",
  },
];
const reviews = {
  1: [
    {
      id: 1,
      author: "user1",
      stars: 4,
      body: "good",
    },
    {
      id: 2,
      author: "user2",
      stars: 3,
      body: "ok",
    },
  ],
  2: [
    {
      id: 1,
      author: "user1",
      rating: 4,
      body: "good one",
    },
    {
      id: 2,
      author: "user2",
      stars: 3,
      body: "bad one",
    },
  ],
};

router.get("/", function (req, res, next) {
  res.json(products);
});

router.get("/:id/reviews", function (req, res, next) {
  const id = req.params.id;
  setTimeout(() => {
    res.json(reviews[Number.parseInt(id)]);
  }, 5000);
});
router.post("/:id/reviews", function (req, res, next) {
  const id = Number.parseInt(req.params.id);
  const review = req.body;
  review.id = reviews[id].length + 1;
  reviews[id].push(review);
  res.json(review);
});

module.exports = router;
