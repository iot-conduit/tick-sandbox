// MQTT.fx test script
//
// Publish MQTT messages to the test.mosquitto.org broker 
// with topic levelup/demo. 
//
// Note: the broker must be configured prior to running this.

var Thread = Java.type("java.lang.Thread");
var loops = 10;
var sleep = 1000; //millis
var lower = 1;
var upper = 50;

// loop up and down through random numbers between 
// with sleep between each publish.
function execute(action) {
    out("Publish Test Script: " + action.getName());
    
    for (var i = 1; i <= loops; i++) {
        publishTestData();
    }
    
    action.setExitCode(0);
    out("Publish Test Script: Done");
    return action;
}

function publishTestData() {
    for (var i = lower; i <= upper; i++) {
        var x = getRandomInt(i, i+4);
        mqttManager.publish("levelup/demo", "{\"number\":" + x + "}");
        out("{\"number\":" + x + "}");
        Thread.sleep(sleep);
    }
    
    for (var i = upper; i >= lower; i--) {
        var x = getRandomInt(i-4, i);
        mqttManager.publish("levelup/demo", "{\"number\":" + x + "}");
        out("{\"number\":" + x + "}");
        Thread.sleep(sleep);
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var number = Math.floor(Math.random() * (max - min + 1)) + min;
    if(number < 0){
        number = 0;
    }

    return number;
}

function out(message){
    output.print(message);
}



