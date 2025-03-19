import { useThemeContext } from "@/contexts/theme-context";
import { HalfMoon } from "iconoir-react";
import { Switch } from "../../components/ui/switch";
export const ThemeSelector = () => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <div className="flex gap-5 items-center">
      <Switch
        onCheckedChange={toggleTheme}
        checked={theme === "dark"}
        className="bg-agile-gray-500 data-[state=checked]:bg-agile-purple-800 cursor-pointer"
      />
      <HalfMoon
        onClick={toggleTheme}
        className="w-5 h-5 dark:text-agile-purple-800 text-agile-gray-500 cursor-pointer"
      />
    </div>
  );
};
