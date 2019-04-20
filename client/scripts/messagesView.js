var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {

  },

  //render is suppose to render all the objects and append to chats

  renderMessage: function (obj) {
    // console.log(obj.results[0])
    for (var i = 0; i < obj.results.length; i++) {
      var node = MessageView.render(obj.results[i]);
      $('#chats').append(node);
    }
  },
};
