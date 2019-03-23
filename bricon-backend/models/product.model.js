const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const { ObjectId } = Schema.Types;

const productSchema = new Schema(
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
        description:  {
            type: String,
            required: true,
        },
        category: {
            type: ObjectId,
            ref: 'Category',
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        photos: [
            {
                url: {
                    type: String,
                },
                name: {
                    type: String,
                },
                contentType: {
                    type: String,
                }
            }
        ],
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Product', productSchema);
