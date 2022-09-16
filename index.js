const express=require('express');
const app=express();
const port=8999;
const expressLayouts=require('express-ejs-layouts')
//require mongoose
// const db=require('./config/mongoose')
app.use(express.static('./assets'))
app.use(expressLayouts)

//extract styles and script from the sub pages
//  app.use('Layout extractStyles',true)
//  app.use('Layout extractScripts',true)



//use express router
 app.use('/',require('./routes'));


 //setting up view engine
 app.set('view engine','ejs');
 app.set('views','./views')


app.listen(port,function(err){
    if(err){
        console.log(`Error in running server:${err}`);
    }
    console.log(`Your Server is up and running on port:${port}`);
});