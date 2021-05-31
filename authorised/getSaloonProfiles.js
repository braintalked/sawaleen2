
console.log("inside getSaloonProfiles.js file")

//////////////////////// START DATA FETCHING ///////////////////////////
          const loader = document.querySelector(".loadingAnimation");
          loader.classList.remove("hidden");

    var barbers = db.collection("saloons").doc("Saloon Profiles");

    barbers.get().then((doc) => {
        if (doc.exists) {
          var data = doc.data()
          for (var key in data)
          {
            let name = data[key]["saloonName"]
            let barberID = data[key]["saloonID"]
            let province = data[key]["saloonProvince"]
            let city = data[key]["saloonCity"]
            let services = data[key]["services"]

            console.log( key, data[key] );
            newBarberCard(name,province,city,barberID,services)
          }
          loader.classList.add("hidden");
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
//////////////////////// EDN OF DATA FETCHING ///////////////////////////

/////////////////// START OF BARBER CARDS POPULATING ///////////////////

function  newBarberCard(name,province,city,barberID,services)
{
  // var barberServices = [];
  // if (services != null)
  // {
  //   for (var key1 in services)
  //   {
  //     barberServices.push(services[key1]);
  //   }
  // }

  var provinceName = ""
  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  let img = document.createElement("img");
  let div3 = document.createElement("div");
  let div4 = document.createElement("div");
  let h5 = document.createElement("h5");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  let button = document.createElement("button");

  switch (province) {
    case "المنطقة الشرقية":
      provinceName = "eastern";
      break;
    case "حائل":
      provinceName = "hael";
      break;
    case "مكة المكرمة":
      provinceName = "makkah";
      break;
    case "عسير":
      provinceName = "aseer";
      break;
    case "الرياض":
      provinceName = "riyadh";
      break;
    case "المدينة المنورة":
      provinceName = "madinah";
      break;
    case "القصيم":
    provinceName = "qassim";
    break;
    case "تبوك":
    provinceName = "tabouk";
    break;
    case "نجران":
    provinceName = "najran";
    break;
    case "جازان":
    provinceName = "jazan";
    break;
    
    default:
    provinceName = "";
    }

  div1.className = "col-xs-3 col-sm-6 col-md-6 col-lg-3 barber "+provinceName+" "+(city.replace(/\s/g, ''))
  div2.className = "card w-100 mb-2"
  img.className =  "card-img-top"
  img.src = "../images/barberAvatar.png"
  img.id = barberID+"image"
  div3.className = "card-body"
  div4.className = "text-center"
  h5.className = "card-title"
  h5.style.textAlign = "center"
  h5.innerText = name
  h5.id = barberID+"name"
  p1.className = "text-right "+barberID+"province"
  p1.innerText = province
  p2.style.marginBottom = "5px"
  p2.className = "text-right "+barberID+"city"
  p2.innerText = city
  button.classList = "btn btn-lg btn-info pt-1 pb-1 book"
  button.id =  barberID
  button.type  =  "button"
  button.innerText = "حــجــز"
  // button.onclick = 'barberProfilePage()'
  // p3.innerHTML = "<button id= 'barberID' type='button' onclick= 'barberProfilePage(barberID)' class='btn btn-lg btn-info pt-1 pb-1 search'>حــجــز</button>"
  p3.appendChild(button)
  div1.appendChild(div2)
  div4.appendChild(p3)
  div2.appendChild(img)
  div2.appendChild(div3)
  div3.appendChild(h5)
  div3.appendChild(p1)
  div3.appendChild(p2)
  div2.appendChild(div4)
  let lengthofDictionary = 0;
  if ( services != null)
  {
    lengthofDictionary = Object.keys(services).length;
    console.log("Number of services is: "+lengthofDictionary);
  }
  function insertAfter(referenceNode, newNode)
  {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }

  var appendingElement = document.getElementById("startAppendingFromHere")
  insertAfter(appendingElement,div1)

  document.querySelector(".book").addEventListener("click", function(){
    let barber_id = this.id
    let barber_name = document.getElementById(barberID+"name").innerText
    let barber_image_src = document.getElementById(barberID+"image").src
    let stringifiedBarberServices = JSON.stringify(services);
    let isEmpty = "true";

    if (lengthofDictionary>0)
    {
       isEmpty = "false";
    }
    else if (lengthofDictionary == 0)
    {
       isEmpty = "true";
    }

    localStorage.setItem("barberID", barber_id )
    localStorage.setItem("barberName", barber_name)
    localStorage.setItem("barberImageSrc", barber_image_src)
    localStorage.setItem("barberServices", stringifiedBarberServices)
    localStorage.setItem("isEmpty", isEmpty);

    window.location.assign("barberProfile.html");
  });
}
/////////////////// END OF BARBER CARDS POPULATING ////////////////////
