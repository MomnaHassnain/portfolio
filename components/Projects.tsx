/* eslint-disable react/jsx-no-undef */
import { Filter } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useState } from "react";
import Image from "next/image";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "AI/ML", "Automation", "Healthcare", "GenAI"];

  const projects = [
        
    {
      title: "Multimodal Vision-Language Models for Medical Imaging",
      description:
        "Fine-tuned Qwen2.5-VL-3B vision-language transformer models for medical imaging tasks using LoRA & QLoRA. Projects include Alzheimer's detection from MRI scans, chest X-ray analysis, and fracture localization with visual grounding.",
      image: "/1.jpg",
      tags: [
        "Qwen2.5-VL-3B",
        "Vision-Language Models",
        "LoRA",
        "QLoRA",
        "Medical Imaging",
        "Alzheimer's Detection",
        "Chest X-ray",
        "Fracture Detection",
        "Python",
        "Deep Learning"
      ],
      category: "AI/ML",
    },
    {
      title: "Doctor–Patient Conversational AI App",
      description:
        "Developed a multilingual AI medical assistant for real-time doctor–patient conversations, automating summaries, prescriptions, and billing codes. Deployed at EMRChains NSTP for clinical efficiency.",
      video: "/video.mp4", // your video file in /public folder
      tags: [
        "Conversational AI",
        "Whisper",
        "Gemini API",
        "LangChain",
        "FAISS",
        "Multilingual",
        "Clinical Automation",
        "Prescriptions",
        "ICD/HCC/E&M Codes"
      ],
      category: "AI/ML",
      link: "https://emrchains.com/dr-patient",
    },
    {
      title: "RAG-Based Chatbots",
      description:
        "Developed Retrieval-Augmented Generation (RAG) chatbots for intelligent Q&A and knowledge retrieval workflows across multiple healthcare organizations.",
      image: "/smile.png",
      tags: ["RAG", "Chatbots", "LLMs", "LangChain", "Python"],
      category: "AI/ML",
      links: [
        { name: "Smile Center Islamabad", url: "https://www.smilecenterislamabad.com/" },
        { name: "Pak Healthcare", url: "https://pakhealthcare.pk/" },
        { name: "CDC Hospital", url: "https://cdc.net.pk/" },
        { name: "Maroof International Hospital", url: "https://www.maroof.com.pk/" },
        { name: "EMRChains", url: "https://emrchains.com/" }
      ]
    },
     {
      title: "GoHighLevel CRM Automation – Case Study",
      description:
        "Designed end-to-end CRM automation workflows with lead capture, pipeline management, notifications, and follow-ups.",
      image: "/ghl.png",
      tags: ["GHL", "CRM", "Automation", "Email/SMS/WhatsApp"],
      category: "GHL",
    },

    {
      title: "Zoho Flow Automation – Prototype",
      description:
        "Automated data synchronization, lead assignment, notifications, and reporting using Zoho CRM and Zoho Flow.",
      image: "/zoho.png",
      tags: ["Zoho CRM", "Zoho Flow", "Automation Rules", "APIs"],
      category: "Zoho",
    },
    {
      title: "Facebook Ads Automation – Demo",
      description:
        "Set up lead capture and campaign optimization workflows for Facebook Ads, including performance tracking and follow-ups.",
      image: "/fb.png",
      tags: ["Facebook Ads", "Marketing Automation", "Lead Management"],
      category: "Automation",
    },
    {
      title: "VAPI Voice AI Workflow – Internal Demo",
      description:
        "Voice AI system for call handling, lead qualification, appointment booking, and automated summaries.",
      image: "/vapi.png",
      tags: ["VAPI", "Voice AI", "CRM Integration", "Automation"],
      category: "AI",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
              Projects
            </span>
            <h2 className="text-4xl md:text-5xl mb-4">Featured Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Case studies and internal demos highlighting workflow automation, CRM integrations, and AI applications.
            </p>

            {/* Filters */}
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Filter className="w-5 h-5 text-primary" />
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full border transition-all ${
                    activeFilter === filter
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-secondary border-border hover:border-primary/50"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  {project.video ? (
                    <video
                      src={project.video}
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                      />
                  ) : project.image ? (                      
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                      No Image
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/30"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {/* Links to live chatbots */}
                  {project.links && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs hover:bg-primary/20 transition-all"
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
