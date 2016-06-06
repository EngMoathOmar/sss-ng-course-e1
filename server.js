'use strict';
var port = 80;
// simple express server
var express = require('express'); // npm install express 
var app = express();
var router = express.Router();
var teachers = [];
var fs = require('fs');
var storeItems = [];
var storeItemsDetails = [];
var storeSellers = [];

app.use(express.static('./'));

app.get('/', function (req, res) {
    res.sendfile('./index.html');
});

app.get('/getTeachers', function (req, res) {
    res.send(teachers);
});

app.post("/addTeacher", function (req, res) {
    var teacher = req.body;
    teachers.push(teacher);
    return teachers;
});

app.get('/Items', function (req, res) {
    if (!storeItemsDetails || !storeItemsDetails.length) {
        storeItemsDetails = JSON.parse(fs.readFileSync('./server/store_db.json', 'utf8'));
        storeItems = extractOnlyItem();
        setTimeout(function () {
            extractSellers();
        }, 100);
    }
    return res.send(storeItems);
});

app.get('/Items/:id', function (req, res) {
    var id = req.params.id;
    var item = storeItemsDetails.filter(function(_item){
        return _item.id == id;
    })[0];
    return res.send(item);
});

app.get('/sellers', function (req, res) {
    res.send(storeSellers);
});

app.get('/sellers/:id', function (req, res) {
    var id = req.params.id;
    if (storeSellers[id]) {
        res.send(storeSellers[id]);
    } else {
        res.status(404).send("not found");
    }
});


app.listen(port);
console.log("start Listening at port: %d", port);

function extractOnlyItem(params) {
    storeItems = storeItemsDetails.map(function name(item) {
        return {
            id: item.id,
            name: item.name,
            image: item.image,
            price: item.price,
            quantity: item.quantity,
            rank: item.rank,
            stor: item.seller.store,
        };
    });

    return storeItems;
}


function extractSellers() {
    storeItemsDetails.map(function name(item) {
        storeSellers[item.seller.id] = item.seller;
    });
}

teachers = [{ "id": 1, "gender": "Female", "first_name": "Helen", "last_name": "Morales", "email": "hmorales0@infoseek.co.jp", "job": "Internal Auditor", "students": [{ "name": "Christopher Fernandez", "age": 49 }], "bio": "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.", "image": "http://dummyimage.com/250x136.jpg/ff4444/ffffff" },
    { "id": 100, "gender": "Male", "first_name": "Mark", "last_name": "Graham", "email": "mgraham2r@engadget.com", "job": "Teacher", "students": [{ "name": "Russell Perkins", "age": 50 }, { "name": "Thomas Lee", "age": 23 }, { "name": "Roy Morrison", "age": 34 }, { "name": "Cheryl Walker", "age": 1 }, { "name": "Joshua Freeman", "age": 95 }, { "name": "Antonio Cox", "age": 6 }, { "name": "Chris White", "age": 82 }, { "name": "Nicole Day", "age": 96 }, { "name": "Timothy Price", "age": 4 }, { "name": "Aaron Gutierrez", "age": 9 }, { "name": "Walter White", "age": 8 }, { "name": "Thomas Montgomery", "age": 10 }, { "name": "Billy Matthews", "age": 91 }, { "name": "Peter King", "age": 18 }, { "name": "Amy Henderson", "age": 95 }, { "name": "Kathryn Lane", "age": 42 }, { "name": "Jeffrey West", "age": 93 }, { "name": "Sarah Parker", "age": 92 }, { "name": "Gregory Garza", "age": 55 }, { "name": "Marie Bennett", "age": 51 }], "bio": "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.", "image": "http://dummyimage.com/108x194.bmp/cc0000/ffffff" }];