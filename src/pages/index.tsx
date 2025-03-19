import { Separator } from "@/components/ui/separator";
import { useDictionaryApi } from "@/hooks/use-dictionary-api";
import { FontSelector } from "@/pages/components/font-selector";
import { SearchText } from "@/pages/components/search-text";
import { ThemeSelector } from "@/pages/components/theme-selector";
import { Book } from "iconoir-react";
import { EmptyResult } from "./components/empty-result";
import { ErrorResult } from "./components/error-result";
import { LoadingResult } from "./components/loading-result";
import { SearchResult } from "./components/search-result";

const Index = () => {
  const { data, error, isLoading, searchWord, hasSearched } =
    useDictionaryApi();

  return (
    <main className="min-h-screen w-full flex justify-center sm:py-[3.75rem] sm:px-10 p-6">
      <div className="app-container flex flex-col gap-5">
        <header className="flex justify-between items-center h-9">
          <Book className="w-8 h-9 text-agile-gray-500" />
          <div className="flex gap-5 h-full">
            <FontSelector />
            <Separator orientation="vertical" className="h-full" />
            <ThemeSelector />
          </div>
        </header>
        <SearchText searchWord={searchWord} />

        {isLoading ? (
          <LoadingResult />
        ) : error ? (
          <ErrorResult />
        ) : data ? (
          <SearchResult data={data} />
        ) : !hasSearched ? (
          <EmptyResult />
        ) : null}
      </div>
    </main>
  );
};

export default Index;
