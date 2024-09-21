const orderModel = require("../models/order");
const { mailoption, transporter} = require("../../config/smtp");

exports.store_offline = async (req, res, next) => {
  try {
    const order = await orderModel.store_offline_payment(req.body);
    mailoption.to = `${req.body.billingInfo.email}`;
    mailoption.subject = "Order Created";
    mailoption.html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #4CAF50;">Order Confirmation</h2>
        <p>Dear ${req.body.billingInfo.firstName},</p>
        <p>Thank you for your order. We are pleased to confirm that your order has been successfully created.</p>
        <p>We are processing your order and will notify you once it has been shipped.</p>
        <p>If you have any questions or need further assistance, please do not hesitate to contact us.</p>
        <p>Best regards,</p>
        <p><strong><a href='https://jeevansanskriti.com'>jeevansanskriti.com</a/></strong></p>
      </div>`;
    await transporter.sendMail(mailoption);
    return res.send(order);
  } catch (error) {
    next(error);
  }
};

exports.getOrder = async (req, res, next) => {
  try {
    const order = await orderModel.get_the_order();
    return res.send(order);
  } catch (error) {
    next(error);
  }
};
