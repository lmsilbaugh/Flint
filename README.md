# ⚡ Flint

> Private P2P voice, chat & file sharing. No account, no server, no cost. Share a link — connect instantly.

**[Try Flint →](https://lmsilbaugh.github.io/Flint/)**

---

## What is Flint?

Flint is a private, serverless communication app that runs entirely in your browser. There's no account to create, no phone number required, and no company storing your conversations or files.

When you open Flint, you get a unique invite link. Send it to anyone via WhatsApp, SMS, or email. When they click it, Flint opens in their browser, they enter their name, and you're instantly connected. Everything — messages, calls, and files — travels directly between devices, end-to-end encrypted, with nothing passing through a central server.

---

## Features

- ⚡ **No account required** — open the link and you're in
- 🔒 **End-to-end encrypted** — messages, calls and files go device to device
- 📞 **Voice calls** — encrypted P2P audio, tested across iOS, Android & PC
- 💬 **Real-time chat** — direct messaging with no server in between
- 📁 **File sharing** — send any file, any size, direct P2P with progress tracking
- 💾 **Message history** — conversations persist locally across sessions
- 🌐 **Browser-based** — works on any device, any browser, no download
- 🆓 **Free forever** — no subscriptions, no ads, no data collection
- 🔗 **Invite link system** — one link connects two people instantly

---

## How it works

1. Open Flint and enter your name
2. Click **+** to get your personal invite link
3. Send the link to anyone — WhatsApp, SMS, email, anything
4. They click it — Flint opens in their browser, they enter their name
5. You're connected — chat, call, and share files directly, device to device

Your message history is saved locally in your browser. Next time you open Flint, your contacts and conversations are right where you left them.

---

## Privacy & Security

**What's protected:**
- All messages and calls are encrypted via WebRTC's built-in DTLS/SRTP
- No server stores your conversations — they live only on your device
- No account means no identity to leak or data to breach
- Message history is stored locally in your browser, never on a server

**Known limitations:**
- PeerJS signaling server sees your IP address when establishing connections
- Using a VPN eliminates this — your real IP is hidden from the signaling server
- For maximum privacy, self-host the PeerJS server (see below)

---

## Architecture

```
Person A  ──── WebRTC P2P ────  Person B
              (direct, E2E)

         PeerJS signaling server
         (introduces devices only —
          never sees message content,
          files, or call audio)
```

Once two devices are connected, PeerJS is completely out of the picture. All communication is direct.

---

## Tech Stack

- **PeerJS** — WebRTC signaling and peer management
- **WebRTC** — direct P2P audio, data channels, and file transfer
- **localStorage** — local message history persistence
- **Vanilla JS** — no frameworks, no build tools, no dependencies
- **Single HTML file** — the entire app is one file, ~57KB

---

## Self-Hosting

Flint is a single HTML file. To host your own instance:

1. Download `index.html`
2. Upload it to any static hosting:
   - **GitHub Pages** (free, permanent)
   - **Vercel** (free)
   - **Any web server** — Apache, Nginx, Caddy

No backend. No database. No configuration.

**Optional: Self-host PeerJS for maximum privacy**

Run your own PeerJS signaling server so no third party sees connection metadata:

```bash
npm install -g peer
peerjs --port 9000
```

Then update the Peer configuration in `index.html` to point to your server.

---

## Roadmap

- [x] P2P messaging via invite link
- [x] Encrypted voice calls (iOS, Android, PC)
- [x] P2P file sharing — any file, any size
- [x] Local message history persistence
- [x] Cross-platform tested
- [ ] Group chats and group voice rooms
- [ ] Read receipts and typing indicators
- [ ] Browser push notifications
- [ ] PWA — installable on mobile home screen
- [ ] Self-hosted PeerJS option in settings
- [ ] Flint for Teams (paid tier)

---

## Contributing

Flint is open source under the MIT license. Contributions, bug reports, and feature requests are welcome.

1. Fork the repository
2. Make your changes to `index.html`
3. Open a pull request

Since Flint is a single file, contributing is as simple as editing one HTML file.

---

## License

MIT © [lmsilbaugh](https://github.com/lmsilbaugh)

---

## Try it now

🔗 **[lmsilbaugh.github.io/Flint](https://lmsilbaugh.github.io/Flint/)**

*No download. No account. Just click.*
