const Form = require('../models/Form');

exports.postForm = async (req, res) => {
  const event = new Form({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    date: req.body.date,
  });
  try {
    const savedEvent = await event.save();
    res.json(savedEvent);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.testForm= async (req, res) => {
  try {
    const event = await Form.find();
    res.json(event);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.singleTestForm = async (req, res) => {
  try {
    const event = await Form.findById(req.params.eventId);
    res.json(event);
  } catch (err) {
    res.json({ message: err });
  }
};