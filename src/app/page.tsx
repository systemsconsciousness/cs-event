import Image from "next/image";
import CountdownTimer from "../components/CountdownTimer";

// Mock data - in real app this would come from Contentstack
const conferenceData = {
  event_name: "AI DXP Island 2028",
  tagline: "Where AI Meets Digital Experience • Paradise Island • May 15-17, 2028",
  event_date: "2028-05-15T09:00:00.000Z",
  location: "Paradise Island Resort & Tech Hub",
  description: "Join us for the most innovative AI and Digital Experience Platform conference in paradise! Three days of cutting-edge talks, hands-on workshops, and networking with industry leaders, all set against the backdrop of a stunning tropical island.",
  registration_url: "https://aidxpisland2028.com/register"
};

const speakers = [
  {
    name: "Dr. Aria Chen",
    title: "Chief AI Architect",
    company: "NeuralVision Technologies",
    bio: "Dr. Aria Chen is a pioneer in AI-driven digital experiences with over 15 years of experience building intelligent systems.",
    avatar_url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
    keynote_speaker: true
  },
  {
    name: "Marcus Rodriguez",
    title: "VP of Digital Innovation",
    company: "CloudScale Dynamics",
    bio: "Marcus leads digital transformation initiatives for Fortune 500 companies, specializing in AI-powered content management.",
    avatar_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    keynote_speaker: false
  },
  {
    name: "Zara Kim",
    title: "Senior Director of AI Strategy",
    company: "InfiniteLoop Labs",
    bio: "Zara is an expert in conversational AI and natural language processing for digital platforms.",
    avatar_url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    keynote_speaker: false
  },
  {
    name: "Dr. James Thompson",
    title: "Head of Research",
    company: "Quantum DX Institute",
    bio: "Dr. Thompson is at the forefront of quantum-enhanced AI for digital experiences.",
    avatar_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    keynote_speaker: true
  }
];

const sessions = [
  {
    title: "Opening Keynote: The Future of AI-Driven Digital Experiences",
    speaker: "Dr. Aria Chen",
    start_time: "2028-05-15T09:00:00.000Z",
    track: "Main Stage",
    session_type: "Keynote"
  },
  {
    title: "Workshop: Building Intelligent Content Personalization Engines",
    speaker: "Marcus Rodriguez",
    start_time: "2028-05-15T11:00:00.000Z",
    track: "Technical Track",
    session_type: "Workshop"
  },
  {
    title: "Conversational AI: The Next Frontier in User Engagement",
    speaker: "Zara Kim",
    start_time: "2028-05-16T14:00:00.000Z",
    track: "Experience Track",
    session_type: "Talk"
  },
  {
    title: "Quantum-Enhanced AI for Real-Time Personalization",
    speaker: "Dr. James Thompson",
    start_time: "2028-05-17T10:00:00.000Z",
    track: "Research Track",
    session_type: "Keynote"
  }
];

const accommodations = [
  {
    name: "Paradise Island Resort & Conference Center",
    type: "5-Star Resort",
    description: "The official conference venue featuring luxury oceanfront suites, world-class amenities, and integrated conference facilities.",
    price_per_night: 450,
    distance_from_venue: "On-site",
    featured: true
  },
  {
    name: "Tech Hub Suites",
    type: "Modern Hotel",
    description: "Contemporary suites designed for tech professionals, featuring dedicated workspaces and premium internet connectivity.",
    price_per_night: 320,
    distance_from_venue: "2 minutes walk",
    featured: true
  },
  {
    name: "Eco Innovation Lodge",
    type: "Eco Resort",
    description: "Sustainable luxury accommodations powered by renewable energy and built with eco-friendly materials.",
    price_per_night: 380,
    distance_from_venue: "5 minutes shuttle",
    featured: false
  }
];

export default function Home() {
  return (
    <div className="min-h-screen tech-grid">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-95"></div>
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text floating">
            {conferenceData.event_name}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 font-mono">
            {conferenceData.tagline}
          </p>
          <p className="text-lg mb-12 text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {conferenceData.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="btn-futuristic rounded-lg px-8 py-4 text-lg">
              Register Now
            </button>
            <button className="border border-secondary text-secondary hover:bg-secondary hover:text-black transition-all duration-300 rounded-lg px-8 py-4 text-lg font-mono">
              View Agenda
            </button>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <CountdownTimer targetDate={conferenceData.event_date} />
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Keynote Speakers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {speakers.map((speaker, index) => (
              <div key={index} className="speaker-card rounded-xl p-6 text-center">
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden glow-primary">
                  <Image
                    src={speaker.avatar_url}
                    alt={speaker.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">{speaker.name}</h3>
                <p className="text-sm font-mono text-secondary mb-1">{speaker.title}</p>
                <p className="text-sm text-gray-400 mb-4">{speaker.company}</p>
                <p className="text-sm text-gray-300 leading-relaxed">{speaker.bio}</p>
                {speaker.keynote_speaker && (
                  <div className="mt-4 px-3 py-1 bg-secondary/20 rounded-full text-xs font-mono text-secondary border border-secondary/30">
                    KEYNOTE
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sessions Preview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Featured Sessions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sessions.map((session, index) => (
              <div key={index} className="session-card rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 bg-secondary/20 rounded-full text-xs font-mono text-secondary border border-secondary/30">
                    {session.session_type}
                  </span>
                  <span className="text-sm text-gray-400 font-mono">
                    {session.track}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">{session.title}</h3>
                <p className="text-gray-300 mb-4">By {session.speaker}</p>
                <p className="text-sm text-gray-400 font-mono">
                  {new Date(session.start_time).toLocaleDateString()} • {new Date(session.start_time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodations Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Paradise Accommodations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accommodations.map((accommodation, index) => (
              <div key={index} className="accommodation-card rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 bg-primary/20 rounded-full text-xs font-mono text-primary border border-primary/30">
                    {accommodation.type}
                  </span>
                  {accommodation.featured && (
                    <span className="px-3 py-1 bg-secondary/20 rounded-full text-xs font-mono text-secondary border border-secondary/30">
                      FEATURED
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">{accommodation.name}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{accommodation.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-primary">${accommodation.price_per_night}</span>
                  <span className="text-sm text-gray-400">per night</span>
                </div>
                <p className="text-sm text-gray-400 mb-4">📍 {accommodation.distance_from_venue}</p>
                <button className="w-full border border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 rounded-lg py-2 font-mono text-sm">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 backdrop-blur-lg border-t border-primary/20 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 gradient-text">AI DXP Island 2028</h3>
          <p className="text-gray-400 mb-6">Where AI Meets Digital Experience in Paradise</p>
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <span>May 15-17, 2028</span>
            <span>•</span>
            <span>Paradise Island</span>
            <span>•</span>
            <span>Tech Conference</span>
          </div>
          <p className="text-xs text-gray-500 mt-8">
            Built with 🏝️ for demo purposes using Next.js and Contentstack
          </p>
        </div>
      </footer>
    </div>
  );
}
