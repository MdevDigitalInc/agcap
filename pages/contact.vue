<template lang="pug">
  .agcap-contact-page
    section.agcap-contact-content
      .agcap-contact-content-left
        h5
          |CONTACT
        h1.u-navy
          |Grow with us
        p.--body-large
          |Interested in our services? Request an investor fact sheet.
        .agcap-contact-form-container
          form(id="form" v-on:keyup.enter="submitForm")
            label
              |Name:*
            input(data-required name="Name" type="text" aria-required="true" placeholder="First and Last Name.")
            label
              |Email Address:*
            input(data-required name="Email" type="email" v-on:blur="validateEmail" aria-required="true" placeholder="Email Address.")
            label
              |Company & Title:*
            input(data-required name="Credentials" type="text" placeholder="Let us know who you are and where you work.")
            label
              |Message:*
            textarea(data-required name="Message" type="text" class="message" placeholder="Message")

            .ag-cap-submit(type="submit" v-on:click.prevent="submitForm")
              |send request for investor fact sheet

      .agcap-contact-content-right
        .agcap-contact-image
</template>


<script>


//import $ from 'jquery'

export default{
  name: 'BaseForm',

  data: function(){
    return {
      // Data used here as a flag to mark fields as
      // filled witn the .--filled class
      // Allows for better UI control
      fname       : '',
      work        : '',
      email       : '',
      message     : ''
    };
  },
  methods: {

  clearErrors(){
    $('.mdev-error').removeClass('mdev-error');
  },

  validateFields(payload, error){
      // Initiate Loop Var
      var i;
      // Error Flag
      var errorPresent = false;

      // Check for Empty Fields
      for (i = 0; i < payload.length; i++){
        if (payload[i].value === ""){
          errorPresent = true;
          $(payload[i]).addClass('mdev-error');
        }
      }
      // Return Errors
      if (errorPresent === true) {
        return false;
      }
      else {
        return true;
      }
    },


    validateEmail(payload, error) {
      // Initiate Loop Var
      var i;
      // Initialize Flag
      var errorPresent = false;

      // Email Regex
      for (i = 0; i < payload.length; i++){
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,7})+$/.test(payload[0].value)){
          errorPresent = false;
        }
        else {
          $(payload[i]).addClass('mdev-error');
          errorPresent = true;
        }
      }

      // Return Errors
      if (errorPresent === true) {
        return false;
      }
      else {
        return true;
      }
    },


    // Validate and Submit form
    submitForm() {
      // Clear Errors First
      this.clearErrors();
      // Collect Fields
      let formFields = $('[data-required]');
      let emailField = $('input[type="email"]');
      // Validate fields and store result
      let fieldsValid = this.validateFields(formFields, "There are errors on the form.");//validation.errors.form");
      let emailValid  = this.validateEmail(emailField, "Invalid Email.");//validation.errors.email");
       let callback = this.formSubmitted;
      // // Checks: Fields are filled, Email is Valid, Phone is Valid, No Spam.
       if ( fieldsValid && emailValid ) {
        // Flip flag for UX animations
        this.loading = true;
        // Collect fields and serialize them
        let data = $('#form').serialize();
        // Ajax call to POST
        $.ajax ({
          type: "POST",
          url: "https://api.formbucket.com/f/buk_hLjzPxyTKRSQ1GTvDnV0MQPq",
          data: data,
          success: callback,
          error: function() {
            console.log('Error with form connection');
          }
        });
      }
      // Else, likely SPAM
      else {
        console.log('Submission flagged as spam');
      }
    },
    // Emit Submitted event upon Ajax success
    formSubmitted() {
      this.$emit('submitted');
    }
  }
};
</script>
