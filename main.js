// TravelGo: smooth scroll + AJAX booking (simulated)
(function($){
  $(function(){
    // smooth scroll for internal links
    $('a[href^="#"]').on('click', function(e){
      var target = $($(this).attr('href'));
      if(target.length){ e.preventDefault(); $('html,body').animate({scrollTop: target.offset().top - 70}, 600); }
    });

    $('#booking-form').on('submit', function(e){
      e.preventDefault();
      var $btn = $('#submit-book').prop('disabled', true).text('Sending...');
      var data = $(this).serializeArray();
      // simulate AJAX request; in a real site you'd POST to a server endpoint
      setTimeout(function(){
        $('#booking-result').html('<div class="alert alert-success">Thank you! Your booking request has been received (demo).</div>');
        $btn.prop('disabled', false).text('Submit Booking (AJAX)');
        $('#booking-form')[0].reset();
      }, 900);
    });
  });
})(jQuery);
