import dictionaryAPI from "@/configs/axios";
import { DictionaryEntry, DictionaryError } from "@/types/dictionary";
import { useState } from "react";
import { toast } from "sonner";

export function useDictionaryApi() {
  const [data, setData] = useState<DictionaryEntry | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<boolean>(false);
  const [hasSearched, setHasSearched] = useState(false);

  const searchWord = async (word: string) => {
    const wordToSearch = word.trim();
    if (!wordToSearch) {
      toast.error("Please enter a word to search.");
      return;
    }

    setIsLoading(true);
    setData(null);
    setError(false);
    setHasSearched(true);
    try {
      const response = await dictionaryAPI.get(wordToSearch);

      if (response.status !== 200) {
        const errorData = response.data as DictionaryError;
        setError(true);
        console.log(errorData);

        toast.error("Word not found, check spelling");

        return;
      }

      const result = response.data[0] as DictionaryEntry;

      //TODO: Colocar um utilitário para não replicar código

      if (!result.phonetic) {
        result.phonetic =
          result.phonetics.find((phonetic) => phonetic.text)?.text || "";
      }

      if (!result.audioSrc) {
        result.audioSrc =
          result.phonetics.find((phonetic) => phonetic.audio)?.audio || "";
      }

      setData(result);
    } catch (err) {
      setError(true);
      console.error("Error fetching word:", err);
      toast.error(
        "An error occurred while searching for the word. Please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, error, searchWord, hasSearched };
}
