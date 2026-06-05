import { NextResponse } from "next/server";

import { supabase } from "@/lib/supabase";

type Context = {
  params: Promise<{
    id: string;
  }>;
};

export async function PATCH(
  req: Request,
  { params }: Context
) {
  const body = await req.json();

  const { id } = await params;

  const { data } =
    await supabase
      .from("tasks")
      .update(body)
      .eq("id", id)
      .select()
      .single();

  return NextResponse.json(data);
}

export async function DELETE(
  req: Request,
  { params }: Context
) {
  const { id } = await params;

  await supabase
    .from("tasks")
    .delete()
    .eq("id", id);

  return NextResponse.json({
    success: true,
  });
}