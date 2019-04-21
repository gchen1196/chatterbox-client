var FormView = {

  $form: $('form'),

  initialize: function () {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function (event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    //make message
    var message = document.getElementById('message').value;

    var NewMessage = {
      username: App.username,
      text: message
    }
    Parse.create(NewMessage)
    window.location.reload();


    // console.log('click!');
  },

  setStatus: function (active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};

