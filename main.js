var formData = [
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current website url",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobil Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

//form box
var x = document.getElementById('form');
x.setAttribute("action", "");
x.setAttribute("method", "post");


// //header for form
// var header = document.createElement('header');
// var hOne = document.createElement('h1');
// var headtext = document.createTextNode("Sign Up For My Web App");
// document.body.appendChild(header);
// hOne.appendChild(headtext);
// header.appendChild(hOne);


//first name field
for (var i = 0; i < formData.length; i++){
  console.log('input', formData[i]);
  if(formData[i].type === 'text'){
    var element = document.createElement('input');
    element.placeholder = formData[i].label;
    document.getElementById('form').appendChild(element);

  } else if (formData[i].type === 'email'){
    var eMail = document.createElement('input');
    eMail.placeholder = formData[i].label;
    document.getElementById('form').appendChild(eMail);

  } else if (formData[i].type === 'select'){
    var selectOption = document.createElement('select');
    var defaultOption = document.createElement('option');
    defaultOption.textContent = "Select Languages";
    selectOption.appendChild(defaultOption);

    for(var j = 0; j < formData[i].options.length; j++) {    // this code is going through the individual object
      var option = document.createElement('option');   //this is creating an option element
      option.textContent = formData[i].options[j].label; //this is adding text content to the option elements with by going into the formData object, selection the options array and selecting the label property "Japanese, French, etc"
      selectOption.appendChild(option);  // this code is pushing the option element into the selectOption from the previous block of code
    }

    // selectOption.name = formData[i].label;

    document.getElementById('form').appendChild(selectOption);

  } else if (formData[i].type === 'textarea'){
    var textInput = document.createElement('textarea');
    textInput.placeholder = formData[i].label;
    document.getElementById('form').appendChild(textInput);

  } else if (formData[i].label === 'Mobil Number') {
    var mobilNum = document.createElement('input');
    mobilNum.setAttribute('type','number');
    mobilNum.placeholder = formData[i].label;
    document.getElementById('form').appendChild(mobilNum);

  } else if (formData[i].label === 'Home Number') {
    var mobilNum = document.createElement('input');
    mobilNum.setAttribute('type','number');
    mobilNum.placeholder = formData[i].label;
    document.getElementById('form').appendChild(mobilNum);
  }
}

  // var first = document.createElement('input');
  // var input = formData[i];
  // var firstName = input.label;
  //
  // first.type = 'text';
  // first.className = 'firstName';
  // first.placeholder = 'First';
  // document.body.appendChild(first);
  // console.log(first);
  // console.log(firstName);
// var last = document.createElement('input');
// var email = document.createElement('email');
// var url = document.createElement('url');
// for(var i = 0; i < formData.length; i++){
//
// }
