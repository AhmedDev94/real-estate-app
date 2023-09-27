function signup() {
  var usersTab=JSON.parse(localStorage.getItem("users") || "[]") ;
      // RECUPERATION DES DONNES
      var firstName = document.getElementById("firstName").value;
      var isValidFirstName = checklength(firstName,4);
      if (isValidFirstName == false) {
        document.getElementById("firstNameError").innerHTML="please check your first name"      
      }
      else {document.getElementById("firstNameError").innerHTML=""}

  
      var lastName = document.getElementById("LastName").value;
      var isValidLastName = checklength(lastName,4);
      if (isValidLastName == false) {
        document.getElementById("lastNameError").innerHTML="please check your last name"      
      }
      else {document.getElementById("lastNameError").innerHTML=""}
      

      var email = document.getElementById("email").value;
      var isValidEmail =  verif(email);
      if (isValidEmail) { document.getElementById("userFound").innerHTML=""
      }
      else{document.getElementById("userFound").innerHTML="email already exist pls try another email"}
       

      var telephone = document.getElementById("Telephone").value;
      var isValidTel =  verifTel(telephone);
      if (isValidTel) { document.getElementById("telError").innerHTML=""
      }
      else{document.getElementById("telError").innerHTML="Pls check your phone  number"}

      var Adresse = document.getElementById("Adresse").value;
      var isValidAdresse =  verifAdresse(Adresse);
      if (isValidAdresse) { document.getElementById("AdresseError").innerHTML=""
      }
      else{document.getElementById("AdresseError").innerHTML="Pls type an Adresse"}
       
      var password = document.getElementById("pwd").value;
      var isValidpwd = checklength(password,8);
      if (isValidpwd == false) {
        document.getElementById("pwdError").innerHTML="please check your password"      
      }
      else {document.getElementById("pwdError").innerHTML=""}
    
  
      var confirmPwd= document.getElementById("confpwd").value;
      var isValidconfirmpwd = confirm(password,confirmPwd);
      if (isValidconfirmpwd == false) {
        document.getElementById("confPwdError").innerHTML="please check your password confirmation"      
      }
      else {document.getElementById("confPwdError").innerHTML=""}
      console.log(isValidEmail)
        // CETTE ASTUCE POUR CONFIRMER LE SAUVEGARDE
         if (isValidFirstName && isValidLastName && isValidpwd && isValidconfirmpwd && isValidEmail &&isValidTel && isValidAdresse) {
        // creation d un objet user 
      var user = {
          id : newId(usersTab) +1,
          fName :  firstName ,
          lName : lastName ,
          mail : email ,
          tel : telephone,
          Adresse :Adresse,
          role : "client",
          pwd : password ,
      }
      // sauvegarde dans le list
     var usersTab=JSON.parse(localStorage.getItem("users") || "[]") ;
     usersTab.push(user);
     localStorage.setItem("users",JSON.stringify(usersTab));
  }
  location.reload();
  }
  // LES VALIDATEURS
  function checklength(ch,x) {
    return(ch.length>=x);
  }
  function confirm(ch1 , ch2) {
    return (ch1 === ch2) ;  
}
function verif(ch){
    var usersTab=JSON.parse(localStorage.getItem("users") || "[]") ;
    for (let i = 0; i < usersTab.length; i++) {
        if ( ch == usersTab[i].mail ) {return false}
        }
        return true
  }
  function verifTel(X){
    var usersTab=JSON.parse(localStorage.getItem("users") || "[]") ;
    for (let i = 0; i < usersTab.length; i++) {
        if ( X == usersTab[i].tel && X.length<8 ) {return false}
        
        }
        return true
  }
  function verifAdresse (ch){
    
    return(ch!=0)
  }
  function newId(T) {
    var max ;
    if (T.length == 0) {
      max=1;
    } else {
     max = T[0].id;
    
      for (let i = 1; i < T.length; i++) {
        if ( T[i].id > max) {
          max = T[i].id;
        }
      }
      
      
    }
    return max ;
  }
  // FIN VALIDATEURS
  function signupOwner() {
    var usersTab=JSON.parse(localStorage.getItem("users") || "[]") ;
        // RECUPERATION DES DONNES
        var firstName = document.getElementById("firstName").value;
        var isValidFirstName = checklength(firstName,4);
        if (isValidFirstName == false) {
          document.getElementById("firstNameError").innerHTML="please check your first name"      
        }
        else {document.getElementById("firstNameError").innerHTML=""}
  
    
        var lastName = document.getElementById("LastName").value;
        var isValidLastName = checklength(lastName,4);
        if (isValidLastName == false) {
          document.getElementById("lastNameError").innerHTML="please check your last name"      
        }
        else {document.getElementById("lastNameError").innerHTML=""}
        
  
        var email = document.getElementById("email").value;
        var isValidEmail =  verif(email);
        if (isValidEmail) { document.getElementById("userFound").innerHTML=""
        }
        else{document.getElementById("userFound").innerHTML="email already exist pls try another email"}
         
  
        var telephone = document.getElementById("Telephone").value;
        var isValidTel =  verifTel(telephone);
        if (isValidTel) { document.getElementById("telError").innerHTML=""
        }
        else{document.getElementById("telError").innerHTML="Pls check your phone  number"}
  
        var Adresse = document.getElementById("Adresse").value;
        var isValidAdresse =  verifAdresse(Adresse);
        if (isValidAdresse) { document.getElementById("AdresseError").innerHTML=""
        }
        else{document.getElementById("AdresseError").innerHTML="Pls type an Adresse"}
         
        var password = document.getElementById("pwd").value;
        var isValidpwd = checklength(password,8);
        if (isValidpwd == false) {
          document.getElementById("pwdError").innerHTML="please check your password"      
        }
        else {document.getElementById("pwdError").innerHTML=""}
      
    
        var confirmPwd= document.getElementById("confpwd").value;
        var isValidconfirmpwd = confirm(password,confirmPwd);
        if (isValidconfirmpwd == false) {
          document.getElementById("confPwdError").innerHTML="please check your password confirmation"      
        }
        else {document.getElementById("confPwdError").innerHTML=""}
        console.log(isValidEmail)
          // CETTE ASTUCE POUR CONFIRMER LE SAUVEGARDE
           if (isValidFirstName && isValidLastName && isValidpwd && isValidconfirmpwd && isValidEmail &&isValidTel && isValidAdresse) {
          // creation d un objet user 
        var user = {
            id : newId(usersTab) +1,
            fName :  firstName ,
            lName : lastName ,
            mail : email ,
            tel : telephone,
            Adresse :Adresse,
            role : "owner",
            statut : "nok",
            pwd : password ,
            confirmPwd : confirmPwd ,
        }
        // sauvegarde dans le list
       var usersTab=JSON.parse(localStorage.getItem("users") || "[]") ;
       usersTab.push(user);
       localStorage.setItem("users",JSON.stringify(usersTab));
       location.reload();
    }
    }
  function signupAdmin() {
      var usersTab=JSON.parse(localStorage.getItem("users") || "[]") ;
          // RECUPERATION DES DONNES
          var firstName = document.getElementById("firstName").value;
          var isValidFirstName = checklength(firstName,4);
          if (isValidFirstName == false) {
            document.getElementById("firstNameError").innerHTML="please check your first name"      
          }
          else {document.getElementById("firstNameError").innerHTML=""}
    
      
          var lastName = document.getElementById("LastName").value;
          var isValidLastName = checklength(lastName,4);
          if (isValidLastName == false) {
            document.getElementById("lastNameError").innerHTML="please check your last name"      
          }
          else {document.getElementById("lastNameError").innerHTML=""}
          
    
          var email = document.getElementById("email").value;
          var isValidEmail =  verif(email);
          if (isValidEmail) { document.getElementById("userFound").innerHTML=""
          }
          else{document.getElementById("userFound").innerHTML="email already exist pls try another email"}
           
    
          var telephone = document.getElementById("Telephone").value;
          var isValidTel =  verifTel(telephone);
          if (isValidTel) { document.getElementById("telError").innerHTML=""
          }
          else{document.getElementById("telError").innerHTML="Pls check your phone  number"}
    
          var Adresse = document.getElementById("Adresse").value;
          var isValidAdresse =  verifAdresse(Adresse);
          if (isValidAdresse) { document.getElementById("AdresseError").innerHTML=""
          }
          else{document.getElementById("AdresseError").innerHTML="Pls type an Adresse"}
           
          var password = document.getElementById("pwd").value;
          var isValidpwd = checklength(password,8);
          if (isValidpwd == false) {
            document.getElementById("pwdError").innerHTML="please check your password"      
          }
          else {document.getElementById("pwdError").innerHTML=""}
        
      
          var confirmPwd= document.getElementById("confpwd").value;
          var isValidconfirmpwd = confirm(password,confirmPwd);
          if (isValidconfirmpwd == false) {
            document.getElementById("confPwdError").innerHTML="please check your password confirmation"      
          }
          else {document.getElementById("confPwdError").innerHTML=""}
          console.log(isValidEmail)
            // CETTE ASTUCE POUR CONFIRMER LE SAUVEGARDE
             if (isValidFirstName && isValidLastName && isValidpwd && isValidconfirmpwd && isValidEmail &&isValidTel && isValidAdresse) {
            // creation d un objet user 
          var user = {
              id : newId(usersTab) +1,
              fName :  firstName ,
              lName : lastName ,
              mail : email ,
              tel : telephone,
              Adresse :Adresse,
              role : "Admin",
              pwd : password ,
              confirmPwd : confirmPwd ,
          }
          // sauvegarde dans le list
         var usersTab=JSON.parse(localStorage.getItem("users") || "[]") ;
         usersTab.push(user);
         localStorage.setItem("users",JSON.stringify(usersTab));
         location.reload();
      }
      }
  function login(){
        var email = document.getElementById("logemail").value;
        var pwd = document.getElementById("logpass").value;
        var findeUser ;
        var isValidUser = document.getElementById("userNotFound");
        var usersTab=JSON.parse(localStorage.getItem("users") || "[]") ;
    for (let i = 0; i < usersTab.length; i++) {
        if ( email == usersTab[i].mail && pwd == usersTab[i].pwd)  { 
            findeUser=usersTab[i]
            break;
        }
       
    }
    if (findeUser) {
      if (findeUser.role=="owner" && findeUser.statut == "nok") {
        isValidUser.innerHTML="en cours de validation"     
      }
      else if (findeUser.role=="owner" && findeUser.statut == "ok"){
        localStorage.setItem ("connectedUserID",findeUser.id);
        location.replace("owners dashbord project.html");
        isValidUser.innerHTML="";
        
      }
      else {
        localStorage.setItem ("connectedUserID",findeUser.id)
        location.replace("All Propretys project.html");
        isValidUser.innerHTML="";
      }
    }
    else {isValidUser.innerHTML="user not found please try again" }
    }
    function propretyId(id) {
      localStorage.setItem("id",id);
       location.replace("single proprety project.html"); 
    }
    function addProprety(){
      var ownerId = localStorage.getItem("connectedUserID")
    /////// RECUPERER LES DONNES
        var propretysTab = JSON.parse(localStorage.getItem("propretys") || "[]");
        var prName = document.getElementById("prName").value;
        var isValidname = checklength(prName,2);
    if (isValidname) {document.getElementById("prNameError").innerHTML=""        
    }
    else {document.getElementById("prNameError").innerHTML="please check your name"}
    //////////

        var prStatut = document.getElementById("statut").value;
        var isValidStatut = validateSelect(prStatut) ;
        if (isValidStatut) {document.getElementById("prStatutError").innerHTML=""
            
    }
    else {document.getElementById("prStatutError").innerHTML="please select a status"}
 
    var prCity = document.getElementById("prCity").value;
    var isValidCity = validateSelect(prCity) ;
    if (isValidCity) {document.getElementById("prCityError").innerHTML=""
        
}
else {document.getElementById("prCityError").innerHTML="please select a city"}
//////////
var prDescription = document.getElementById("prDescription").value;
var isValidDescription = checklength(prDescription,10);
if (isValidDescription) {document.getElementById("prDescriptionError").innerHTML=""        
}
else {document.getElementById("prDescriptionError").innerHTML="please Add more text to your Description"}
        
     if ( isValidStatut && isValidname && isValidCity&& isValidDescription  ) {
      
     // LA PARTIE SAUVEGARDE DANS LE LOCAL STORAGE
         var newProprety = {
            id : newId(propretysTab) +1,
            prName : prName ,
            prStatut : prStatut,
            prCity : prCity,
            prDescription :prDescription,
            ownerId : ownerId,
            NbrRooms : 0,
         }
    
         console.log(newProprety);
       
         propretysTab.push(newProprety);
         localStorage.setItem("propretys",JSON.stringify(propretysTab));
         location.replace("All Propretys project.html");
    }
  }
  function validateSelect(ch){
    return (ch!="")
  }
  function number(ch , x) {
    return(Number(ch)>x)
 }
 function displayPropretys() {
  var propretysTab = JSON.parse(localStorage.getItem("propretys") || "[]");
  var content ="";
  for (let i = 0; i < propretysTab.length; i++) {
      content = content + ` <div class="col-sm-6 col-md-4 p0">
      <div class="box-two proerty-item">
          <div class="item-thumb">
              <a  ><img src="assets/img/demo/property-3.jpg"></a>
          </div>

          <div class="item-entry overflow">
              <h5><a > ${propretysTab[i].prName} </a></h5>
              <div class="dot-hr"></div>
              <span class="pull-left"><b> city :</b> ${propretysTab[i].prCity} </span>
              <span class="proerty-price pull-right"> ${propretysTab[i].prStatut}</span>
              <p style="display: none;">Suspendisse ultricies Suspendisse ultricies Nulla quis dapibus nisl. Suspendisse ultricies commodo arcu nec pretium ...</p>
              <div class="property-icon">
                  <img src="assets/img/icon/bed.png">(5)|
                  <img src="assets/img/icon/shawer.png">(2)|
                  <img src="assets/img/icon/cars.png">(1) 
                  <button class="btn btn-primary" onclick ="propretyToDisplay(${propretysTab[i].id})"> display proprety </button> 
              </div>
          </div>


      </div>
  </div>`
        
    
  }
  document.getElementById("list-type").innerHTML=content ;
}
function propretyToDisplay(id) {
localStorage.setItem("id",id);
location.replace("single proprety project.html");
}
function displaySingleOwner(){
  var id = localStorage.getItem("id");
  var proprety = searchObjByIdAndKey("propretys",id);
  var x = proprety.ownerId;
  let user ;
  var T = JSON.parse(localStorage.getItem("users") || "[]");
  for (let i = 0; i < T.length; i++) {
    if (T[i].id==x) { user = T[i]
      
    }
    
  }
  document.getElementById("insert2").innerHTML =`<div class="inner-wrapper">

  <div class="clear">
      <div class="col-xs-4 col-sm-4 dealer-face">
          <a href="">
              <img src="assets/img/client-face1.png" class="img-circle">
          </a>
      </div>
      <div class="col-xs-8 col-sm-8 ">
          <h3 class="dealer-name">
              <a href="">${user.fName}  ${user.lName}</a>
              <br>
              <span>REAL ESTATE OWNER </span>        
          </h3>
          <div class="dealer-social-media">
              <a class="twitter" target="_blank" href="">
                  <i class="fa fa-twitter"></i>
              </a>
              <a class="facebook" target="_blank" href="">
                  <i class="fa fa-facebook"></i>
              </a>
              <a class="gplus" target="_blank" href="">
                  <i class="fa fa-google-plus"></i>
              </a>
              <a class="linkedin" target="_blank" href="">
                  <i class="fa fa-linkedin"></i>
              </a> 
              <a class="instagram" target="_blank" href="">
                  <i class="fa fa-instagram"></i>
              </a>       
          </div>
  
      </div>
  </div>
  
  <div class="clear">
      <ul class="dealer-contacts">                                       
          <li><i class="pe-7s-map-marker strong"> </i> ${user.Adresse}</li>
          <li><i class="pe-7s-mail strong"> </i> ${user.mail}</li>
          <li><i class="pe-7s-call strong"> </i> ${user.tel}</li>
      </ul>
     
  </div>
  
  </div> `
}
function displaySingleProprety() {
  var x = localStorage.getItem("id");
  
  let proprety;
 
  var t = JSON.parse(localStorage.getItem("propretys") || "[]");
  
  for (let i = 0; i < t.length; i++) {
    if (t[i].id == x) {
      proprety = t[i];
      break;
    }
  }
  
  document.getElementById("insert").innerHTML = `
         <div class="single-property-wrapper">
        <div class="single-property-header">                                          
            <h1 class="property-title pull-left">${proprety.prName}</h1>
            <span class="property-price pull-right">${proprety.prStatut}</span>
        </div>
        <div class="section">
            <h4 class="s-property-title">Description</h4>
            <div class="s-property-content">
                <p>  ${proprety.prDescription}  </p>
            </div>
        </div>

      
    

</div>`;

}
function ownerPropretys() {
  var propretysTab = JSON.parse(localStorage.getItem("propretys") || "[]");
  x= localStorage.getItem("connectedUserID");
  var proprety ;
  var contenu="";
for (let i = 0; i < propretysTab.length; i++) {
  if (propretysTab[i].ownerId==x) {
    
  proprety = propretysTab[i];
    contenu = contenu + `
    <tr>
    <td>
    <h5>
    ${proprety.id}
   </h5>
    </td>
    <td>
        <h5>
          <p id="productName"> ${proprety.prName}</p>
         </h5>
        </div>
      </div>
    </td>
    <td>
      <h5> ${proprety.prCity}</h5>
    </td>
    <td>
      <div>
        <h5 id="productStock"> ${proprety.prDescription}</h5>
      </div>
    </td>
    <td>
    <h5>
    ${proprety.prStatut}  
    </h5>       
     </td>
     <td>
     <h5>
     ${proprety.NbrRooms}  
     </h5>       
      </td>
    <td>
    <button class="btn btn-warning" onclick=" propretyToDisplay(${proprety.id})">display</button>
    <button class="btn btn-danger"  onclick="delet('propretys',${i})">Delete</button>
    <button class="btn btn-warning" onclick=" roomToAdd(${proprety.id})">Add room </button>
    </td>
   
  </tr>
`

}

  }
document.getElementById("block").innerHTML=contenu; 

}
function delet (key,index){
  var roomsTab = JSON.parse(localStorage.getItem('rooms') || '[]');
  var T=JSON.parse(localStorage.getItem(key)|| '[]');
  if (key == 'propretys')
   {for (let i = roomsTab.length - 1; i >= 0; i--) {
    if (roomsTab[i].propretyId==T[index].id ) {
      roomsTab.splice(i, 1);
      localStorage.setItem('rooms', JSON.stringify(roomsTab));
     
    }

  }
  location.reload(); 
  }
 
  T.splice(index, 1);
  localStorage.setItem(key, JSON.stringify(T));
  location.reload();
}

function addRoom(){
  var propretysTab = JSON.parse(localStorage.getItem("propretys") || "[]");
  var ownerId = localStorage.getItem("connectedUserID");
  var propretyId = localStorage.getItem("id");
/////// RECUPERER LES DONNES
    var roomsTab = JSON.parse(localStorage.getItem("rooms") || "[]");
    var roomName = document.getElementById("roomName").value;
    var isValidname = checklength(roomName,2);
if (isValidname) {document.getElementById("roomNameError").innerHTML=""        
}
else {document.getElementById("roomNameError").innerHTML="please check your room name"}
//

var roomArea = document.getElementById("roomArea").value;
//
var roomCapacity = document.getElementById("roomCapacity").value;
var isValidCapacity = number(roomCapacity,0);
if (isValidCapacity) {document.getElementById("roomCapacityError").innerHTML=""        
}
else {document.getElementById("roomCapacityError").innerHTML="invalid Capacity"}
//
var roomPrice = document.getElementById("roomPrice").value;
var isValidPrice = number(roomPrice,10);
if (isValidPrice) {document.getElementById("roomPriceError").innerHTML=""        
}
else {document.getElementById("roomPriceError").innerHTML="invalid price"}
//
   
var roomDescription = document.getElementById("roomDescription").value;
var isValidDescription = checklength(roomDescription,10);
if (isValidDescription) {document.getElementById("roomDescriptionError").innerHTML=""        
}
else {document.getElementById("roomDescriptionError").innerHTML="please Add more text to your Description"}
    
 if (  isValidname && isValidDescription && isValidPrice && isValidCapacity) {
  
 // LA PARTIE SAUVEGARDE DANS LE LOCAL STORAGE
     var newRoom = {
        id : newId(roomsTab) +1,
        propretyId:propretyId ,
        ownerId : ownerId,
        roomCapacity : roomCapacity,
        roomName : roomName ,
        roomArea: roomArea,
        roomPrice : roomPrice,
        roomDescription :roomDescription,
     }

  
   
     roomsTab.push(newRoom);
     localStorage.setItem("rooms",JSON.stringify(roomsTab));
     for (let i = 0; i< propretysTab.length; i++) {
      if (propretysTab[i].id== propretyId) {
        propretysTab[i].NbrRooms = NbrRooms();
        break;
        
      }
      
     }
     localStorage.setItem("propretys",JSON.stringify(propretysTab));
}
location.replace("All Propretys project.html");
}  
function roomToAdd (id) {
  localStorage.setItem("id",id);
  var property = searchObjByIdAndKey('propretys',id)
  if (property.NbrRooms<5) {
    location.replace("Add rooms project.html");
  }
   else{alert("you can't add more rooms")}
    }
function NbrRooms() {
  var roomsTab  = JSON.parse(localStorage.getItem("rooms")||"[]") ;
  var x = localStorage.getItem("id");
  var nbr = 0;
  for (let i = 0; i < roomsTab.length; i++) {
    if (roomsTab[i].propretyId== x) {
      nbr++
    }
  }
  return nbr ;
}
function searchObjByIdAndKey(key,id) {
  var T=JSON.parse(localStorage.getItem(key)|| '[]');
  var findedObj;
  for (let i = 0; i < T.length; i++) {
    if (T[i].id==id){
      findedObj=T[i];
      break;

    }
    
  }
  return findedObj;
}
function searchIndex(key,id) {
  var T=JSON.parse(localStorage.getItem(key) || '[]');
  var index;
  for (let i = 0; i < T.length; i++) {
      if(T[i].id==id){
       index=i;
       break;
      }
  }
  return index;
}
function adminAllPropretys() {
var propretysTab = JSON.parse(localStorage.getItem("propretys") || "[]");
var proprety;
var contenu="";
for (let i = 0; i < propretysTab.length; i++) {

  proprety = propretysTab[i];
  contenu = contenu + `
  <tr>
  <td>
  <h5>
  ${proprety.id}
 </h5>
  </td>
  <td>
      <h5>
        <p id="productName"> ${proprety.prName}</p>
       </h5>
      </div>
    </div>
  </td>
  <td>
    <h5> ${proprety.prCity}</h5>
  </td>
  <td>
    <div>
      <h5 id="productStock"> ${proprety.prDescription}</h5>
    </div>
  </td>
  <td>
  <h5>
  ${proprety.prStatut}  
  </h5>       
   </td>
   <td>
   <h5>
   ${proprety.NbrRooms}  
   </h5>       
    </td>
  <td>
  <button class="btn btn-warning" onclick=" propretyToDisplay(${proprety.id})">display</button>
  <button class="btn btn-danger"  onclick="delet('propretys',${i})">Delete</button>
  </td>
  <td>
  <button class="btn btn-warning" onclick=" roomToAdd(${proprety.id})">Add room </button>
  <button class="btn btn-primary" onclick="updateProprety(${proprety.id})">update</button>
  </td>
 
</tr>
`
}
document.getElementById("block2").innerHTML=contenu;  
}
  function adminUsers(){
    var usersTab =JSON.parse(localStorage.getItem("users") || "[]") ;
    var contenu="";
    var isdisplay = false ;
  for (let i = 0; i < usersTab.length; i++) {
    isdisplay = (usersTab[i].role == "owner" && usersTab[i].statut=="nok") 
    console.log(isdisplay);
    if (isdisplay) {
     contenu = contenu + `
      <tr>
      <td>
      <h5>
      ${usersTab[i].id}
     </h5>
      </td>
      <td>
          
          <h5>
            <p >${usersTab[i].fName}</p>
           </h5>
          </div>
        </div>
      </td>
      <td>
        <h5>${usersTab[i].lName}$</h5>
      </td>
      <td>
        <div>
          <h5 >${usersTab[i].mail}</h5>
        </div>
      </td>
      <td>
      <h5>
      ${usersTab[i].pwd}  
      </h5>       
       </td>
       <td>
       <h5>
       ${usersTab[i].role}  
       </h5>       
        </td>
        <td>
        <h5>
        ${usersTab[i].statut}  
        </h5>       
         </td>
         <td>
        <h5>
        ${usersTab[i].tel}  
        </h5>       
         </td>
         <td>
        <h5>
        ${usersTab[i].Adresse}  
        </h5>       
         </td>
      <td>
      <button class="btn btn-warning" onclick="updateUser(${usersTab[i].id})">Update</button>
      <button class="btn btn-primary" onclick="validateOwner(${i})">validate</button>
      <button class="btn btn-danger"  onclick="delet('users',${i})">Delete</button>
      </td>
    
    </tr>
  `
    }
    
    else {
      contenu = contenu + `
      <tr>
      <td>
      <h5>
      ${usersTab[i].id}
     </h5>
      </td>
      <td>
          <div class="media-body">
          <h5>
            <p id="productName">${usersTab[i].fName}</p>
           </h5>
          </div>
        </div>
      </td>
      <td>
        <h5>${usersTab[i].lName}$</h5>
      </td>
      <td>
        <div>
          <h5 id="productStock">${usersTab[i].mail}</h5>
        </div>
      </td>
      <td>
      <h5>
      ${usersTab[i].pwd}  
      </h5>       
       </td>
       <td>
       <h5>
       ${usersTab[i].role}  
       </h5>       
        </td>
        <td>
        <h5>
        ${usersTab[i].statut}  
        </h5>       
         </td>
         <td>
        <h5>
        ${usersTab[i].tel}  
        </h5>       
         </td>
         <td>
        <h5>
        ${usersTab[i].Adresse}  
        </h5>       
         </td>
      <td>
      <button class="btn btn-warning" onclick="updateUser(${usersTab[i].id})">Update</button>
      <button class="btn btn-danger"  onclick="delet('users',${i})" >Delete</button>
      </td>
    
    </tr>
  `
    }
    }
  document.getElementById("block1").innerHTML=contenu;  
}
function updateProprety(id){

  var property = searchObjByIdAndKey("propretys",id)
  var content = 
  ` <div class="row login_form">
    <div class="col-md-4"></div>
    <div class="col-md-4">
    <div class=" form-group">
   <div>
      <input
        type="text"
        class="form-control"
        id="upName"
        name="Name"
        value="${property.prName }"
      />
    </div>
    <div>
      <input
        type="text"
        class="form-control"
        id="upCity"
        name="Name"
        value="${property.prCity }"
      />
    </div>
    <div>
      <input
        type="text"
        class="form-control"
        id="upDescription"
        name="Name"
        value="${property.prDescription}"
      />
    </div>
    <div class=" form-group">
      <input
        type="text"
        class="form-control"
        id="upStatut"
        name="name"
        value="${property.prStatut }"
      />
    </div>
    
    </div>
    
    <div class=" form-group">
        <button type="submit" value="submit" class="btn" style="background-color: rgb(62, 180, 196);" onclick="validateUpdate(${id})">validate</button>
    </div>
    </div>
  </div>` ;
document.getElementById("updateProd").innerHTML=content;
}
function validateUpdate(id) {
  var newName=document.getElementById("upName").value;
  var newCity = document.getElementById("upCity").value;
  var newDescription = document.getElementById("upDescription").value;
  var newStatut = document.getElementById("upStatut").value;
  var newNbrRooms = document.getElementById("upNbrRooms").value;
  var propretysTab = JSON.parse(localStorage.getItem("propretys"));
  var index = searchIndex("propretys",id);
  propretysTab[index].prName = newName;
  propretysTab[index].prCity = newCity;
  propretysTab[index].prDescription = newDescription;
  propretysTab[index].prStatut = newStatut;
  propretysTab[index].NbrRooms = newNbrRooms;
  localStorage.setItem("propretys",JSON.stringify(propretysTab));
  location.reload();
}
function rooms (){
  var contenu = "";
  var id = localStorage.getItem('id');
  var roomsTab = JSON.parse(localStorage.getItem('rooms')||'[]');
  for (let i = 0; i < roomsTab.length; i++) {
   if (roomsTab[i].propretyId == id) {
    contenu = contenu + ` <tr>
    <td>
    <h5>
    ${roomsTab[i].roomName}
   </h5>
    </td>
    <td>
        <h5>
          <p id="productName"> ${roomsTab[i].roomCapacity}</p>
         </h5>
        </div>
      </div>
    </td>
    <td>
    <button class="btn btn-warning" onclick=" roomToDisplay(${roomsTab[i].id})">display</button>
    </td>
   
  </tr>`
    
   } 
    
  }
 document.getElementById('rooms').innerHTML=contenu;
}
function roomToDisplay(id) {
  localStorage.setItem("Roomid",id);
  location.replace("single room project.html");
  }
function displayRoom (){
  var id = localStorage.getItem("Roomid");
  var x = searchObjByIdAndKey("rooms",id);
  var content = `<div class="content-area blog-page padding-top-40" style="background-color: #FCFCFC; padding-bottom: 55px;">
  <div class="container">   
      <div class="row">
          <div class="blog-lst col-md-12 pl0">
              <section class="post">
                  <div class="text-center padding-b-50">
                      <h2 class="wow fadeInLeft animated">${x.roomName} </h2>
                      <div class="title-line wow fadeInRight animated"></div>
                  </div>

                  
                  <div class="image wow fadeInLeft animated">
                      <a href="single.html">
                          <img src="assets/img/property-1/property4.jpg" class="img-responsive" alt="Example blog post alt">
                      </a>
                  </div>
                  
                  <p class="intro">${x.roomDescription}</p>
                  </p>
              </section>   


          </div>  
      </div>
     
      <div class = "row" id="bookNow">
          <button class="btn container-fluid  " style="background-color: aqua; " onclick="inputBooking()">
              Book Now
          </button>
      </div>
  </div>

<div class="property-meta entry-meta clearfix container">   

  <div class="col-xs-3 col-sm-3 col-md-3 p-b-15">
      <span class="property-info-icon icon-tag">
          
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48">
          <path class="meta-icon" fill-rule="evenodd" clip-rule="evenodd" fill="#FFA500" d="M47.199 24.176l-23.552-23.392c-.504-.502-1.174-.778-1.897-.778l-19.087.09c-.236.003-.469.038-.696.1l-.251.1-.166.069c-.319.152-.564.321-.766.529-.497.502-.781 1.196-.778 1.907l.092 19.124c.003.711.283 1.385.795 1.901l23.549 23.389c.221.218.482.393.779.523l.224.092c.26.092.519.145.78.155l.121.009h.012c.239-.003.476-.037.693-.098l.195-.076.2-.084c.315-.145.573-.319.791-.539l18.976-19.214c.507-.511.785-1.188.781-1.908-.003-.72-.287-1.394-.795-1.899zm-35.198-9.17c-1.657 0-3-1.345-3-3 0-1.657 1.343-3 3-3 1.656 0 2.999 1.343 2.999 3 0 1.656-1.343 3-2.999 3z"></path>
          </svg>
      </span>
      <span class="property-info-entry">
          
          <span class="property-info-label">price</span>
          <span class="property-info-value">${x.roomPrice} $</span>
      </span>
  </div>
  
  <div class="col-xs-3 col-sm-3 col-md-3 p-b-15">
      <span class="property-info icon-area">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48">
          <path class="meta-icon" fill="#FFA500" d="M46 16v-12c0-1.104-.896-2.001-2-2.001h-12c0-1.103-.896-1.999-2.002-1.999h-11.997c-1.105 0-2.001.896-2.001 1.999h-12c-1.104 0-2 .897-2 2.001v12c-1.104 0-2 .896-2 2v11.999c0 1.104.896 2 2 2v12.001c0 1.104.896 2 2 2h12c0 1.104.896 2 2.001 2h11.997c1.106 0 2.002-.896 2.002-2h12c1.104 0 2-.896 2-2v-12.001c1.104 0 2-.896 2-2v-11.999c0-1.104-.896-2-2-2zm-4.002 23.998c0 1.105-.895 2.002-2 2.002h-31.998c-1.105 0-2-.896-2-2.002v-31.999c0-1.104.895-1.999 2-1.999h31.998c1.105 0 2 .895 2 1.999v31.999zm-5.623-28.908c-.123-.051-.256-.078-.387-.078h-11.39c-.563 0-1.019.453-1.019 1.016 0 .562.456 1.017 1.019 1.017h8.935l-20.5 20.473v-8.926c0-.562-.455-1.017-1.018-1.017-.564 0-1.02.455-1.02 1.017v11.381c0 .562.455 1.016 1.02 1.016h11.39c.562 0 1.017-.454 1.017-1.016 0-.563-.455-1.019-1.017-1.019h-8.933l20.499-20.471v8.924c0 .563.452 1.018 1.018 1.018.561 0 1.016-.455 1.016-1.018v-11.379c0-.132-.025-.264-.076-.387-.107-.249-.304-.448-.554-.551z"></path>
          </svg>
      </span>
      <span class="property-info-entry">
          <span class="property-info-label">Room Area</span>
          <span class="property-info-value">${x.roomArea}<b class="property-info-unit">   M²</b></span>
      </span>
  </div>

  <div class="col-xs-3 col-sm-3 col-md-3 p-b-15">
      <span class="property-info-icon icon-bed">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48">
          <path class="meta-icon" fill="#FFA500" d="M21 48.001h-19c-1.104 0-2-.896-2-2v-31c0-1.104.896-2 2-2h19c1.106 0 2 .896 2 2v31c0 1.104-.895 2-2 2zm0-37.001h-19c-1.104 0-2-.895-2-1.999v-7.001c0-1.104.896-2 2-2h19c1.106 0 2 .896 2 2v7.001c0 1.104-.895 1.999-2 1.999zm25 37.001h-19c-1.104 0-2-.896-2-2v-31c0-1.104.896-2 2-2h19c1.104 0 2 .896 2 2v31c0 1.104-.896 2-2 2zm0-37.001h-19c-1.104 0-2-.895-2-1.999v-7.001c0-1.104.896-2 2-2h19c1.104 0 2 .896 2 2v7.001c0 1.104-.896 1.999-2 1.999z"></path>
          </svg>
      </span>
      <span class="property-info-entry">
          <span class="property-info-label">Room Capacity</span>
          <span class="property-info-value">${x.roomCapacity}</span>
      </span>
  </div>

  <div class="col-xs-3 col-sm-3 col-md-3 p-b-15">
      <span class="property-info-icon icon-bath">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48">
          <path class="meta-icon" fill="#FFA500" d="M37.003 48.016h-4v-3.002h-18v3.002h-4.001v-3.699c-4.66-1.65-8.002-6.083-8.002-11.305v-4.003h-3v-3h48.006v3h-3.001v4.003c0 5.223-3.343 9.655-8.002 11.305v3.699zm-30.002-24.008h-4.001v-17.005s0-7.003 8.001-7.003h1.004c.236 0 7.995.061 7.995 8.003l5.001 4h-14l5-4-.001.01.001-.009s.938-4.001-3.999-4.001h-1s-4 0-4 3v17.005000000000003h-.001z"></path>
          </svg>
      </span>
      
      <span class="property-info-entry">
          <span class="property-info-label">Bathrooms</span>
          <span class="property-info-value">1</span>
      </span>
      
  </div>
</div>
</div>`;
document.getElementById("displayRoom").innerHTML=content;
}

function ownerId (){
  var id = localStorage.getItem("Roomid");
  var x = searchObjByIdAndKey("rooms",id);
  console.log(x.ownerId);
  return  x.ownerId;
}
function inputBooking() {
  var content = 
  `<div class="row login_form">
  <div class="col-md-4"></div>
  <div class="col-md-4">
  <div class=" form-group">
 
  <div class=" form-group">
    <input
      placeholder="for how many ?"
      type="number"
      class="form-control"
      id="persons"
      name="name"
      value=""
    />
  </div>
  <div class=" form-group">
      <input
        placeholder="checkin date ?"
        type="date"
        class="form-control"
        id="checkin"
        name="name"
        value=""
      />
    </div>
    <div class=" form-group">
      <input
        placeholder="checkout date"
        type="date"
        class="form-control"
        id="checkout"
        name="name"
        value=""
      />
    </div>
    <span id="bookingError"></span>
  </div>
  
  <div class=" form-group">
      <button type="submit" value="submit" class="btn" style="background-color: rgb(62, 180, 196);" onclick="bookNow()">validate</button>
  </div>
  </div>
</div>`
 document.getElementById("bookNow").innerHTML=content
  
}
function bookNow() {
  var clientId = localStorage.getItem("connectedUserID");
  var roomId = localStorage.getItem("Roomid");
  var propretyId = localStorage.getItem("id");
  var bookingTab  = JSON.parse(localStorage.getItem('orders')||'[]');
  var checkIn = document.getElementById("checkin").value ;
  var checkOut = document.getElementById("checkout").value ;
  var persons=document.getElementById("persons").value;
  var x = searchObjByIdAndKey("rooms",roomId);
  var price = x.roomPrice ;
  var capacity =Number( x.roomCapacity);
  console.log(capacity);
  if (!clientId) {document.getElementById("bookingError").innerHTML= "u need to login before you book a room <a href=' login project.html'> login</a>"; 
  return;
  }
  if ( capacity<persons) {  document.getElementById("bookingError").innerHTML=" you exceeded the limit of room capacity ";
  return ; // Invalid booking capacity
    
  }
  if (checkIn >= checkOut) { document.getElementById("bookingError").innerHTML=" make sure the checkin date is before the checkout";
    return ; // Invalid booking dates
  }
  if (!validateBookingDates(checkIn, checkOut, bookingTab)) {
    document.getElementById("bookingError").innerHTML= "The selected dates overlap with a previous booking . Please choose different dates,  ";
    return;
  }
  
  var newOrder ={
    id : newId(bookingTab)+1,
    ownerId : ownerId()  ,
    propretyId : propretyId ,
    roomId :roomId  ,
    clientId : clientId  ,
    checkIn : checkIn,
    checkOut : checkOut,
    persons : persons,
    price : price ,
  }
  
 document.getElementById("bookingError").innerHTML= "";
 bookingTab.push(newOrder);
 localStorage.setItem("orders",JSON.stringify(bookingTab)) ;
 location.replace("cart project.html");
}
function validateBookingDates(checkIn, checkOut, bookingTab) {
  var roomId = localStorage.getItem("Roomid");
  var newCheckInDate = new Date(checkIn);
  var newCheckOutDate = new Date(checkOut);
   
  for (var i = 0; i < bookingTab.length; i++) {
    var order = bookingTab[i];
    var orderCheckInDate = new Date(order.checkIn);
    var orderCheckOutDate = new Date(order.checkOut);
    if (order.roomId !== roomId) {
      continue;
    }
    if (
      (newCheckInDate < orderCheckOutDate && newCheckOutDate > orderCheckInDate)
    ) {
      return false; // Dates overlap with a previous order
    }
  }

  return true; // Dates do not overlap with any previous order
}
  function logout(){
    localStorage.removeItem("connectedUserID");
    location.replace("index.html");
  }
  function adminOrders (){
    var ordersTab =JSON.parse(localStorage.getItem("orders") || "[]") ;
      var contenu="";
    for (let i = 0; i < ordersTab.length; i++) {
     
        contenu = contenu + `
        <tr>
        <td>
        <h5>
        ${ordersTab[i].id}
       </h5>
        </td>
        <td>
           
            <h5>
              <p id="productName">${ordersTab[i].ownerId}</p>
             </h5>
            
          </div>
        </td>
        <td>
          <h5>${ordersTab[i].propretyId}</h5>
        </td>
        <td>
          <h5>${ordersTab[i].clientId}</h5>
          </td>
          <td>
          <h5>${ordersTab[i].roomId }</h5>
        </td>
        <td>
   <h5>${ordersTab[i].checkIn}</h5>
     </td>
    <td>
    <h5>${ordersTab[i].checkOut}</h5>
     </td>
     <td>
     <h5>${ordersTab[i].persons}</h5>
     </td>
     <td>
     <h5>${ordersTab[i].price}</h5>
     </td>
       
        <td>
        <button class="btn btn-danger" onclick="delet('orders',${i})" >Delete</button>
        </td>
       
      </tr>
    `
      }
    document.getElementById("block3").innerHTML=contenu;  
    }
function ownerOrders() {
  var connectedUserID = localStorage.getItem("connectedUserID");
  var ordersTab =JSON.parse(localStorage.getItem("orders") || "[]") ;
      var contenu="";
    for (let i = 0; i < ordersTab.length; i++) {
      if (ordersTab[i].ownerId== connectedUserID) {
        contenu = contenu + `
        <tr>
        <td>
        <h5>
        ${ordersTab[i].id}
       </h5>
        </td>
        <td>
          <h5>${ordersTab[i].propretyId}</h5>
        </td>
        <td>
          <h5>${ordersTab[i].clientId}</h5>
          </td>
          <td>
          <h5>${ordersTab[i].roomId }</h5>
        </td>
        <td>
   <h5>${ordersTab[i].checkIn}</h5>
     </td>
    <td>
    <h5>${ordersTab[i].checkOut}</h5>
     </td>
     <td>
     <h5>${ordersTab[i].persons}</h5>
     </td>
     <td>
     <h5>${ordersTab[i].price}</h5>
     </td>
       
        <td>
        <button class="btn btn-danger" onclick="delet('orders',${i})" >Delete</button>
        </td>
       
      </tr> `
    }
    }
    document.getElementById("ownerOrders").innerHTML=contenu;
    }
function updateUser(id) {
  var user = searchObjByIdAndKey("users",id)
  console.log(user);
  var content = 
  ` <div class="row login_form">
    <div class="col-md-4"></div>
    <div class="col-md-4">
    <div class=" form-group">
   <div>
      <input
        type="text"
        class="form-control"
        id="upFname"
        name="Name"
        value="${user.fName}"
      />
    </div>
    <div>
    <input
      type="text"
      class="form-control"
      id="upLastName"
      name="Name"
      value="${user.lName}"
    />
  </div>
    <div>
      <input
        type="text"
        class="form-control"
        id="upmail"
        name="Name"
        value="${user.mail }"
      />
    </div>
    <div>
      <input
        type="text"
        class="form-control"
        id="upPwd"
        name="Name"
        value="${user.pwd}"
      />
    </div>
    <div class=" form-group">
      <input
        type="text"
        class="form-control"
        id="upTel"
        name="name"
        value="${user.tel }"
      />
    </div>
    <div class=" form-group">
      <input
        type="text"
        class="form-control"
        id="upAdresse"
        name="name"
        value="${user.Adresse }"
      />
    </div>
    </div>
    
    <div class=" form-group">
        <button type="submit" value="submit" class="btn" style="background-color: rgb(62, 180, 196);" onclick="validateUpdateUser(${id})">validate</button>
    </div>
    </div>
  </div>` ;
document.getElementById("updateProd").innerHTML=content;
  
}
function validateUpdateUser(id) {
  var newfName=document.getElementById("upFname").value;
  var newlName = document.getElementById("upLastName").value;
  var newMail = document.getElementById("upmail").value;
  var newPwd = document.getElementById("upPwd").value;
  var newTel = document.getElementById("upTel").value;
  var newAdresse = document.getElementById("upAdresse").value;
  var usersTab = JSON.parse(localStorage.getItem("users"));
  var index = searchIndex("users",id);
  usersTab[index].fName = newfName;
  usersTab[index].lName = newlName;
  usersTab[index].mail = newMail;
  usersTab[index].pwd = newPwd;
  usersTab[index].tel = newTel;
  usersTab[index].Adresse = newAdresse
  localStorage.setItem("users",JSON.stringify(usersTab));
  location.reload();
}
function validateOwner(index) {
  var usersTab = JSON.parse(localStorage.getItem("users"));
  usersTab[index].statut="ok";
  localStorage.setItem("users",JSON.stringify(usersTab));
  location.reload();
}
function generateHeader(){
  var connectedUserID	= localStorage.getItem("connectedUserID");
  var connectedUser = searchObjByIdAndKey("users",connectedUserID);
  console.log(connectedUser);
  var content = "";
  if (connectedUserID){
    if (connectedUser.role=="client") {
      content = content +`
  <ul class="main-nav nav navbar-nav navbar-right">
      <li class="wow fadeInDown" data-wow-delay="0.1s">
          <a href="index.html" class="dropdown-toggle active"   data-delay="200">Home <b class="caret"></b></a></li>
      <li class="wow fadeInDown" data-wow-delay="0.1s"><a class="" href="All Propretys project.html">properties</a></li>
      <li class="wow fadeInDown" data-wow-delay="0.1s"><a class="" href="search project.html">Search</a></li>
      <li class="wow fadeInDown" data-wow-delay="0.1s"><a class="" href="cart project.html">Cart</a></li>
      <li class="wow fadeInDown" data-wow-delay="0.4s"><a href="contact.html">Contact</a></li>
      <li class="wow fadeInDown" data-wow-delay="0.1s"><a href="#" class="dropdown-toggle"   data-delay="200" onclick ="logout()">logout <b class="caret"></b></a></li>
  </ul>
  
  `   
    }
    else if (connectedUser.role=="owner") {
      content = content +`<ul class="main-nav nav navbar-nav navbar-right">
      <li class="wow fadeInDown" data-wow-delay="0.1s">
          <a href="index.html" class="dropdown-toggle active"   data-delay="200">Home <b class="caret"></b></a></li>
      <li class="wow fadeInDown" data-wow-delay="0.1s"><a class="" href="All Propretys project.html">properties</a></li>
      <li class="wow fadeInDown" data-wow-delay="0.1s"><a class="" href="Addproprety project.html">Add properties</a></li>
      <li class="wow fadeInDown" data-wow-delay="0.1s"><a class="" href="owners dashbord project.html">my propretys dashbord</a></li>
      <li class="wow fadeInDown" data-wow-delay="0.1s"><a class="" href="search project.html">Search</a></li>
      <li class="wow fadeInDown" data-wow-delay="0.1s"><a href="#" class="dropdown-toggle"   data-delay="200" onclick ="logout()">logout <b class="caret"></b></a></li>
      <li class="wow fadeInDown" data-wow-delay="0.4s"><a href="contact.html">Contact</a></li>
  </ul>
  `   
  }
  else  {
    content = content +`<ul class="main-nav nav navbar-nav navbar-right">
    <li class="wow fadeInDown" data-wow-delay="0.1s">
        <a href="index.html" class="dropdown-toggle active"   data-delay="200">Home <b class="caret"></b></a></li>
    <li class="wow fadeInDown" data-wow-delay="0.1s"><a class="" href="All Propretys project.html">properties</a></li>
    <li class="wow fadeInDown" data-wow-delay="0.1s"><a class="" href="admin project.html">my admin dashbord</a></li>
    <li class="wow fadeInDown" data-wow-delay="0.1s"><a class="" href="search project.html">Search</a></li>
    <li class="wow fadeInDown" data-wow-delay="0.1s"><a href="#" class="dropdown-toggle"   data-delay="200" onclick ="logout()">logout <b class="caret"></b></a></li>
    <li class="wow fadeInDown" data-wow-delay="0.4s"><a href="contact.html">Contact</a></li>
</ul>
  
  `   
  } 
  }
  else{
  content = content +`<ul class="main-nav nav navbar-nav navbar-right">
  <li class="wow fadeInDown" data-wow-delay="0.1s">
      <a href="index.html" class="dropdown-toggle active"   data-delay="200">Home <b class="caret"></b></a></li>
      <li class="wow fadeInDown" data-wow-delay="0.1s"><a class="" href="signup client project.html">signup  Client </a></li>
      <li class="wow fadeInDown" data-wow-delay="0.1s"><a class="" href="signup owner project.html">signup Owner</a></li>
      <li class="wow fadeInDown" data-wow-delay="0.1s"><a class="" href="search project.html">Search</a></li>
  <li class="wow fadeInDown" data-wow-delay="0.1s"><a class="" href="All Propretys project.html">properties</a></li>
  <li class="wow fadeInDown" data-wow-delay="0.1s"><a href="login project.html" class="dropdown-toggle"   data-delay="200" >login <b class="caret"></b></a></li>
  <li class="wow fadeInDown" data-wow-delay="0.4s"><a href="contact.html">Contact</a></li>
</ul>
  `
  }
  document.getElementById("navigation").innerHTML=content;
  }	
  function Search() {
    var propretysTab = JSON.parse(localStorage.getItem("propretys") || "[]");
    var Name = document.getElementById("searchByName").value ;
    var city = document.getElementById("serchByCity").value;
    var content ="";
    var foundMatch = false;
    if (Name && !city) {
    for (let i = 0; i < propretysTab.length; i++) {
      if (propretysTab[i].prName==Name) {
        content = content + ` <div class="col-sm-6 col-md-4 p0">
        <div class="box-two proerty-item">
            <div class="item-thumb">
                <a  ><img src="assets/img/demo/property-3.jpg"></a>
            </div>
  
            <div class="item-entry overflow">
                <h5><a > ${propretysTab[i].prName} </a></h5>
                <div class="dot-hr"></div>
                <span class="pull-left"><b> city :</b> ${propretysTab[i].prCity} </span>
                <span class="proerty-price pull-right"> ${propretysTab[i].prStatut}</span>
                <p style="display: none;">Suspendisse ultricies Suspendisse ultricies Nulla quis dapibus nisl. Suspendisse ultricies commodo arcu nec pretium ...</p>
                <div class="property-icon">
                    <img src="assets/img/icon/bed.png">(5)|
                    <img src="assets/img/icon/shawer.png">(2)|
                    <img src="assets/img/icon/cars.png">(1) 
                    <button class="btn btn-primary" onclick ="propretyToDisplay(${propretysTab[i].id})"> display proprety </button> 
                </div>
            </div>
  
  
        </div>
    </div>`
    foundMatch = true;
      }
      
    }
    document.getElementById("search").innerHTML=content ;
    
  }
  else if (!Name&&city) {
    for (let i = 0; i < propretysTab.length; i++) {
      if (propretysTab[i].prCity==city) {
        content = content + ` <div class="col-sm-6 col-md-4 p0">
        <div class="box-two proerty-item">
            <div class="item-thumb">
                <a  ><img src="assets/img/demo/property-3.jpg"></a>
            </div>
  
            <div class="item-entry overflow">
                <h5><a > ${propretysTab[i].prName} </a></h5>
                <div class="dot-hr"></div>
                <span class="pull-left"><b> city :</b> ${propretysTab[i].prCity} </span>
                <span class="proerty-price pull-right"> ${propretysTab[i].prStatut}</span>
                <p style="display: none;">Suspendisse ultricies Suspendisse ultricies Nulla quis dapibus nisl. Suspendisse ultricies commodo arcu nec pretium ...</p>
                <div class="property-icon">
                    <img src="assets/img/icon/bed.png">(5)|
                    <img src="assets/img/icon/shawer.png">(2)|
                    <img src="assets/img/icon/cars.png">(1) 
                    <button class="btn btn-primary" onclick ="propretyToDisplay(${propretysTab[i].id})"> display proprety </button> 
                </div>
            </div>
  
  
        </div>
    </div>`
    foundMatch=true;
        
      }
    }
    document.getElementById("search").innerHTML=content ;
  }
  else if (Name&&city) {
    for (let i = 0; i < propretysTab.length; i++) {
      if (propretysTab[i].prCity==city && propretysTab[i].prName==Name ) {
        content = content + ` <div class="col-sm-6 col-md-4 p0">
        <div class="box-two proerty-item">
            <div class="item-thumb">
                <a  ><img src="assets/img/demo/property-3.jpg"></a>
            </div>
  
            <div class="item-entry overflow">
                <h5><a > ${propretysTab[i].prName} </a></h5>
                <div class="dot-hr"></div>
                <span class="pull-left"><b> city :</b> ${propretysTab[i].prCity} </span>
                <span class="proerty-price pull-right"> ${propretysTab[i].prStatut}</span>
                <p style="display: none;">Suspendisse ultricies Suspendisse ultricies Nulla quis dapibus nisl. Suspendisse ultricies commodo arcu nec pretium ...</p>
                <div class="property-icon">
                    <img src="assets/img/icon/bed.png">(5)|
                    <img src="assets/img/icon/shawer.png">(2)|
                    <img src="assets/img/icon/cars.png">(1) 
                    <button class="btn btn-primary" onclick ="propretyToDisplay(${propretysTab[i].id})"> display proprety </button> 
                </div>
            </div>
  
  
        </div>
    </div>`
    foundMatch=true;
        
      }
      
    }
    document.getElementById("search").innerHTML=content ;
  }
  
  if (!foundMatch) { document.getElementById("search").innerHTML=`<div class="content-area error-page" style="background-color: #FCFCFC; padding-bottom: 55px;">
  <div class="container">
      <div class="row">
          <div class="col-md-10 col-md-offset-1 col-sm-12 text-center page-title">
              <h2 class="error-title">404</h2>
              <p>Sorry, the page you requested may have been moved or deleted</p>
              <a href="index.html" class="btn btn-default">Home</a>                        
          </div>
      </div> 
  </div>
</div> ` ;}
  }
  function ClientCart() {
    var connectedUserID = localStorage.getItem("connectedUserID");
    var ordersTab =JSON.parse(localStorage.getItem("orders") || "[]") ;
        var contenu="";
        var sum = 0;
      for (let i = 0; i < ordersTab.length; i++) {
        if (ordersTab[i].clientId== connectedUserID) {
          sum = sum + parseFloat(ordersTab[i].price) ;
          contenu = contenu + `
          <tr>
            <td>
            <h5>${ordersTab[i].roomId }</h5>
          </td>
          <td>
     <h5>${ordersTab[i].checkIn}</h5>
       </td>
      <td>
      <h5>${ordersTab[i].checkOut}</h5>
       </td>
       <td>
       <h5>${ordersTab[i].persons}</h5>
       </td>
       <td>
       <h5>${ordersTab[i].price}</h5>
       </td>
       
         
          <td>
          <button class="btn btn-danger" onclick="delet('orders',${i})" >cancel Reservation</button>
          </td>
         
        </tr> `
      }
      }
      contenu = contenu + `total = ${sum}`
      document.getElementById("clientOrders").innerHTML=contenu;
      }