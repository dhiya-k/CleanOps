import { Bot, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LanguageSelector } from "@/components/copilot/LanguageSelector";
import { VoiceInputButton } from "@/components/copilot/VoiceInputButton";

type AICopilotCardProps = {
  brief: string;
  language: string;
  isLoading: boolean;
  loadingMessages: string[];
  onBriefChange: (value: string) => void;
  onLanguageChange: (value: string) => void;
  onGeneratePlan: () => void;
};

export function AICopilotCard({
  brief,
  language,
  isLoading,
  loadingMessages,
  onBriefChange,
  onLanguageChange,
  onGeneratePlan
}: AICopilotCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bot className="size-5 text-primary" />
          Today&apos;s Context
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <textarea
          value={brief}
          onChange={(event) => onBriefChange(event.target.value)}
          className="min-h-52 w-full resize-none rounded-lg border bg-background p-4 text-sm leading-6 outline-none focus:ring-2 focus:ring-ring"
          placeholder={"Two trucks are under maintenance.\nHeavy rain expected after 2 PM.\nRoad closed near City Market."}
        />
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-3">
            <VoiceInputButton />
            <LanguageSelector value={language} onChange={onLanguageChange} />
          </div>
          <Button className="h-12 px-6" disabled={isLoading} onClick={onGeneratePlan}>
            {isLoading ? <Loader2 className="size-4 animate-spin" /> : null}
            {isLoading ? "Generating..." : "Generate AI Plan"}
          </Button>
        </div>
        {isLoading ? (
          <div className="rounded-lg border bg-background p-4 text-sm text-muted-foreground">
            <p className="font-medium text-foreground">Planning in progress</p>
            <ul className="mt-2 space-y-1">
              {loadingMessages.map((message) => (
                <li key={message}>{message}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
