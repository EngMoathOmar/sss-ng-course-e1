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

## Interpolation `{{ }}`

    
    