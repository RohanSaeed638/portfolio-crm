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
  try {
    const { id } = await params;

    const { data, error } =
      await supabase
        .from("leads")
        .select("*")
        .eq("id", id)
        .single();

    if (error) throw error;

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error:
          "Failed to fetch lead",
      },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: Request,
  { params }: Context
) {
  try {
    const body = await req.json();

    const { id } = await params;

    const { data, error } =
      await supabase
        .from("leads")
        .update(body)
        .eq("id", id)
        .select()
        .single();

    if (error) throw error;

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error:
          "Failed to update lead",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: Context
) {
  try {
    const { id } = await params;

    await supabase
      .from("leads")
      .delete()
      .eq("id", id);

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error:
          "Failed to delete lead",
      },
      { status: 500 }
    );
  }
}