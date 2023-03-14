import './style.css'
import {setAskButton, setInitialStateChat} from "./chat-gpt";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
 <div class="chat">
    <div class="more">
        <input type="radio" id="model1" name="models" value="text-davinci-003">
        <label for="model1">text-davinci-003</label><br>
        <input type="radio" id="model2" name="models" value="gpt-3.5-turbo" checked>
        <label for="model2">gpt-3.5-turbo</label><br>
        <button class="new-conversation-button">+</button>
    </div>

    <div class="conversation-history">
        <div class="conversation active">Under construction</div>
        <div class="conversation">Under construction</div>
    </div>

    <div class="chat-container">
        <div class="chat-header">Software and History</div>
        <div id="chat" class="chat-history">
        </div>

        <div class="chat-input">
            <textarea  id="prompt" type="text" placeholder="Type a message..." > </textarea>
            <button id="ask">Send</button>
        </div>
    </div>
</div>
`

const prompt:HTMLInputElement = document.querySelector<HTMLInputElement>('#prompt')!
const askButton:HTMLButtonElement = document.querySelector<HTMLButtonElement>('#ask')!
const chat: HTMLDivElement = document.querySelector<HTMLDivElement>('#chat')!

setInitialStateChat(chat)
setAskButton(prompt,askButton,chat)
