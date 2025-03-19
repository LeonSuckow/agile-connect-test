import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

interface SearchTextProps {
  searchWord: (word: string) => void;
}

const filterSchema = z.object({
  filterText: z.string().min(1, "Whoops, can’t be empty…"),
});
type FormData = z.infer<typeof filterSchema>;

export const SearchText = ({ searchWord }: SearchTextProps) => {
  const form = useForm({
    resolver: zodResolver(filterSchema),
  });

  const onSubmit = (data: FormData) => {
    if (!data.filterText) {
      form.trigger("filterText");
      return;
    }
    searchWord(data.filterText);
  };

  const inputErrorClass = form.formState.errors.filterText
    ? "border-agile-red-800"
    : "";
  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <div className="relative mb-2">
        <Input
          {...form.register("filterText")}
          placeholder="Search one word in English..."
          className={`bg-agile-gray-400 dark:bg-agile-gray-800 rounded-2xl h-16 py-5 px-6 border-solid border border-transparent font-agile-body-sm focus-visible:ring-0  font-bold focus-within:border-agile-purple-800 focus-visible:border-agile-purple-800 ${inputErrorClass}`}
        />

        <Button
          className="px-0 py-0 absolute bg-transparent cursor-pointer shadow-none hover:bg-transparent right-0 top-1/2 -translate-x-1/2 -translate-y-1/2"
          type="submit"
        >
          <Search className="text-agile-purple-800 size-4" />
        </Button>
      </div>
      {form.formState.errors.filterText && (
        <p className="text-agile-red-800 font-agile-header-sm">
          {form.formState.errors.filterText.message}
        </p>
      )}
    </form>
  );
};
