import mongoose from 'mongoose'

const Schema = mongoose.Schema

const flagSchema = new Schema({
  student: { type: Schema.Types.ObjectId, ref: 'Profile' }
},{
  timestamps: true,
})

const Flag = mongoose.model('Flag', flagSchema)

export { Flag }
