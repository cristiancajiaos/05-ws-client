import './style.css'
import { connectToServer } from './socket-client.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Websockets - Client</h1>

    <input id="jwt-token" placeholder="JSON Web Token"/>
    <button id="btn-connect">Connect</button>

    <br/>
    <span id="server-status">Offline</span>

    <ul id="clients-ul">
      <li>asdfghj</li>
    </ul>

    <form id="message-form">
      <input placeholder="message" id="message-input"/>
    </form>

    <h3>Messages</h3>
    <ul id="messages-ul"></ul>
  </div>
`

//setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
// connectToServer();

const jwtToken = document.querySelector<HTMLInputElement>('#jwt-token')!;
const btnConnect = document.querySelector<HTMLButtonElement>('#btn-connect')!;

btnConnect.addEventListener('click', () => {

  if (jwtToken.value.trim().length <= 0) {
    alert('Enter a valid JWT');
    return;
  }
  connectToServer(jwtToken.value.trim());
});

