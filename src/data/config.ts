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
    unlockBadgeText: string;
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
  recipientName: "Kuchupuchu",
  senderName: "Saurabh",
  // Target unlock time: 1:40 AM IST
  birthdayDateIST: "2026-11-13T01:40:00+05:30",
  countdown: {
    heading: "Something special is blooming...",
    subheading: "A little garden is gently growing for you.",
    note: "A little surprise is waiting for you.",
    unlockBadgeText: "Unlocks at 01:40 AM IST",
  },
  hero: {
    title: "Happy Birthday, Kuchupuchu! 🎀😚",
    subtitle: "Today, the world gets a little more beautiful because it's your day, pookie 🥺💖",
    handwrittenNote: "Made with lots of sunshine, tight hugs and love ♡ 😚",
    placeholderImage: "/photos/jaseena-cat.jpg",
  },
  gallery: {
    sectionTitle: "Her Little Art Gallery",
    sectionSubtitle: "Little frames of sunshine, chaos & charm 🌸🎀",
    items: [
      {
        id: 1,
        imageUrl: "/photos/jaseena-hero.jpg",
        placeholderTitle: "Photo #1",
        caption: "Certified cutie behaviour.",
        sticker: "🌸🥺",
        rotation: "-rotate-2",
      },
      {
        id: 2,
        imageUrl: "/photos/jaseena-vampire.jpg",
        placeholderTitle: "Photo #2",
        caption: "Main character energy, obviously.",
        sticker: "🌸😚",
        rotation: "rotate-3",
      },
      {
        id: 3,
        imageUrl: "/photos/jaseena-dreamy.jpg",
        placeholderTitle: "Photo #3",
        caption: "Too pretty to be real, honestly.",
        sticker: "🌻🥰",
        rotation: "-rotate-1",
      },
      {
        id: 4,
        imageUrl: "/photos/jaseena-chaos.jpg",
        placeholderTitle: "Photo #4",
        caption: "A little sunshine with a little chaos.",
        sticker: "💖🎀",
        rotation: "rotate-2",
      },
    ],
  },
  conversationMemory: {
    sectionTitle: "Our Scrapbook Memory",
    heading: "Where this little story began...",
    caption: "Who knew one random conversation would turn into so many little moments? ♡ 🥺",
    screenshotUrl: "/photos/jaseena-memory.jpg",
    chatSnippet: {
      date: "The very first DM 💌",
      messages: [
        {
          sender: "saurabh",
          text: "Bruuh u lowkey look like jasmine 😩🤭",
          time: "4:05 PM",
        },
        {
          sender: "jaseena",
          text: "Who's jasmine 😭",
          time: "4:06 PM",
        },
        {
          sender: "saurabh",
          text: "Jasmine 😩 But without jas 🤭👀",
          time: "4:06 PM",
        },
        {
          sender: "jaseena",
          text: "Whooo areee youu 😭",
          time: "4:07 PM",
        },
      ],
    },
  },
  gift: {
    sectionTitle: "The Birthday Gift 🎁",
    teaserText: "A little something for you...",
    boxLabel: "Open to see your birthday gift ♡ 🎀",
    revealedMessage: "me hi hu aapka birthday gift, kuchupuchuuu ☁️😭😚",
    revealedCaption: "Your gift is a whole lot of love & sunshine! 🎀💖",
  },
  letter: {
    sectionTitle: "A Little Letter for You 💌",
    heading: "One last little thing...",
    subheading: "There's something I wanted to tell you.",
    envelopeLabel: "Click the flower seal to open ♡ 😚",
    salutation: "Hey Kuchupuchu, 🥺💖",
    paragraphs: [
      "It's honestly funny how we only started talking a little while ago, and yet, somehow, you've managed to make these past few days feel a little brighter.",
      "I didn't really expect a random conversation to turn into something this nice, but here we are.",
      "I love how effortlessly you bring your own little chaos, humour and personality into our conversations. Whether it's your vampire era, your jellyfish heart or your endless standards for a 6'4\" guy 😭, there's always something that makes me smile.",
      "And I genuinely want you to know that talking to you has made me feel a lot better during days when I needed it.",
      "I hope this new year of your life brings you countless reasons to smile, beautiful opportunities, unexpected adventures and all the happiness you deserve.",
      "Keep being your wonderfully chaotic self. Never lose that little spark that makes you, YOU.",
    ],
    signOff: "Happy Birthday once again, cutieee pookie! 🌻😚",
    sender: "With lots of sunshine & love,\nSaurabh ♡ 🎀",
  },
  footer: {
    quote: "Some people are like flowers. They make everything around them a little brighter.",
    madeFor: "Made especially for Kuchupuchu 🌻🎀😚",
  },
};

/**
 * Checks whether TEST MODE is active.
 * When false, the actual countdown is strictly enforced with zero bypasses.
 */
export function isTestModeEnabled(): boolean {
  return import.meta.env.VITE_TEST_MODE === 'true';
}

