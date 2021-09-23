const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://register:dt3CSpy0YBxrFf2y@travl.xgnwl.mongodb.net/<dbname>?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(() => {
    console.log(`no connection`);
}).catch((e)=>{
    console.log(`connection successful`);
});
