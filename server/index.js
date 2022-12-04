// 35.234.254.79
// 127.0.0.1

const express = require('express')
const app = express()
const cors = require('cors')
const mqtt = require('mqtt')

app.use(cors());
app.use(express.json());

var state1 = 0;
var state2 = 0;
var state3 = 0;
var state4 = 0;
var state5 = 0;
var state6 = 0;
var state7 = 0;
var state8 = 0;
var state9 = 0;
var state10 = 0;
var state11 = 0;
var state12 = 0;

var room1 = mqtt.connect('mqtt://35.234.254.79:1883');
var room2 = mqtt.connect('mqtt://35.234.254.79:1883');
var room3 = mqtt.connect('mqtt://35.234.254.79:1883');
var room4 = mqtt.connect('mqtt://35.234.254.79:1883');
var room5 = mqtt.connect('mqtt://35.234.254.79:1883');
var room6 = mqtt.connect('mqtt://35.234.254.79:1883');
var room7 = mqtt.connect('mqtt://35.234.254.79:1883');
var room8 = mqtt.connect('mqtt://35.234.254.79:1883');
var room9 = mqtt.connect('mqtt://35.234.254.79:1883');
var room10 = mqtt.connect('mqtt://35.234.254.79:1883');
var room11 = mqtt.connect('mqtt://35.234.254.79:1883');
var room12 = mqtt.connect('mqtt://35.234.254.79:1883');

room1.on('connect', function() {
    room1.subscribe("rf/f1");
    console.log("room 1 has subscribed successfully");
});
room1.on('message', function(topic, message) {
    console.log("Data received from room 1 is : " + message.toString());    
    if(message.toString() == "on") {
        state1 = 1;
    } else {
        state1 = 0;
    }
});

room2.on('connect', function() {
    room2.subscribe("rf/f2");
    console.log("room 2 has subscribed successfully");
});
room2.on('message', function(topic, message) {
    console.log("Data received from room 2 is : " + message.toString());    
    if(message.toString() == "on") {
        state2 = 1;
    } else {
        state2 = 0;
    }
});

room3.on('connect', function() {
    room3.subscribe("rf/f3");
    console.log("room 3 has subscribed successfully");
});
room3.on('message', function(topic, message) {
    console.log("Data received from room 3 is : " + message.toString());    
    if(message.toString() == "on") {
        state3 = 1;
    } else {
        state3 = 0;
    }
});

room4.on('connect', function() {
    room4.subscribe("rf/f4");
    console.log("room 4 has subscribed successfully");
});
room4.on('message', function(topic, message) {
    console.log("Data received from room 4 is : " + message.toString());    
    if(message.toString() == "on") {
        state4 = 1;
    } else {
        state4 = 0;
    }
});

room5.on('connect', function() {
    room5.subscribe("rf/f5");
    console.log("room 5 has subscribed successfully");
});
room5.on('message', function(topic, message) {
    console.log("Data received from room 5 is : " + message.toString());    
    if(message.toString() == "on") {
        state5 = 1;
    } else {
        state5 = 0;
    }
});

room6.on('connect', function() {
    room6.subscribe("rf/f6");
    console.log("room 6 has subscribed successfully");
});
room6.on('message', function(topic, message) {
    console.log("Data received from room 6 is : " + message.toString());    
    if(message.toString() == "on") {
        state6 = 1;
    } else {
        state6 = 0;
    }
});

room7.on('connect', function() {
    room7.subscribe("rf/f7");
    console.log("room 7 has subscribed successfully");
});
room7.on('message', function(topic, message) {
    console.log("Data received from room 7 is : " + message.toString());    
    if(message.toString() == "on") {
        state7 = 1;
    } else {
        state7 = 0;
    }
});

room8.on('connect', function() {
    room8.subscribe("rf/f8");
    console.log("room 8 has subscribed successfully");
});
room8.on('message', function(topic, message) {
    console.log("Data received from room 8 is : " + message.toString());    
    if(message.toString() == "on") {
        state8 = 1;
    } else {
        state8 = 0;
    }
});

room9.on('connect', function() {
    room9.subscribe("rf/f9");
    console.log("room 9 has subscribed successfully");
});
room9.on('message', function(topic, message) {
    console.log("Data received from room 9 is : " + message.toString());    
    if(message.toString() == "on") {
        state9 = 1;
    } else {
        state9 = 0;
    }
});

room10.on('connect', function() {
    room10.subscribe("rf/f10");
    console.log("room 10 has subscribed successfully");
});
room10.on('message', function(topic, message) {
    console.log("Data received from room 10 is : " + message.toString());    
    if(message.toString() == "on") {
        state10 = 1;
    } else {
        state10 = 0;
    }
});

room11.on('connect', function() {
    room11.subscribe("rf/f11");
    console.log("room 11 has subscribed successfully");
});
room11.on('message', function(topic, message) {
    console.log("Data received from room 11 is : " + message.toString());    
    if(message.toString() == "on") {
        state11 = 1;
    } else {
        state11 = 0;
    }
});

room12.on('connect', function() {
    room12.subscribe("rf/f12");
    console.log("room 12 has subscribed successfully");
});
room12.on('message', function(topic, message) {
    console.log("Data received from room 12 is : " + message.toString());    
    if(message.toString() == "on") {
        state12 = 1;
    } else {
        state12 = 0;
    }
});

app.get("/rnd/102", (req, res) => {
    var data = {
        "rff1" : state1,
        "rff2" : state2,
        "rff3" : state3,
        "rff4" : state4,
        "rff5" : state5,
        "rff6" : state6,
        "rff7" : state7,
        "rff8" : state8,
        "rff9" : state9,
        "rff10" : state10,
        "rff11" : state11,
        "rff12" : state12
    }
    res.send(data);
});

app.listen(3001, () => {
    console.log("You server is running on port 3001");
});