import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async () => {
  resend.emails.send({
    from: "your-domain",
    to: "to@gmail.com",
    subject: "your-subject.",
    react: <WelcomeTemplate name="Name" />,
  });

  return NextResponse.json({});
};
