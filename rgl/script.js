const correctPassword = ['T', 'V', 'B'];
let failMessages = [
  "Puoi entrar..EHI questa non è la parola d'ordine, ci sono quasi cascato",
  "non è neanche questa",
  "nope",
  "parola d'ordine errata. avviare protocollo di esplosione nucleare",
  "scherzetto, non esiste questo protocollo, la parola è sbagliata lo stesso però",
  "sbagliata",
  "non provarci a caso però",
  "ti vedo che ci provi a caso",
  "vabbe quasi quasi te la dico",
  "eheh non è vero non te la dirò mai",
  "nope",
  "nope",
  "nope",
  "ancora tu? accettalo, la parola non la sai",
  "non ce la puoi fare eh",
  "SBA  GLIA  TOOOO",
  "GIUSTOOOO",
  "non è vero, smetti di provarci non puoi entrare"
];
let messageIndex = 0;

function checkPassword() {
  const c1 = document.getElementById('char1').value.toUpperCase();
  const c2 = document.getElementById('char2').value.toUpperCase();
  const c3 = document.getElementById('char3').value.toUpperCase();

  if (c1 === correctPassword[0] && c2 === correctPassword[1] && c3 === correctPassword[2]) {
    window.location.href = 'sala.html';
  } else {
    const message = document.getElementById('message');
    let currentMsg = failMessages[messageIndex];
    message.textContent = currentMsg;

    if (currentMsg.includes('esplosione nucleare') || currentMsg === 'GIUSTOOOO') {
      setTimeout(() => {
        messageIndex = (messageIndex + 1) % failMessages.length;
        message.textContent = failMessages[messageIndex];
      }, 2000);
    } else {
      messageIndex = (messageIndex + 1) % failMessages.length;
    }
  }
}
