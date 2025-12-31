import { Briefcase, Calendar, GraduationCap } from "lucide-react";
import { Card } from "./ui/card";

export function Experience() {
  const experiences = [
    {
      title: "AUTOMATION ENGINEER",
      company: "EMRCains NSTP NUST",
      period: "Nov 2024 - Present",
      description:
        "Designing and implementing end-to-end automation solutions for CRM, business operations, and AI-powered workflows, with a focus on GoHighLevel (GHL), Zoho CRM, and system integrations.",
      highlights: [
        "Designed and deployed end-to-end automation workflows for CRM and operational processes",
        "Built logic-based automations using triggers, conditions, pipelines, and task orchestration",
        "Implemented GoHighLevel (GHL) and Zoho CRM automations for lead management and follow-ups",
        "Integrated AI-powered assistants into workflows using APIs and webhooks",
        "Developed and managed third-party integrations using Zapier, Make, and REST APIs",
        "Automated data synchronization, tagging, notifications, and reporting, reducing manual effort by 50%",
      ],
    },
    {
    title: "Machine Learning Intern",
    company: "EMRChains",
    period: "Sep 2024 - Oct 2024",
    description:
      "Worked on predictive analytics, process optimization, and deep learning model development for healthcare applications.",
    highlights: [
      "Performed data preprocessing and feature engineering",
      "Built ML & DL models for workflow automation and predictive tasks",
    ],
  },
  {
    title: "Intern",
    company: "Askari Bank",
    period: "Jul 2024 - Aug 2024",
    description:
      "Assisted in data analytics and process automation projects within IT and operations.",
    highlights: [
      "Performed data analysis and reporting",
      "Learned data management and statistical modeling for business insights",
    ],
  },
   
  ];

  const education = [
    {
      degree: "Master of Science in Mathematics (AI Specialization)",
      institution: "National University of Science and Technology (NUST), Islamabad",
      year: "Sep 2023 – Aug 2025",
    },
     {
    degree: "Bachelor of Science in Mathematics",
    institution: "University of Peshawar",
    year: "Sep 2019 – Sep 2023",
  },
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
              Professional Journey
            </span>
            <h2 className="text-4xl md:text-5xl mb-4">
              Experience & Education
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A timeline of my professional growth and academic achievements
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-8">
              <Briefcase className="w-6 h-6 text-primary" />
              <h3 className="text-2xl">Professional Experience</h3>
            </div>
            <div className="relative space-y-8">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border hidden md:block"></div>

              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-8 top-6 w-4 h-4 -ml-2 bg-primary rounded-full border-4 border-background z-10"></div>

                  <Card className="md:ml-20 p-6 bg-card border-border hover:border-primary/50 transition-all">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h4 className="text-xl text-primary mb-1">
                          {exp.title}
                        </h4>
                        <p className="text-muted-foreground">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 md:mt-0">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-primary mt-1">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="text-2xl">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card border-border hover:border-primary/50 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl mb-1">{edu.degree}</h4>
                      <p className="text-muted-foreground mb-1">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {edu.year}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
