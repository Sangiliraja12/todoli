function validate1(){
    var email = document.getElementById('ema').value;
    var password = document.getElementById('pass').value;
    
      
         var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
           if (!regEmail.test(email)) {
            window.alert("Please enter a valid e-mail address.");
            return false;
        }
    
        if(password.length > 8 || password.length < 8 ){
            window.alert("password must be of 8 charcter");
            return false;
        }
    

        }
        alert("Succucessfully register")
        return true;
    }