import Schema from "./schema.js";
import nodemailer from "nodemailer";

export async function handlesenddata(req, res) {
  try {
    if (req.params.email!=="null") {
        console.log(req.params.email)
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      try {
        const info = await transporter.sendMail({
          from: '"-Accredian-Cloneby-Darshan-kardile" <team@example.com>', // sender address
          to: [req.params.email, "darshankardile119@gmail.com"],
          subject: "We've received your inquiry - Accredian-Clone",
          html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Inquiry Confirmation</title>
</head>

<body style="margin:0; padding:0; background:#f4f6f8; font-family:Arial, sans-serif;">

  <div style="max-width:650px; margin:40px auto; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 10px 25px rgba(0,0,0,0.08);">

    <!-- Header -->
    <div style="background:linear-gradient(135deg,#4f46e5,#6366f1); padding:25px; text-align:center;">
      <h1 style="color:#ffffff; margin:0; font-size:22px;">
        Inquiry Received Successfully
      </h1>
    </div>

    <!-- Body -->
    <div style="padding:30px; color:#333;">

      <p style="font-size:16px; margin-bottom:15px;">
        Hi <b>${req.body.name}</b>,
      </p>

      <p style="font-size:14px; line-height:1.6; color:#555;">
        Thank you for reaching out! This is an automated confirmation to inform you that we have successfully received your inquiry through our website.
      </p>

      <div style="margin:25px 0;">
        <h3 style="font-size:16px; margin-bottom:10px; color:#111;">
          Your Submission Details
        </h3>

        <table style="width:100%; border-collapse:collapse; font-size:14px;">
          
          <tr>
            <td style="padding:10px; border-bottom:1px solid #eee;"><b>Name</b></td>
            <td style="padding:10px; border-bottom:1px solid #eee;">${req.body.name || "N/A"}</td>
          </tr>

          <tr>
            <td style="padding:10px; border-bottom:1px solid #eee;"><b>Email</b></td>
            <td style="padding:10px; border-bottom:1px solid #eee;">${req.body.emailid || "N/A"}</td>
          </tr>

          <tr>
            <td style="padding:10px; border-bottom:1px solid #eee;"><b>Phone</b></td>
            <td style="padding:10px; border-bottom:1px solid #eee;">${req.body.phoneno || "N/A"}</td>
          </tr>

          <tr>
            <td style="padding:10px; border-bottom:1px solid #eee;"><b>Company</b></td>
            <td style="padding:10px; border-bottom:1px solid #eee;">${req.body.companyname || "N/A"}</td>
          </tr>

          <tr>
            <td style="padding:10px; border-bottom:1px solid #eee;"><b>Domain</b></td>
            <td style="padding:10px; border-bottom:1px solid #eee;">${req.body.domain || "N/A"}</td>
          </tr>

          <tr>
            <td style="padding:10px; border-bottom:1px solid #eee;"><b>Candidates</b></td>
            <td style="padding:10px; border-bottom:1px solid #eee;">${req.body.numberofcan || "N/A"}</td>
          </tr>

          <tr>
            <td style="padding:10px; border-bottom:1px solid #eee;"><b>Mode of Delivery</b></td>
            <td style="padding:10px; border-bottom:1px solid #eee;">${req.body.mode || "N/A"}</td>
          </tr>

          <tr>
            <td style="padding:10px;"><b>Location</b></td>
            <td style="padding:10px;">${req.body.location || "N/A"}</td>
          </tr>

        </table>
      </div>

      <p style="font-size:14px; color:#555; line-height:1.6;">
        Our team has been notified and will carefully review your requirements. One of our specialists will connect with you shortly to discuss the next steps.
      </p>

      <div style="margin-top:30px; text-align:center;">
        <p style="margin:0; font-size:14px; color:#333;">
          Best regards,
        </p>
        <p style="margin:5px 0 0; font-weight:bold; color:#111;">
          The Accredian-Clone Team
        </p>
        <p style="margin:5px 0 0; font-size:12px; color:#888;">
          Automated Inquiry System
        </p>
      </div>

    </div>

  </div>

</body>
</html>
`,
        });

        console.log("Message sent: %s", info.messageId);

        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      } catch (err) {
        console.error("Error while sending mail:", err);
      }
    }

    const newlead = new Schema(req.body);

    await newlead.save();

    console.log("succcessfully data saved in db", newlead);

    res.status(201).json({ message: "succcessfully data saved in db" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message});
  }
}
