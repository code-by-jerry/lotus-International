"use client";

import React, { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { CAREERS } from "@/data/db";
import { Briefcase, MapPin, CheckCircle2, Upload, Send, Loader2 } from "lucide-react";

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    message: "",
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate application upload
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", position: "", message: "" });
      setSelectedFile(null);
    }, 1500);
  };

  return (
    <div className="page-transition min-h-screen pb-20">
      {/* Page Header */}
      <section className="bg-brand-ink text-brand-bg py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <span className="text-xs font-bold tracking-widest text-brand-accent uppercase mb-3 block">
              Join Our Factory Team
            </span>
            <h1 className="font-serif-heading text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
              Build a Career in Sustainable Fashion
            </h1>
            <p className="text-sm md:text-base text-brand-bg/75 mt-4 max-w-2xl font-medium">
              Work in a modern, solar-powered facility with safe conditions, fair compensation, and a culture that supports women&apos;s empowerment.
            </p>
          </ScrollReveal>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(#FAF7F2_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
      </section>

      {/* Workplace Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <ScrollReveal>
                <h2 className="font-serif-heading text-3xl font-bold text-brand-ink mb-6">
                  Life at Lotus
                </h2>
                <p className="text-xs md:text-sm text-brand-grey leading-relaxed mb-6 font-medium">
                  We believe that ethical fashion is built on fair treatment. At Lotus, we provide our 250+ employees with safe workspaces, healthcare benefits, and technical skill development.
                </p>
              </ScrollReveal>

              <div className="space-y-4 mt-8">
                <ScrollReveal delay={0.05} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-brand-sage shrink-0 mt-0.5" />
                  <div>
                    <span className="font-serif-heading text-base font-bold text-brand-ink block">Clean, Safe Environment</span>
                    <p className="text-xs text-brand-grey">Well-ventilated workspaces, automated machinery guards, and active health checks.</p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.1} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-brand-sage shrink-0 mt-0.5" />
                  <div>
                    <span className="font-serif-heading text-base font-bold text-brand-ink block">Skill Upgradation</span>
                    <p className="text-xs text-brand-grey">We train operators in CAD planning, special sewing techniques, and digital quality checklists.</p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.15} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-brand-sage shrink-0 mt-0.5" />
                  <div>
                    <span className="font-serif-heading text-base font-bold text-brand-ink block">Fair Pay & Benefits</span>
                    <p className="text-xs text-brand-grey">Provident Fund (PF), insurance coverage, free transportation, and annual productivity incentives.</p>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-brand-light-grey border border-brand-light-grey">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1521791136368-1a8be829338b?auto=format&fit=crop&q=80&w=800"
                alt="Happy employees collaborating"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Current Job Openings */}
          <div className="border-t border-brand-light-grey pt-20">
            <h2 className="font-serif-heading text-3xl font-bold text-brand-ink mb-12 text-center">
              Active Job Openings
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
              {CAREERS.map((job, idx) => (
                <ScrollReveal key={job.id} delay={idx * 0.1} className="bg-brand-bg border border-brand-light-grey rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-sm hover:border-brand-accent/40 transition-colors">
                  <div>
                    <div className="flex flex-wrap gap-2 items-center text-xs font-semibold text-brand-accent mb-4">
                      <span className="bg-brand-accent/10 px-2.5 py-0.5 rounded flex items-center gap-1">
                        <Briefcase className="w-3.5 h-3.5" />
                        {job.department}
                      </span>
                      <span className="bg-brand-ink/5 px-2.5 py-0.5 rounded flex items-center gap-1 text-brand-ink">
                        <MapPin className="w-3.5 h-3.5" />
                        {job.location}
                      </span>
                    </div>
                    <h3 className="font-serif-heading text-xl font-bold text-brand-ink mb-2">
                      {job.title}
                    </h3>
                    <p className="text-xs text-brand-grey font-semibold mb-4">
                      Experience Target: {job.experience}
                    </p>
                    <p className="text-xs text-brand-ink/90 leading-relaxed font-medium mb-6">
                      {job.description}
                    </p>
                    <div className="space-y-2 mb-6">
                      <span className="text-[10px] font-bold tracking-wider uppercase text-brand-grey block">Key Requirements:</span>
                      {job.requirements.map((req, rIdx) => (
                        <div key={rIdx} className="flex gap-2 items-start text-xs text-brand-grey">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-sage shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Application form */}
            <div className="max-w-2xl mx-auto bg-white border border-brand-light-grey rounded-2xl p-6 md:p-10 shadow-lg">
              <h3 className="font-serif-heading text-2xl font-bold text-brand-ink mb-2 text-center">
                Submit Your Application
              </h3>
              <p className="text-xs text-brand-grey font-medium mb-8 text-center">
                Don&apos;t see a matching opening? Register your interest, and we will contact you when relevant vacancies open.
              </p>

              {isSubmitted ? (
                <div className="text-center py-6 animate-fadeIn">
                  <CheckCircle2 className="w-12 h-12 text-brand-sage mx-auto mb-4" />
                  <h4 className="font-serif-heading text-xl font-bold mb-2">Application Received</h4>
                  <p className="text-xs text-brand-grey">
                    Thank you. We have saved your credentials in our recruitment database and will get back to you if your profile matches.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold tracking-wider uppercase text-brand-ink mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-brand-light-grey text-sm focus:outline-none focus:ring-1 focus:ring-brand-accent focus:border-brand-accent bg-brand-bg/25"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-wider uppercase text-brand-ink mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-brand-light-grey text-sm focus:outline-none focus:ring-1 focus:ring-brand-accent focus:border-brand-accent bg-brand-bg/25"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold tracking-wider uppercase text-brand-ink mb-2">
                      Position of Interest *
                    </label>
                    <select
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-brand-light-grey text-sm focus:outline-none focus:ring-1 focus:ring-brand-accent focus:border-brand-accent bg-brand-bg/25"
                    >
                      <option value="">Select Position</option>
                      <option value="QC Manager">Quality Control Manager</option>
                      <option value="Merchandiser">Production Merchandiser</option>
                      <option value="Line Supervisor">Line Supervisor</option>
                      <option value="General Operator">Tailor / Operator</option>
                      <option value="Other">Other / General Interest</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold tracking-wider uppercase text-brand-ink mb-2">
                      Cover Note / Experience Summary
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Briefly summarize your background..."
                      className="w-full px-4 py-3 rounded-lg border border-brand-light-grey text-sm focus:outline-none focus:ring-1 focus:ring-brand-accent focus:border-brand-accent bg-brand-bg/25"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold tracking-wider uppercase text-brand-ink mb-2">
                      Upload Resume (PDF / Doc) *
                    </label>
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-brand-light-grey border-dashed rounded-xl cursor-pointer hover:bg-brand-bg/50 transition-colors">
                        <div className="flex flex-col items-center justify-center py-4">
                          <Upload className="w-6 h-6 text-brand-grey mb-1.5" />
                          <p className="text-xs text-brand-grey font-medium">
                            {selectedFile ? (
                              <span className="text-brand-accent font-semibold">{selectedFile.name}</span>
                            ) : (
                              <span>Click to upload resume</span>
                            )}
                          </p>
                        </div>
                        <input type="file" required className="hidden" onChange={handleFileChange} accept=".pdf,.doc,.docx" />
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-brand-accent hover:bg-brand-accent-hover text-brand-bg font-semibold text-sm tracking-wider uppercase transition-colors flex items-center justify-center gap-2 disabled:bg-brand-accent/50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Submitting Application...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Application
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
