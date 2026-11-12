export interface GalleryItem {
  id: number;
  imageUrl?: string;
  placeholderTitle: string;
  caption: string;
  sticker?: string;
  rotation?: string;
}

export interface GardenConfig {
  recipientName: string;
  senderName: string;
  birthdayDateIST: string; // ISO string with +05:30
  countdown: {
    heading: string;
    subheading: string;
    note: string;
  };
  hero: {
    title: string;
    subtitle: string;
    handwrittenNote: string;
    placeholderImage?: string;
  };
  gallery: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: GalleryItem[];
  };
  conversationMemory: {
    sectionTitle: string;
    heading: string;
    caption: string;
    screenshotUrl?: string;
    chatSnippet: {
      date: string;
      messages: {
        sender: 'saurabh' | 'jaseena';
        text: string;
        time: string;
      }[];
    };
  };
  gift: {
    sectionTitle: string;
    teaserText: string;
    boxLabel: string;
    revealedMessage: string;
    revealedCaption: string;
  };
  letter: {
    sectionTitle: string;
    heading: string;
    subheading: string;
    envelopeLabel: string;
    salutation: string;
    paragraphs: string[];
    signOff: string;
    sender: string;
  };
  footer: {
    quote: string;
    madeFor: string;
  };
}

export const siteConfig: GardenConfig = {
  recipientName: "Jaseena",
  senderName: "Saurabh",
  // 17 November 2026, 12:00 AM IST (Asia/Kolkata)
  birthdayDateIST: "2026-11-17T00:00:00+05:30",
  countdown: {
    heading: "Something special is blooming...",
    subheading: "A little garden is gently growing for you.",
    note: "A little surprise is waiting for you.",
  },
  hero: {
    title: "Happy Birthday, Jaseena!",
    subtitle: "Today, the world gets a little more beautiful because it's your day.",
    handwrittenNote: "Made with a little sunshine and lots of flowers ♡",
    placeholderImage: "/photos/jaseena-hero.jpg",
  },
  gallery: {
    sectionTitle: "Her Little Art Gallery",
    sectionSubtitle: "Little frames of sunshine, chaos & charm ✨",
    items: [
      {
        id: 1,
        imageUrl: "/photos/jaseena-cat.jpg",
        placeholderTitle: "Jaseena's Photo #1",
        caption: "Certified cutie behaviour.",
        sticker: "🌸",
        rotation: "-rotate-2",
      },
      {
        id: 2,
        imageUrl: "/photos/jaseena-vampire.jpg",
        placeholderTitle: "Jaseena's Photo #2",
        caption: "Main character energy, obviously.",
        sticker: "✨",
        rotation: "rotate-3",
      },
      {
        id: 3,
        imageUrl: "/photos/jaseena-dreamy.jpg",
        placeholderTitle: "Jaseena's Photo #3",
        caption: "Too pretty to be real, honestly.",
        sticker: "🌻",
        rotation: "-rotate-1",
      },
      {
        id: 4,
        imageUrl: "/photos/jaseena-chaos.jpg",
        placeholderTitle: "Jaseena's Photo #4",
        caption: "A little sunshine with a little chaos.",
        sticker: "💖",
        rotation: "rotate-2",
      },
    ],
  },
  conversationMemory: {
    sectionTitle: "Our Scrapbook Memory",
    heading: "Where this little story began...",
    caption: "Who knew one random conversation would turn into so many little moments? ♡",
    // Replace with actual screenshot path when available
    screenshotUrl: "",
    chatSnippet: {
      date: "The very first DM ✨",
      messages: [
        {
          sender: "saurabh",
          text: "Hey! Couldn't help but notice your bio haha 😂",
          time: "10:14 PM",
        },
        {
          sender: "jaseena",
          text: "Hahaha wait, really? 😭 Don't judge my chaos era yet!",
          time: "10:16 PM",
        },
        {
          sender: "saurabh",
          text: "Too late, standard procedure requires at least 8 hours of chaotic banter now 🌻",
          time: "10:17 PM",
        },
        {
          sender: "jaseena",
          text: "Deal! Just so you know, my jellyfish heart cannot take boring convos 🪼✨",
          time: "10:18 PM",
        },
      ],
    },
  },
  gift: {
    sectionTitle: "The Birthday Gift 🎁",
    teaserText: "A little something for you...",
    boxLabel: "Open to see your birthday gift ♡",
    revealedMessage: "me hi hu aapka birthday gift, cutieee ☁️😭",
    revealedCaption: "Your gift is a little bit of sunshine!",
  },
  letter: {
    sectionTitle: "A Little Letter for You 💌",
    heading: "One last little thing...",
    subheading: "There's something I wanted to tell you.",
    envelopeLabel: "Click the flower seal to open ♡",
    salutation: "Hey Jaseena,",
    paragraphs: [
      "It's honestly funny how we only started talking a little while ago, and yet, somehow, you've managed to make these past few days feel a little brighter.",
      "I didn't really expect a random conversation to turn into something this nice, but here we are.",
      "I love how effortlessly you bring your own little chaos, humour and personality into our conversations. Whether it's your vampire era, your jellyfish heart or your endless standards for a 6'4\" guy 😭, there's always something that makes me smile.",
      "And I genuinely want you to know that talking to you has made me feel a lot better during days when I needed it.",
      "I hope this new year of your life brings you countless reasons to smile, beautiful opportunities, unexpected adventures and all the happiness you deserve.",
      "Keep being your wonderfully chaotic self. Never lose that little spark that makes you, YOU.",
    ],
    signOff: "Happy Birthday once again, cutieee! 🌻",
    sender: "With lots of sunshine,\nSaurabh ♡",
  },
  footer: {
    quote: "Some people are like flowers. They make everything around them a little brighter.",
    madeFor: "Made especially for Jaseena 🌻",
  },
};

/**
 * Checks whether TEST MODE is active:
 * 1. Environment variable VITE_TEST_MODE === 'true'
 * 2. URL parameter ?test=true (allowed in dev or if VITE_ALLOW_QUERY_OVERRIDE === 'true')
 */
export function isTestModeEnabled(): boolean {
  // Check env variable
  if (import.meta.env.VITE_TEST_MODE === 'true') {
    return true;
  }
  // Optional URL query check in DEV only to prevent accidental bypass in production
  if (import.meta.env.DEV) {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('test') === 'true' || params.get('preview') === 'true') {
        return true;
      }
    }
  }
  return false;
}

