'use client';

import { fetchTasks } from '@/lib/api';
import { Task } from '@/types';
import { useQuery } from '@tanstack/react-query';

export function useTasks() {
  return useQuery<Task[], Error>({
    queryKey: ['tasks'],
    queryFn: fetchTasks,
    staleTime: 30_000,
    refetchOnWindowFocus: false,
  });
}
