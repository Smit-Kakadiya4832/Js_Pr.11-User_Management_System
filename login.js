const login = () => {
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;
    let role = document.getElementById('role').value;
    let ans = JSON.parse(localStorage.getItem('user'));

    let value = ans.filter((val)=>{
        return val.email == email;
    })
    
    if(value.length == 1){
       if(value[0].password == password){
            if(value[0].role == role){
                window.location.href = "dashboard.html"
                localStorage.setItem('userlogin',JSON.stringify(value));
            }else{
                alert("You cannot login as "+role);
            }
       }else{
            alert("Incorrect Password");
       }
    }else{
        alert("E-mail not found");
    }
}
document.getElementById('check-otp').style.display = "none";
document.getElementById('fade-otp').style.display = "none";

const verify = () => {
    let vmail = document.getElementById('verify-email').value;
    let ans = JSON.parse(localStorage.getItem('user'));
    let value = ans.filter((val)=>{
        return val.email == vmail;
    })
    
    if(value.length == 1){
        let otp = Math.floor(Math.random() * 10000);
        alert("Your Otp is "+otp);
        document.getElementById('fade-otp').style.display = "block";
        document.getElementById('check-otp').style.display = "block";
        document.getElementById('send-otp').style.display = "none";
        let obj = {
            otp : otp
        }
        let sol = value;
        sol.push(obj);
        localStorage.setItem('otp',JSON.stringify(sol));
    }else{
        alert("E-mail not found")
    }
}

const checkOtp = () => {
    let otp = document.getElementById('verify-otp').value;
    let ans = JSON.parse(localStorage.getItem('otp'));
    let value = ans.filter((val)=>{
        return val.otp == otp;
    })
    
    if(value.length == 1){
        window.location.href = "new-password.html"
    }else{
        alert("Incorrect Otp");
    }
}