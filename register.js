let data=[
    {
        userid : 1,
        name : "Smit",
        email : "smitkakadiya2003@gmail.com",
        password : "Smit@2003",
        role : "Admin"
    }
];
const save = () => {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let cpassword = document.getElementById('cpassword').value;

    if(cpassword == password){
        let obj = {
            userid : Math.floor(Math.random( ) * 10000),
            name : name,
            email : email,
            password : password,
            role : "User"
        }

        if(localStorage.getItem('user') === null || localStorage.getItem('user') === undefined){
            data.push(obj);
            localStorage.setItem('user',JSON.stringify(data));
        }else{
            let val = JSON.parse(localStorage.getItem('user'));
            val.push(obj);
            localStorage.setItem('user',JSON.stringify(val));
        }

        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('password').value = "";
        document.getElementById('cpassword').value = "";

        window.location.href = "login.html"
    }else{
        alert("Password must be same.");
    }
}