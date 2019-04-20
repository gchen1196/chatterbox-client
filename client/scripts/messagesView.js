var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {

  },

  filterRoom: function () {
    $('#chats').empty();
    var selectedRoom = $('#rooms option:selected').text();
    for (var i = 0; i < Messages.length; i++) {
      var obj = Messages[i];
      if (obj.roomname === selectedRoom) {
        $('#chats').append(MessageView.render(obj));
      }
    }

  },
  //render is suppose to render all the objects and append to chats

  renderMessage: function (obj) {
    // console.log(obj.results[0])
    for (var i = 0; i < obj.results.length; i++) {
      if (obj.results[i].username && obj.results[i].text) {
        var node = MessageView.render(obj.results[i]);
        $('#chats').append(node);

      }
    }
  },
};

