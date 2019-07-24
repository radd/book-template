var one = 0;

window.addEventListener('scroll', anim);

function anim() {
  if(one == 0) {
    var windowYOffset = window.pageYOffset;
    var vote_book = document.getElementById('vote_section');
    var heights = window.innerHeight;
    var vote_book_offset = windowYOffset + vote_book.getBoundingClientRect().top;
    var anim_start = vote_book_offset - (heights / 1.5);

    if(one == 0 && anim_start <= windowYOffset) {
      vote_book.className += " anim";
      one = 1;
    }
  }
};