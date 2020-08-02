const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const client = require("twilio")(accountSid, authToken)

const clientMessage = () =>{

    client.messages.create(
        {
        from: "whatsapp:+14155238886",
        body: "Hola, en que puedo ayudarte",
        to: "whatsapp:+5491158949167"
        }
    ).then(message => console.log(message.sid))

}

module.exports = clientMessage
