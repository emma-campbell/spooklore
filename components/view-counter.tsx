"use client";

import { Suspense, useEffect } from "react";

import { fetcher } from "@/lib/fetcher";
import { Metric } from "./metric";
import useSWR from "swr";
import { Stats } from "@/lib/db";

export function ViewCounter({
  slug,
  track,
}: {
  slug?: string;
  track: boolean;
}) {
  const { data } = useSWR<Stats>(`/views/${slug}`, fetcher);
  let views = data?.views || 0;

  useEffect(() => {
    const register = () =>
      fetch(`/views/${slug}`, {
        method: "POST",
      });
    if (track) {
      register();
    }
  }, [slug, track]);

  return (
    <div className="flex space-x-1 font-medium text-gray-200">
      <Suspense>
        <Metric key={"views"} stat={views} />
      </Suspense>
      <p>views</p>
    </div>
  );
}
