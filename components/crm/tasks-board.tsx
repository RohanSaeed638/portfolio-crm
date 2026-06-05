"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  DragDropContext,
  Droppable,
  Draggable,
} from "@hello-pangea/dnd";

import CreateTaskDialog from "./create-task-dialog";

const columns = [
  "todo",
  "in-progress",
  "done",
];

export default function TasksBoard() {
  const [tasks, setTasks] =
    useState<any[]>([]);

      const fetchTasks =
    async () => {
      const res = await fetch(
        "/api/tasks"
      );

      const data =
        await res.json();

      setTasks(data);
    };

  useEffect(() => {
    fetchTasks();
  }, []);

  const onDragEnd =
    async (result: any) => {
      if (
        !result.destination
      )
        return;

      const taskId =
        result.draggableId;

      const newStatus =
        result.destination
          .droppableId;

      setTasks((prev) =>
        prev.map((task) =>
          task.id === taskId
            ? {
                ...task,
                status:
                  newStatus,
              }
            : task
        )
      );

      await fetch(
        `/api/tasks/${taskId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            status: newStatus,
          }),
        }
      );
    };

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">
            Tasks Board
          </h1>

          <p className="text-slate-500">
            Manage workflow tasks
          </p>
        </div>

        <CreateTaskDialog
          onCreated={fetchTasks}
        />
      </div>

      <DragDropContext
        onDragEnd={onDragEnd}
      >
        <div className="grid grid-cols-3 gap-6">
          {columns.map(
            (column) => (
              <Droppable
                droppableId={
                  column
                }
                key={column}
              >
                {(provided) => (
                  <div
                    ref={
                      provided.innerRef
                    }
                    {...provided.droppableProps}
                    className="min-h-[500px] rounded-2xl border bg-white p-5"
                  >
                    <h2 className="mb-4 text-lg font-semibold capitalize">
                      {column}
                    </h2>

                    <div className="space-y-4">
                      {tasks
                        .filter(
                          (
                            task
                          ) =>
                            task.status ===
                            column
                        )
                        .map(
                          (
                            task,
                            index
                          ) => (
                            <Draggable
                              key={
                                task.id
                              }
                              draggableId={
                                task.id
                              }
                              index={
                                index
                              }
                            >
                              {(
                                provided
                              ) => (
                                <div
                                  ref={
                                    provided.innerRef
                                  }
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className="rounded-xl border bg-slate-50 p-4"
                                >
                                  <h3 className="font-medium">
                                    {
                                      task.title
                                    }
                                  </h3>

                                  <p className="mt-2 text-sm text-slate-500">
                                    {
                                      task.description
                                    }
                                  </p>
                                </div>
                              )}
                            </Draggable>
                          )
                        )}

                      {
                        provided.placeholder
                      }
                    </div>
                  </div>
                )}
              </Droppable>
            )
          )}
        </div>
      </DragDropContext>
    </div>
  );
}