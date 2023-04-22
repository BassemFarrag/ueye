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


/*Career

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

*/
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

/*

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

*/



////////////////////////////////
///////////////////////pop-up using sweetAlaret2/////////////////////////
////////////////////////////////////////////////////////////////

//Career pop-up starts
  
     document.getElementById('show-career-and-vision').addEventListener('click', function(){
      Swal.fire({
      title: 'Career',
      text: "We are sorry, we haven't any empty positions yet, be in touch.",
      imageUrl: 'assets/img/sad face.png',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      showCloseButton: true,
      showConfirmButton: false,
      })
    });
  
//Career pop-up Ends

//Who We Are? pop-up starts
  
    document.getElementById('who-we-are').addEventListener('click', function(){
    Swal.fire({
      showCloseButton: true,
      showConfirmButton: false,
      width: '55rem',
      height: '30px',
      title: 'Who We Are?',
      html: '<p><b>Video</b></p>' +
       '<iframe style="width: 704px; height: 396px; border-radius: 7px;" src="https://www.youtube.com/embed/video-id-here" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>' +
       '<p style="text-align:left;">At ueye, <br>we are a team of professionals who are passionate about helping businesses and individuals communicate effectively in today&#39;s global marketplace. We specialize in providing top-quality online services, including multilingual translation and transcription, graphic design, and video editing. Our team is made up of experienced professionals who are experts in their respective fields. We pride ourselves on delivering high-quality work that meets our clients&#39; needs and exceeds their expectations. We work closely with our clients to understand their requirements and provide solutions that are tailored to their unique needs. <br><br> We believe that communication is key to success in today&#39;s world, and that&#39;s why we&#39;re committed to helping our clients break down language and cultural barriers. Our services enable businesses and individuals to connect with others around the world, opening up new opportunities and facilitating collaboration on a global scale.At ueye, we are dedicated to providing exceptional customer service and ensuring that our clients are satisfied with our work. We believe in building long-term relationships with our clients based on trust, transparency, and mutual respect. Thank you for considering ueye for your online services needs. We look forward to working with you and helping you succeed in the global marketplace.  </p>',

      })
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
  text:"Thanks for hiring Us.",
  icon:"success",
  className:"message-success-popup",
})
//message => alert(message)
);
}

