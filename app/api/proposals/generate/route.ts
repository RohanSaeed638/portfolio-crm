import { NextResponse } from "next/server";

import { openai } from "@/lib/openai";
import { buildProposalPrompt } from "@/lib/prompts";
import { supabase } from "@/lib/supabase";

export async function POST(
  req: Request
) {
  try {
    const body = await req.json();

    const prompt =
      buildProposalPrompt({
        leadName:
          body.leadName,
        company:
          body.company,
        projectType:
          body.projectType,
        budget: body.budget,
        timeline:
          body.timeline,
        notes: body.notes,
      });

    const response =
      await openai.chat.completions.create({
        model: "gpt-4.1-mini",
        messages: [
          {
            role: "system",
            content:
              "You are a senior SaaS consultant writing professional business proposals.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.7,
      });

    const proposal =
      response.choices[0]
        ?.message?.content ?? "";

    const { data, error } =
      await supabase
        .from("proposals")
        .insert({
          lead_id: body.leadId,
          lead_name:
            body.leadName,
          client_name:
            body.company,
          project_type:
            body.projectType,
          budget:
            body.budget,
          timeline:
            body.timeline,
          generated_content:
            proposal,
        })
        .select()
        .single();

    if (error) throw error;

    return NextResponse.json(
      data
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error:
          "Failed to generate proposal",
      },
      { status: 500 }
    );
  }
}