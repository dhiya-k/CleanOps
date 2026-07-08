import { CopilotWorkspace } from "@/components/copilot/CopilotWorkspace";
import { PageContainer } from "@/components/layout/PageContainer";

export default function CopilotPage() {
  return (
    <PageContainer
      title="AI Copilot"
      description="Placeholder copilot workspace for municipal operations planning."
    >
      <CopilotWorkspace />
    </PageContainer>
  );
}
