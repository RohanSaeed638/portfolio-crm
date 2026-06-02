import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  try {
    const { data: leads } =
      await supabase
        .from("leads")
        .select("*");

    const {
      data: proposals,
    } = await supabase
      .from("proposals")
      .select("*");

    const totalLeads =
      leads?.length || 0;

    const wonLeads =
      leads?.filter(
        (lead) =>
          lead.status === "Won"
      ).length || 0;

    const totalProposals =
      proposals?.length || 0;

    const conversionRate =
      totalLeads > 0
        ? Math.round(
            (wonLeads /
              totalLeads) *
              100
          )
        : 0;

    const pipelineValue =
      leads?.reduce(
        (sum, lead) => {
          const budget =
            parseInt(
              lead.budget || "0"
            );

          return sum + budget;
        },
        0
      ) || 0;

    return NextResponse.json({
      totalLeads,
      wonLeads,
      totalProposals,
      conversionRate,
      pipelineValue,
      leads,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error:
          "Failed to fetch stats",
      },
      { status: 500 }
    );
  }
}