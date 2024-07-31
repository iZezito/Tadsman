import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const formatJson = (json: object): string => {
  let jsonString = JSON.stringify(json, undefined, 2);

  jsonString = jsonString
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g, (match) => {
      let cls = 'text-gray-400'; // Default color
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = 'text-blue-400'; // Key color
        } else {
          cls = 'text-green-400'; // String color
        }
      } else if (/true|false/.test(match)) {
        cls = 'text-purple-400'; // Boolean color
      } else if (/null/.test(match)) {
        cls = 'text-red-400'; // Null color
      } else if (/\d/.test(match)) {
        cls = 'text-orange-400'; // Number color
      }
      return `<span class="${cls}">${match}</span>`;
    });

  return jsonString;
};

export {formatJson};

