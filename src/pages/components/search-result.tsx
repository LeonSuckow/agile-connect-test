import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DictionaryEntry } from "@/types/dictionary";
import { ExternalLink, Pause, Play } from "lucide-react";
import { useRef, useState } from "react";

interface SearchResultProps {
  data: DictionaryEntry;
}
export const SearchResult = ({ data }: SearchResultProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayAudio = () => {
    if (!data.audioSrc) return;

    if (!audioRef.current) {
      audioRef.current = new Audio(data.audioSrc);

      audioRef.current.onplay = () => setIsPlaying(true);
      audioRef.current.onended = () => setIsPlaying(false);
      audioRef.current.onpause = () => setIsPlaying(false);
    }

    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    } else {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
  };

  return (
    <div className="animate-fade-in flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-agile-header-lg">{data.word}</h1>
          <h2 className="font-agile-header-md text-agile-purple-800">
            {data.phonetic}
          </h2>
        </div>
        <Button
          onClick={handlePlayAudio}
          className="group w-[4.6875rem] h-[4.6875rem] rounded-full  flex
           items-center justify-center cursor-pointer bg-agile-purple-900 hover:bg-agile-purple-900"
        >
          {isPlaying ? (
            <Pause className=" text-agile-purple-800 group-hover:text-white size-[1.375rem]" />
          ) : (
            <Play className=" text-agile-purple-800 group-hover:text-white size-[1.375rem]" />
          )}
        </Button>
      </div>
      {data.meanings.map((meaning) => (
        <div key={meaning.partOfSpeech} className="flex flex-col gap-[2.5rem]">
          <div className="flex items-center gap-[1.625rem]">
            <h3 className="italic font-agile-header-md">
              {meaning.partOfSpeech}
            </h3>
            <Separator className="flex-1" />
          </div>
          <div>
            <h4 className="mb-[1.5625rem] font-agile-header-sm text-agile-gray-500">
              Meaning
            </h4>
            <ul className="list-disc pl-12 flex-col flex gap-[.8125rem] font-agile-body-md">
              {meaning.definitions.map((definition, defKey) => (
                <li
                  key={`definition-key${defKey}`}
                  className="marker:text-agile-purple-800 marker:mr-24"
                >
                  <p>{definition.definition}</p>
                  {definition.example && (
                    <p className="text-agile-gray-500">
                      "{definition.example}"
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {meaning.synonyms.length > 0 && (
            <div className="flex gap-2">
              <h3 className="mr-[1.375rem] font-agile-header-sm text-agile-gray-500">
                Synonyms
              </h3>
              <div className="flex flex-wrap gap-2">
                {meaning.synonyms.map((synonym, synIndex) => (
                  <span
                    key={synIndex}
                    className="text-agile-purple-800 font-bold font-agile-header-sm"
                  >
                    {synonym}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
      {data.sourceUrls && data.sourceUrls.length > 0 && (
        <>
          <Separator />
          <div>
            <div className="flex items-start gap-4">
              <h3 className="text-sm text-agile-gray-500">Source</h3>
              <a
                href={data.sourceUrls[0]}
                target="_blank"
                rel="noopener noreferrer"
                className="source-link text-sm inline-flex gap-4"
              >
                {data.sourceUrls[0]}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
