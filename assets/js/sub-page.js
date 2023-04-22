//Goals


  document.querySelector("#show-goals-and-vision").addEventListener("click", function(){
      document.querySelector(".goals-pop-up").classList.add("active");
  });
  document.querySelector(".goals-pop-up .close-btn").addEventListener("click", function(){
      document.querySelector(".goals-pop-up").classList.remove("active");
  });


    document.querySelector("#show-goals-and-vision").addEventListener("click", function(){
      document.querySelector(".blur-body").classList.add("active");
  });
  document.querySelector(".goals-pop-up .close-btn").addEventListener("click", function(){
      document.querySelector(".blur-body").classList.remove("active");
  });


//Career

    document.querySelector("#show-career-and-vision").addEventListener("click", function(){
      document.querySelector(".career-pop-up").classList.add("active");
  });
  document.querySelector(".career-pop-up .close-btn").addEventListener("click", function(){
      document.querySelector(".career-pop-up").classList.remove("active");
  });


    document.querySelector("#show-career-and-vision").addEventListener("click", function(){
      document.querySelector(".blur-body").classList.add("active");
  });
  document.querySelector(".career-pop-up .close-btn").addEventListener("click", function(){
      document.querySelector(".blur-body").classList.remove("active");
  });


//meet-team

  document.querySelector("#show-meet-team-and-vision").addEventListener("click", function(){
    document.querySelector(".meet-team-pop-up").classList.add("active");
});
document.querySelector(".meet-team-pop-up .close-btn").addEventListener("click", function(){
    document.querySelector(".meet-team-pop-up").classList.remove("active");
});

  document.querySelector("#show-meet-team-and-vision").addEventListener("click", function(){
    document.querySelector(".blur-body").classList.add("active");
});
document.querySelector(".meet-team-pop-up .close-btn").addEventListener("click", function(){
    document.querySelector(".blur-body").classList.remove("active");
});


//terms

  document.querySelector("#show-terms-and-vision").addEventListener("click", function(){
    document.querySelector(".terms-pop-up").classList.add("active");
});
document.querySelector(".terms-pop-up .close-btn").addEventListener("click", function(){
    document.querySelector(".terms-pop-up").classList.remove("active");
});

  document.querySelector("#show-terms-and-vision").addEventListener("click", function(){
    document.querySelector(".blur-body").classList.add("active");
});
document.querySelector(".terms-pop-up .close-btn").addEventListener("click", function(){
    document.querySelector(".blur-body").classList.remove("active");
});


//Who we are page

document.querySelector("#who-we-are").addEventListener("click", function(){
  document.querySelector(".we-pop-up").classList.add("active");
});
document.querySelector(".we-pop-up .close-btn").addEventListener("click", function(){
  document.querySelector(".we-pop-up").classList.remove("active");
});

document.querySelector("#who-we-are").addEventListener("click", function(){
  document.querySelector(".blur-body").classList.add("active");
});
document.querySelector(".we-pop-up .close-btn").addEventListener("click", function(){
  document.querySelector(".blur-body").classList.remove("active");
});


//Hire Us message

function sendEmail(){


  let serviceChecked = document.querySelector('input[type="checkbox"]:checked');

  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let serviceType = serviceChecked.value;
  let body = "Name: " + name + "<br/> Email: " + email + "<br/> Service Type: " + serviceType;
  let Subject = "New Email on Ueye website from " + name;

  Email.send({
  SecureToken : "839fa4de-8928-47be-9762-eb34cd124de8",
  To : 'see@ueye.design',
  From : 'see@ueye.design',
  Subject : Subject,
  Body : body,
}).then(
message => swal({
  title:"Here's a message!",
  text:"Thanks for hired Us.",
  icon:"success",
  className:"message-success-popup",
})
//message => alert(message)
);
}

