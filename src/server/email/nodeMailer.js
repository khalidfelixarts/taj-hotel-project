"use server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "khankhalid1743@gmail.com",
    pass: "uivbrleniomwyddl",
  },
});

export async function sendMail(email, link) {
  const info = await transporter.sendMail({
    from: '"Taj Hotel" <support@tajhotel.com>',
    to: email,
    subject: "Verify Email - Taj Hotels",
    text: "text",
    html: `<a href="${link}">Verify</a>`,
  });

  console.log("Message sent: %s", info.messageId);
  return info;
}
