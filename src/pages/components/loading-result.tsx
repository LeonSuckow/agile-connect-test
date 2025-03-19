import { Loader2 } from "lucide-react";

export function LoadingResult() {
  return (
    <div className="flex flex-col items-center justify-center py-16 animate-fade-in">
      <Loader2 className="w-10 h-10 text-agile-purple-800 animate-spin" />
      <p className="mt-4 text-agile-gray-500">Searching information...</p>
    </div>
  );
}
