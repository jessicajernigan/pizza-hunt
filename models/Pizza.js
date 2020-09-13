const { Schema, model } = require('mongoose');


const PizzaSchema = new Schema({ // create a schema, using the Schema constructor imported from Mongoose
  pizzaName: {
    type: String // It is not necessary to define the fields, but it's useful practice for clarity and usability.
  },
  createdBy: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  size: {
    type: String, 
    default: 'Large'
  },
  toppings: [] // Could also specify 'Array' in place of the brackets here.
});


// create the Pizza model using the PizzaSchema
const Pizza = model('Pizza', PizzaSchema);

// export the Pizza model
module.exports = Pizza;