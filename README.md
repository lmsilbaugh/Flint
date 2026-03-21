# ⚡ Flint

> Private P2P voice & chat. No account, no server, no cost. Share a link — connect instantly.

---

## What is Flint?

Flint is a private, serverless voice and chat app that runs entirely in your browser. There's no account to create, no phone number required, and no company storing your conversations.

When you open Flint, it generates a unique invite link tied to your device. Send that link to anyone via WhatsApp, SMS, or email. When they click it, Flint opens in their browser, they enter their name, and you're instantly connected. All messages and calls travel directly between devices — end-to-end encrypted, with nothing passing through a central server.

---

## Features

- ⚡ **No account required** — open the link and you're in
- 🔒 **End-to-end encrypted** — messages and calls go device to device
- 🌐 **Browser-based** — works on any device, any browser, no download
- 🆓 **Free forever** — no subscriptions, no ads, no data collection
- 📞 **Voice calls** — encrypted P2P audio calls
- 💬 **Real-time chat** — direct messaging with no server in between
- 🔗 **Invite link system** — share one link to connect with anyone

---

## How it works

1. Open Flint and enter your name
2. Click **+** to get your personal invite link
3. Send the link to anyone via WhatsApp, SMS, or email
4. They click it — Flint opens in their browser, they enter their name
5. You're connected — chat and call directly, device to device

---

## Architecture

Flint uses **PeerJS** for WebRTC signaling and establishes direct peer-to-peer connections between devices. Once connected, all communication is:

- Routed directly between devices (no relay server for content)
- End-to-end encrypted via WebRTC's built-in DTLS/SRTP
- Ephemeral — nothing is stored on any server

```
Person A  ──── WebRTC P2P ────  Person B
              (direct, E2E)
         PeerJS signaling server
         (only used to introduce
          the two devices — never
          sees message content)
```

---

## Tech Stack

- **PeerJS** — WebRTC signaling and peer management
- **WebRTC** — direct P2P audio and data channels
- **Vanilla JS** — no frameworks, no build tools
- **Single HTML file** — the entire app is one file

---

## Self-Hosting

Flint is a single HTML file. To host your own instance:

1. Download `index.html`
2. Upload it to any static hosting service:
   - GitHub Pages (free)
   - Vercel (free)
   - Any web server

That's it. No backend, no database, no configuration.

---

Potential Roadmap

- [ ] Persistent message history (local storage)
- [ ] File sharing
- [ ] Group chat and group calls
- [ ] Mobile PWA with push notifications
- [ ] Contact fingerprint verification
- [ ] Disappearing messages
- [ ] Flint for Teams (paid tier)

---

## License

MIT © [lmsilbaugh](https://github.com/lmsilbaugh)

---

## Try it

🔗 **[lmsilbaugh.github.io/Flint](https://lmsilbaugh.github.io/Flint)**
