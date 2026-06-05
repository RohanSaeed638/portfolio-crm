import { NextResponse } from "next/server";

import { supabase } from "@/lib/supabase";

export async function GET() {
  const { data } =
    await supabase
      .from("tasks")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

  return NextResponse.json(data);
}

export async function POST(
  req: Request
) {
  const body = await req.json();

  const { data } =
    await supabase
      .from("tasks")
      .insert(body)
      .select()
      .single();

  return NextResponse.json(data);
}