var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function () {

  },

  render: _.template(
    `<option value='roomname'><%- roomname %></option>`
  ),

  renderRoom: function (obj) {
    var storage = {}
    for (var i = 0; i < obj.results.length; i++) {
      if (obj.results[i].roomname) {
        if (!storage.hasOwnProperty(obj.results[i].roomname)) {
          storage[obj.results[i].roomname] = obj.results[i]
        }
      }
    }
    for (var key in storage) {
      var node = RoomsView.render(storage[key]);
      $('select').append(node)
    }
  }
};

