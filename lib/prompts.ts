export function buildProposalPrompt(
  data: {
    leadName: string;
    company: string;
    projectType: string;
    budget: string;
    timeline: string;
    notes: string;
  }
) {
  return `
Create a professional software development proposal.

Client Name:
${data.leadName}

Company:
${data.company}

Project Type:
${data.projectType}

Budget:
${data.budget}

Timeline:
${data.timeline}

Requirements:
${data.notes}

Return sections in this order:

1. Executive Summary
2. Scope of Work
3. Deliverables
4. Timeline
5. Pricing
6. Assumptions
7. Next Steps

Keep tone professional and concise.
`;
}