var express = require('express'),
    app = express(),
    path = require('path'),
    bodyParser = require('body-parser');
app.use('/', express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
})
app.get('/22_8', function(req, res) {
    res.sendFile(path.join(__dirname + '/22_8/22_8.html'));
})

///page={num}/s={snoozed}/p={pinned}
app.get('/threads', function(req, res) {
    res.json({threads: [
            {
                "_id": 
                            "aaaaaaa" ,
                "email": 
                        {
                            "from" : 
                                    {
                                        "firstName": "Filip",
                                        "lastName": "Szamborski",
                                        "picture": "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
                                    },
                            "date" : "8:05",
                            "title": "Today meeting opened",
                            "text": "Lorem", 
                        }
            },
            {
                  "_id": "aaaaaaa",
                "email": 
                        {
                            "from" : 
                                    {
                                        "firstName": "Robert",
                                        "lastName": "Smith",
                                        "picture": "data:image/jpeg;base64,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",
                                    },
                            "date" : "6:45",
                            "title": "Rules of cooperation",
                            "text": "Lorem",
                        }
            },
            //...max of 18 more
        ]})
})


app.get('/email', function(req, res) {
    res.json({email: [
            {
                "title": 
                            "Today meetings opened!" ,
                "tags": [
                            {
                                "_id": "taga",
                                "content": "Meetings"
                            } 
                          ],
                "emails": [
                            {
                                "_id": "emaila",
                                "from":  
                                        {
                                            "firstName": "Robert",
                                            "lastName": "Smith",
                                            "picture": "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
                                    },
                                "date" : "Wednesday 6 Mar 17 21:22",
                                "title": "Rules of cooperation",
                                "to": [{}],
                                "cc": [{}],
                                "attachments" : [{}],
                                "text": "Lorem"
                            }
                         ]
            }
            //...max of 18 more
        ]})
})

app.get('/project_list', function(req, res) {
    res.json({project_list: [
            {
                "success": "False",
                "projects": [{
                    "id": "projecta",
                    "date": "August 5 2018",
                    "name": "Students Satisfaction Reports",
                    "purpose": "Checking up on student satisfaction",
                    "numOfMembers": 42,
                    "tags": [
                        "scholarly"
                    ]
                }]
            }     
        ]})
})

app.post('/project', function(req, res) {
    console.log(req.body);
    console.log("Name is", req.body.name);
    console.log("Purpose is", req.body.purpose);
    res.status(200).send("hello");
    // res.json({project: [
    //         {
                
                            
                         
    //         }
    //         //...max of 18 more
    //     ]})
})

app.listen(3000, function(req, res) {
    console.log("Listening on 3000");
})