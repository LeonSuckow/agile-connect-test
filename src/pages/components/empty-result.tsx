import { BookIcon } from "lucide-react";

export function EmptyResult() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center animate-fade-in">
      <BookIcon className="w-16 h-16 text-agile-gray-700 mb-4 dark:text-white" />
      <h2 className="font-agile-header-sm font-bold mb-2">Dictionary</h2>
      <p className="font-agile-body-md text-agile-gray-500 max-w-md mb-4">
        Type a word in the search field above to see its meaning, pronunciation,
        examples and more.
      </p>
    </div>
  );
}
