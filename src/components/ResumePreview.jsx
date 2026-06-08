"use client";

import TemplateClassic from "@/components/templates/TemplateClassic";
import TemplateModern from "@/components/templates/TemplateModern";
import TemplateExecutive from "@/components/templates/TemplateExecutive";
import TemplateMinimal from "@/components/templates/TemplateMinimal";

const templates = {
  classic: TemplateClassic,
  modern: TemplateModern,
  executive: TemplateExecutive,
  minimal: TemplateMinimal,
};

export default function ResumePreview({ data, template = "classic" }) {
  const Template = templates[template] || TemplateClassic;
  return <Template data={data} />;
}
