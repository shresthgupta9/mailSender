const nodemailer = require("nodemailer");
const senderData = require("./private/senderData.js")

const transporter = nodemailer.createTransport({
    // can use ethereal for fake testing
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: `${senderData.user}`,
        pass: `${senderData.pass}`,
    }
});

const data = {
    from: "sender email id",
    // to: "xxxx@gmail.com, xxxxx@hotmail.com",
    to: "receiver email id",
    subject: "NodeMailer Testing",
    // html:
    text: "Dear Shresth\nI hope this email finds you well. This is nodemailer app testing email\n\tTesting tab spacing\n\nThank You\nPihu Kumar",
};

async function main() {

    //for (let i = 1; i <= 5; i++) {
    const info = await transporter.sendMail(data);

    console.log(`Message Sent!`);
    // console.log(`Message Sent! ${i}`);
    //}
}

main().catch(console.error);
