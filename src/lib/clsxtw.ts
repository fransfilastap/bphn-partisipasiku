import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merge tailwindcss classes + clsx */
export default function clsxtw(...classes: ClassValue[]): string {
  return twMerge(clsx(...classes));
}
