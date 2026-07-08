import { languages } from "@/lib/constants";

type LanguageSelectorProps = {
  value?: string;
  onChange?: (value: string) => void;
};

export function LanguageSelector({ value, onChange }: LanguageSelectorProps) {
  return (
    <select
      value={value}
      onChange={(event) => onChange?.(event.target.value)}
      className="h-10 rounded-md border bg-card px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
    >
      {languages.map((language) => (
        <option key={language}>{language}</option>
      ))}
    </select>
  );
}
