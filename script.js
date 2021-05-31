
document.getElementById("easternCities").classList.remove("d-none")
document.getElementById("easternCities").disabled = true;

document.querySelector(".form-select-province").addEventListener("change", provinceFilter);

function provinceFilter()
{
  console.log("inside  script.js!")
  var selectedProvince = document.querySelector(".form-select-province")
  var value = selectedProvince.options[selectedProvince.selectedIndex].value;// get selected option value
  var text = selectedProvince.options[selectedProvince.selectedIndex].text;
  if(text == "الشرقية(Eastern)")
  {
    document.getElementById("easternCities").disabled = false;
    document.getElementById("northernCities").selectedIndex = 0;
    document.getElementById("westernCities").selectedIndex = 0;
    document.getElementById("southernCities").selectedIndex = 0;
    document.getElementById("middleCities").selectedIndex = 0;

    document.getElementById("easternCities").classList.remove("d-none")
    document.getElementById("westernCities").classList.add("d-none")
    document.getElementById("northernCities").classList.add("d-none")
    document.getElementById("southernCities").classList.add("d-none")
    document.getElementById("middleCities").classList.add("d-none")

    document.querySelectorAll(".eastern").forEach(showElement);

    document.querySelectorAll(".western").forEach(hideElement);

    document.querySelectorAll(".northern").forEach(hideElement);

    document.querySelectorAll(".southern").forEach(hideElement);

    document.querySelectorAll(".middle").forEach(hideElement);
    function hideElement(elem)
      {
        elem.classList.add("d-none");
      }
    function showElement(elem)
      {
          elem.classList.remove("d-none");
      }
    console.log(text)
  }
  else if(text == "الشمالية(Northern)")
  {
    document.getElementById("easternCities").selectedIndex = 0;
    document.getElementById("westernCities").selectedIndex = 0;
    document.getElementById("southernCities").selectedIndex = 0;
    document.getElementById("middleCities").selectedIndex = 0;

    document.getElementById("northernCities").classList.remove("d-none")
    document.getElementById("easternCities").classList.add("d-none")
    document.getElementById("westernCities").classList.add("d-none")
    document.getElementById("southernCities").classList.add("d-none")
    document.getElementById("middleCities").classList.add("d-none")
    document.querySelectorAll(".western").forEach(hideElement);

    document.querySelectorAll(".northern").forEach(showElement);

    document.querySelectorAll(".eastern").forEach(hideElement);

    document.querySelectorAll(".southern").forEach(hideElement);

    document.querySelectorAll(".middle").forEach(hideElement);
    function hideElement(elem)
      {
        elem.classList.add("d-none");
      }
    function showElement(elem)
      {
          elem.classList.remove("d-none");
      }
    console.log(text)
  }
  else if(text == "الغربية(Western)")
  {
    document.getElementById("northernCities").selectedIndex = 0;
    document.getElementById("easternCities").selectedIndex = 0;
    document.getElementById("southernCities").selectedIndex = 0;
    document.getElementById("middleCities").selectedIndex = 0;

    document.getElementById("westernCities").classList.remove("d-none")
    document.getElementById("easternCities").classList.add("d-none")
    document.getElementById("northernCities").classList.add("d-none")
    document.getElementById("southernCities").classList.add("d-none")
    document.getElementById("middleCities").classList.add("d-none")

    document.querySelectorAll(".western").forEach(showElement);

    document.querySelectorAll(".eastern").forEach(hideElement);

      document.querySelectorAll(".northern").forEach(hideElement);

      document.querySelectorAll(".southern").forEach(hideElement);

      document.querySelectorAll(".middle").forEach(hideElement);
      function hideElement(elem)
        {
          elem.classList.add("d-none");
        }
      function showElement(elem)
        {
            elem.classList.remove("d-none");
        }
    console.log(text)
  }
  else if(text == "الجنوبية(Southern)")
  {
    document.getElementById("easternCities").selectedIndex = 0;
    document.getElementById("westernCities").selectedIndex = 0;
    document.getElementById("northernCities").selectedIndex = 0;
    document.getElementById("middleCities").selectedIndex = 0;

    document.getElementById("southernCities").classList.remove("d-none")
    document.getElementById("easternCities").classList.add("d-none")
    document.getElementById("northernCities").classList.add("d-none")
    document.getElementById("westernCities").classList.add("d-none")
    document.getElementById("middleCities").classList.add("d-none")

    document.querySelectorAll(".southern").forEach(showElement);

    document.querySelectorAll(".western").forEach(hideElement);

      document.querySelectorAll(".northern").forEach(hideElement);

      document.querySelectorAll(".eastern").forEach(hideElement);

      document.querySelectorAll(".middle").forEach(hideElement);
      function hideElement(elem)
        {
          elem.classList.add("d-none");
        }
      function showElement(elem)
        {
            elem.classList.remove("d-none");
        }
  }
  else if(text == "الوسطى(Middle)")
  {
    document.getElementById("easternCities").selectedIndex = 0;
    document.getElementById("westernCities").selectedIndex = 0;
    document.getElementById("southernCities").selectedIndex = 0;
    document.getElementById("northernCities").selectedIndex = 0;

    document.getElementById("middleCities").classList.remove("d-none")
    document.getElementById("easternCities").classList.add("d-none")
    document.getElementById("northernCities").classList.add("d-none")
    document.getElementById("westernCities").classList.add("d-none")
    document.getElementById("southernCities").classList.add("d-none")

    document.querySelectorAll(".middle").forEach(showElement);

    document.querySelectorAll(".western").forEach(hideElement);

      document.querySelectorAll(".northern").forEach(hideElement);

      document.querySelectorAll(".southern").forEach(hideElement);

      document.querySelectorAll(".eastern").forEach(hideElement);

      function hideElement(elem)
        {
          elem.classList.add("d-none");
        }
      function showElement(elem)
        {
            elem.classList.remove("d-none");
        }
  }
  else{
    document.getElementById("easternCities").selectedIndex = 0;
    document.getElementById("northernCities").selectedIndex = 0;
    document.getElementById("westernCities").selectedIndex = 0;
    document.getElementById("southernCities").selectedIndex = 0;
    document.getElementById("middleCities").selectedIndex = 0;

    document.getElementById("easternCities").disabled = true;
    document.getElementById("easternCities").classList.remove("d-none")
    document.getElementById("westernCities").classList.add("d-none")
    document.getElementById("northernCities").classList.add("d-none")
    document.getElementById("southernCities").classList.add("d-none")
    document.getElementById("middleCities").classList.add("d-none")

    document.querySelectorAll(".eastern").forEach(showElement);

    document.querySelectorAll(".western").forEach(showElement);

    document.querySelectorAll(".northern").forEach(showElement);

    document.querySelectorAll(".southern").forEach(showElement);

    document.querySelectorAll(".middle").forEach(showElement);

    function showElement(elem)
      {
          elem.classList.remove("d-none");
      }
    console.log(text)
  }
}

// document.querySelector(".signup").addEventListener("click", function(){
//   document.querySelector(".signup").classList.add("dim");
//   setTimeout(function(){document.querySelector(".signup").classList.remove("dim");}, 150);
// });


// document.querySelector(".search").addEventListener("click", function(){
//   window.location.href = "http://stackoverflow.com";
//   console.log("search button clicked");
// });
