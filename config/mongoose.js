// const mongoose=require('mongoose');
// mongoose.connect('mongodb://localhost/codesocial_development');
// const db=mongoose.connection;
// db.on('error',console.error.bind(console,"Error connecting MongoDB"));
// db.once('open',function(){
//     console.log("Connected to database::MongoDB")
// });
// module.exports=db;
const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://code_social2:shivani123@cluster0.3ydpjsp.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family:4,
  }); //note the name of our database will be codeial_developement VVIP 
const db=mongoose.connection;

db.on('error',console.error.bind(console,"Error Connecting to MongoDb"));

db.once('open',()=>{
console.log('Connected to  Database :: MongoDB')
});

module.exports=db;
