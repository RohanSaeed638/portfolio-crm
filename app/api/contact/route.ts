import { NextResponse } from "next/server";

import { resend } from "@/lib/resend";

import { supabase } from "@/lib/supabase";

export async function POST(
  req: Request
) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      company,
      message,
    } = body;

    /*
      SAVE LEAD TO CRM
    */

    const { error } =
      await supabase
        .from("leads")
        .insert({
          name,
          email,
          company,
          notes: message,
          status: "New",
        });

    if (error) {
      throw error;
    }

    /*
      SEND EMAIL
    */

    await resend.emails.send({
      from:
        "Portfolio <onboarding@resend.dev>",

      to: "YOUR_EMAIL@gmail.com",

      subject:
        "New Portfolio Lead",

      html: `
        <h2>New Lead Submitted</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Company:</strong> ${company}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        error:
          "Something went wrong",
      },
      { status: 500 }
    );
  }
}