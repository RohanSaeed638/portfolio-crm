import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  try {
    const { data, error } =
      await supabase
        .from("leads")
        .select("*")
        .order("created_at", {
          ascending: false,
        });

    if (error) throw error;

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch leads" },
      { status: 500 }
    );
  }
}

export async function POST(
  req: Request
) {
  try {
    const body = await req.json();

    const { data, error } =
      await supabase
        .from("leads")
        .insert(body)
        .select()
        .single();

    if (error) throw error;

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to create lead" },
      { status: 500 }
    );
  }
}