var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function () {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    //on change function <select onchange="filterRoom()">
    //1. empty all the messages
    //2. load messages with matching roomname
    //loop through current data
    //render the objects with matching roomname
    //get specified roomname by document.getElementById('roomname').text and match to every single roomname



  },

  fetch: function (callback = () => { }) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      //console.log(data)
      for (var i = 0; i < data.results.length; i++) {
        Messages.push(data.results[i]);
      }
      MessagesView.renderMessage(data);
      RoomsView.renderRoom(data);
      // console.log(Messages);
      callback();
    });
  },

  startSpinner: function () {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function () {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
