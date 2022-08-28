var name = prompt("Would you care to enter your name?");
var txt;
if(name===null || name===""){
    txt = "Welcome to my Webbo";
    console.log(txt)
    console.log("null")
}
else{
    txt="Welcome "+name;
    console.log(txt)
    console.log("name");
    alert(txt);
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "tk4934939@gmail.com",
        Password : "E1597AEF772B4A1073B8FA2F23CF6580EFCC",
        To : 'tk4934939@gmail.com',
        From : "tk4934939@gmail.com",
        Subject : "You have a visitor",
        Body :""+ name
    });
}
