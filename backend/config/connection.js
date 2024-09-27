const mongoose = require('mongoose')

const uri ='mongodb+srv://cadaluan:cT5y7U1ZPK8ZQMkH@cluster0.qmfoq.mongodb.net/Reparado?retryWrites=true&w=majority';
//'mongodb+srv://superAdso:uBy0r5CbOmr3i9ZY@clusteradsi.nzwbkjo.mongodb.net/'; 
mongoose.connect(uri);

module.exports= mongoose;