function sendMail(){
    let parms={
        to_name:"Muhammad Ajfar",
        name:document.getElementById('fname').value,
        email:document.getElementById('ed').value,
        number:document.getElementById('mn').value,
        subject:document.getElementById('es').value,
        message:document.getElementById('msg').value,

    }

    emailjs.send("service_utootc9","template_713t4qh",parms)
    .then(
    (res) =>{
        document.getElementById('fname').value ="";
        document.getElementById('ed').value ="";
        document.getElementById('mn').value ="";
        document.getElementById('es').value ="";
        document.getElementById('msg').value ="";
        console.log(res);
        alert("your message send successfully");
    }
).catch(err=>console.log(err))
}