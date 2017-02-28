$(document).on('turbolinks:load', function(){
var page = window.location.pathname;
if (page == "/"){
$('.fh5co-cover-intro').prepend('<h1 class="cover-text-lead wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">Steve E. Gordon<span class="subhead"></br>Web Developer</span> </h1><h2 class="cover-text-sublead wow fadeInUp" data-wow-duration="1s" data-wow-delay=".8s">Welcome to my personal webpage. Here you can find out who I am, look at some of my projects, and find out what i\'m learning/reading about.</h2>'
  );
}
else if (page == "/posts"){
$('.fh5co-cover-intro').prepend('<h1 class="cover-text-lead wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">Blog</h1><h2 class="cover-text-sublead wow fadeInUp" data-wow-duration="1s" data-wow-delay=".8s">I have lots of interests including coding, sports, movies, or tech that I occasionally post about. Here\'s what I\'ve recently learned, what bothers me, and things that just seem generally appealing to me.</h2><p class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.1s">'
  );
}
else if (page == "/about_me"){
$('.fh5co-cover-intro').prepend('<h1 class="cover-text-lead wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">About Me</h1><h2 class="cover-text-sublead wow fadeInUp" data-wow-duration="1s" data-wow-delay=".8s">Considering my web adress it should be fairly obvious that my name is Steve Gordon. I am a 31 year old web developer who has had alot of stops along the way, from bartending to medical sales. Here is a little bit more about how I ended up finding programming, who I am, and what I can offer.</h2><p class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.1s">'
  );
}
else if (page == "/projects"){
$('.fh5co-cover-intro').prepend('<h1 class="cover-text-lead wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">Projects</h1><h2 class="cover-text-sublead wow fadeInUp" data-wow-duration="1s" data-wow-delay=".8s">While I attended General Assembly Los Angeles I learned a number of languages and worked on many projects in condensed time periods. Some of the projects were individual and others were team based. I worked on the front-end and back-end on all of them and here are a few:</h2><p class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.1s">'
  );
}
else {}
});


