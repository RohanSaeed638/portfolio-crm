"use client";

import { useState } from "react";

export default function CreateTaskDialog({
  onCreated,
}: {
  onCreated: () => void;
}) {
  const [open, setOpen] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [form, setForm] =
    useState({
      title: "",
      description: "",
      status: "todo",
      priority: "medium",
    });

  const createTask =
    async () => {
      setLoading(true);

      await fetch("/api/tasks", {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify(form),
      });

      setLoading(false);

      setOpen(false);

      onCreated();
    };

  return (
    <>
      <button
        onClick={() =>
          setOpen(true)
        }
        className="cursor-pointer rounded-xl bg-black px-5 py-3 text-white"
      >
        New Task
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-xl rounded-2xl bg-white p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold">
                Create Task
              </h2>

              <p className="text-slate-500">
                Add workflow task
              </p>
            </div>

            <div className="space-y-4">
              <input
                placeholder="Task title"
                className="w-full rounded-xl border p-3"
                value={form.title}
                onChange={(e) =>
                  setForm({
                    ...form,
                    title:
                      e.target.value,
                  })
                }
              />

              <textarea
                placeholder="Description"
                className="w-full rounded-xl border p-3"
                rows={4}
                value={
                  form.description
                }
                onChange={(e) =>
                  setForm({
                    ...form,
                    description:
                      e.target.value,
                  })
                }
              />

              <div className="grid grid-cols-2 gap-4">
                <select
                  className="rounded-xl border p-3"
                  value={
                    form.status
                  }
                  onChange={(e) =>
                    setForm({
                      ...form,
                      status:
                        e.target.value,
                    })
                  }
                >
                  <option value="todo">
                    Todo
                  </option>

                  <option value="in-progress">
                    In Progress
                  </option>

                  <option value="done">
                    Done
                  </option>
                </select>

                <select
                  className="rounded-xl border p-3"
                  value={
                    form.priority
                  }
                  onChange={(e) =>
                    setForm({
                      ...form,
                      priority:
                        e.target.value,
                    })
                  }
                >
                  <option value="low">
                    Low
                  </option>

                  <option value="medium">
                    Medium
                  </option>

                  <option value="high">
                    High
                  </option>
                </select>
              </div>
            </div>

            <div className="mt-8 flex justify-end gap-4">
              <button
                onClick={() =>
                  setOpen(false)
                }
                className="rounded-xl border px-5 py-3"
              >
                Cancel
              </button>

              <button
                disabled={loading}
                onClick={
                  createTask
                }
                className="rounded-xl bg-black px-5 py-3 text-white"
              >
                {loading
                  ? "Creating..."
                  : "Create Task"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}