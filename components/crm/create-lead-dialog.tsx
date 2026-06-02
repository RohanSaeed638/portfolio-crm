"use client";

import { useForm } from "react-hook-form";
import {
  zodResolver,
} from "@hookform/resolvers/zod";

import {
  leadSchema,
  LeadFormValues,
} from "@/lib/validations";

export default function CreateLeadDialog({
  onCreated,
}: {
  onCreated: () => void;
}) {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm<LeadFormValues>({
    resolver:
      zodResolver(leadSchema),
    defaultValues: {
      status: "New",
    },
  });

  const onSubmit = async (
    data: LeadFormValues
  ) => {
    await fetch("/api/leads", {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify(data),
    });

    reset();

    onCreated();
  };

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm w-full max-w-lg dark:bg-gray-800">
      <form
        onSubmit={handleSubmit(
          onSubmit
        )}
        className="grid grid-cols-2 gap-4"
      >
        <input
          {...register("name")}
          placeholder="Lead Name"
          className="rounded-xl border p-3"
        />

        <input
          {...register("email")}
          placeholder="Email"
          className="rounded-xl border p-3"
        />

        <input
          {...register("company")}
          placeholder="Company"
          className="rounded-xl border p-3"
        />

        <input
          {...register("source")}
          placeholder="Source"
          className="rounded-xl border p-3"
        />

        <input
          {...register("budget")}
          placeholder="Budget"
          className="rounded-xl border p-3"
        />

        <textarea
          {...register("notes")}
          placeholder="Notes"
          className="rounded-xl border p-3 col-span-2"
        />

        <button className="col-span-2 rounded-xl bg-black px-6 py-3 text-white hover:bg-gray-900 cursor-pointer">
          Create Lead
        </button>
      </form>
    </div>
  );
}