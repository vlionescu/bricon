const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const { ObjectId } = Schema.Types;

const articleSchema = new Schema(
    {
        id: {
            type: ObjectId,
            index: true,
            required: true,
            auto: true,
        },

        title: { type: String, required: true },
        text: { type: String, required: true },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Article', articleSchema);
