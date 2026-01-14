import { useState } from "react";
import {
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Search,
  ChevronDown,
  
} from "lucide-react";
import logo from "@/assets/nexus-logo.png";
import { ExperientialLearningPage } from "@/components/experiential-learning-page";

const pages = [
  "Home",
  "Programs / What We Do",
  "News / Blog",
  "Partners / Donors",
  "Experiential Learning",
  "Contact Us",
];

const whoWeAreItems = [
  { label: "About Us", page: "About Us" },
  { label: "Team", page: "Team" },
  { label: "Impact", page: "Impact / Stories" },
];

const experientialLearningItems = [
  { label: "Training Program", page: "Training Program" },
  { label: "Research Opportunities", page: "Research Opportunities" },
  { label: "Internship Programs", page: "Internship Programs" },
];

export function WireframeOne() {
  const [currentPage, setCurrentPage] = useState('Home');
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const [dropdownOpen, setDropdownOpen] = useState(false);
const [experientialDropdownOpen, setExperientialDropdownOpen] = useState(false);
const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
const [experientialDropdownTimeout, setExperientialDropdownTimeout] = useState<NodeJS.Timeout | null>(null);

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="border-b bg-white" style={{ borderColor: "#E4A261" }}>
        {/* Top Row: Logo and Search/Donate */}
        <div className="flex items-center justify-between px-8 py-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Nexus Health Logo" className="w-12 h-12" />
            <div className="text-lg font-semibold" style={{ color: "#3A3A3A" }}>
              Nexus Health
            </div>
          </div>

          {/* Search and Donate - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="pl-4 pr-10 py-2 border-2 rounded-full text-sm focus:outline-none"
                style={{ borderColor: "#E4A261", width: "300px" }}
              />
              <Search
                size={18}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                style={{ color: "#3CB371" }}
              />
            </div>
            <button
              className="px-6 py-2 text-sm font-bold rounded-full text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#F06565" }}
            >
              Donate
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2"
            style={{ color: "#3A3A3A" }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Bottom Row: Navigation */}
        <div className="hidden lg:flex items-center justify-center px-8 py-3">
          <nav className="flex items-center gap-1">
            <button
              onClick={() => setCurrentPage("Home")}
              className="px-4 py-2 text-base transition-all"
              style={{
                color: currentPage === "Home" ? "#3CB371" : "#3A3A3A",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#3CB371";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color =
                  currentPage === "Home" ? "#3CB371" : "#3A3A3A";
              }}
            >
              Home
            </button>

            {/* Who We Are Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (dropdownTimeout) {
                  clearTimeout(dropdownTimeout);
                  setDropdownTimeout(null);
                }
                setDropdownOpen(true);
              }}
              onMouseLeave={() => {
                const timeout = setTimeout(() => setDropdownOpen(false), 2000);
                setDropdownTimeout(timeout);
              }}
            >
              <button
                className="px-4 py-2 text-base transition-all flex items-center gap-1"
                style={{
                  color: whoWeAreItems.some((item) => item.page === currentPage)
                    ? "#3CB371"
                    : "#3A3A3A",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#3CB371";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = whoWeAreItems.some(
                    (item) => item.page === currentPage
                  )
                    ? "#3CB371"
                    : "#3A3A3A";
                }}
              >
                Who We Are
                <ChevronDown size={16} />
              </button>

              {dropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-1 bg-white shadow-lg border-2 min-w-[200px] z-50"
                  style={{ borderColor: "#E4A261" }}
                  onMouseEnter={() => {
                    if (dropdownTimeout) {
                      clearTimeout(dropdownTimeout);
                      setDropdownTimeout(null);
                    }
                  }}
                  onMouseLeave={() => {
                    const timeout = setTimeout(
                      () => setDropdownOpen(false),
                      1000
                    );
                    setDropdownTimeout(timeout);
                  }}
                >
                  {whoWeAreItems.map((item) => (
                    <button
                      key={item.page}
                      onClick={() => {
                        setCurrentPage(item.page);
                        setDropdownOpen(false);
                      }}
                      className="w-full px-6 py-3 text-base text-left transition-colors hover:text-white"
                      style={{
                        color:
                          currentPage === item.page ? "#F06565" : "#3A3A3A",
                        backgroundColor: "#FFFFFF",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#3CB371";
                        e.currentTarget.style.color = "#FFFFFF";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#FFFFFF";
                        e.currentTarget.style.color =
                          currentPage === item.page ? "#F06565" : "#3A3A3A";
                      }}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Experiential Learning Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (experientialDropdownTimeout) {
                  clearTimeout(experientialDropdownTimeout);
                  setExperientialDropdownTimeout(null);
                }
                setExperientialDropdownOpen(true);
              }}
              onMouseLeave={() => {
                const timeout = setTimeout(
                  () => setExperientialDropdownOpen(false),
                  2000
                );
                setExperientialDropdownTimeout(timeout);
              }}
            >
              <button
                className="px-4 py-2 text-base transition-all flex items-center gap-1"
                style={{
                  color: experientialLearningItems.some(
                    (item) => item.page === currentPage
                  )
                    ? "#3CB371"
                    : "#3A3A3A",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#3CB371";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = experientialLearningItems.some(
                    (item) => item.page === currentPage
                  )
                    ? "#3CB371"
                    : "#3A3A3A";
                }}
              >
                Experiential Learning
                <ChevronDown size={16} />
              </button>

              {experientialDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-1 bg-white shadow-lg border-2 min-w-[200px] z-50"
                  style={{ borderColor: "#E4A261" }}
                  onMouseEnter={() => {
                    if (experientialDropdownTimeout) {
                      clearTimeout(experientialDropdownTimeout);
                      setExperientialDropdownTimeout(null);
                    }
                  }}
                  onMouseLeave={() => {
                    const timeout = setTimeout(
                      () => setExperientialDropdownOpen(false),
                      1000
                    );
                    setExperientialDropdownTimeout(timeout);
                  }}
                >
                  {experientialLearningItems.map((item) => (
                    <button
                      key={item.page}
                      onClick={() => {
                        setCurrentPage(item.page);
                        setExperientialDropdownOpen(false);
                      }}
                      className="w-full px-6 py-3 text-base text-left transition-colors hover:text-white"
                      style={{
                        color:
                          currentPage === item.page ? "#F06565" : "#3A3A3A",
                        backgroundColor: "#FFFFFF",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#3CB371";
                        e.currentTarget.style.color = "#FFFFFF";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#FFFFFF";
                        e.currentTarget.style.color =
                          currentPage === item.page ? "#F06565" : "#3A3A3A";
                      }}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {[
              "Programs / What We Do",
              "News / Blog",
              "Partners / Donors",
              "Contact Us",
            ].map((page) => (
              <button
                key={page}
                onClick={() => {
                  if (page === "Partners / Donors") {
                    setCurrentPage("Home");
                    setTimeout(() => {
                      const partnersSection = document.getElementById(
                        "partners-donors-section"
                      );
                      if (partnersSection) {
                        partnersSection.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
                    }, 100);
                  } else {
                    setCurrentPage(page);
                  }
                }}
                className="px-4 py-2 text-base transition-all"
                style={{
                  color: currentPage === page ? "#3CB371" : "#3A3A3A",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#3CB371";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color =
                    currentPage === page ? "#3CB371" : "#3A3A3A";
                }}
              >
                {page}
              </button>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav
            className="lg:hidden px-8 py-4 border-t"
            style={{ borderColor: "#E4A261", backgroundColor: "#F8F9FA" }}
          >
            <div className="flex flex-col gap-1">
              {pages.map((page) => (
                <button
                  key={page}
                  onClick={() => {
                    setCurrentPage(page);
                    setMobileMenuOpen(false);
                  }}
                  className="px-4 py-3 text-sm text-left rounded transition-colors"
                  style={{
                    backgroundColor:
                      currentPage === page ? "#3CB371" : "#FFFFFF",
                    color: currentPage === page ? "#FFFFFF" : "#3A3A3A",
                  }}
                >
                  {page}
                </button>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* Page Content */}
      <main
        className={
          currentPage === "Experiential Learning" ||
          currentPage === "Training Program" ||
          currentPage === "Research Opportunities" ||
          currentPage === "Internship Programs"
            ? ""
            : "p-6"
        }
        style={{ backgroundColor: "#FFFFFF" }}
      >
        {currentPage === "Home" && <HomePage />}
        {currentPage === "About Us" && <AboutPage />}
        {currentPage === "Team" && <TeamPage />}
        {currentPage === "Programs / What We Do" && <ProgramsPage />}
        {currentPage === "Impact / Stories" && <ImpactPage />}
        {currentPage === "News / Blog" && <NewsPage />}
        {currentPage === "Partners / Donors" && <PartnersPage />}
        {currentPage === "Experiential Learning" && (
          <ExperientialLearningPage />
        )}
        {currentPage === "Training Program" && <ExperientialLearningPage />}
        {currentPage === "Research Opportunities" && (
          <ExperientialLearningPage />
        )}
        {currentPage === "Internship Programs" && <ExperientialLearningPage />}
        {currentPage === "Contact Us" && <ContactPage />}
      </main>

      {/* Footer */}
      <footer
        className="border-t-4 text-white p-8"
        style={{ borderColor: "#E4A261", backgroundColor: "#3A3A3A" }}
      >
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          <div>
            <div
              className="font-bold mb-3 text-sm"
              style={{ color: "#3CB371" }}
            >
              Contact us:
            </div>
            <div className="space-y-2">
              <div className="text-sm" style={{ color: "#F8F9FA" }}>
                nexushealthzambia@gmail.com
              </div>
              <div className="text-sm" style={{ color: "#F8F9FA" }}>
                +260 969272387
              </div>
              <div className="text-sm" style={{ color: "#F8F9FA" }}>
                +260 977899189
              </div>

              <div
                className="font-bold mt-4 mb-2 text-sm"
                style={{ color: "#3CB371" }}
              >
                Address
              </div>
              <div className="text-sm" style={{ color: "#F8F9FA" }}>
                Number 14B, Mateyo Phiri Road, Mass Media,
              </div>
              <div className="text-sm" style={{ color: "#F8F9FA" }}>
                Lusaka, Zambia
              </div>
            </div>
          </div>

          <div>
            <div
              className="font-bold mb-3 text-sm"
              style={{ color: "#3CB371" }}
            >
              Follow Us
            </div>
            <div className="flex gap-2">
              <div
                className="w-9 h-9 border-2 flex items-center justify-center transition-colors cursor-pointer hover:opacity-80"
                style={{
                  borderColor: "#3CB371",
                  backgroundColor: "transparent",
                  color: "#3CB371",
                }}
              >
                <Facebook size={16} />
              </div>
              <div
                className="w-9 h-9 border-2 flex items-center justify-center transition-colors cursor-pointer hover:opacity-80"
                style={{
                  borderColor: "#3CB371",
                  backgroundColor: "transparent",
                  color: "#3CB371",
                }}
              >
                <Linkedin size={16} />
              </div>
              <div
                className="w-9 h-9 border-2 flex items-center justify-center transition-colors cursor-pointer hover:opacity-80"
                style={{
                  borderColor: "#3CB371",
                  backgroundColor: "transparent",
                  color: "#3CB371",
                }}
              >
                <Twitter size={16} />
              </div>
            </div>
          </div>

          <div>
            <div
              className="font-bold mb-3 text-sm"
              style={{ color: "#3CB371" }}
            >
              Location
            </div>
            <div
              className="h-40 border-2 border-dashed flex items-center justify-center"
              style={{ borderColor: "#3CB371", backgroundColor: "#2A2A2A" }}
            >
              <span className="text-xs" style={{ color: "#E4A261" }}>
                📍 Interactive Map
              </span>
            </div>
          </div>
        </div>

        <div
          className="mt-8 pt-6 border-t-2 flex justify-between items-center"
          style={{ borderColor: "#2A2A2A" }}
        >
          <div className="text-xs" style={{ color: "#E4A261" }}>
            © 2025 Nexus Health Foundation
          </div>
        </div>
      </footer>
    </div>
  );
}

function HomePage() {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div
        className="text-white flex flex-col items-center justify-center min-h-[300px]"
        style={{
          background:
            "linear-gradient(to bottom right, #3A3A3A, #3CB371, #3A3A3A)",
          position: "relative",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          marginTop: "-1.5rem",
          marginBottom: "-1.5rem",
          width: "100vw",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        <div className="text-center space-y-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">
            Driving Sustainable Community Health
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#F8F9FA" }}>
            Partnering with communities and institutions to develop, implement,
            and scale integrated, innovative, and locally owned health solutions
            that transform lives.
          </p>
        </div>
      </div>

      {/* Our Focus Areas */}
      <div
        style={{
          backgroundColor: "#F8F9FA",
          position: "relative",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          width: "100vw",
          padding: "2rem 1rem",
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#3A3A3A" }}>
            Our Focus Areas
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Disease Prevention & Control",
                items: [
                  "-Malaria, HIV/TB, and Non-Communicable Diseases (diabetes, hypertension)",
                  "-Mental health and psychosocial support",
                ],
              },
              {
                title: "Maternal, Child & Adolescent Health",
                items: [
                  "-Reproductive, maternal, and neonatal care",
                  "-Adolescent sexual and reproductive health (ASRH)",
                  "-Immunization and malnutrition interventions",
                ],
              },
              {
                title: "Water, Sanitation & Hygiene (WASH)",
                items: [
                  "-Climate-resilient community water systems",
                  "-Sanitation infrastructure and waste management",
                  "-Menstrual hygiene education",
                ],
              },
              {
                title: "Digital Health & Innovation",
                items: [
                  "-Mobile health (mHealth) for remote care",
                  "-AI-driven community health tools",
                  "-Digital literacy and e-learning platforms",
                ],
              },
              {
                title: "Research & Implementation Science",
                items: [
                  "-Randomized control trials (RCTs)",
                  "-Scalable, evidence-based interventions",
                ],
              },
            ].map((area, i) => (
              <div
                key={i}
                className="border-l-4 bg-white p-5 shadow-sm"
                style={{ borderColor: "#3CB371" }}
              >
                <h3
                  className="font-bold mb-3 text-sm"
                  style={{ color: "#3A3A3A" }}
                >
                  {area.title}
                </h3>
                <div className="space-y-2">
                  {area.items.map((item, j) => (
                    <p key={j} className="text-xs" style={{ color: "#3A3A3A" }}>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Approach */}
      <div className="bg-white p-6">
        <div
          className="border-b-2 pb-3 mb-4"
          style={{ borderColor: "#E4A261" }}
        >
          <h2 className="text-xl font-bold" style={{ color: "#3A3A3A" }}>
            Our Approach
          </h2>
        </div>
        <div className="space-y-3">
          {[
            "Capacity Development for organisations and institutions",
            "Participatory Design: Engaging communities",
            "Tech-Enabled Solutions: Harnessing AI and data analytics",
            "Cross-Sector Synergy: Aligning health with education and policy",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 pl-4 py-2">
              <div
                className="w-2 h-2 rounded-full mt-1.5"
                style={{ backgroundColor: "#3CB371" }}
              ></div>
              <div className="flex-1 text-sm" style={{ color: "#3A3A3A" }}>
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Core Values */}
      <div
        className="w-full"
        style={{
          backgroundImage: `url(${logo})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
          backgroundColor: "#FFFFFF",
          position: "relative",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          width: "100vw",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(15px)",
            WebkitBackdropFilter: "blur(15px)",
            padding: "40px 30px",
            borderRadius: "15px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            margin: "40px auto",
            maxWidth: "1200px",
          }}
        >
          <div className="pb-4 mb-8 text-center">
            <h2
              className="text-3xl font-bold mb-3"
              style={{ color: "#3A3A3A" }}
            >
              Our Core Values
            </h2>
            <div
              className="w-24 h-1 mx-auto rounded"
              style={{ backgroundColor: "#3CB371" }}
            ></div>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              "🌍 Community Ownership",
              "⚖️ Health Equity",
              "💡 Innovation for Impact",
              "🤝 Collaborative Partnerships",
              "🔍 Integrity & Accountability",
              "🌱 Resilience & Sustainability",
              "📚 Empowerment Through Knowledge",
            ].map((value, i) => (
              <div
                key={i}
                className="border-2 p-5 flex items-center gap-3 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                style={{
                  borderColor: "#E4A261",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                }}
              >
                <div
                  className="flex-1 text-base font-semibold"
                  style={{ color: "#3A3A3A" }}
                >
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partners & Donors */}
      <div id="partners-donors-section" className="bg-white p-6">
        <div className="pb-3 mb-4">
          <h2
            className="text-3xl text-center font-bold"
            style={{ color: "#3A3A3A" }}
          >
            Partners & Donors
          </h2>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
            <div
              key={i}
              className="border-2 aspect-square flex items-center justify-center transition-colors hover:opacity-80"
              style={{ borderColor: "#E4A261", backgroundColor: "#F8F9FA" }}
            >
              <span className="text-xs" style={{ color: "#3A3A3A" }}>
                Logo
              </span>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <button
            className="mr-2 text-white px-9 py-3 text-sm font-bold rounded transition-colors hover:opacity-90"
            style={{ backgroundColor: "#F06565" }}
          >
            Donate
          </button>
          <button
            className="mr-2 text-white px-9 py-3 text-sm font-bold rounded transition-colors hover:opacity-90"
            style={{ backgroundColor: "#3CB371" }}
          >
            Become a Partner
          </button>
        </div>
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="space-y-6">
      <div
        className="text-white p-4 border-l-4"
        style={{ backgroundColor: "#3CB371", borderColor: "#3A3A3A" }}
      >
        <span className="text-sm font-bold">ABOUT US PAGE</span>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div
          className="bg-white border-2 p-6"
          style={{ borderColor: "#E4A261" }}
        >
          <div
            className="border-b-2 pb-3 mb-4"
            style={{ borderColor: "#E4A261" }}
          >
            <h3 className="text-lg font-bold" style={{ color: "#3A3A3A" }}>
              Our Story
            </h3>
          </div>
          <div className="space-y-3">
            <p className="text-sm" style={{ color: "#3A3A3A" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-sm" style={{ color: "#3A3A3A" }}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </div>

        <div
          className="bg-white border-2 p-6"
          style={{ borderColor: "#E4A261" }}
        >
          <div
            className="border-b-2 pb-3 mb-4"
            style={{ borderColor: "#E4A261" }}
          >
            <h3 className="text-lg font-bold" style={{ color: "#3A3A3A" }}>
              Mission & Vision
            </h3>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold mb-2" style={{ color: "#3CB371" }}>
                Our Vision
              </h4>
              <p className="text-sm" style={{ color: "#3A3A3A" }}>
                A future where every community thrives through self-driven
                health and well-being.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2" style={{ color: "#3CB371" }}>
                Our Mission
              </h4>
              <p className="text-sm" style={{ color: "#3A3A3A" }}>
                Partnering with communities and institutions to develop,
                implement, and scale integrated, innovative, and locally owned
                health solutions that transform lives.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="border-2 p-6"
        style={{ backgroundColor: "#F8F9FA", borderColor: "#E4A261" }}
      >
        <div
          className="border-b-2 pb-3 mb-4"
          style={{ borderColor: "#E4A261" }}
        >
          <h3 className="text-lg font-bold" style={{ color: "#3A3A3A" }}>
            Why We Exist
          </h3>
        </div>
        <div
          className="text-sm leading-relaxed mb-6"
          style={{ color: "#3A3A3A" }}
        >
          Zambia has made significant strides in healthcare, yet challenges such
          as geographic disparities, climate-related health risks, and evolving
          disease burdens persist. By partnering with the Ministry of Health,
          local leaders, and communities, Nexus Health Foundation strengthens
          health systems through inclusive, adaptive, and innovative
          solutions—ensuring no one is left behind.
        </div>

        <div className="border-t-2 pt-4" style={{ borderColor: "#E4A261" }}>
          <h3 className="text-lg font-bold mb-3" style={{ color: "#3A3A3A" }}>
            Join Us
          </h3>
          <div className="text-sm leading-relaxed" style={{ color: "#3A3A3A" }}>
            Together, we can build a Zambia where health is not a privilege but
            a community-powered reality.
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamPage() {
  return (
    <div className="space-y-6">
      <div
        className="text-white p-4 border-l-4"
        style={{ backgroundColor: "#3CB371", borderColor: "#3A3A3A" }}
      >
        <span className="text-sm font-bold">TEAM PAGE</span>
      </div>

      {/* Team Photos */}
      <div className="bg-white py-8 px-4">
        <h2
          className="text-4xl font-bold text-center mb-8"
          style={{ color: "#3A3A3A" }}
        >
          Team
        </h2>
        <div className="flex justify-center items-end gap-8 flex-wrap max-w-5xl mx-auto">
          {[
            { name: "John Doe", title: "Chief Executive Officer" },
            { name: "Jane Smith", title: "Director of Operations" },
            { name: "Michael Johnson", title: "Head of Programs" },
          ].map((member, i) => (
            <div key={i} className="text-center">
              <div
                className="w-64 h-64 border-8 rounded-full flex items-center justify-center mb-4"
                style={{
                  borderColor:
                    i === 0 ? "#E4A261" : i === 1 ? "#3A3A3A" : "#F06565",
                  backgroundColor: "#F8F9FA",
                }}
              >
                <span className="text-sm" style={{ color: "#3A3A3A" }}>
                  Team Photo {i + 1}
                </span>
              </div>
              <p className="font-bold mb-2" style={{ color: "#3A3A3A" }}>
                {member.name}
              </p>
              <p className="text-sm" style={{ color: "#3A3A3A" }}>
                {member.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Governance & Structure */}
      <div className="bg-white border-2 p-6" style={{ borderColor: "#E4A261" }}>
        <div
          className="border-b-2 pb-3 mb-4"
          style={{ borderColor: "#E4A261" }}
        >
          <h3 className="text-lg font-bold" style={{ color: "#3A3A3A" }}>
            Governance & Structure
          </h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-bold mb-3" style={{ color: "#3A3A3A" }}>
              Board of Directors
            </h4>
            <div className="space-y-2">
              {[
                "Dr. Lorem Ipsum",
                "Prof. Dolor Sit",
                "Ms. Consectetur Adipiscing",
                "Mr. Elit Sed",
              ].map((name, i) => (
                <div
                  key={i}
                  className="p-2 border-b"
                  style={{ borderColor: "#F8F9FA" }}
                >
                  <p
                    className="text-sm font-medium"
                    style={{ color: "#3A3A3A" }}
                  >
                    {name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold mb-3" style={{ color: "#3A3A3A" }}>
              Organizational Structure
            </h4>
            <div
              className="h-40 border border-dashed flex items-center justify-center p-4"
              style={{ borderColor: "#E4A261", backgroundColor: "#F8F9FA" }}
            >
              <p className="text-xs text-center" style={{ color: "#3A3A3A" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProgramsPage() {
  return (
    <div className="space-y-6">
      <div
        className="text-white p-4 border-l-4"
        style={{ backgroundColor: "#3CB371", borderColor: "#3A3A3A" }}
      >
        <span className="text-sm font-bold">PROGRAMS / WHAT WE DO PAGE</span>
      </div>

      <div className="bg-white border-2 p-6" style={{ borderColor: "#E4A261" }}>
        <p className="text-sm text-center" style={{ color: "#3A3A3A" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="space-y-4">
        {[
          {
            title: "Lorem Ipsum Dolor",
            description:
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
            impact:
              "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
          },
          {
            title: "Consectetur Adipiscing",
            description:
              "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
            impact:
              "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.",
          },
          {
            title: "Eiusmod Tempor",
            description:
              "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.",
            impact:
              "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores.",
          },
        ].map((program, i) => (
          <div
            key={i}
            className="bg-white border-l-4 p-6 shadow-sm"
            style={{ borderColor: "#3CB371" }}
          >
            <div className="grid md:grid-cols-3 gap-4">
              <div
                className="border h-48 flex items-center justify-center"
                style={{ borderColor: "#E4A261", backgroundColor: "#F8F9FA" }}
              >
                <span className="text-xs" style={{ color: "#3A3A3A" }}>
                  Program Image
                </span>
              </div>
              <div className="md:col-span-2 space-y-3">
                <h3 className="text-lg font-bold" style={{ color: "#3A3A3A" }}>
                  {program.title}
                </h3>
                <p className="text-sm" style={{ color: "#3A3A3A" }}>
                  {program.description}
                </p>
                <div
                  className="border-l-4 p-3"
                  style={{ backgroundColor: "#F8F9FA", borderColor: "#F06565" }}
                >
                  <p className="text-xs italic" style={{ color: "#3A3A3A" }}>
                    {program.impact}
                  </p>
                </div>
                <div className="flex gap-2">
                  <div
                    className="text-white px-4 py-2 text-xs"
                    style={{ backgroundColor: "#3CB371" }}
                  >
                    Learn More
                  </div>
                  <div
                    className="border-2 px-4 py-2 text-xs"
                    style={{ borderColor: "#3CB371", color: "#3A3A3A" }}
                  >
                    Get Involved
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ImpactPage() {
  return (
    <div className="space-y-6">
      <div
        className="text-white p-4 border-l-4"
        style={{ backgroundColor: "#3CB371", borderColor: "#3A3A3A" }}
      >
        <span className="text-sm font-bold">IMPACT / STORIES PAGE</span>
      </div>

      {/* Impact Stories Section */}
      <div className="bg-white p-8">
        <h2
          className="text-3xl font-bold text-center mb-2"
          style={{ color: "#3A3A3A" }}
        >
          Impact Stories
        </h2>
        <p className="text-center mb-6" style={{ color: "#3A3A3A" }}>
          Consectetur adipiscing elit sed do eiusmod tempor
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {[
            {
              title: "Sed Ut Perspiciatis Unde",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.",
            },
            {
              title: "Nemo Enim Ipsam Voluptatem",
              description:
                "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas.",
            },
          ].map((story, i) => (
            <div
              key={i}
              className="border-2 overflow-hidden"
              style={{ borderColor: "#E4A261" }}
            >
              <div
                className="h-48 flex items-center justify-center border-b-2"
                style={{ backgroundColor: "#F8F9FA", borderColor: "#E4A261" }}
              >
                <span className="text-sm" style={{ color: "#3A3A3A" }}>
                  [Story Image]
                </span>
              </div>
              <div className="p-5">
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ color: "#3A3A3A" }}
                >
                  {story.title}
                </h3>
                <p className="text-sm mb-4" style={{ color: "#3A3A3A" }}>
                  {story.description}
                </p>
                <a
                  href="#"
                  className="text-sm underline hover:no-underline"
                  style={{ color: "#3CB371" }}
                >
                  Read Full Story →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            className="border-2 px-8 py-3 text-sm font-bold transition-colors hover:text-white"
            style={{ borderColor: "#3CB371", color: "#3A3A3A" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#3CB371";
              e.currentTarget.style.color = "#FFFFFF";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#3A3A3A";
            }}
          >
            View All Impact Stories
          </button>
        </div>
      </div>
    </div>
  );
}

function NewsPage() {
  return (
    <div className="space-y-6">
      <div
        className="text-white p-4 border-l-4"
        style={{ backgroundColor: "#3CB371", borderColor: "#3A3A3A" }}
      >
        <span className="text-sm font-bold">NEWS / BLOG PAGE</span>
      </div>

      <div className="flex gap-4 flex-wrap">
        <div
          className="text-white px-4 py-2 text-sm"
          style={{ backgroundColor: "#3CB371" }}
        >
          All Posts
        </div>
        <div
          className="border-2 px-4 py-2 text-sm"
          style={{ borderColor: "#E4A261", color: "#3A3A3A" }}
        >
          Category 1
        </div>
        <div
          className="border-2 px-4 py-2 text-sm"
          style={{ borderColor: "#E4A261", color: "#3A3A3A" }}
        >
          Category 2
        </div>
        <div
          className="border-2 px-4 py-2 text-sm"
          style={{ borderColor: "#E4A261", color: "#3A3A3A" }}
        >
          Category 3
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="bg-white border-2 p-3"
            style={{ borderColor: "#E4A261" }}
          >
            <div
              className="h-32 border border-dashed mb-3 flex items-center justify-center"
              style={{ borderColor: "#E4A261", backgroundColor: "#F8F9FA" }}
            >
              <span className="text-xs" style={{ color: "#3A3A3A" }}>
                Featured Image
              </span>
            </div>
            <div
              className="h-3 w-20 border border-dashed mb-2"
              style={{ borderColor: "#E4A261" }}
            ></div>
            <div
              className="h-6 border border-dashed mb-2 flex items-center justify-center"
              style={{ borderColor: "#E4A261" }}
            >
              <span className="text-xs" style={{ color: "#3A3A3A" }}>
                Post Title
              </span>
            </div>
            <div
              className="h-12 border border-dashed mb-3 flex items-center justify-center"
              style={{ borderColor: "#E4A261" }}
            >
              <span className="text-xs" style={{ color: "#3A3A3A" }}>
                Excerpt
              </span>
            </div>
            <div
              className="border-2 px-3 py-1 text-xs inline-block"
              style={{ borderColor: "#3CB371", color: "#3A3A3A" }}
            >
              Read More
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PartnersPage() {
  return (
    <div className="space-y-6">
      <div
        className="text-white p-4 border-l-4"
        style={{ backgroundColor: "#3CB371", borderColor: "#3A3A3A" }}
      >
        <span className="text-sm font-bold">PARTNERS / DONORS PAGE</span>
      </div>

      <div className="bg-white border-2 p-6" style={{ borderColor: "#E4A261" }}>
        <div
          className="border-b-2 pb-3 mb-4"
          style={{ borderColor: "#E4A261" }}
        >
          <h3 className="text-lg font-bold" style={{ color: "#3A3A3A" }}>
            Our Partners
          </h3>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
            <div
              key={i}
              className="border-2 aspect-square flex items-center justify-center"
              style={{ borderColor: "#E4A261", backgroundColor: "#F8F9FA" }}
            >
              <span className="text-xs" style={{ color: "#3A3A3A" }}>
                Logo
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="text-white p-8 text-center"
        style={{ backgroundColor: "#3A3A3A" }}
      >
        <div
          className="h-8 border border-dashed flex items-center justify-center mx-auto max-w-md mb-4"
          style={{ borderColor: "#3CB371" }}
        >
          <span className="text-xs" style={{ color: "#F8F9FA" }}>
            Become a Partner CTA
          </span>
        </div>
        <div
          className="bg-white px-6 py-3 text-sm inline-block font-bold"
          style={{ color: "#3A3A3A" }}
        >
          Donate Now
        </div>
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="space-y-6">
      <div
        className="text-white p-4 border-l-4"
        style={{ backgroundColor: "#3CB371", borderColor: "#3A3A3A" }}
      >
        <span className="text-sm font-bold">CONTACT US PAGE</span>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div
          className="bg-white border-2 p-6"
          style={{ borderColor: "#E4A261" }}
        >
          <div
            className="border-b-2 pb-3 mb-4"
            style={{ borderColor: "#E4A261" }}
          >
            <h3 className="text-lg font-bold" style={{ color: "#3A3A3A" }}>
              Contact Form
            </h3>
            <div className="text-xs mt-1" style={{ color: "#3CB371" }}>
              ✓ Email Integration
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <div className="text-xs mb-1" style={{ color: "#3A3A3A" }}>
                Name *
              </div>
              <div
                className="h-8 border-2 bg-white"
                style={{ borderColor: "#E4A261" }}
              ></div>
            </div>
            <div>
              <div className="text-xs mb-1" style={{ color: "#3A3A3A" }}>
                Email *
              </div>
              <div
                className="h-8 border-2 bg-white"
                style={{ borderColor: "#E4A261" }}
              ></div>
            </div>
            <div>
              <div className="text-xs mb-1" style={{ color: "#3A3A3A" }}>
                Phone
              </div>
              <div
                className="h-8 border-2 bg-white"
                style={{ borderColor: "#E4A261" }}
              ></div>
            </div>
            <div>
              <div className="text-xs mb-1" style={{ color: "#3A3A3A" }}>
                Subject
              </div>
              <div
                className="h-8 border-2 bg-white"
                style={{ borderColor: "#E4A261" }}
              ></div>
            </div>
            <div>
              <div className="text-xs mb-1" style={{ color: "#3A3A3A" }}>
                Message *
              </div>
              <div
                className="h-24 border-2 bg-white"
                style={{ borderColor: "#E4A261" }}
              ></div>
            </div>
            <div
              className="text-white px-6 py-2 text-sm inline-block"
              style={{ backgroundColor: "#3CB371" }}
            >
              Submit
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div
            className="bg-white border-2 p-6"
            style={{ borderColor: "#E4A261" }}
          >
            <div
              className="border-b-2 pb-3 mb-4"
              style={{ borderColor: "#E4A261" }}
            >
              <h3 className="text-lg font-bold" style={{ color: "#3A3A3A" }}>
                Contact Information
              </h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Mail size={16} style={{ color: "#3CB371" }} />
                <div
                  className="h-4 w-48 border border-dashed"
                  style={{ borderColor: "#E4A261" }}
                ></div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone size={16} style={{ color: "#3CB371" }} />
                <div
                  className="h-4 w-32 border border-dashed"
                  style={{ borderColor: "#E4A261" }}
                ></div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin size={16} style={{ color: "#3CB371" }} />
                <div
                  className="h-8 w-56 border border-dashed"
                  style={{ borderColor: "#E4A261" }}
                ></div>
              </div>
            </div>
          </div>

          <div
            className="bg-white border-2 p-6"
            style={{ borderColor: "#E4A261" }}
          >
            <div
              className="border-b-2 pb-3 mb-4"
              style={{ borderColor: "#E4A261" }}
            >
              <h3 className="text-lg font-bold" style={{ color: "#3A3A3A" }}>
                Google Maps Integration
              </h3>
            </div>
            <div
              className="h-48 border-2 border-dashed flex items-center justify-center"
              style={{ borderColor: "#3CB371", backgroundColor: "#F8F9FA" }}
            >
              <span className="text-xs" style={{ color: "#3A3A3A" }}>
                Interactive Map
              </span>
            </div>
          </div>

          <div
            className="bg-white border-2 p-6"
            style={{ borderColor: "#E4A261" }}
          >
            <div
              className="border-b-2 pb-3 mb-4"
              style={{ borderColor: "#E4A261" }}
            >
              <h3 className="text-lg font-bold" style={{ color: "#3A3A3A" }}>
                Office Hours
              </h3>
            </div>
            <div className="space-y-1 text-xs">
              {["Monday - Friday", "Saturday", "Sunday"].map((day) => (
                <div
                  key={day}
                  className="flex justify-between border-b pb-1"
                  style={{ borderColor: "#F8F9FA" }}
                >
                  <span style={{ color: "#3A3A3A" }}>{day}</span>
                  <div
                    className="h-3 w-24 border border-dashed"
                    style={{ borderColor: "#E4A261" }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
