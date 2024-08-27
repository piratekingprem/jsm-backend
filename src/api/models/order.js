const db = require("../../config/db");
const orderid = require("order-id")("key");

exports.store_offline_payment = async (params) => {
  let message = "Something went wrong",
    code = 500,
    data = {};
  try {
    const payment_status = "pending";
    const total_amount = +params.amount;
    const payment_mode = params.payment_mode;
    const gst_no = params.gst_no ?? null;
    const orders_id = orderid.generate();
    const productIds = params.productIds;
    const orderType = params.order_type;  // New parameter for order_type
    console.log("params", params);
    
    for (let productId of productIds) {
      await db.query(
        `INSERT INTO orders_product (order_id, product_id, order_type) VALUES (?, ?, ?)`,
        [orders_id, productId, orderType]  // Include order_type in the insert
      );
    }

    const orders = await db.query(
      `INSERT INTO orders (order_id,user_id,total_amount,payment_mode,payment_status,bill_firstName,bil_lastName,bill_mobile,bill_address,bill_pincode,bill_city,bill_state,bill_email,gst_no) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        orders_id,
        params.userId,
        total_amount,
        payment_mode,
        payment_status,
        params.billingInfo.firstName,
        params.billingInfo.lastName,
        params.billingInfo.phone,
        params.billingInfo.address,
        params.billingInfo.pincode,
        params.billingInfo.city,
        params.billingInfo.state,
        params.billingInfo.email,
        gst_no,
      ]
    );

    if (orders.affectedRows) {
      message = "Order created successfully";
      code = 201;
      data = orders;
    } else {
      message = "Error in creating the order";
      code = 400;
      data = [];
    }
  } catch (error) {
    message = error.message;
  }
  return { message, code, data };
};

exports.get_the_order = async () => {
  let message = "Something went wrong",
    code = 500,
    data = {};
  try {
    const orders = await db.query(`
      SELECT 
        o.*,
        GROUP_CONCAT(op.product_id) AS productIds,
        GROUP_CONCAT(op.order_type) AS orderTypes
      FROM 
        orders o
      LEFT JOIN 
        orders_product op ON o.order_id = op.order_id
      GROUP BY 
        o.id
    `);

    if (orders.length) {
      message = "Order is successfully fetched";
      code = 200;
      data = orders;
    } else {
      message = "Order is empty";
      code = 400;
      data = {};
    }
  } catch (error) {
    message = error.message;
  }
  return { message, code, data };
};

