$(document).on('turbolinks:load', function(){
var page = window.location.pathname;
if (page == "/"){
$('.fh5co-cover-intro').prepend('<h1 class="cover-text-lead wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">Steve E. Gordon<span class="subhead"></br>Web Developer</span> </h1><h2 class="cover-text-sublead wow fadeInUp" data-wow-duration="1s" data-wow-delay=".8s">Welcome to my personal webpage. Here you can find out who I am, look at some of my projects, and find out what i\'m learning/reading about.</h2>'
  );
}
else if (page == "/posts"){
$('.fh5co-cover-intro').prepend('<h1 class="cover-text-lead wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">Blog</h1><h2 class="cover-text-sublead wow fadeInUp" data-wow-duration="1s" data-wow-delay=".8s">Here\'s what I\'ve recently learned, what bothers me, and things that just seem generally appealing to me.</h2><p class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.1s">'
  );
}
else if (page == "/about_me"){
$('.fh5co-cover-intro').prepend('<h1 class="cover-text-lead wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">About Me</h1><h2 class="cover-text-sublead wow fadeInUp" data-wow-duration="1s" data-wow-delay=".8s">Welcome to my personal webpage. Here you can find out who I am, look at some of my projects, and find out what i\'m learning/reading about.</h2><p class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.1s">'
  );
}
else if (page == "/projects"){
$('.fh5co-cover-intro').prepend('<h1 class="cover-text-lead wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">Projects</h1><h2 class="cover-text-sublead wow fadeInUp" data-wow-duration="1s" data-wow-delay=".8s">Welcome to my personal webpage. Here you can find out who I am, look at some of my projects, and find out what i\'m learning/reading about.</h2><p class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.1s">'
  );
}
else {}
});


