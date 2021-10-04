var firebase=require('firebase');
var firebaseConfig = {
  apiKey: "AIzaSyCxDJ8Jsc_edCjxAdamQAyXlI2zZgWo5h4",
  authDomain: "webappdemo-a66ea.firebaseapp.com",
  projectId: "webappdemo-a66ea",
  storageBucket: "webappdemo-a66ea.appspot.com",
  messagingSenderId: "271014888913",
  appId: "1:271014888913:web:6067e440bf49ffb5304cf0",
  measurementId: "G-HTVMNK0RC5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var dep,yea,sec,pt,sc,reg,si;
var JSAlert = require("js-alert");
var express=require("express");
var bodyParser=require("body-parser");
var app=express();
var keyval=[];
app.set('view engine','ejs');
app.listen(3000,function(){
  console.log("started server at port 3000");
});
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});
app.get("/store",function(req,res){
  res.sendFile(__dirname+"/gateway.html");
});
app.get("/search",function(req,res){
  res.render("getdatas",{listitems:keyval});
});

app.get("/imageupload",function(req,res){
  res.sendFile(__dirname+"/imageupload.html");

});
app.post("/store",function(req,res){
  res.redirect("/store");
  dep=req.body.dept;
  yea=req.body.year;
  sec=req.body.section;
  pt=req.body.periodical;
  sc=req.body.code;
});
app.post("/result",function(req,res){

var reg=req.body.register;var on=req.body.one;var tw=req.body.two;var th=req.body.three;var fo=req.body.four;var fi=req.body.five;
var si=req.body.six;var se=req.body.seven;var ei=req.body.eight;var ni=req.body.nine;var te=req.body.ten;var el=req.body.eleven;
var twe=req.body.twelve;var thir=req.body.thirteen;var four=req.body.fourteen;
if(on==""){on=0;}if(tw==""){tw=0;}if(th==""){th=0;}if(fo==""){fo=0;}if(fi==""){fi=0;}if(si==""){si=0;}if(se==""){se=0;}if(ei==""){ei=0;}
if(ni==""){ni=0;}if(te==""){te=0;}if(el==""){el=0;}if(twe==""){twe=0;}if(thir==""){thir=0;}if(four==""){four=0;}
var total=parseInt(on)+parseInt(tw)+parseInt(th)+parseInt(fo)+parseInt(fi)+parseInt(si)+parseInt(se)+parseInt(ei)+parseInt(ni)+parseInt(te)+parseInt(el)+parseInt(twe)+parseInt(thir)+parseInt(four);
JSAlert.alert("This is an alert.");
  res.render("sum",{department:dep,identity:reg,marks:total});
  var firebaseRef=firebase.database().ref();
  firebaseRef.child(dep).child(yea).child(sec).child(pt).child(sc).child(reg).set(total);


});

app.post("/search",function(req,res)
{
  dep=req.body.dept;
  yea=req.body.year;
  sec=req.body.section;
  pt=req.body.periodical;
  sc=req.body.code;
  var ref=firebase.database().ref();
  ref.child(dep).child(yea).child(sec).child(pt).child(sc).on('value',function(datasnapshot){
    datasnapshot.forEach(function(snapshot) {
      var k=snapshot.key;
      var data=snapshot.val();
      keyval.push(k+":"+data);
      console.log(k);
    });
  })

  });

  // app.post("/imageupload",function(req,res){
  //   var files=[]
  //   var reader;
  //   document.getElementById("select").onclick=function(e){
  //     var input=document.createElement('input');
  //     input.type='file';
  //
  //     input.onchange = e => {
  //       files=e.target.files;
  //       reader=new FileReader();
  //       reader.onload()=function(){
  //         document.getElementById("myimg").src=reader.result;
  //       }
  //       reader.readAsDataURL(files[0]);
  //     }
  //     input.click();
  //   }
  //
  // });
