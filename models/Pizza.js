const { Schema, model } = require('mongoose');
const moment = require('moment');


const PizzaSchema = new Schema({ // create a schema, using the Schema constructor imported from Mongoose
  pizzaName: {
    type: String // It is not necessary to define the fields, but it's useful practice for clarity and usability.
  },
  createdBy: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
  },
  size: {
    type: String,
    default: 'Large'
  },
  toppings: [], // Could also specify 'Array' in place of the brackets here.

  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment' // Instructs the Pizza model which documents to search in order to find the right comments.
    }
  ]
},
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

// get total count of comments and replies on retrieval
PizzaSchema.virtual('commentCount').get(function() {
  return this.comments.reduce((total, comment) => total + comment.replies.length + 1, 0);
});


// create the Pizza model using the PizzaSchema
const Pizza = model('Pizza', PizzaSchema);

// export the Pizza model
module.exports = Pizza;