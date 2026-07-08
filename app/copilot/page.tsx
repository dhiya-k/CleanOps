import { CopilotWorkspace } from "@/components/copilot/CopilotWorkspace";
import { PageContainer } from "@/components/layout/PageContainer";

export default function CopilotPage() {
  return (
    <PageContainer
      title="AI Copilot"
      description="Generate, compare, and optimise daily municipal operations plans using AI-powered planning engines."
    >
      <CopilotWorkspace />
    </PageContainer>
  );
}
