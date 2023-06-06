var p1, p2, p3, p4, p5, p6;
var name = prompt("Please can you specify your name....");
name = name.toUpperCase();
alert("Ok " + name + ", Let's see how much you know about me...");
var relation = prompt("Who are you to me?");
relation = relation.toLowerCase();
function relations() {
    switch (relation) {
        case 'brother':
            p1 = 15;
            break;
        case 'sister':
            p1 = 20;
            break;
        case 'friend':
            p1 = 10;
            break;
        default:
            p1 = 5;
    }
    return p1;
}

var hobbie = prompt("What I love the most?\n1).Dancing\n2).Singing\n3).Programming\n4).Fighting");
hobbie = hobbie.toLowerCase();
function hobbies() {
    switch (hobbie) {
        case 'dancing':
            p2 = 20;
            break;
        case 'singing':
            p2 = 10;
            break;
        case 'programming':
            p2 = 15;
            break;
        default:
            p2 = 5;
    }
    return p2;
}

var food = prompt("Type of food I like, choose any one of it,\n1).Homemade\n2).Chinese\n3).Western\n4).DietaryFood");
food = food.toLowerCase();
function foods() {
    switch (food) {
        case 'homemade':
            p3 = 20;
            break;
        case 'chinese':
            p3 = 10;
            break;
        case 'dietary food':
            p3 = 15;
            break;
        default:
            p3 = 5;
    }
    return p3;
}

var icecream = prompt("Do you know the flavour of my Favourite icecream")
icecream = icecream.toLowerCase();
function icecreams() {
    switch (icecream) {
        case 'chocolate':
            p4 = 20;
            break;
        case 'strawberry':
            p4 = 10;
            break;
        case 'mango':
            p4 = 15;
            break;
        default:
            p4 = 5;
    }
    return p4;
}

var emotion = prompt("What I may choose in these,\n1).Love\n2).Money");
emotion = emotion.toLowerCase();
function emotions() {
    switch (emotion) {
        case 'love':
            p5 = 20;
            break;
        case 'money':
            p5 = 10;
        default:
            p5 = 5;
    }
    return p5;
}

var place = prompt("Places I want to visit,\n1).Japan\n2).America\n3).Australia\n4).Kerala");
place = place.toLowerCase();
function places() {
    switch (place) {
        case 'japan':
            p6 = 15;
            break;
        case 'Australia':
            p6 = 10;
            break;
        case 'kerala':
            p6 = 20;
            break;
        default:
            p6 = 5;
    }
    return p6;
}
alert("Let me calculate the result,Please do hit the OK button");

var P = relations() + hobbies() + foods() + icecreams() + emotions() + places();

if (P <= 200 && P > 100) {
    alert(P + "%\nYou really scored that much😮,Then I think you are really close to me🥰🥰, Love you😘😘my " + relation + " and even Thank you very much for your love" + name);
}
else if (P <= 100 && P > 80) {
    alert(P + "%\nYou really know me very well, Love you😘my " + relation + " Thank you Dear");
}
else if (P <= 80 && P > 60) {
    alert(P + "%\nYou know what I would like to be and what I just don't love, even though ,Love you😘😘my " + relation + " Thank you");
}
else if (P <= 60 && P > 40) {
    alert(P + "%\nYou know something special about me, Love you😊my " + relation + " Thank for your precious time");
}
else if (P <= 40 && P > 20) {
    alert(P + "%\nI think you are not that close to me, even though, Thank you😊my dear " + realtion);
}
else {
    alert(P + "%\nThank you for your time dear, " + name);
}
