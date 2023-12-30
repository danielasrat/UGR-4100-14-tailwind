const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#navbarMenu');

var Facebook = document.getElementById('facebook');
var Instagram = document.getElementById('instagram');
var Youtube = document.getElementById('youtube');
var Linkedin = document.getElementById('linkedin');


burgerIcon.addEventListener('click', () =>{
    navbarMenu.classList.toggle('is-active');
});

  var ContactButton = document.getElementById('button_contact');
  var Hire_me = document.getElementById('Hire_me');


  ContactButton.addEventListener('click', function() {
      var filePath = './contact-me.html';
      window.location.href = filePath;
  });

  Hire_me.addEventListener('click', function() {
    var filePath = './contact-me.html';
    window.location.href = filePath;
  });

  function downloadCv(){
    var filePath = './DanielAsratCV.pdf'
    window.open(filePath)
  }
  function toggleMobileMenu() {
    var menu = document.getElementById('mobile-menu');
    var button = document.getElementById('mobile-menu-button');

    menu.classList.toggle('hidden');
    button.innerHTML = menu.classList.contains('hidden') ? '<span class="fa fa-bars"></span>' : '<span class="fa fa-times"></span>';
}


  Facebook.addEventListener('click', function() {
    location.href = "https://www.facebook.com/profile.php?id=100079797836024";

  })

  Instagram.addEventListener('click', function() {
    location.href = "https://www.instagram.com/_danielasrat/";
    
  })

  Youtube.addEventListener('click', function() {
    location.href = "https://www.youtube.com/@ADTech_Tube";
    
  })

  Linkedin.addEventListener('click', function() {
    location.href = "https://www.linkedin.com/in/danielasrat/";
    
  })
