# A Little Garden for Jaseena 🌻
### An Interactive Birthday Surprise Website

A bespoke, minimal, aesthetic, and fully interactive digital birthday garden designed with love for **Jaseena** (17 November).

---

## ✨ Features & Journey

1. **Locked Birthday Entrance & Live Countdown**
   - Delicate blooming sunflower and botanical illustration.
   - Accurate IST countdown timer targeting **17 November 2026, 12:00 AM IST (Asia/Kolkata)**.
   - Text: *"Something special is blooming..."* & *"A little surprise is waiting for you."*
   - Automatic unlock transition at midnight into the main garden.
   - Configurable **TEST MODE** to preview the full website before the birthday without exposing the bypass in production.

2. **Main Birthday Hero**
   - Baby pink background (`#FFF0F3`) with delicate falling sunflower petals and blossoms.
   - Editorial Polaroid photograph frame with botanical wreath for Jaseena's picture.
   - Headline: *"Happy Birthday, Jaseena!"*
   - Subtitle: *"Today, the world gets a little more beautiful because it's your day."*
   - Handwritten note: *"Made with a little sunshine and lots of flowers ♡"*
   - Gentle scroll indicator inviting her to explore.

3. **Her Little Art Gallery**
   - Editorial asymmetric scrapbook layout featuring 4 photographs.
   - Rounded corners, soft drop shadows, washi tape labels, and floral stickers.
   - Lightbox modal zoom when any photo is clicked.
   - Captions:
     1. *"Certified cutie behaviour."*
     2. *"Main character energy, obviously."*
     3. *"Too pretty to be real, honestly."*
     4. *"A little sunshine with a little chaos."*

4. **Where This Little Story Began (Instagram Memory)**
   - Scrapbook card presentation of the first conversation.
   - Washi tape, vintage postal stamp, and authentic DM chat card snippet.
   - Heading: *"Where this little story began..."*
   - Caption: *"Who knew one random conversation would turn into so many little moments? ♡"*
   - Ready for the actual conversation screenshot.

5. **The Birthday Gift 🎁**
   - Soft pink gift box with cream ribbon, bow, and floral decorations.
   - Interactive click-to-open animation with lid pop and pastel floral confetti burst.
   - Cute illustrated smiling cloud emerges and gently floats.
   - Reveal message: *"me hi hu aapka birthday gift, cutieee ☁️😭"*
   - Subtitle: *"Your gift is a little bit of sunshine!"*
   - Can be closed and reopened anytime.

6. **A Little Letter for You 💌**
   - Illustrated envelope with a wax flower seal.
   - Heading: *"One last little thing..."* & *"There's something I wanted to tell you."*
   - Interactive wax seal breaks open to reveal a warm parchment letter on creamy paper (`#FFFDF9`).
   - Sincere, heartwarming personal letter from Saurabh referencing her chaos era, jellyfish heart, and 6'4" standards.

7. **Minimal Floral Footer**
   - *"Some people are like flowers. They make everything around them a little brighter."*
   - *"Made especially for Jaseena 🌻"*
   - Interactive sunflower that smoothly scrolls back to the top of the garden.

8. **Extra Sensory Delights**
   - **Falling Petals**: High-performance canvas animation with toggle button (Petals: ON/OFF).
   - **Garden Music Box**: Optional, gentle lullaby melody using Web Audio API (starts muted, 100% royalty-free, user-controlled).
   - **Scroll Progress**: Sunflower bar tracking reading progress.
   - **Reduced Motion**: Full accessibility support for reduced motion.

---

## 📸 How to Add Jaseena's Real Photos & Conversation Screenshot

All text, captions, dates, and image paths are centralized in **`src/data/config.ts`**.

### 1. Adding Jaseena's Hero Photo
1. Place her image inside the `public/` folder, e.g., `public/jaseena-hero.jpg`.
2. In `src/data/config.ts`, update `hero.placeholderImage`:
   ```ts
   hero: {
     ...
     placeholderImage: "/jaseena-hero.jpg",
   }
   ```

### 2. Adding the 4 Gallery Photos
1. Place the 4 photos in `public/`, e.g., `photo1.jpg`, `photo2.jpg`, etc.
2. In `src/data/config.ts`, update `gallery.items`:
   ```ts
   {
     id: 1,
     imageUrl: "/photo1.jpg",
     caption: "Certified cutie behaviour.",
   },
   // Repeat for items 2, 3, and 4
   ```

### 3. Adding the First Instagram Conversation Screenshot
1. Place the screenshot in `public/`, e.g., `public/chat-screenshot.png`.
2. In `src/data/config.ts`, update `conversationMemory.screenshotUrl`:
   ```ts
   conversationMemory: {
     ...
     screenshotUrl: "/chat-screenshot.png",
   }
   ```

---

## ⚡ Test Mode vs. Production Deployment

### Testing / Development:
In `.env`:
```env
VITE_TEST_MODE=true
```
When `VITE_TEST_MODE=true`, the website immediately unlocks so you can preview everything. A discreet **"Test Lock"** button in the navbar lets you easily test the countdown screen anytime.

### Live Production Deployment:
Before deploying or sharing the link with Jaseena:
1. In `.env`, set:
   ```env
   VITE_TEST_MODE=false
   ```
2. Run the production build:
   ```bash
   npm run build
   ```
3. The locked countdown will now be strictly enforced until **17 November 2026, 12:00 AM IST**, with zero test bypass buttons visible to her.

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start local server
npm run dev

# Build for production
npm run build
```

---

*Made with sunshine and flowers for Jaseena 🌻*
