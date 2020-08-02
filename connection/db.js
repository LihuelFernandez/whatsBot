const mongoose = require('mongoose')

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_HOST}/${process.env.MONGODB_BASE}?retryWrites=true&w=majority`

const connectDB = async () => {
  await mongoose.connect(uri, { useUnifiedTopology : true, useNewUrlParser: true})
  console.log("DB Connected")
}
module.exports = connectDB