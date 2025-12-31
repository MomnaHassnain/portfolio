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
      icon: Database,
      title: "Data & CRM Backend",
      skills: [
        { name: "Data Mapping & Synchronization", level: 90 },
        { name: "CRM Custom Fields & Modules", level: 85 },
        { name: "MongoDB / PostgreSQL", level: 75 },
        { name: "Reporting & Dashboard Automation", level: 80 },
      ],
    },
    {
      icon: Wrench,
      title: "AI-Powered Automation",
      skills: [
        { name: "AI Chatbots for CRM & Support", level: 85 },
        { name: "LLM Integration (Gemini / OpenAI)", level: 80 },
        { name: "RAG-Based Automation Systems", level: 78 },
        { name: "Voice AI (VAPI)", level: 75 },
      ],
    },
  ];

  const otherSkills = [
    "Email, SMS & WhatsApp Automation",
    "Lead Qualification & Routing",
    "Facebook Ads Lead Handling",
    "Marketing Funnel Automation",
    "Task & Notification Automation",
    "Business Process Automation",
    "Client Requirement Analysis",
    "Workflow Optimization",
    "Error Handling & Automation Debugging",
    "No-Code / Low-Code Solutions",
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
              Automation Skills
            </span>
            <h2 className="text-4xl md:text-5xl mb-4">Automation Tech Stack</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              CRM, workflow automation, and AI-driven systems for scalable business operations
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
