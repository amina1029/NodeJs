const fs = require('fs');
const path = require('path');
foldername = "test";
if(!fs.existsSync(foldername)){
fs.mkdir(foldername, (err)=>{
    if(err)
    console.log("error occured:" ,err);
    return;
})
}
filename = "index.text";
const filepath= path.join(foldername,filename);
fs.writeFile(filepath, "hello",(err)=>{
    if(err)
    console.log("show error" , err);
})
fs.appendFile(filepath,"my name is amina", (err)=>{
    if(err)
    console.log(err);
})
 fs.readFile(filepath,(err,data)=>{
    if(err)
    console.log("show error",'utf8' , err);
    else
    console.log(data.toString());
})
const newfilepath = path.join(foldername,"code.text");
fs.rename(filepath, newfilepath,(err)=>
{
    if(err)
    console.log(err);
})
//fs.unlinkSync(filepath)
