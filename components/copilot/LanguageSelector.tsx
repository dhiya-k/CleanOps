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
      {languages.filter((language) => ["English", "Kannada"].includes(language)).map((language) => (
        <option key={language}>{language}</option>
      ))}
    </select>
  );
}
