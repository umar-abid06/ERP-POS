const express = require('express');
const app = express();
const cors = require('cors');
const pool = require("./db");
const { createServer } = require('http-proxy');

//middleware
app.use(cors());

app.use(express.json());


//Routes:
app.post('/createProduct', async (req, res) => {
  try {
    const { id, name, price, quantity } = req.body;
    const newProduct = await pool.query('INSERT INTO product (id, name, price, quantity) VALUES ($1, $2, $3, $4) RETURNING *', [id, name, price, quantity])

    res.status(201).json({
      message: "Data added successfully",
      data: newProduct.rows[0],
    });
  } catch (err) {
    console.log(err.message)
  }
})

app.post('/uploadProducts', async (req, res) => {

  req.body.forEach(async (x) => {

    const { id, name, price, quantity } = x;
    try {
      const response = await pool.query('INSERT INTO product (id, name, price, quantity) VALUES ($1, $2, $3, $4) RETURNING *', [id, name, price, quantity])
      res.status(201).json({
        message: "Data added successfully",
        data: req.body,
      });
      console.log("AMMU--->")
    } catch (e) {
      console.log("AMMar--->")
      res.write(
        e.message
      );
      res.end()
    }
  })

})


app.get('/getProducts', async (req, res) => {
  try {
    const allProduct = await pool.query('SELECT * FROM product')
    res.status(201).json({
      message: "All Products inside DB",
      Items: allProduct.rows,
    });
  } catch (err) {
    console.log(err.message)
  }
})

app.listen(process.env.PORT || 5000, function () {
  console.log("listening on 5000");
});
