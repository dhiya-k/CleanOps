import { Mic } from "lucide-react";

import { Button } from "@/components/ui/button";

export function VoiceInputButton() {
  return (
    <Button variant="outline" className="size-10 px-0" aria-label="Voice input">
      <Mic className="size-5" />
    </Button>
  );
}
