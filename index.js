// Code your solutions in this file
const cards = ["Guadalupe", "Ollie", "Aki"];

function writeCards(cards, message) {
    const giftMessages = []
    for (let i = 0; i <= writeCards.length; i++) {
        giftMessages.push(`Thank you, ${cards[i]}, for the wonderful ${message} gift!`);
    }
    return giftMessages;
}
writeCards(cards, "suprise");

let cookies = 10
function countDown(cookies) {
    let i = 0;
    while (cookies >= 0) {
        console.log(cookies--);
    }
}