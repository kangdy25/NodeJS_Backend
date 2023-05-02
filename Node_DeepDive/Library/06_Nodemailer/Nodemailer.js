const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: '송신자 이메일',
        pass: '수신자 이메일 비밀번호',
    }
})

const mailOptions = {
    from: '송신자 이메일',
    to: '수신자 이메일',
    subject: '메일을 보내쟈',

    // text: '텍스트',

    html: '보낼 HTML',
    attachments: [
        {
            filename: '보낼 파일 이름',
            path: '보낼 파일 경로',
        },
    ],
}

transporter.sendMail(mailOptions, (error, info)=>{
    if (error) {
        console.log(error);
    } else {
        console.log(`Message sent: ${info.response}`);
    }
    transporter.close();
})