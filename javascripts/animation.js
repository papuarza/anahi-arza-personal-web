$( document ).ready(function() {
  document.addEventListener('scroll', function (event) {
    console.log(event.target.activeElement.clientHeight);
  });

});
