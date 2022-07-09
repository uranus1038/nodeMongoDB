const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://aum:<password>@shop01.ykfgj.mongodb.net/?retryWrites=true&w=majority'
, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });