<!DOCTYPE html>
<!-- <script type="module">
  import { v4 as uuidv4 } from './uuid';
  let u = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

</script> -->
<html lang="ar" dir="rtl">
  <head>
      <!-- Sweetalert2 Module -->
      <script src="nodemodules/sweetalert2/dist/sweetalert2.all.js"></script>
      <!-- The core Firebase JS SDK is always required and must be listed first -->
      <script src="https://www.gstatic.com/firebasejs/8.5.0/firebase-app.js"></script>
      <script src="https://www.gstatic.com/firebasejs/8.5.0/firebase-firestore.js"></script>
      <script src="https://www.gstatic.com/firebasejs/8.5.0/firebase-auth.js"></script>
      <!-- Firebase Storage CDN -->
      <script src="https://www.gstatic.com/firebasejs/8.6.1/firebase-storage.js"></script>
      <!-- TODO: Add SDKs for Firebase products that you want to use
         https://firebase.google.com/docs/web/setup#available-libraries -->
    <script>
        // Your web app's Firebase configuration
        var firebaseConfig = {
            apiKey: "AIzaSyDjsKQlqNRWOWD6Qw6tklqtP03BtUW_lqw",
            authDomain: "groceryapp-b381a.firebaseapp.com",
            databaseURL: "https://groceryapp-b381a.firebaseio.com",
            projectId: "groceryapp-b381a",
            storageBucket: "groceryapp-b381a.appspot.com",
            messagingSenderId: "1092044916930",
            appId: "1:1092044916930:web:b3493c5ddfdef83633d35b",
            storageBucket: 'gs://groceryapp-b381a.appspot.com'
        };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      var db = firebase.firestore();
      </script>
        <!-- The core Firebase JS SDK is always required and must be listed first -->

      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" charset="utf-8"/>
      <!-- Bootstrap RTL CSS -->
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.rtl.min.css" integrity="sha384-jHiSqEim4+W1UCvv8kTcMbtCZlRF8MxbgKdfpvncia8gdN1UImBnhTpKtufREzv7" crossorigin="anonymous">      <!-- Bootstrap css & javascript links -->
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
      <!-- CSS Style File -->
      <link rel="stylesheet" href="styles.css">
      <!-- Font Awesome for All Icons other than the quantity buttons-->
      <script src="https://kit.fontawesome.com/ab5937a0f1.js" crossorigin="anonymous"></script>
      <!-- Font Awesome fpr Quantity Buttons-->
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
      <!-- Google Fonts / Arabic -->
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Aref+Ruqaa&display=swap" rel="stylesheet">      <!-- JQuery -->
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <!-- FIREBASE -->
  </head>
<body>
    <!-- ////////////////////////////////////// START NAVIGATION BAR ////////////////////////////////////////// -->
            <nav class="navbar navbar-expand-lg navbar-light fixed-top border border-dark" style="padding: 5px; background-color: #fff;">
              <a id="logoFont" class="navbar-brand" href="index.html" style="color: rgb(255, 92, 57); font-weight: bold; font-size: 2rem; margin-left: 35px;">صوالين</a>
                <div class="checkoutMobile myCart mr-5">
                  <a href="boughtMaterials.html">
                    <!-- <div class="checkoutBadge">0</div> -->
                    <!-- <i class="fas fa-2x fa-shopping-cart shopping-cart-icon"></i> -->
                  </a>
                </div>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
              </ul>
                <li class="nav-item d-flex" style="margin-left: auto;">
                  <!-- <i class="fas fa-2x fa-shopping-cart checkoutDesktop"></i><span id="totalCost">11</span></div> -->
                  <div class="checkoutDesktop myCart mr-5 text-center">
                    <a href="boughtMaterials.html">
                      <!-- <div class="checkoutBadge">0</div> -->
                      <!-- <i class="fas fa-2x fa-shopping-cart shopping-cart-icon"></i> -->
                    </a>
                  </div>
                </li>
                
                <button type="button" class="btn btn-outline-warning signup" id="salonLoginOrRegisterButton" name="button" style="color:black;">Salons</button>

                <!-- <button type="button" class="btn btn-warning signup" id="signupButton" name="button" style="color:black;">إنشاء حساب</button>
                <button type="button" class="btn btn-outline-warning signin" id="signinButton" name="button" style="color:black;">تسجيل دخول</button> -->
                </div>
            </nav>
        <!-- ///////////////////////////////// END NAVIGATION BAR //////////////////////////////////// -->
  
    <!-- Start loading animation -->
      <div class="loadingAnimation">  
        <div class="dots one">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      </div>
    <!-- End loading  animation  -->

    <div class="container-fluid">
        <div  id="searchBoxRow" class="row" style="margin-top: 70px; background-image: url(images/background_image1.jpg); background-repeat: repeat; background-position: center;">
          <div class="col-sm-4 col-md-4 col-lg-3 mx-auto my-auto">
            <div class="card mb-2 mx-auto my-auto" style="width: 250px;">
              <div class="card-body">
               
                <select class="form-select form-select-province mb-3" aria-label=".form-select-province example">
                  <option selected>المنطقة</option>
                  <option value="1">الرياض</option>
                  <option value="2">مكة المكرمة</option>
                  <option value="3">المدينة المنورة</option>
                  <option value="4">القصيم</option>
                  <option value="5">المنطقة الشرقية</option>
                  <option value="6">عسير</option>
                  <option value="7">تبوك</option>
                  <option value="8">حائل</option>
                  <!-- <option value="9">الحدود الشمالية</option> -->
                  <option value="10">جازان</option>
                  <option value="11">نجران</option>
                  <!-- <option value="12">الباحة</option> -->
                  <!-- <option value="13">الجوف</option> -->
                </select>

                <select class="form-select form-select-city" id="easternCities" aria-label=".form-select-city example" disabled>
                  <option selected>المدينة / الحي</option>
                  <option value="1">الظهران</option>
                  <option value="2">الخبر</option>
                  <option value="3">الدمام</option>
                  <option value="4">الجبيل</option>
                  <option value="5">القطيف</option>
                  <option value="6">الأحساء</option>
                  <option value="7">حفر الباطن</option>
                  <option value="8">الخفجي</option>
                  <option value="9">النعيرية</option>
                </select>

                <select class="form-select form-select-city d-none" id="haelCities" aria-label=".form-select-city example">
                  <option selected>المدينة / الحي</option>
                  <option value="1">مدينة حائل</option>
                  <option value="2">بقعاء</option>
                  <option value="3">قفار</option>
                  <option value="4">الغزالة</option>
                  <option value="5">الشنان</option>
                  <option value="6">موقق</option>
                  <option value="7">الحائط</option>
                  <option value="8">السليمي</option>
                  <option value="9">الشملي</option>                             
                  <option value="10">سميراء</option>
                  <option value="11">حليفة</option>
                  <option value="12">جبة</option>
                </select>
                
                <select class="form-select form-select-city d-none" id="makkahCities" aria-label=".form-select-city example">
                  <option selected>المدينة / الحي</option>
                  <option value="1">مكة المكرمة</option>
                  <option value="2">جدة</option>
                  <option value="3">الطائف</option>
                  <option value="4">القنفذة</option>
                  <option value="5">رابغ</option>
                  <option value="6">الليث</option>
                  <option value="7">خليص</option>
                </select>

                <select class="form-select form-select-city d-none" id="aseerCities" aria-label=".form-select-city example">
                  <option selected>المدينة / الحي</option>
                  <option value="1">أبها</option>
                  <option value="2">خميس مشيط</option>
                  <option value="3">النماص</option>
                  <option value="4">تنومة</option>
                  <option value="5">ظهران الجنوب</option>
                  <option value="6">رجال ألمع</option>
                </select>

                <select class="form-select form-select-city d-none" id="riyadhCities" aria-label=".form-select-city example">
                  <option selected>المدينة / الحي</option>
                  <option value="1">شمال الرياض</option>
                  <option value="2">شرق الرياض</option>
                  <option value="3">غرب الرياض</option>
                  <option value="4">جنوب الرياض</option>
                  <option value="5">وسط الرياض</option>
                </select>

                <select class="form-select form-select-city d-none" id="madinahCities" aria-label=".form-select-city example">
                  <option selected>المدينة / الحي</option>
                  <option value="1">المدينة المنورة</option>
                  <option value="2">الحناكية</option>
                  <option value="3">العلا</option>
                  <option value="4">ينبع</option>
                  <option value="5">ينبع الصناعية</option>
                </select>

                <select class="form-select form-select-city d-none" id="qassimCities" aria-label=".form-select-city example">
                  <option selected>المدينة / الحي</option>
                  <option value="1">بريدة</option>
                  <option value="2">عنيزة</option>
                  <option value="3">الرس</option>
                  <option value="4">المذنب</option>
                  <option value="5">البكيرية</option>
                  <option value="6">البدائع</option>
                  <option value="7">الأسياح</option>
                  <option value="8">النبهانية</option>
                  <option value="9">عيون الجواء</option>
                  <option value="10">رياض الخبراء</option>
                  <option value="11">الشماسية</option>
                  <option value="12">عقلة الصقور</option>
                  <option value="13">ضرية</option>
                </select>

                <select class="form-select form-select-city d-none" id="taboukCities" aria-label=".form-select-city example">
                  <option selected>المدينة / الحي</option>
                  <option value="1">تيماء</option>
                  <option value="2">أملج</option>
                  <option value="3">الوجه</option>
                  <option value="4">ضباء</option>
                  <option value="5">حقل</option>
                  <option value="6">البدع</option>
                </select>

                <select class="form-select form-select-city d-none" id="najranCities" aria-label=".form-select-city example">
                  <option selected>المدينة / الحي</option>
                  <option value="1">حي الفيصلية</option>
                  <option value="2">حي الفهد</option>
                  <option value="3">رجلاء</option>
                  <option value="4">سقام</option>
                  <option value="5">المشعلية</option>
                  <option value="6">الغويلا</option>
                  <option value="7">الجربة</option>
                  <option value="8">الصفا</option>
                  <option value="9">الشرفة</option>
                  <option value="10">القابل</option>
                  <option value="11">العريسة</option>
                  <option value="12">حي الأسكان</option>
                  <option value="13">شرق المطار</option>
                  <option value="14">يدمة</option>
                  <option value="15">حبونا</option>
                  <option value="16">نجران البلد</option>
                </select>

                <select class="form-select form-select-city d-none" id="jazanCities" aria-label=".form-select-city example">
                  <option selected>المدينة / الحي</option>
                  <option value="1">صبيا</option>
                  <option value="2">صامطة</option>
                  <option value="3">أبو عريش</option>
                  <option value="4">جازان</option>
                  <option value="5">أحد مسارحة</option>
                  <option value="6">بيش</option>
                  <option value="7">العارضة</option>
                  <option value="8">ضمد</option>
                  <option value="9">الدرب</option>
                  <option value="10">العيدابي</option>
                  <option value="11">الدائر</option>
                  <option value="12">الريث</option>
                  <option value="13">الحرث</option>
                  <option value="14">فرسان</option>
                  <option value="15">الطوال</option>
                  <option value="16">هروب</option>
                  <option value="17">فيفاء</option>
                 </select>
                 
               </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-8 col-md-8 col-lg-9">
          </div>
        </div>
      </div>
      <!-- /////////////////////////////// START  /////////////////////////////-->
      <div id="saloonProfileCardsContainer" class="container-fluid pl-3 pr-3" style="background-color: #ffffff">
        <div class="row mt-4">
          <div class="" id="startAppendingFromHere">
          </div>
        </div>
      </div>

  </body>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  <script src="getSaloonProfiles.js" type="text/javascript"></script>
  <script src="homePageScript.js" type="text/javascript"></script>

  <script type="text/javascript">
    $("#signinButton").click(function(){
      window.location.href = "signin.html";
    });
    $("#signupButton").click(function(){
      window.location.href = "signup.html";
    });
  </script>
  <script type="text/javascript">
    firebase.auth().onAuthStateChanged((user) => {
    if (user)
       {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          var uid = user.uid;
          window.location.replace("authorised/home.html")
        }
    });
  </script>
</html>
