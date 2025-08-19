// scripts/init-contentstack.js
const axios = require('axios');
require('dotenv').config({ path: '.env.local' });

console.log("🏝️ Starting AI DXP Island Conference Site Setup...");
console.log("✅ Loaded environment variables:");
console.log("CONTENTSTACK_API_KEY =", process.env.CONTENTSTACK_API_KEY);
console.log("CONTENTSTACK_MANAGEMENT_TOKEN =", process.env.CONTENTSTACK_MANAGEMENT_TOKEN ? 'Present' : 'Missing');
console.log("CONTENTSTACK_API_HOST =", process.env.CONTENTSTACK_API_HOST);

const API_KEY = process.env.CONTENTSTACK_API_KEY;
const MGMT_TOKEN = process.env.CONTENTSTACK_MANAGEMENT_TOKEN;
const API_HOST = process.env.CONTENTSTACK_API_HOST || 'api.contentstack.io';
const BASE_URL = `https://${API_HOST}`;

const headers = {
  api_key: API_KEY,
  authorization: MGMT_TOKEN,
  'Content-Type': 'application/json',
};

// Validation
if (!API_KEY || !MGMT_TOKEN) {
  console.error("❌ Missing required environment variables. Please check your .env.local file.");
  process.exit(1);
}

// Helper function to handle API requests with better error reporting
async function makeRequest(method, url, data = null, description = "") {
  try {
    const config = { method, url, headers };
    if (data) config.data = data;
    
    const response = await axios(config);
    console.log(`✅ ${description}: ${response.data.content_type?.uid || response.data.entry?.uid || 'Success'}`);
    return response.data;
  } catch (error) {
    if (error.response?.status === 422 && error.response?.data?.errors?.title) {
      console.log(`⚠️  ${description}: Already exists, skipping...`);
      return null; // Not a real error, just already exists
    }
    console.error(`❌ Error ${description}:`, error.response?.data || error.message);
    throw error;
  }
}

// Content Type Schemas for AI DXP Island Conference 2028
const contentTypes = {
  conference: {
    title: "Conference Details",
    uid: "conference_details",
    schema: [
      {
        display_name: "Title",
        uid: "title",
        data_type: "text",
        field_metadata: { _default: true, mandatory: true },
        unique: false
      },
      {
        display_name: "Event Name",
        uid: "event_name",
        data_type: "text",
        field_metadata: { mandatory: true }
      },
      {
        display_name: "Tagline",
        uid: "tagline",
        data_type: "text"
      },
      {
        display_name: "Event Date",
        uid: "event_date",
        data_type: "isodate",
        field_metadata: { mandatory: true }
      },
      {
        display_name: "Location",
        uid: "location",
        data_type: "text"
      },
      {
        display_name: "Description",
        uid: "description",
        data_type: "text",
        field_metadata: { multiline: true }
      },
      {
        display_name: "Hero Video URL",
        uid: "hero_video_url",
        data_type: "text"
      },
      {
        display_name: "Registration URL",
        uid: "registration_url",
        data_type: "text"
      }
    ]
  },
  
  speaker: {
    title: "Speaker",
    uid: "speaker",
    schema: [
      {
        display_name: "Name",
        uid: "name",
        data_type: "text",
        field_metadata: { _default: true, mandatory: true },
        unique: false
      },
      {
        display_name: "Slug",
        uid: "slug",
        data_type: "text",
        field_metadata: { mandatory: true },
        unique: true
      },
      {
        display_name: "Title",
        uid: "title",
        data_type: "text",
        field_metadata: { mandatory: true }
      },
      {
        display_name: "Company",
        uid: "company",
        data_type: "text"
      },
      {
        display_name: "Bio",
        uid: "bio",
        data_type: "text",
        field_metadata: { multiline: true }
      },
      {
        display_name: "Avatar URL",
        uid: "avatar_url",
        data_type: "text"
      },
      {
        display_name: "Social Links",
        uid: "social_links",
        data_type: "text",
        field_metadata: { multiline: true }
      },
      {
        display_name: "Keynote Speaker",
        uid: "keynote_speaker",
        data_type: "boolean"
      },
      {
        display_name: "Speaking Order",
        uid: "speaking_order",
        data_type: "number"
      }
    ]
  },
  
  session: {
    title: "Session",
    uid: "session",
    schema: [
      {
        display_name: "Title",
        uid: "title",
        data_type: "text",
        field_metadata: { _default: true, mandatory: true },
        unique: false
      },
      {
        display_name: "Slug",
        uid: "slug",
        data_type: "text",
        field_metadata: { mandatory: true },
        unique: true
      },
      {
        display_name: "Description",
        uid: "description",
        data_type: "text",
        field_metadata: { multiline: true }
      },
      {
        display_name: "Start Time",
        uid: "start_time",
        data_type: "isodate",
        field_metadata: { mandatory: true }
      },
      {
        display_name: "End Time",
        uid: "end_time",
        data_type: "isodate",
        field_metadata: { mandatory: true }
      },
      {
        display_name: "Speaker",
        uid: "speaker",
        data_type: "text"
      },
      {
        display_name: "Track",
        uid: "track",
        data_type: "text"
      },
      {
        display_name: "Session Type",
        uid: "session_type",
        data_type: "text"
      },
      {
        display_name: "Room",
        uid: "room",
        data_type: "text"
      },
      {
        display_name: "Tags",
        uid: "tags",
        data_type: "text",
        multiple: true
      }
    ]
  },
  
  accommodation: {
    title: "Accommodation",
    uid: "accommodation",
    schema: [
      {
        display_name: "Name",
        uid: "name",
        data_type: "text",
        field_metadata: { _default: true, mandatory: true },
        unique: false
      },
      {
        display_name: "Slug",
        uid: "slug",
        data_type: "text",
        field_metadata: { mandatory: true },
        unique: true
      },
      {
        display_name: "Type",
        uid: "type",
        data_type: "text",
        field_metadata: { mandatory: true }
      },
      {
        display_name: "Description",
        uid: "description",
        data_type: "text",
        field_metadata: { multiline: true }
      },
      {
        display_name: "Price Per Night",
        uid: "price_per_night",
        data_type: "number"
      },
      {
        display_name: "Amenities",
        uid: "amenities",
        data_type: "text",
        multiple: true
      },
      {
        display_name: "Image URLs",
        uid: "image_urls",
        data_type: "text",
        multiple: true
      },
      {
        display_name: "Booking URL",
        uid: "booking_url",
        data_type: "text"
      },
      {
        display_name: "Distance from Venue",
        uid: "distance_from_venue",
        data_type: "text"
      },
      {
        display_name: "Featured",
        uid: "featured",
        data_type: "boolean"
      }
    ]
  }
};

// Sample Content Data for AI DXP Island Conference 2028
const sampleContent = {
  conference_details: {
    title: "AI DXP Island Conference 2028",
    event_name: "AI DXP Island 2028",
    tagline: "Where AI Meets Digital Experience • Paradise Island • May 15-17, 2028",
    event_date: "2028-05-15T09:00:00.000Z",
    location: "Paradise Island Resort & Tech Hub",
    description: "Join us for the most innovative AI and Digital Experience Platform conference in paradise! Three days of cutting-edge talks, hands-on workshops, and networking with industry leaders, all set against the backdrop of a stunning tropical island.",
    hero_video_url: "https://example.com/hero-video.mp4",
    registration_url: "https://aidxpisland2028.com/register"
  },
  
  speakers: [
    {
      name: "Dr. Aria Chen",
      slug: "dr-aria-chen",
      title: "Chief AI Architect",
      company: "NeuralVision Technologies",
      bio: "Dr. Aria Chen is a pioneer in AI-driven digital experiences with over 15 years of experience building intelligent systems. She leads the development of next-generation DXP platforms that leverage machine learning to create personalized user journeys at scale.",
      avatar_url: "https://images.unsplash.com/photo-1494790108755-2616b332e234?w=400",
      social_links: '{"twitter": "@aria_chen_ai", "linkedin": "aria-chen-phd", "github": "ariachen"}',
      keynote_speaker: true,
      speaking_order: 1
    },
    {
      name: "Marcus Rodriguez",
      slug: "marcus-rodriguez",
      title: "VP of Digital Innovation",
      company: "CloudScale Dynamics",
      bio: "Marcus leads digital transformation initiatives for Fortune 500 companies, specializing in AI-powered content management and personalization engines. His work has revolutionized how enterprises deliver contextual experiences across multiple touchpoints.",
      avatar_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      social_links: '{"twitter": "@marcus_dx", "linkedin": "marcus-rodriguez-digital"}',
      keynote_speaker: false,
      speaking_order: 2
    },
    {
      name: "Zara Kim",
      slug: "zara-kim",
      title: "Senior Director of AI Strategy",
      company: "InfiniteLoop Labs",
      bio: "Zara is an expert in conversational AI and natural language processing for digital platforms. She has developed award-winning chatbots and voice interfaces that have transformed customer engagement for leading brands worldwide.",
      avatar_url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      social_links: '{"twitter": "@zarakim_ai", "linkedin": "zara-kim-ai-strategy", "website": "zarakim.dev"}',
      keynote_speaker: false,
      speaking_order: 3
    },
    {
      name: "Dr. James Thompson",
      slug: "dr-james-thompson",
      title: "Head of Research",
      company: "Quantum DX Institute",
      bio: "Dr. Thompson is at the forefront of quantum-enhanced AI for digital experiences. His research focuses on using quantum computing to solve complex personalization problems and deliver real-time, hyper-personalized content at unprecedented scale.",
      avatar_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      social_links: '{"linkedin": "james-thompson-quantum", "orcid": "0000-0000-0000-0000"}',
      keynote_speaker: true,
      speaking_order: 4
    }
  ],
  
  sessions: [
    {
      title: "Opening Keynote: The Future of AI-Driven Digital Experiences",
      slug: "opening-keynote-ai-future",
      description: "Explore how artificial intelligence is reshaping the landscape of digital experience platforms. Dr. Chen will present groundbreaking research on neural networks that understand user intent and adapt in real-time.",
      start_time: "2028-05-15T09:00:00.000Z",
      end_time: "2028-05-15T10:00:00.000Z",
      speaker: "Dr. Aria Chen",
      track: "Main Stage",
      session_type: "Keynote",
      room: "Paradise Amphitheater",
      tags: ["AI", "DXP", "Future Tech", "Machine Learning"]
    },
    {
      title: "Workshop: Building Intelligent Content Personalization Engines",
      slug: "workshop-content-personalization",
      description: "Hands-on workshop where you'll build a real-time personalization engine using modern AI frameworks. Learn to implement recommendation algorithms that adapt to user behavior patterns.",
      start_time: "2028-05-15T11:00:00.000Z",
      end_time: "2028-05-15T12:30:00.000Z",
      speaker: "Marcus Rodriguez",
      track: "Technical Track",
      session_type: "Workshop",
      room: "Innovation Lab A",
      tags: ["Personalization", "Hands-on", "AI Frameworks", "Workshop"]
    },
    {
      title: "Conversational AI: The Next Frontier in User Engagement",
      slug: "conversational-ai-engagement",
      description: "Discover how advanced NLP and conversational AI are creating more natural, intuitive user interfaces. Case studies from industry leaders who've transformed their customer experience.",
      start_time: "2028-05-16T14:00:00.000Z",
      end_time: "2028-05-16T15:00:00.000Z",
      speaker: "Zara Kim",
      track: "Experience Track",
      session_type: "Talk",
      room: "Coral Conference Hall",
      tags: ["Conversational AI", "NLP", "User Experience", "Case Studies"]
    },
    {
      title: "Quantum-Enhanced AI for Real-Time Personalization",
      slug: "quantum-ai-personalization",
      description: "A deep dive into cutting-edge quantum computing applications for digital experience platforms. Learn how quantum algorithms solve complex optimization problems in milliseconds.",
      start_time: "2028-05-17T10:00:00.000Z",
      end_time: "2028-05-17T11:00:00.000Z",
      speaker: "Dr. James Thompson",
      track: "Research Track",
      session_type: "Keynote",
      room: "Paradise Amphitheater",
      tags: ["Quantum Computing", "AI Research", "Performance", "Innovation"]
    }
  ],
  
  accommodations: [
    {
      name: "Paradise Island Resort & Conference Center",
      slug: "paradise-island-resort",
      type: "5-Star Resort",
      description: "The official conference venue featuring luxury oceanfront suites, world-class amenities, and integrated conference facilities. Wake up to stunning sunrise views and be steps away from all sessions.",
      price_per_night: 450,
      amenities: ["Oceanfront Balcony", "High-Speed WiFi", "Conference Center Access", "Beach Club", "Spa Services", "Multiple Restaurants"],
      image_urls: [
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800"
      ],
      booking_url: "https://aidxpisland2028.com/accommodation/paradise-resort",
      distance_from_venue: "On-site",
      featured: true
    },
    {
      name: "Tech Hub Suites",
      slug: "tech-hub-suites",
      type: "Modern Hotel",
      description: "Contemporary suites designed for tech professionals, featuring dedicated workspaces, premium internet connectivity, and 24/7 tech support. Perfect for digital nomads and remote workers.",
      price_per_night: 320,
      amenities: ["Dedicated Workspace", "Fiber Internet", "24/7 Tech Support", "Co-working Lounge", "Rooftop Terrace", "Continental Breakfast"],
      image_urls: [
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800"
      ],
      booking_url: "https://aidxpisland2028.com/accommodation/tech-hub",
      distance_from_venue: "2 minutes walk",
      featured: true
    },
    {
      name: "Eco Innovation Lodge",
      slug: "eco-innovation-lodge",
      type: "Eco Resort",
      description: "Sustainable luxury accommodations powered by renewable energy and built with eco-friendly materials. Experience innovation in harmony with nature while attending cutting-edge tech sessions.",
      price_per_night: 380,
      amenities: ["Solar-Powered", "Sustainable Materials", "Nature Trails", "Organic Restaurant", "Electric Vehicle Charging", "Wellness Center"],
      image_urls: [
        "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800",
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800"
      ],
      booking_url: "https://aidxpisland2028.com/accommodation/eco-lodge",
      distance_from_venue: "5 minutes shuttle",
      featured: false
    }
  ]
};

// Create Content Types
async function createContentTypes() {
  console.log("\n📝 Creating content types...");
  
  for (const [key, contentType] of Object.entries(contentTypes)) {
    await makeRequest(
      'POST',
      `${BASE_URL}/v3/content_types`,
      { content_type: contentType },
      `Created content type: ${contentType.title}`
    );
  }
}

// Create Entries
async function createEntries() {
  console.log("\n📄 Creating sample content...");
  
  // Create Conference Details
  await makeRequest(
    'POST',
    `${BASE_URL}/v3/content_types/conference_details/entries`,
    { entry: sampleContent.conference_details },
    `Created conference details entry`
  );
  
  // Create Speakers
  for (const speaker of sampleContent.speakers) {
    await makeRequest(
      'POST',
      `${BASE_URL}/v3/content_types/speaker/entries`,
      { entry: speaker },
      `Created speaker: ${speaker.name}`
    );
  }
  
  // Create Sessions
  for (const session of sampleContent.sessions) {
    await makeRequest(
      'POST',
      `${BASE_URL}/v3/content_types/session/entries`,
      { entry: session },
      `Created session: ${session.title}`
    );
  }
  
  // Create Accommodations
  for (const accommodation of sampleContent.accommodations) {
    await makeRequest(
      'POST',
      `${BASE_URL}/v3/content_types/accommodation/entries`,
      { entry: accommodation },
      `Created accommodation: ${accommodation.name}`
    );
  }
}

// Main execution function
async function run() {
  try {
    console.log("\n🎯 Setting up AI DXP Island Conference 2028 in Contentstack...");
    console.log("This will create content models and sample content for:");
    console.log("• Conference Details");
    console.log("• Speakers & Keynotes");
    console.log("• Sessions & Agenda");
    console.log("• Accommodations");
    
    await createContentTypes();
    await createEntries();
    
    console.log("\n🎉 Setup completed successfully!");
    console.log("\n📋 Summary:");
    console.log("✅ 4 Content Types created");
    console.log("✅ 1 Conference details page created");
    console.log("✅ 4 Speakers created");
    console.log("✅ 4 Sessions created");
    console.log("✅ 3 Accommodations created");
    console.log("\n🏝️ Your AI DXP Island Conference site is ready!");
    console.log("💡 Next steps:");
    console.log("1. Log into your Contentstack dashboard to review the content");
    console.log("2. Publish the entries to make them available via the Delivery API");
    console.log("3. The conference site will automatically display this content");
    
  } catch (error) {
    console.error("\n💥 Setup failed:", error.message);
    process.exit(1);
  }
}

run();
