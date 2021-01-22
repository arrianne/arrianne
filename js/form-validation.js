// Wait for the DOM to be ready
$(document).ready(function () {
  // Initialize form validation on the registration form.
  $('#contact-form').validate({
    // Specify validation rules
    rules: {
      name: "required",
      email: {
        required: true,
        email: true 
      },
      message: {
        required: true,
        minlength: 5
      }
    },
    // Specify validation error messages
    messages: {
      name: "You have a name right?",
      email: "Hmm that doesn't seem to be a valid email address",
      message: "What's on your mind?",
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {

      $.ajax({
        url:'https://formspree.io/f/mrgojpqk',
        method:'POST',
        type: form.method,
	data: $(form).serialize(),
        dataType:"json",
        success:function() {
          console.log('success');
          $('#formBlock').hide();
          $('#thankyouBlock').show();
        }

      });
      return false; // required to block normal submit since you used ajax
    }
  });
});
