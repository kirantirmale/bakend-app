const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://kirantirmale2362001:Kiran%40123@cluster0.ybe4t.mongodb.net/kirant?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('✅ Database Connected!'))
  .catch(err => console.error('❌ Database Connection Error:', err));

module.exports = mongoose;
