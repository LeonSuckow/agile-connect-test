import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useThemeContext } from "@/contexts/theme-context";
import { FontType } from "@/types/theme";

export const FontSelector = () => {
  const { font, fontLabel, setFont } = useThemeContext();

  const possibleFonts = [
    {
      value: "sans",
      label: "Sans Serif",
    },
    {
      value: "serif",
      label: "Serif",
    },
    {
      value: "mono",
      label: "Mono",
    },
  ];
  return (
    <div className="relative">
      <Select onValueChange={(value) => setFont(value as FontType)}>
        <SelectTrigger className="w-[9.375rem]  font-bold font-agile-body-md border-none shadow-none dark:bg-transparent">
          <SelectValue placeholder={fontLabel} defaultValue={font} />
        </SelectTrigger>
        <SelectContent className="border-none">
          {possibleFonts.map((font) => (
            <SelectItem
              key={font.value}
              value={font.value}
              className="hover:text-agile-purple-800"
            >
              {font.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
