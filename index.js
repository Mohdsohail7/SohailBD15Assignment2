let express = require("express");
let cors = require("cors");

const app = express();
const port = 8000;
app.use(cors());

app.get("/", (req, res) => {
  res.send("welcome to stock portfolio analysis API")
});

// Endpoint 1: Calculate the Returns of the Stocks added. 
app.get('/calculate-returns', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = req.query.quantity;

  let returnOfStock = (marketPrice - boughtAt) * quantity;

  res.send(returnOfStock.toString());
});

// Endpoint 2: Calculate the Total Returns
app.get('/total-returns', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  let totalValueOfAllStock = stock1 + stock2 + stock3 + stock4 ;

  res.send(totalValueOfAllStock.toString());
});

// Endpoint 3: Calculate the Return Percentage
app.get('/calculate-return-percentage', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let returns = parseFloat(req.query.returns);

  let percentageOfStock = (returns / boughtAt) * 100;

  res.send(percentageOfStock.toString());
});

// Endpoint 4: Calculate the Total Return Percentage. 
app.get('/total-return-percentage', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req. query. stock4);

  let totalPercentage = stock1 + stock2 + stock3 + stock4;

  res.send(totalPercentage.toString());
});

// Endpoint 5: Identify the Status of Stocks based on their Return Value. 
app.get('/status', (req, res) => {
  let returnPercentage = parseFloat(req.query.returnPercentage);
  let result;

  if (returnPercentage >= 90) {
    result = "profit";
  } else {
    result = " loss";
  }

  res.send(result);
});

app.listen(port, () => {
  console.log("server is running on the port number is: " + port);
});

