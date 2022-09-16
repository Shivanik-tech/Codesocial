module.exports.home=function(req,res){
   // return res.end("<h1>Express is up for codeSocial!!!!!!</h1>")
   return res.render('home',{
   title : "HOME"
    })
}
//module.exports.actionName=function(req,res){}