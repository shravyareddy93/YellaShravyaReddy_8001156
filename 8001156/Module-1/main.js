/* ==========================================
   LOCAL COMMUNITY EVENT PORTAL
   main.js
   ========================================== */

console.log("Community Event Portal Loaded");

alert("Welcome to the Local Community Event Portal");

/* ==========================================
   VARIABLES
   ========================================== */

let eventFees = {

    Music: 100,
    Food: 150,
    Workshop: 200
};

const portalName =
"Community Event Portal";

/* ==========================================
   TEMPLATE LITERALS
   ========================================== */

console.log(
`Welcome to ${portalName}`
);

/* ==========================================
   ARRAY METHODS
   ========================================== */

const events = [

    "Music Festival",
    "Food Fair",
    "Art Exhibition",
    "Book Fair",
    "Marathon",
    "Cultural Dance"
];

events.forEach(event => {

    console.log(event);
});

const filteredEvents =
events.filter(event =>
event.includes("Fair"));

console.log(filteredEvents);

const upperEvents =
events.map(event =>
event.toUpperCase());

console.log(upperEvents);

/* ==========================================
   SPREAD OPERATOR
   ========================================== */

const extraEvents = [

    "Workshop",
    "Volunteer Drive"
];

const allEvents = [

    ...events,
    ...extraEvents
];

console.log(allEvents);

/* ==========================================
   DESTRUCTURING
   ========================================== */

const [firstEvent] =
events;

console.log(firstEvent);

/* ==========================================
   EVENT DATA
   ========================================== */

const eventData = [

    {
        title:"Music Festival",
        date:"2026-07-10",
        location:"City Park"
    },

    {
        title:"Food Fair",
        date:"2026-07-15",
        location:"Community Hall"
    },

    {
        title:"Art Exhibition",
        date:"2026-07-20",
        location:"Art Gallery"
    }
];

/* ==========================================
   DYNAMIC EVENT CARDS
   ========================================== */

document.addEventListener(
"DOMContentLoaded",
function(){

    const container =
    document.getElementById(
    "eventContainer"
    );

    if(container){

        eventData.forEach(item => {

            const card =
            document.createElement(
            "div"
            );

            card.className =
            "eventCard";

            card.innerHTML = `

                <h3>${item.title}</h3>

                <p>
                Date:
                ${item.date}
                </p>

                <p>
                Location:
                ${item.location}
                </p>

            `;

            container.appendChild(
            card
            );
        });
    }
});

/* ==========================================
   SHOW EVENT FEE
   ========================================== */

function showFee(){

    const eventType =
    document.getElementById(
    "eventType"
    ).value;

    const fee =
    eventFees[eventType];

    document.getElementById(
    "feeDisplay"
    ).innerHTML =

    fee
    ?
    `Registration Fee: ₹${fee}`
    :
    "";

    localStorage.setItem(
    "preferredEvent",
    eventType
    );
}

/* ==========================================
   LOAD SAVED EVENT
   ========================================== */

window.onload = function(){

    const savedEvent =
    localStorage.getItem(
    "preferredEvent"
    );

    if(savedEvent){

        document.getElementById(
        "eventType"
        ).value = savedEvent;

        showFee();
    }
};

/* ==========================================
   CHARACTER COUNTER
   ========================================== */

function countCharacters(){

    const text =
    document.getElementById(
    "feedback"
    ).value;

    document.getElementById(
    "charCount"
    ).innerHTML =
    text.length;
}

/* ==========================================
   PHONE VALIDATION
   ========================================== */

function validatePhone(){

    const phone =
    document.getElementById(
    "phone"
    ).value;

    if(!/^[0-9]{10}$/.test(phone)){

        alert(
        "Enter a valid 10-digit phone number"
        );
    }
}

/* ==========================================
   IMAGE ENLARGE
   ========================================== */

function enlargeImage(img){

    if(img.style.transform
    === "scale(1.5)"){

        img.style.transform =
        "scale(1)";
    }

    else{

        img.style.transform =
        "scale(1.5)";
    }
}

/* ==========================================
   FORM VALIDATION
   ========================================== */

const form =
document.getElementById(
"registrationForm"
);

if(form){

form.addEventListener(
"submit",
function(event){

    event.preventDefault();

    let valid = true;

    const name =
    document.getElementById(
    "name"
    ).value.trim();

    const email =
    document.getElementById(
    "email"
    ).value.trim();

    document.getElementById(
    "nameError"
    ).innerHTML = "";

    document.getElementById(
    "emailError"
    ).innerHTML = "";

    if(name.length < 3){

        document.getElementById(
        "nameError"
        ).innerHTML =

        "Name must contain at least 3 characters";

        valid = false;
    }

    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){

        document.getElementById(
        "emailError"
        ).innerHTML =

        "Enter valid email";

        valid = false;
    }

    if(valid){

        sessionStorage.setItem(
        "username",
        name
        );

        document.getElementById(
        "confirmation"
        ).innerHTML =

        `Thank you ${name},
         registration completed successfully!`;

        setTimeout(() => {

            alert(
            "Registration Saved"
            );

        },1000);
    }
});
}

/* ==========================================
   CLEAR STORAGE
   ========================================== */

function clearPreferences(){

    localStorage.clear();

    sessionStorage.clear();

    document.getElementById(
    "feeDisplay"
    ).innerHTML = "";

    alert(
    "Preferences Cleared"
    );
}

/* ==========================================
   VIDEO EVENT
   ========================================== */

function videoReady(){

    document.getElementById(
    "videoMessage"
    ).innerHTML =

    "Video is ready to play.";
}

/* ==========================================
   GEOLOCATION
   ========================================== */

function findLocation(){

    if(navigator.geolocation){

        navigator.geolocation
        .getCurrentPosition(

        function(position){

            document.getElementById(
            "locationResult"
            ).innerHTML =

            `Latitude:
            ${position.coords.latitude}

            <br>

            Longitude:
            ${position.coords.longitude}`;
        },

        function(){

            document.getElementById(
            "locationResult"
            ).innerHTML =

            "Location access denied.";
        });
    }

    else{

        document.getElementById(
        "locationResult"
        ).innerHTML =

        "Geolocation not supported.";
    }
}

/* ==========================================
   FETCH API WITH LOADING SPINNER
   ========================================== */

async function fetchEvents(){

    const spinner =
    document.getElementById(
    "loadingSpinner"
    );

    spinner.style.display =
    "block";

    try{

        const response =
        await fetch(
        "https://jsonplaceholder.typicode.com/posts"
        );

        const data =
        await response.json();

        console.log(
        "Fetched Events:",
        data
        );

    }

    catch(error){

        console.log(error);
    }

    finally{

        spinner.style.display =
        "none";
    }
}

fetchEvents();

/* ==========================================
   CALLBACK FUNCTION
   ========================================== */

function processEvent(
eventName,
callback
){

    callback(eventName);
}

processEvent(

"Music Festival",

function(name){

    console.log(
    "Processing: " +
    name
    );
});

/* ==========================================
   CLOSURE EXAMPLE
   ========================================== */

function registrationCounter(){

    let count = 0;

    return function(){

        count++;

        console.log(
        "Registrations: " +
        count
        );
    };
}

const counter =
registrationCounter();

counter();
counter();

/* ==========================================
   CLASS EXAMPLE
   ========================================== */

class Event{

    constructor(
    title,
    date
    ){

        this.title = title;

        this.date = date;
    }

    details(){

        return `${this.title}
        on ${this.date}`;
    }
}

const eventObj =
new Event(
"Workshop",
"2026-08-10"
);

console.log(
eventObj.details()
);

/* ==========================================
   PROTOTYPE EXAMPLE
   ========================================== */

function User(name){

    this.name = name;
}

User.prototype.greet =
function(){

    return `Hello ${this.name}`;
};

const user =
new User("Visitor");

console.log(
user.greet()
);

/* ==========================================
   OBJECT ENTRIES
   ========================================== */

Object.entries(eventFees)
.forEach(

([event,fee]) => {

console.log(
event,
fee
);
});

/* ==========================================
   PUSH EXAMPLE
   ========================================== */

let demoArray = [];

demoArray.push(
"Community Event"
);

console.log(demoArray);

/* ==========================================
   POST REQUEST EXAMPLE
   ========================================== */

fetch(
"https://jsonplaceholder.typicode.com/posts",
{
method:"POST",

headers:{
"Content-Type":
"application/json"
},

body:JSON.stringify({

title:"Registration",

body:"Success",

userId:1
})
})
.then(response =>
response.json()
)
.then(data =>
console.log(data)
)
.catch(error =>
console.log(error)
);

/* ==========================================
   BEFORE UNLOAD WARNING
   ========================================== */

window.onbeforeunload =
function(){

    return
    "Changes may not be saved.";
};

/* ==========================================
   JQUERY
   ========================================== */

$(document).ready(

function(){

    $("#registerBtn")
    .click(

    function(){

        $("footer")
        .fadeOut(1000)
        .fadeIn(1000);
    });
});