
//////////////////////// START DATA FETCHING ///////////////////////////


let barberName = "";
let barberID2 = "";
let barberProvince = "";
let barberCity = "";
let barberImageSrc = localStorage.getItem("barberImageSrc");
let barberServices = "";
let isEmpty = false; // to be checked later...

var barbers = db.collection("saloons").doc("Saloon Profiles");

barbers.get().then((doc) => {
    if (doc.exists) {
      var data = doc.data()
      for (var key in data)
      {
        if([key] == localStorage.getItem("barberID"))
        {
          barberName = data[key]["saloonName"];
          barberID2 = data[key]["saloonID"];
          barberProvince = data[key]["saloonProvince"];
          barberCity = data[key]["saloonCity"];
          barberServices = data[key]["services"];
          // console.log([key]);
          updateProfile();
        }
       
      }
      readyForClientOrder();
      
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
//////////////////////// EDN OF DATA FETCHING ///////////////////////////

function updateProfile()
{
  console.log("inside updateBarberProfileServices.js file");
  console.log(barberName+", "+barberID2+", "+barberProvince+", "+barberCity+", ");
  
  // let barberName = localStorage.getItem("barberName");
  // let barberImageSrc = localStorage.getItem("barberImageSrc");
  // let barberServices = localStorage.getItem("barberServices");
  // let isEmpty = localStorage.getItem("isEmpty");
  
  console.log(barberServices);
  
  let serviceText = ""
  let i = 0;
  for (var key in barberServices)
  {
    i = i+1;
    serviceText = barberServices[key]
    addNewService(serviceText,i)
  }
  document.getElementById("barberName").src = barberName;
  document.getElementById("barberName").innerText = barberName;
  document.getElementById("barberImage").src = barberImageSrc;
  
  function addNewService(serviceText,i)
  {
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let label1 = document.createElement("label");
    let input1 = document.createElement("input");
  
    let serviceDescriptionText = document.createTextNode("لايوجد خدمات حالياً");
    if (serviceText != null)
    {
      serviceDescriptionText = document.createTextNode(" "+serviceText);
    }
  
    serviceDescriptionText.id  = "serviceDescritioncheckbox"+i
    div1.className = "row"
    div1.style.marginTop = "10px"
    div2.className = "col-xs-12 col-sm-6 col-md-6 col-lg-6"
    div3.className = "checkbox"
    div3.style.textAlign = "right"
    div3.fontSize = "20px"
    input1.type = "checkbox"
    input1.id = "checkbox"+i;
    input1.className = "serviceCheckbox"
    input1.style.textAlign = "right"
    input1.style.marginRight = "60px"
    label1.style.fontSize = "20px"
    div1.appendChild(div2);
    div2.appendChild(div3);
    div3.appendChild(label1)
    label1.appendChild(input1)
    label1.id = "labelcheckbox"+i
    label1.appendChild(serviceDescriptionText)
  
    function insertAfter(referenceNode, newNode)
    {
      referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }
  
    var appendingElement = document.getElementById("startAppendingFromHere")
    insertAfter(appendingElement,div1)
  
  }
}
