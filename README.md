# sss-ng-course-e1
# sss-ng-course-e1

##data binding: 

<div dir="rtl">
 `model عملية تمرير البيانات من  \ الى \ او من والى عالم الجافاسكريبت الموديل `
 
 `الى\ او من \ او من والى  عالم ال html view وذلك من خلال احدى الطرق والاتجاهات المتوفرة `
   
</div>
 ####DATABINDING انواع 
 
<table style="border:1px solid green" border="1"> 
<thead>
<tr>
<th>النوع</th>
<th> الاتجاه </th>
<th> الامكانيات </th>
<th> مثال </th>
</tr>
</thead>
<tbody>
<tr>
<td> `{{ }}`  interpolation</td>
<td> 1-way from  model-> view من الموديل الى الفيو</td>
<td> طباعة قيمة متغير ، او اجراء عملية حسابية بين المغيرات الموجودة</td>
<td> {{1+2}} => 3 ; {{ "a" +1 }} => a1
</tr>

<tr>
<td> `ng-bind ` attribute interpolation</td>
<td> 1-way from model-> view من الموديل الى الفيو</td>
<td> طباعة قيمة متغير ، او اجراء عملية حسابية بين المغيرات الموجودة</td>
<td> `<span ng-bind="'a' +1"></span>` ==> a1
</tr>

<tr>
<td> `ng-init ` </td>
<td> 1-way from view -> model </td>
<td> تستخدم لتعريف او اضافة متغير من الفيو الى الموديل </td>
<td> `<span ng-init="name='ahmad'"> </span> {{name}} ` ==> ahmad 
</tr>

<tr>
<td> `ng-model` </td>
<td> 2-way from model-> view & from view -> model كلاهما</td>
<td> عادة تستخدم مع المدخلات لربط قيمة متغير بما يدخله او يراه المستخدم</td>
<td> `<input ng-model="name"> {{name}} `  هنا سيتغير الأسم مع ما يدخله المستخدم</td>
</tr>



</tbody>
</table> 

## Angular Directives `{{ }}`
<div dir="rtl">
ال directive عبارة عن نص-برمجي صغير جدا يتم استبداله في مرحلة التشغيل بوظيفة 
معينة وهذه الوظيفة يتراوح حجمها بين حجم معالجة بيانات بسيط كاظهار او اخفاء 
عنصر، او اضافة تصرف او سلوك معين للfunction اخر 
وقد يصل في بعض الاحيان الى اخفاء كثير من التفاصيل المعقدة 
 وعمليات المعالجة المعقدة ايضا  خلف هذه المقطوعة الصغيرة من النص
 وهي شائعة الاستخدامات في اطر العمل 
 frameworks. وذلك عادة لتحقيق اعادة استخدام النص البرمجي واضفاء السلوك كما ذكرنا سابقا
 ومن الجدير بالذكر ان هذه ال"دايركتيفز" ياتي جزء كبير منها من المكتبات واطر العمل المستخدمة، وجزء آخر 
 يقوم المطورون  "المبرمجون"عادة  بتطوير بعض الدايركتيفز الخاصة بهم 
  </div>
 ### Some Angular Directives 
   
<table style="border:1px solid green" border="1"> 
<thead>
<tr>
<th>الأسم </th>
<th> الوظيفة التي تقوم بها  </th>
<th> مثال </th>
<th> تفاصيل </th>
</tr>
</thead>
<tbody>
<tr>
<td> `ng-bind ` attribute interpolation</td>
<td dir="rtl"> طباعة قيمة متغير ، او اجراء عملية حسابية بين المغيرات الموجودة</td>
<td> `<span ng-bind="'a' +1"></span>` ==> a1 </td>
<td> </td>
</tr>

<tr>
<td> `ng-init ` </td>
<td dir="rtl"> تستخدم لتعريف او اضافة متغير من الفيو الى الموديل </td>
<td> `<span ng-init="name='ahmad'"> </span> {{name}} ` ==> ahmad </td>
<td> </td>
</tr>

<tr>
<td> `ng-model` </td>
<td dir="rtl"> عادة تستخدم مع المدخلات لربط قيمة متغير بما يدخله او يراه المستخدم</td>
<td> `<input ng-model="name"> {{name}} `  هنا سيتغير الأسم مع ما يدخله المستخدم</td>
<td> </td>
</tr>

<tr>
<td> `ng-show` </td>
<td dir="rtl"> وكما يوحي اسمها، تستخدم لاظهار عنصر \"تاج element\tag" معين عند تحقق الششرط المقرون بها</td>
<td>    
    `<h4 src="path\toimg.jpg" ng-show="notRegistered == true" > مرحبا بك انقر هنا للتسجيل</h4>`
</td>
<td dir="rtl"> هنا ستظهر  جملة "مرحبا بك ... " فقط حينما يتحقق 
    شرط `notRegistered == true`
  </td>
</tr>


<tr>
<td> `ng-hide` </td>
<td dir="rtl"> وكما يوحي اسمها، تستخدم لاظهار عنصر \"تاج element\tag" معين عند تحقق الشرط المقرون بها</td>
<td> 
    `<h4 src="path\toimg.jpg" ng-hide="isRegistered == true" > مرحبا بك انقر هنا للتسجيل </h4>`
</td>
<td dir="rtl"> هنا ستظهر  جملة "مرحبا بك ... " فقط حينما يتحقق 
    شرط `isRegistered == true`
  </td>
</tr>


<tr>
<td> `ng-if` </td>
<td  dir="rtl"> وكما يوحي اسمها، تستخدم لحذف "وليس اخفاء" عنصر \"تاج element\tag" معين عند عدم تحقق الشرط المقرون بها</td>
<td> 
    ```<h4 src="path\toimg.jpg" ng-if="isRegistered == true" > مرحبا بك انقر هنا للتسجيل </h4>```
</td>
<td dir="rtl"> اذا لم يتحقق الشرط سيتم حظف العنصر من ال dom
  </td>
</tr>


<tr>
<td> `ng-repeat` </td>
<td dir="rtl"> تكرار عرض ومعالجة العنصر المضافة اليه في ال الصفحة </td>
<td> `<ul> <li ng-repeat="number in  [9,8,7,4] "> {{number}} </li> </ul>`
</td>
<td> 
في هذه الحالة سيتم تكرار تاج ال li .. 
وعمل متغير اسمه number يحمل قيمة كل عنصر في المصفوفة array , لوتوفيره في كل صف 
لاحظ تكرر العنصر li 

<hr/>
     
`<li> 9 </li>
<li> 8 </li>
<li> 7 </li>
<li> 4 </li>`
<li> 9 </li>
<li> 8 </li>
<li> 7 </li>
<li> 4 </li>
 
  </td>
</tr>


<tr>
<td> `ng-class` </td>
<td dir="rtl">  تستخدم لاضافة كلاس class  معينة الى العنصر عند تحقق شرط معين وحذفها اذا لم يتحقق الشرط 

عادة تسخدم كما يوحي اسمها لاضفة مشروطة لل كلاس وغالبا بهدف تحقيق 
ستايل معين بناءا على الكلاس عند تحقق شرط معين 
كطلاء خلفية صف اختاره المستخدم بلون مختلف </td>
<td> `<ul> <li ng-repeat="number in  [9,8,7,4]" ng-class="{'color-red':number%2 == 0}"> {{number}} </li> </ul>`</td>
<td dir="rtl"> 
 في هذه الحالة سيتم اضافة 
 "color-red" class to tag li 
 عندما يكون قيمة المتغير number هو عدد زوجي فقط
 ام عندما تكون القيمة فردية فلن تتم اضافة ال class
 وذلك حسب الشرط 
 number %2 == 0 "باقي القسمة يساوي صفر"     
  </td>
</tr>

<tr>
<td> `ng-click` </td>
<td dir="rtl"> ،  تستخدم لاضافة مستمع لحدث النقر على هذا العنصر باستخدام مؤشر الفارة  
 حيث تربط عادة مع مستمع "فنكشن" يتم مناداته  عند حدوث النقر او تنفيذ "exepression" معين </td>
<td> `<ul> <li ng-repeat="number in  [9,8,7,4]" ``ng-click="setSelectedNumber( number )"``> {{number}} </li> </ul>`</td>
<td dir="rtl"> 
 في هذه الحالة سيتم اضافة عند النقر على رقم 5 مثلا في القائمة ، سيتم تمرير حدث النقر الى ال 
 li  ومن خلالها ولأنها تحمل ng-click  سيتم تنفيذ النص المخزن في ng-click  حيث سيتم هناك 
 مناداة ال function setSelectedNumber وتمرير المتغير number "ذات القيمة 5" الى ذلك الحدث وهناك يتم 
 تنفيذ الاجراء المناسب بهذا الحدث
  </td>
</tr>



</tbody>
</table> 

</div>
    
    
https://github.com/EngMoathOmar/sss-ng-course-e1
