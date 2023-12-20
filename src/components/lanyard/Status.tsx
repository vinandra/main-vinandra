"use client";

import { useLanyardWS } from "use-lanyard";

export function Status({ initialData, className }: { readonly className?: string; readonly initialData?: any }) {
  const data = useLanyardWS("535247725562691626", { initialData });
  const isOnline = data?.discord_status !== "offline";

  return (
    <div
      className={`inline-flex place-items-center gap-3 rounded-full bg-neutral-200 dark:bg-neutral-800 px-4 py-2 ${className}`}
    >
      <span className={`inline-block h-4 w-4 rounded-full ${isOnline ? "bg-green-500" : "bg-gray-500"}`} />
      {isOnline ? "online" : "offline"}
    </div>
  );
}
