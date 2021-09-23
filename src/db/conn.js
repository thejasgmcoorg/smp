const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://register:JglEuJx0C69WQDP1@travl.xgnwl.mongodb.net/<dbname>?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(() => {
    console.log(`no connection`);
}).catch((e)=>{
    console.log(`connection successful`);
});
// require('./db');