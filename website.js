function openPage(evt, page) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(page).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

  /*function contactValidate(contactno)
  {
    var phoneno =/^\d{10}$/; //we stored the regular expression in phone no for validating phone no.
    if(contactno.value.match(phoneno))
    {
      return true;
    }
    else
    {
      return false;
    }
  }*/

  function clickListener(event)
  {
    let textareaInput=document.querySelector('#requirements');
    let contactInput=document.querySelector('#contact');
    let messageInput=document.querySelector('#message');

    let textareaText=textareaInput.value;
    let contactText= contactInput.value;
    let messageText=messageInput.value;

    let contactText1= /^\d{10}$/;    

    console.log('requirements', textareaText ,'contact-no', contactText, 'messageInput', messageText);
    if (contactText.value.match(contacText1)) //error is showing in this line. 
    {
      return true;
    }
    else
    {
      console.log('please enter valid contact number');
      return false;
    }
  }
  let submitbutton=document.querySelector('#submit-button');
  submitbutton.addEventListener('click',clickListener);
