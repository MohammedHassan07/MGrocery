import { model, Schema } from "mongoose"

const brandSchema = new Schema({

    name: String,
})

export default model('brand', brandSchema)