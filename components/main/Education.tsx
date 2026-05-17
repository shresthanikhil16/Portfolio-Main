import React from "react";

const educationItems = [
  {
    title: "B.Sc. (Hons) in Computing",
    institution: "Softwarica College",
    affiliation: "Affiliated to Coventry University",
    details:
      "Key learnings: Solid foundations in computing principles, management fundamentals, and formative schooling shaping discipline and curiosity.",
  },
  {
    title: "+2 (Management)",
    institution: "Khwopa Secondary School",
    affiliation: "",
    details:
      "Key learnings: Solid foundations in computing principles, management fundamentals, and formative schooling shaping discipline and curiosity.",
  },
  {
    title: "Schooling and SEE",
    institution: "Kathmandu University High School",
    affiliation: "",
    details:
      "Key learnings: Solid foundations in computing principles, management fundamentals, and formative schooling shaping discipline and curiosity.",
  },
];

export default function Education() {
  return (
    <section id="education" className="flex items-center justify-center py-20 px-6">
      <div className="max-w-6xl w-full">
        <div className="mb-8">
          <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            EDUCATION
          </h2>
          <div className="w-28 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500 rounded mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationItems.map((e, i) => (
            <article
              key={i}
              className="bg-[#0f1724] border border-[#263239] p-6 rounded-lg shadow-md"
              data-animate
              data-delay={i + 1}
            >
              <h3 className="text-lg font-semibold text-white">{e.title}</h3>
              <div className="text-sm text-gray-400 mt-1">
                {e.institution}
                {e.affiliation ? ` — ${e.affiliation}` : ""}
              </div>
              <p className="mt-4 text-gray-300">{e.details}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
