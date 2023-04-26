const fs = require('fs');
const path = require('path');
foldername = "test";
//Create  folder
if(!fs.existsSync(foldername)){
fs.mkdir(foldername, (err)=>{
    if(err)
    console.log("error occured:" ,err);
    return;
})
}
//create file
filename = "index.text";
const filepath= path.join(foldername,filename);
fs.writeFile(filepath, "hello",(err)=>{
    if(err)
    console.log("show error" , err);
})
//Append data to file
fs.appendFile(filepath,"my name is amina", (err)=>{
    if(err)
    console.log(err);
})
//read data from file
 fs.readFile(filepath,(err,data)=>{
    if(err)
    console.log("show error",'utf8' , err);
    else
    console.log(data.toString());
})
//Rename file
const newfilepath = path.join(foldername,"code.text");
fs.rename(filepath, newfilepath,(err)=>
{
    if(err)
    console.log(err);
})
//Delete file
fs.unlinkSync(filepath)
