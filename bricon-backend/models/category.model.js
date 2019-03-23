const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const { ObjectId } = Schema.Types;

const categorySchema = new Schema(
    {
        id: {
            type: ObjectId,
            index: true,
            required: true,
            auto: true,
        },
        name: {
            type: String,
            required: true,
            unique: true,
        },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Category', categorySchema);
