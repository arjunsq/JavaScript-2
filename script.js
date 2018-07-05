
var abc = [];

function checkLength(formname,id,minLengt,maxLengt)
{
	x=document.forms[formname][id].value;
	if ((x.length>=minLengt) && (x.length<=maxLengt))
	{
		return true;
	}
	else
	{
		return false;
	}
}




//

// VALIDATE SIGN UP

//
function validatesignup()
{

  //name check

  document.getElementById("vname").innerHTML='';
  var v=checkLength("signup","name",1,20);
  var letters = /^[A-Za-z]+$/;
  if(!(document.forms["signup"]["name"].value)=='')
  {
  	if(document.forms["signup"]["name"].value.match(letters))
  	{
  		if(v == true)
  		{
  			signup1=true;
  		}
  		else
  		{
  			document.getElementById("vname").innerHTML='Name must have minimum of 1 and maximum of 20 letters';
  			signup1=false;
  		}
  	}
  	else
  	{
  		document.getElementById("vname").innerHTML='Please input alphabet characters only';
  		signup1=false;
  	}
  }
  else
  {
   	document.getElementById("vname").innerHTML='Please enter a name';
    signup1=false;
  }


  //email check
  document.getElementById("vmail").innerHTML='';
  if((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.forms["signup"]["email"].value)) && (!((document.forms["signup"]["email"].value)=='')))
  {
  	signup2=true;
  }
  else
  {
  	document.getElementById("vmail").innerHTML='Please enter a valid mail id';
  	signup2=false;
  }

  //password check
  document.getElementById("vpass").innerHTML='';
  var w=checkLength("signup","password",6,15);
  if(!(document.forms["signup"]["password"].value)=='')
  {
	if(	w == true)
  	{
  		signup3=true;
  	}
  	else
  	{
  		document.getElementById("vpass").innerHTML='Password must have minimum of 6 and maximum of 15 characters';
  		signup3=false;
  	}
  	
  }
  else
  {
   	document.getElementById("vpass").innerHTML='Please enter a password';
    signup3=false;
  }

  if(signup1 && signup2 && signup3)
  {
    if(typeof(Storage) !== "undefined") 
    {

          var getName = document.getElementById('name').value;
          var getMailid = document.getElementById('email').value;
          var getPasword = document.getElementById('password').value;

          localStorage.resultname = getName;
          localStorage.resultMail = getMailid;
          localStorage.resultPassword = getPasword;


          user = {
            name: getName,
            email: getMailid,
            password: getPasword
          };
          if (localStorage.firstentry)
          {
            abc = JSON.parse(localStorage["abc"]);
          }
          //user=JSON.stringify(user);
          //
          //abc = JSON.parse(localStorage["abc"]);
          abc.push(user);
          localStorage.setItem("abc",JSON.stringify(abc));

          localStorage.firstentry += 1;

          

    } 
    else 
    {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }
}


//

// VALIDATE LOGIN

//



function validatelogin()
{
  //email check
  document.getElementById("userid").innerHTML='';
  if((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.forms["login"]["user"].value)) && (!((document.forms["login"]["user"].value)=='')))
  {
  	login1=true;
  }
  else
  {
  	document.getElementById("userid").innerHTML='Please enter a valid User ID';
  	login1=false;
  }

  //password check login
  document.getElementById("pass").innerHTML='';
  if(!(document.forms["login"]["pwd"].value)=='')
  {
  	login2=true;
  }
  else
  {
   	document.getElementById("pass").innerHTML='Please enter a password';
    login2=false;
  }
  if (login1 && login2)
  {
    abc = JSON.parse(localStorage["abc"]);
    valid=0;
    for(var i=0;i<abc.length;i++)
    {
      var checkmail =JSON.parse(localStorage["abc"])[i].email;
      var checkpassword =JSON.parse(localStorage["abc"])[i].password;
      //alert(checkmail+":"+checkpassword+":"+i+document.getElementById("user").value+":"+document.getElementById("pwd").value);
      if ((checkmail==document.getElementById("user").value) && (checkpassword==document.getElementById("pwd").value))
      {
        valid=1;
        break;
      }

    }

    if(valid==1)
    {
      contactpage();
    }
    else
    {
      document.getElementById("result").innerHTML = "Invalid login credentials.";
    }
    
  }
}

//

// VALIDATE CONTACT US

//

function validatecontact()
{
  
  //name check contact
  document.getElementById("vcuser").innerHTML='';
  var y=checkLength("contact","cuser",3,20);
  var letters = /^[A-Za-z]+$/;
  if(!(document.forms["contact"]["cuser"].value)=='')
  {
  	if(document.forms["contact"]["cuser"].value.match(letters))
  	{
  		if(y == true)
  		{
  			contact1=true;
  		}
  		else
  		{
  			document.getElementById("vcuser").innerHTML='Name must have minimum of 3 and maximum of 20 letters';
  			contact1=false;
  		}
  	}
  	else
  	{
  		document.getElementById("vcuser").innerHTML='Please input alphabet characters only';
  		contact1=false;
  	}
  }
  else
  {
   	document.getElementById("vcuser").innerHTML='Please enter a name';
    contact1=false;
  }

  //email check
  document.getElementById("vcmail").innerHTML='';
  if((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.forms["contact"]["cmail"].value)) && (!((document.forms["contact"]["cmail"].value)=='')))
  {
  	contact2=true;
  }
  else
  {
  	document.getElementById("vcmail").innerHTML='Please enter a valid mail id';
  	contact2=false;
  }

  //phone check
  document.getElementById("vphone").innerHTML='';
  if((/^\d{10}$/.test(document.forms["contact"]["phone"].value)) && (!((document.forms["contact"]["phone"].value)=='')))
  {
  	contact3=true;
  }
  else
  {
  	document.getElementById("vphone").innerHTML='Please enter a valid contact number';
  	contact3=false;
  }

    //password check
  document.getElementById("vcomment").innerHTML='';
  var z=checkLength("contact","comment",1,200);
  if(!(document.forms["contact"]["comment"].value)=='')
  {
	if(	z == true)
  	{
  		contact4=true;
  	}
  	else
  	{
  		document.getElementById("vcomment").innerHTML='Question must have minimum of 1 and maximum of 200 characters';
  		contact4=false;
  	}
  	
  }
  else
  {
   	document.getElementById("vcomment").innerHTML='Please enter a message';
    contact4=false;
  }


  if( contact1 && contact2 && contact3 && contact4)
  {
  	API (cuser,cmail,phone,comment);
  	return true;
  }

}

//API DATA TRANSFER AND API RESPONSE

function API (cuser,cmail,phone,comment){
    var params = {
        cuser:cuser,
        cmail:cmail,
        phone:phone,
        comment:comment
    }
    var http = new XMLHttpRequest()
    http.open('POST','http://demo6835492.mockable.io/sendEmail')
    http.setRequestHeader('Content-type', 'application/json')
    http.send(JSON.stringify(params))
    http.onload = function() 
    {
        alert(http.responseText);
    }
}

// loading signup
function signuppage() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "signup.html", true);
  xhttp.send();
}

//loading contact page
function contactpage() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "contact.html", true);
  xhttp.send();
}