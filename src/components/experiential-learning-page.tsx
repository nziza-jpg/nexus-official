import { useState } from "react";
import { ChevronRight, ChevronLeft, Star, ChevronDown } from "lucide-react";
import logo from "@/assets/nexus-logo.png";

export function ExperientialLearningPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const testimonials = [
    {
      name: "LOREM IPSUM",
      location: "USA",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    },
    {
      name: "DOLOR AMET",
      location: "ZAMBIA",
      review:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint.",
    },
    {
      name: "CONSECTETUR SIT",
      location: "ZAMBIA",
      review:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
    },
    {
      name: "ADIPISCING ELIT",
      location: "ZAMBIA",
      review:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
    },
  ];

  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet consectetur adipiscing?",
      answer:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    },
    {
      question: "Quis autem vel eum iure reprehenderit qui in ea?",
      answer:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
    },
    {
      question: "At vero eos et accusamus et iusto odio dignissimos?",
      answer:
        "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus.",
    },
    {
      question: "Nam libero tempore cum soluta nobis est eligendi?",
      answer:
        "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.",
    },
    {
      question: "Ut enim ad minima veniam quis nostrum exercitationem?",
      answer:
        "Omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus.",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-[500px] flex items-center justify-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1536064479547-7ee40b74b807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc3R1ZGVudCUyMHRyYWluaW5nJTIwYWZyaWNhfGVufDF8fHx8MTc2ODM4ODk5N3ww&ixlib=rb-4.1.0&q=80&w=1080)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Experiential Learning
          </h1>
          <p className="text-xl text-white">
            Consectetur adipiscing elit sed do eiusmod tempor incididunt ut
            labore
          </p>
        </div>
      </div>

      {/* Introduction Section - Two Column */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-4xl font-bold mb-6"
                style={{ color: "#3A3A3A" }}
              >
                Lorem Ipsum Dolor Consectetur
              </h2>
              <p className="text-lg mb-4" style={{ color: "#3A3A3A" }}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <p className="text-lg mb-6" style={{ color: "#3A3A3A" }}>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt.
              </p>
              <button
                className="px-8 py-3 text-white font-semibold rounded transition-all hover:opacity-90"
                style={{ backgroundColor: "#3CB371" }}
              >
                Apply Now
              </button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1763865778196-e3f2e3dbd425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBoZWFsdGglMjB3b3JrZXJzJTIwZ3JvdXB8ZW58MXx8fHwxNzY4Mzg4OTk4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Community health workers"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Program Categories Cards */}
      <div className="py-16" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="container mx-auto px-6">
          <h2
            className="text-4xl font-bold text-center mb-4"
            style={{ color: "#3A3A3A" }}
          >
            Choose Your Learning Path
          </h2>
          <p className="text-center text-lg mb-12" style={{ color: "#3A3A3A" }}>
            Explore our diverse range of experiential learning opportunities
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Training Programs Card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1637743408313-c9d5e869d9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdHJhaW5pbmclMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NjgzODg5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Training Programs"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute top-0 left-0 right-0 p-6">
                  <span
                    className="inline-block px-3 py-1 text-xs font-semibold rounded-full"
                    style={{ backgroundColor: "#3CB371", color: "#FFFFFF" }}
                  >
                    Professional Development
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white">
                    Training Programs
                  </h3>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <ul className="space-y-3 mb-6 flex-grow">
                  <li
                    className="flex items-start gap-2 text-sm"
                    style={{ color: "#3A3A3A" }}
                  >
                    <ChevronRight
                      size={18}
                      style={{
                        color: "#3CB371",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    />
                    <span>Lorem Ipsum Dolor Sit Amet</span>
                  </li>
                  <li
                    className="flex items-start gap-2 text-sm"
                    style={{ color: "#3A3A3A" }}
                  >
                    <ChevronRight
                      size={18}
                      style={{
                        color: "#3CB371",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    />
                    <span>Consectetur Adipiscing Elit</span>
                  </li>
                  <li
                    className="flex items-start gap-2 text-sm"
                    style={{ color: "#3A3A3A" }}
                  >
                    <ChevronRight
                      size={18}
                      style={{
                        color: "#3CB371",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    />
                    <span>Sed Do Eiusmod Tempor</span>
                  </li>
                  <li
                    className="flex items-start gap-2 text-sm"
                    style={{ color: "#3A3A3A" }}
                  >
                    <ChevronRight
                      size={18}
                      style={{
                        color: "#3CB371",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    />
                    <span>Incididunt Ut Labore</span>
                  </li>
                </ul>
                <button
                  className="w-full py-2 border-2 rounded font-semibold text-sm transition-all"
                  style={{ borderColor: "#3CB371", color: "#3CB371" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#3CB371";
                    e.currentTarget.style.color = "#FFFFFF";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#3CB371";
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Research Opportunities Card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1614934273523-1c9f0f666c33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMGxhYm9yYXRvcnklMjBzY2llbmNlfGVufDF8fHx8MTc2ODMwNTc1M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Research Opportunities"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute top-0 left-0 right-0 p-6">
                  <span
                    className="inline-block px-3 py-1 text-xs font-semibold rounded-full"
                    style={{ backgroundColor: "#F06565", color: "#FFFFFF" }}
                  >
                    Evidence-Based Learning
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white">
                    Research Opportunities
                  </h3>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <ul className="space-y-3 mb-6 flex-grow">
                  <li
                    className="flex items-start gap-2 text-sm"
                    style={{ color: "#3A3A3A" }}
                  >
                    <ChevronRight
                      size={18}
                      style={{
                        color: "#F06565",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    />
                    <span>Quis Autem Vel Eum Iure</span>
                  </li>
                  <li
                    className="flex items-start gap-2 text-sm"
                    style={{ color: "#3A3A3A" }}
                  >
                    <ChevronRight
                      size={18}
                      style={{
                        color: "#F06565",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    />
                    <span>Reprehenderit Voluptate</span>
                  </li>
                  <li
                    className="flex items-start gap-2 text-sm"
                    style={{ color: "#3A3A3A" }}
                  >
                    <ChevronRight
                      size={18}
                      style={{
                        color: "#F06565",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    />
                    <span>Molestiae Consequatur</span>
                  </li>
                  <li
                    className="flex items-start gap-2 text-sm"
                    style={{ color: "#3A3A3A" }}
                  >
                    <ChevronRight
                      size={18}
                      style={{
                        color: "#F06565",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    />
                    <span>Temporibus Autem</span>
                  </li>
                </ul>
                <button
                  className="w-full py-2 border-2 rounded font-semibold text-sm transition-all"
                  style={{ borderColor: "#F06565", color: "#F06565" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#F06565";
                    e.currentTarget.style.color = "#FFFFFF";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#F06565";
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Internship Programs Card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5zaGlwJTIwb2ZmaWNlJTIwd29ya3xlbnwxfHx8fDE3MzY4ODU3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Internship Programs"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute top-0 left-0 right-0 p-6">
                  <span
                    className="inline-block px-3 py-1 text-xs font-semibold rounded-full"
                    style={{ backgroundColor: "#E4A261", color: "#FFFFFF" }}
                  >
                    Hands-On Experience
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white">
                    Internship Programs
                  </h3>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <ul className="space-y-3 mb-6 flex-grow">
                  <li
                    className="flex items-start gap-2 text-sm"
                    style={{ color: "#3A3A3A" }}
                  >
                    <ChevronRight
                      size={18}
                      style={{
                        color: "#E4A261",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    />
                    <span>At Vero Eos Accusamus</span>
                  </li>
                  <li
                    className="flex items-start gap-2 text-sm"
                    style={{ color: "#3A3A3A" }}
                  >
                    <ChevronRight
                      size={18}
                      style={{
                        color: "#E4A261",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    />
                    <span>Dignissimos Ducimus Qui</span>
                  </li>
                  <li
                    className="flex items-start gap-2 text-sm"
                    style={{ color: "#3A3A3A" }}
                  >
                    <ChevronRight
                      size={18}
                      style={{
                        color: "#E4A261",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    />
                    <span>Blanditiis Praesentium</span>
                  </li>
                  <li
                    className="flex items-start gap-2 text-sm"
                    style={{ color: "#3A3A3A" }}
                  >
                    <ChevronRight
                      size={18}
                      style={{
                        color: "#E4A261",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    />
                    <span>Voluptatum Deleniti</span>
                  </li>
                </ul>
                <button
                  className="w-full py-2 border-2 rounded font-semibold text-sm transition-all"
                  style={{ borderColor: "#E4A261", color: "#E4A261" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#E4A261";
                    e.currentTarget.style.color = "#FFFFFF";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#E4A261";
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <h2
            className="text-4xl font-bold text-center mb-4"
            style={{ color: "#3A3A3A" }}
          >
            What Our Participants Say
          </h2>
          <p className="text-center text-lg mb-12" style={{ color: "#3A3A3A" }}>
            Hear from those who have experienced our programs
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 relative">
              <div className="absolute top-4 right-4 flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    fill="#3CB371"
                    style={{ color: "#3CB371" }}
                  />
                ))}
              </div>

              <div className="mb-6">
                <p className="text-lg italic mb-6" style={{ color: "#3A3A3A" }}>
                  "{testimonials[currentTestimonial].review}"
                </p>
                <div className="flex items-center gap-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl"
                    style={{ backgroundColor: "#3CB371" }}
                  >
                    {testimonials[currentTestimonial].name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold" style={{ color: "#3A3A3A" }}>
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p className="text-sm" style={{ color: "#3A3A3A" }}>
                      {testimonials[currentTestimonial].location}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all hover:text-white"
                  style={{ borderColor: "#3CB371", color: "#3CB371" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#3CB371";
                    e.currentTarget.style.color = "#FFFFFF";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#3CB371";
                  }}
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all hover:text-white"
                  style={{ borderColor: "#3CB371", color: "#3CB371" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#3CB371";
                    e.currentTarget.style.color = "#FFFFFF";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#3CB371";
                  }}
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className="w-2 h-2 rounded-full transition-all"
                    style={{
                      backgroundColor:
                        i === currentTestimonial ? "#3CB371" : "#E4A261",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="container mx-auto px-6">
          <h2
            className="text-4xl font-bold text-center mb-4"
            style={{ color: "#3A3A3A" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-center text-lg mb-12" style={{ color: "#3A3A3A" }}>
            Find answers to common questions about our programs
          </p>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left transition-colors hover:bg-gray-50"
                >
                  <span
                    className="font-semibold text-base"
                    style={{ color: "#3A3A3A" }}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    style={{
                      color: "#3CB371",
                      transform:
                        openFAQ === index ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-sm" style={{ color: "#3A3A3A" }}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div
        className="py-20 text-center relative overflow-hidden"
        style={{
          backgroundImage: `url(${logo})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
          backgroundColor: "#FFFFFF",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        ></div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold mb-6" style={{ color: "#3A3A3A" }}>
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8" style={{ color: "#3A3A3A" }}>
            Join our community of passionate health professionals making a real
            difference
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              className="px-8 py-4 font-semibold rounded-lg transition-all hover:shadow-xl"
              style={{ backgroundColor: "#3CB371", color: "#FFFFFF" }}
            >
              Apply for Internship
            </button>
            <button
              className="px-8 py-4 border-2 font-semibold rounded-lg transition-all hover:shadow-lg"
              style={{
                borderColor: "#3CB371",
                color: "#3CB371",
                backgroundColor: "#FFFFFF",
              }}
            >
              Explore Training Programs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
