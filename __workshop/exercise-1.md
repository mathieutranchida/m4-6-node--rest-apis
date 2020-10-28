# Cafe API Architecture Doc

## Details

There's a corner cafe that wants your help to propel itself into the digital age... The owner, Greg, has read extensively and is anxious to get started, but lacks the technical chops to get his digital transformation off the ground. He _knows_ that big data is the way to go. He is planning on tracking _everything_ in his cafe.

He needs a RESTful API to serve all of the data that he'll have and gather more! And he's asked a couple of future developers to architect this API for him. He wants to track _everything_ from the stock, the customers, the seating in the cafe.

Provide him with a series of REST endpoints that meet all, or most of the RESTful principles that you've just heard about! Your feedback will dictate how the database will eventually be built... no pressure.

Write out each endpoint, its method, and brief description of waht it should do.

| endpoint | method | Description            |
| -------- | ------ | ---------------------- |
| `/test`  | `GET`  | It is a test endpoint. |

_This activity is more about the discussion in how to best organize data endpoints. There will not be any coding._

## Your Answer

| endpoint        | method   | Description                                                              |
| --------------- | -------- | ------------------------------------------------------------------------ |
| `/customer`     | `POST`   | Create a new customer.                                                   |
| `/customer`     | `GET`    | Access the customer database.                                            |
| `/customer/:id` | `GET`    | Access a specific customer in the database through its ID.               |
| `/customer/:id` | `PUT`    | Modify an entire specific customer through its ID.                       |
| `/customer/:id` | `PATCH`  | Modify a part of a specific customer through its ID.                     |
| `/customer/:id` | `DELETE` | Delete a specific customer through its ID.                               |
| `/product`      | `POST`   | Create a new product.                                                    |
| `/product`      | `GET`    | Access the product database.                                             |
| `/product/:id`  | `GET`    | Access a specific product in the database through its ID.                |
| `/product/:id`  | `PUT`    | Modify an entire specific product through its ID. Including the stock.   |
| `/product/:id`  | `PATCH`  | Modify a part of a specific product through its ID. Including the stock. |
| `/product/:id`  | `DELETE` | Delete a specific product through its ID.                                |
| `/seating`      | `POST`   | Create a new seating option.                                             |
| `/seating`      | `GET`    | Access the seating database.                                             |
| `/seating/:id`  | `GET`    | Access a specific seating option in the database through its ID.         |
| `/seating/:id`  | `PUT`    | Modify an entire specific seating option through its ID.                 |
| `/seating/:id`  | `PATCH`  | Modify a part of a specific seating option through its ID.               |
| `/seating/:id`  | `DELETE` | Delete a specific seating option through its ID.                         |
