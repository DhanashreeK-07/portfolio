export default function Portfolio() {
  const projects = [
    {
      title: "Patient Health Monitoring System",
      tech: "PySpark, Kafka, Hadoop, Spark Streaming",
      description:
        "Built a real-time streaming pipeline to process patient health metrics and monitor healthcare data efficiently.",
    },
    {
      title: "Satellite Crop Health Analysis",
      tech: "Python, Google Earth Engine, Sentinel Hub API",
      description:
        "Developed an NDVI-based crop monitoring system for detecting plant stress using satellite imagery.",
    },
    {
      title: "Movie Review Sentiment Analysis",
      tech: "Python, NLP, Pandas, NLTK",
      description:
        "Created an NLP-based sentiment analysis model to classify movie reviews as positive or negative.",
    },
  ];

  const skills = [
    "Python",
    "SQL",
    "PySpark",
    "Kafka",
    "Databricks",
    "Delta Lake",
    "Azure",
    "AWS",
    "Machine Learning",
    "Hadoop",
    "Spark SQL",
    "Data Engineering",
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 bg-gradient-to-b from-gray-900 to-black">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Hi, I'm Dhanashree
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl">
          Aspiring Data Engineer & Data Scientist passionate about building scalable ETL pipelines, real-time systems, and cloud-based analytics solutions.
        </p>

        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <a
            href="#projects"
            className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
            href="https://github.com"
            target="_blank"
            className="border border-white px-6 py-3 rounded-2xl hover:bg-white hover:text-black transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            className="border border-white px-6 py-3 rounded-2xl hover:bg-white hover:text-black transition"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-gray-300 text-lg leading-8">
          I am passionate about Big Data, Cloud Computing, and AI-driven solutions. I enjoy building scalable data pipelines, processing real-time data streams, and solving real-world problems using data engineering technologies.
        </p>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-4 text-center hover:scale-105 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-3xl p-6 hover:-translate-y-2 transition"
            >
              <h3 className="text-2xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-sm text-gray-400 mb-4">
                {project.tech}
              </p>

              <p className="text-gray-300 leading-7">
                {project.description}
              </p>

              <button className="mt-6 bg-white text-black px-4 py-2 rounded-xl font-medium hover:scale-105 transition">
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10">Certifications</h2>

        <div className="space-y-4">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <h3 className="text-xl font-semibold">
              AWS Academy Data Engineering
            </h3>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <h3 className="text-xl font-semibold">
              AWS Academy Cloud Foundations
            </h3>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-8">Contact</h2>

        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">
          <p className="text-gray-300 text-lg mb-4">
            Interested in collaborating or hiring?
          </p>

          <div className="space-y-2 text-gray-400">
            <p>Email: yourmail@example.com</p>
            <p>Location: Pune, Maharashtra, India</p>
          </div>

          <div className="flex gap-4 mt-6 flex-wrap">
            <a
              href="https://github.com"
              target="_blank"
              className="bg-white text-black px-5 py-3 rounded-2xl font-semibold hover:scale-105 transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="border border-white px-5 py-3 rounded-2xl hover:bg-white hover:text-black transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 text-center py-8 text-gray-500">
        © 2026 Dhanashree | Data Engineering Portfolio
      </footer>
    </div>
  );
}
