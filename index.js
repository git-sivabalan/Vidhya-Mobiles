const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');


const app = express();
// Middleware
app.use(cors());
app.use(express.json());




app.post('/submit', async (req, res) => {
    console.log('post')
  try {
    const { fullName, email, subject, message } = req.body;
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail', // e.g., 'gmail'
        auth: {
          user: 'ceitkesavan25@gmail.com',
          pass: 'orgm ngjb ldem ecky',
        },
      });
    // Send email using Nodemailer
    const mailOptions = {
      from: 'kesavan8388@example.com',
      to: email,
      subject: 'Thank you for your submission',
      text: 'We have received your form submission. Thank you!',
    };

    await transporter.sendMail(mailOptions);

    console.log('Form submitted successfully!');
    res.status(200).send('Form submitted successfully!');
  } catch (error) {
    console.error('Form submission failed:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/submit',(req,res)=>{
    res.send('ghjk')
})

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
