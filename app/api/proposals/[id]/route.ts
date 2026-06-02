import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

type Context = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(
  req: Request,
  { params }: Context
) {
  const { id } = await params;

  const { data } =
    await supabase
      .from("proposals")
      .select("*")
      .eq("id", id)
      .single();

  return NextResponse.json(data);
}

export async function PATCH(
  req: Request,
  { params }: Context
) {
  const body = await req.json();

  const { id } = await params;

  const { data } =
    await supabase
      .from("proposals")
      .update({
        generated_content:
          body.generated_content,
      })
      .eq("id", id)
      .select()
      .single();

  return NextResponse.json(data);
}