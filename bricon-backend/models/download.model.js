const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const { ObjectId } = Schema.Types;

const downloadSchema = new Schema(
    {
        id: {
            type: ObjectId,
            index: true,
            required: true,
            auto: true,
        },

        title: { type: String, required: true },
        url: { type: String, required: true },
        description: { type: String },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Download', downloadSchema);
