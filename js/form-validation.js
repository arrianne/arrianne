// Wait for the DOM to be ready
$(function() {
  // Initialize form validation on the registration form.
  $("form[name='contact-form']").validate({
    // Specify validation rules
    rules: {
      name: "required",
      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      message: {
        required: true,
        minlength: 5
      }
    },
    // Specify validation error messages
    messages: {
      name: "You've got a name right?",
      email: "please enter a valid email.",
      message: "Would love to hear what you have to say.",

    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});
