import React from "react";

const comments = [
  {
    name: "Suraj Guvaju",
    role: "Full Stack Team Lead",
    text: "Pratham consistently delivers robust front-end solutions and collaborates closely with the backend team to ship features on time. His code is clean, well-documented, and easy to maintain.",
    time: "May 2026",
  },
  {
    name: "Sugam Ghising",
    role: "Backend Developer",
    text: "Working with Pratham improved our API integrations and performance. He communicates clearly and proactively handles edge-cases — backend-friendly engineer.",
    time: "April 2026",
  },
  {
    name: "Suvash Aryal",
    role: "CEO, Geek Tech Solutions",
    text: "Pratham has been instrumental in delivering quality products for our clients. He is thoughtful, professional, and delivery-focused — a trusted partner.",
    time: "May 2026",
  },
];

const Comments = () => {
  return (
    <section id="comments" className="flex flex-col items-center justify-center py-20">
      <div className="w-full max-w-6xl px-6">
        <div className="mb-8">
          <h2 className="text-[28px] md:text-3xl tracking-widest text-gray-300">
            WHAT COLLEAGUES SAY
          </h2>
          <div className="w-full h-[1px] bg-[#2b2f36] mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {comments.map((c, i) => {
            const parts = c.name.split(" ");
            const initials = parts.map((n) => n[0]).slice(0, 2).join("");
            const first = parts[0];
            const last = parts.slice(1).join(" ");

            return (
              <article
                key={c.name}
                className="bg-[#0f1724] border border-[#263239] p-6 rounded-lg shadow-md"
                data-animate
                data-delay={i + 1}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#e6d9c0] text-[#111827] flex items-center justify-center font-semibold">
                    {initials}
                  </div>

                  <div className="flex-1">
                    <p className="text-gray-300 italic leading-relaxed">“{c.text}”</p>

                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <div className="text-gray-200">
                          {first} <span className="block font-bold">{last}</span>
                        </div>
                        <div className="text-sm text-gray-400">{c.role}</div>
                      </div>

                      <div className="text-sm text-gray-400">{c.time}</div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Comments;
