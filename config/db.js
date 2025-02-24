const mongoose = require('mongoose');

mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('✅ Database Connected!'))
  .catch(err => console.error('❌ Database Connection Error:', err));

module.exports = mongoose;
