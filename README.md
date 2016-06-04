## Angular Architicture 
<div dir="rtl">
يتكون التطبيق المبني من خلال فريمويرك\اطارعمل اangular js  من المكونات اللآتية 
<table borderd>
  <thead>
  <tr>
   <th> العنوان</th>
   <th> الوظيفة</th>
   <th>  التعريف </th>
   <th> مثال </th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td> Controller </td>
  <td> تعريف متغيرات ال $scope, وتولي تنفيذ ومتابعة عملية التفال مع ال $scpoe 
  كتوفير ال functions / handlers to update and handle interactions with $scope.
  التواصل مع الموديل والسيرفيسيز لطلب الداتا من هناك . 
  او طلب تنفيذ منطق عمللي هناك كاجراء حساب وعكس النتيجة على قاعدة البيانات 
   </td>
  <td>
    <h3>التعريف \ اضافة كونتروللر جديد</h3> 
    <br/>
    angular.module("moduleName") <br/>
    .controller("controllerName",controllerFunctionName);<br/>
    function controllerFunctionName($scope,serviceName,anyDefinedServiceWithinModule,CONSTANT_NAME){
      
    }
    </td>
    <td>
    <hr/>
    <h3>الاستخدام </h3>
    
    &lt;div ng-controller="controllerName" >someDome &lt;/div> 
    
  </td>
  </tr>
  <tr>
    <td>  Service </td>
    <td> تعريف مجموعة من الكودات التي لا تعتمد على واجهة المستخدم 
    ، والتي يمكن عادة اعادة استخدامها في اماكن اخرى 
     ككودات التواصل وجلب البيانات من السيرفر ، وتجهيز فورمات الداتا التي تنتظره الداتابيس 
    </td>
    <td dir="ltr"> 
      <h3>التعريف \ اضافة سيرفس جديد</h3> 
<code>  
<pre > 
    angular.module("moduleName")
    .service("serviceName",serviceFunctionName);
    function serviceFunctionName($http,serviceName,CONSTANT_NAME){
      var _service = this;
      
      _service.getSomeData = getSomeData;
      _service.doAnotherBusinessLogic = doAnotherBusinessLogic;
      _service.addPostToServer = addPostToServer;
      
      /////
     
      function getSomeData(){
        ////write the business logic that gets the data some how, 
        ////and return it, or a promise to return it.
         
        var serviceApiUrl = "http://path.to.your.host/and/path/to/serviceUrl"
        return $http
        .post(serviceApiUrl,payload)
        .then(function(response){
          return response.data;
        });
      }
      
      function doAnotherBusinessLogic(){
        ////write the business logic that does AnotherBusinessLogic 
        ////and return some reesponse, or a promise to return it.
      }
     
      function addPostToServer(dataFromController){
        ////write the business logic that formats dataFromController to the 
        //// format that the server expect and send the request & then return  a promise to return it.
        
        var payload = dataFromController;
        var serviceApiUrl = "http://path.to.your.host/and/path/to/serviceUrl"
        return $http.post(serviceApiUrl,payload);
      }
    }
</pre>    
</code>    
    </td>
    <td>
    <hr/>
    <h3>الاستخدام </h3>
<code>  
<pre dir="ltr"> 
    function someController(serviceName){
      $scope.userData = [];//initiallized to empty array
      
      activate();
      
      ///////////
      function activate(){
         getUserData(); // this will call the data from the service .
      }
      
      function getUserData(){
        
        serviceName
        .getSomeData()
        .then(function(data){
           
          $scope.userData = data;
        });
      }
    }
</pre>    
</code>    
    </td>
  </tr>
  
  <tr>
    <td> module </td>
    <td> هو الذي يتم من خلاله جمع كل مكونات تطبيق الانجولار ، حيق ان كل الكونتروللرز والسيرفيسيز والفلترز والدايركتيفز تضاف الى الموديل 
    
    اضافة الى ان هذا الموديول سيكون في نهاية المطاف هو نقطة بداية المشروع 
    ng-app="moduleName" حيث ان الانجولار ستحاول ترجمة ما تلاقيه في طريقها من خلال ما تم تعريفه داخل هذا الموديول 
    كان يبحث على اسم كونتروللر حين يجد ng-controller  فانه سيبحث عن هذا 
    الكونتروللر في داخل هذا الموديول 
    
    </td>
    <td> angular.module("moduleName",["OtherModules","ThatThisModuleDependesOn"]); </td>
    <td> angular.module("moduleName").controller( .... 
    هنا يعود ريفيرنس للموديل المطلوب 
    ومن خلاله يمكن اضافة كونتروللرز جديدة وسيرفيسيز وما الى ذلك 
    </td>
    
  </tr>
  
  </tbody>
</tabld>
</div>