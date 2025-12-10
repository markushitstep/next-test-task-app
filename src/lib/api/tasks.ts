import { Task } from "@/types";

export const fetchTasks = async (): Promise<Task[]> => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!baseUrl) {
    throw new Error("Missing NEXT_PUBLIC_API_BASE_URL environment variable.");
  }

  try {
    const response = await fetch(baseUrl, {
      cache: "no-store",
    });

    if (!response.ok) {
      const message = await response.text().catch(() => "");
      throw new Error(`API Error: ${response.status} ${response.statusText} ${message}`.trim());
    }

    const data = await response.json().catch((e) => {
      throw new Error("Invalid JSON in API response: " + e);
    });

    return data as Task[];
  } catch (err: any) {
    if (err.name === "AbortError") {
      throw new Error("API request timeout");
    }
    throw err;
  }
};
