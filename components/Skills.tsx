import { Wrench, Cloud, Database, Workflow } from "lucide-react";
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";

export function Skills() {
  const skillCategories = [
    {
      icon: Workflow,
      title: "CRM & Workflow Automation",
      skills: [
        { name: "GoHighLevel (GHL) Automation", level: 85 },
        { name: "Zoho CRM", level: 82 },
        { name: "Zoho Flow", level: 80 },
        { name: "CRM Pipelines & Lead Management", level: 88 },
      ],
    },
    {
      icon: Workflow,
      title: "AI & Machine Learning",
      skills: [
        { name: "Transformer Fine-Tuning (LoRA / QLoRA)", level: 90 },
        { name: "RAG Chatbots & Retrieval Systems", level: 88 },
        { name: "Deep Learning (CNN, RNN, LSTM, GRU)", level: 85 },
        { name: "Predictive Analytics & Healthcare AI", level: 87 },
      ],
    },
    {
      icon: Cloud,
      title: "Integrations & Automation Tools",
      skills: [
        { name: "Zapier", level: 90 },
        { name: "Make (Integromat)", level: 88 },
        { name: "API & Webhook Integrations", level: 85 },
        { name: "Calendar & Appointment Automation", level: 82 },
      ],
    },
    {
      icon: Cloud,
      title: "Integrations & AI Systems",
      skills: [
        { name: "LangChain / LLM Pipelines", level: 85 },
        { name: "API & Webhook Integrations", level: 82 },
        { name: "Cloud Deployment (AWS / GCP / Azure)", level: 80 },
        { name: "Workflow Automation with AI Assistants", level: 83 },
      ],
    },
    {
      icon: Wrench,
      title: "AI-Powered Automation",
      skills: [
        { name: "Conversational AI & RAG Systems", level: 88 },
        { name: "Voice AI & VAPI Systems", level: 80 },
        { name: "Clinical Workflow Automation", level: 85 },
        { name: "Business Process Automation with AI", level: 82 },
      ],
    },
  ];

  const otherSkills = [
    "Python & ML Libraries (PyTorch, TensorFlow)",
    "Model Evaluation & Hyperparameter Tuning",
    "Prompt Engineering for LLMs",
    "Medical Decision Support AI",
    "Data Cleaning & Preprocessing Pipelines",
    "AI Experimentation & Research",
    "Workflow Optimization & Automation Debugging",
    "No-Code / Low-Code AI Solutions",
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
              AI & Automation Skills
            </span>
            <h2 className="text-4xl md:text-5xl mb-4">Technical Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
               AI, Machine Learning, and automation skills applied in healthcare and business operations.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-card border-border hover:border-primary/50 transition-all"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl">{category.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill, i) => (
                      <div key={i}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm">{skill.name}</span>
                          <span className="text-sm text-primary">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Other Skills */}
          <div>
            <h3 className="text-2xl mb-6 text-center">Additional Automation Skills</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {otherSkills.map((skill, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-secondary border border-border rounded-full hover:border-primary/50 hover:bg-primary/10 transition-all"
                >
                  <span className="text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
