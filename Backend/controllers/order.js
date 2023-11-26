import db from "../db.js";



export const addToCart = (req, res) => {
    const { name, quantity, price, totalPrice, image, user_id, } = req.body;
    
    // Check if the item already exists in the cart
    const checkIfExistsQuery = 'SELECT * FROM orders WHERE user_id = ? AND name = ?';
    db.query(checkIfExistsQuery, [user_id, name], (checkError, checkResults) => {
      if (checkError) {
        console.error('Error checking item existence:', checkError);
        res.status(500).send('Internal Server Error');
      } else {
        if (checkResults.length > 0) {
          // Item already exists; update quantity and price
          const updateQuery = 'UPDATE orders SET quantity = quantity + ?, price = price + ?, totalPrice = totalPrice + ? WHERE user_id = ? AND name = ?';
          db.query(updateQuery, [quantity, price, totalPrice, user_id, name], (updateError) => {
            if (updateError) {
              console.error('Error updating item:', updateError);
              res.status(500).send('Internal Server Error');
            } else {
              res.status(200).send('Item updated in the cart');
            }
          });
        } else {
          // Item doesn't exist; insert new record
          const insertQuery = 'INSERT INTO orders(name, price, image, quantity, totalPrice, user_id) VALUES (?, ?, ?, ?, ?, ?)';
          db.query(insertQuery, [name, price, image, quantity, totalPrice, user_id], (err, data) => {
            if (err) {
              console.error('Error inserting new item:', err);
              res.status(500).send('Internal Server Error');
            } else {
              res.status(201).send('Item added to the cart');
            }
          });
        }
      }
    });
  };
  

export const getOrders = (req, res) =>{
    const query = "SELECT * FROM orders WHERE user_id = ?";
    const userId = req.params.user_id
    db.query(query, [userId], (err,data)=>{
        if(err) return res.status(404).json(err);

        return res.status(200).json(data)
    })
}

export const getOrder = (req, res) =>{
    const query = "SELECT * FROM orders where id =?";
    const orderId = req.params.id
    db.query(query, [orderId], (err,data)=>{
        if(err) return res.status(404).json(err);

        return res.status(200).json(data)
    })
}

export const removeOrder = (req, res) =>{
    const query = "DELETE FROM orders WHERE id =?";
    const orderId = req.params.id

    db.query(query, [orderId], (err, data)=>{
        if(err) return res.status(404).json(err);
        return res.json(data)
    })
}

export const increaseQuantity = (req, res) =>{
  const query = "UPDATE orders SET quantity = quantity + ? WHERE id =?";
  const quantityId = req.params.id;
  const quantity = req.body.quantity;

  db.query(query, [quantity,quantityId], (err,data)=>{
    if(err) return res.status(500).json(err);
    return res.json(data)
  })
};

export const decreaseQuantity = (req, res) =>{
  const query = "UPDATE orders SET quantity = quantity - ? WHERE id =?";
  const quantityId = req.params.id;
  const quantity = req.body.quantity;

  db.query(query, [quantity,quantityId], (err,data)=>{
    if(err) return res.status(500).json(err);
    return res.json(data)
  })
}