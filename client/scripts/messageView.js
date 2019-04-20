var MessageView = {

  render: _.template(
    `<div class='chat'>
      <div class='username'><%- username %></div>
      <div class='message'><%- text %></div>
    </div>`
  )

};


// `
//       <div class="chat">
//         <div class="username"><% username %></div>
//         <div class="message"></div>
//         <div class="roomname"></div>
//       </div>
//     `