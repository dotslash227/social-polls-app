const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PollSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'users',
  },
  date: {
    type: Date,
    default: Date.now,
  },
  friendList: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: 'friendList',
  },
  votes: {
    type: Number,
    required: false,
    default: 0,
  },
  images: [
    {
      url: {
        type: String,
        required: true,
      },
      numVotes: {
        type: Number,
        required: true,
        default: 0,
      },
    },
  ],
});

PollSchema.methods.addImage = function (imageLocation) {
  this.images.push({ url: imageLocation });
};

PollSchema.methods.updateImage = function (imageLocation, id) {
  const imageObj = this.images.find((image) => String(image._id) === id);
  imageObj['url'] = imageLocation;
  // Saving the parent, because the child cannot be saved
  this.save();
};

PollSchema.methods.updateTitle = function (title) {
  this.title = title;
  this.save();
};

module.exports = Poll = mongoose.model('polls', PollSchema);
