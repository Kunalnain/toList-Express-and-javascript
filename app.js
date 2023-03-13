const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));

var toAdds=[];

app.get("/",function(req,res){
    var today = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric',year:'numeric' };

    var day = today.toLocaleDateString("en-US", options);
    
    

    // var day = today.toLocaleDateString("en-US",options);

   
    res.render("list",{kindOfDay:day});

    
    // res.render("list",{kindOfDay: day,newItem:toAdds});
});

app.post("/",function(req,res){
    
});




app.listen("3000",function(){
    console.log("server running on 3000");
});