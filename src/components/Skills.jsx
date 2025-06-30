import React from 'react';

const skills = ['ReactJS', 'JavaScript', 'HTML5', 'CSS3', 'PHP', 'Postman', 'GitHub', 'TailwindCSS'];

const Skills = () => {
  return (
    <section className="p-8 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, idx) => (
          <span key={idx} className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
