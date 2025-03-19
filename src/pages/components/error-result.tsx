import { Frown } from "lucide-react";

export function ErrorResult() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center animate-fade-in">
      <Frown className="w-16 h-16 text-agile-gray-700 mb-4 dark:text-white" />
      <h2 className="font-agile-header-sm font-bold mb-2">
        No Definitions Found
      </h2>
      <p className="font-agile-body-md text-agile-gray-500 max-w-md mb-4">
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </div>
  );
}
