const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'alanfcf@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'alanfcf@gmail.com',
        subject: 'Sorry to see you go...',
        text: `Bye ${name}. We hope you had a good time using the app.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}