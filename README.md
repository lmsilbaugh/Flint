# ⚡ Flint

> Private P2P voice, chat, file sharing & group rooms. No account, no server, no cost. Share a link — connect instantly.

**[Try Flint →](https://lmsilbaugh.github.io/Flint/)**

---

## What is Flint?

Flint is a private, serverless communication app that runs entirely in your browser. There's no account to create, no phone number required, and no company storing your conversations or files.

When you open Flint, you get a unique invite link. Send it to anyone via WhatsApp, SMS, or email. When they click it, Flint opens in their browser, they enter their name, and you're instantly connected. Everything — messages, calls, files, and group rooms — travels directly between devices, end-to-end encrypted, with nothing passing through a central server.

---

## Features

- ⚡ **No account required** — open the link and you're in
- 🔒 **End-to-end encrypted** — messages, calls, files and rooms go device to device
- 📞 **Voice calls** — encrypted P2P audio, tested across iOS, Android & PC
- 💬 **Direct messaging** — private one-to-one chat with no server in between
- 👥 **Group rooms** — persistent group text chat and voice rooms
- 🔊 **Voice rooms** — drop in and out of group voice, mesh P2P audio
- 📁 **File sharing** — send any file, any size, direct P2P with progress tracking
- 🖼️ **Image previews** — photos display inline as thumbnails, click to download
- ✍️ **Typing indicators** — see when someone is typing in real time
- ✓✓ **Read receipts** — know when your messages have been read
- 🔔 **Push notifications** — get alerted when messages arrive, even when Flint is closed
- 💾 **Message history** — conversations and rooms persist locally across sessions
- 🚪 **Leave rooms** — leave any room instantly, removing it from your sidebar and storage
- 📲 **Installable** — add to home screen on iOS or Android, opens like a native app
- 🌐 **Browser-based** — works on any device, any browser, no download required
- 🆓 **Free forever** — no subscriptions, no ads, no data collection
- 🔗 **Invite link system** — one link connects people instantly

---

## How it works

### Direct messages
1. Open Flint and enter your name
2. Click **+** in the Direct tab to get your personal invite link
3. Send it to anyone — WhatsApp, SMS, email, anything
4. They click it — Flint opens, they enter their name, you're connected
5. Chat, call, and share files directly — device to device
6. See typing indicators and read receipts in real time

### Group rooms
1. Switch to the **Rooms** tab in the sidebar
2. Click **+** to create a room — choose Text, Voice, or Both
3. Click 🔗 **Invite** to get a room invite link
4. Anyone who clicks the link joins the room automatically
5. Chat as a group, jump into the voice room, or share files together
6. Click **✕ Leave** in the room header to leave at any time

Your message history and rooms are saved locally in your browser. Everything is right where you left it when you come back.

---

## Direct vs Rooms

| | Direct | Rooms |
|---|---|---|
| One-to-one chat | ✅ | — |
| Group chat | — | ✅ |
| Voice calls | ✅ | ✅ |
| File sharing | ✅ | ✅ |
| Image previews | ✅ | ✅ |
| Typing indicators | ✅ | ✅ |
| Read receipts | ✅ | — |
| Push notifications | ✅ | ✅ |
| Persistent history | ✅ | ✅ |
| Drop-in voice | — | ✅ |
| Leave room | — | ✅ |
| Invite link | ✅ | ✅ |

---

## Where is your data stored?

**Your data never leaves your device.**

Flint uses your browser's built-in `localStorage` — a sandboxed storage area the browser maintains locally on your device. It is completely isolated from any server. No one can access it except the browser on that specific device.

**What is saved locally:**
- Your display name
- Your contacts list
- Your direct message history
- Your rooms and group message history
- File transfer records (name, size, timestamp — not the file itself)

**What is never saved anywhere:**
- Your conversations on any server
- Your files on any server
- Any account information — there is none

**Per device, per browser:**
- Your laptop and phone have completely separate histories
- Chrome and Firefox on the same computer are separate
- Incognito / private mode saves nothing — wiped when the window closes

**How to view your stored data:**
1. Open Flint in your browser
2. Press `F12` → **Application** tab → **Local Storage** → `lmsilbaugh.github.io`
3. You'll see the key `flint_v2` with all your saved data in JSON format

**How to delete your data:**
- Click the **ℹ** button inside Flint → **Delete all local data**
- Or leave a room using **✕ Leave** — removes that room and its history immediately
- Or: browser Settings → Clear browsing data → Site data
- Deletion is permanent and cannot be undone

**The privacy implication:**
Because your data is stored only on your device, there is no server to breach, no database to subpoena, and no company that can hand your conversations to a third party.

---

## Privacy & Security

**What's protected:**
- All messages, calls, and file transfers are encrypted via WebRTC's built-in DTLS/SRTP
- No server stores your conversations — they live only on your device
- No account means no identity to leak or data to breach
- Group rooms use mesh P2P — every connection is direct and encrypted
- Typing indicators and read receipts travel over the same encrypted P2P channel

**Known limitations:**
- PeerJS signaling server sees your IP address when establishing connections
- Using a VPN hides your real IP from the signaling server
- Push notifications use the browser's built-in notification system — no third-party notification service
- For maximum privacy, self-host the PeerJS server (see below)

---

## Architecture

### Direct connections
```
Person A  ──── WebRTC P2P ────  Person B
              (direct, E2E)

         PeerJS signaling server
         (introduces devices only —
          never sees message content,
          files, or call audio)
```

### Group rooms (mesh topology)
```
         Person A
        /         \
Person B ─────── Person C
        \         /
         Person D

Every person connects directly to every other person.
No relay, no hub. Pure mesh P2P.
```

Once devices are connected, PeerJS is completely out of the picture. All communication is direct.

---

## Installing Flint (PWA)

Flint is a Progressive Web App — it can be installed on your home screen like a native app.

**On iPhone / iPad (Safari):**
1. Open `lmsilbaugh.github.io/Flint` in Safari
2. Tap the Share button
3. Tap **Add to Home Screen**

**On Android (Chrome):**
1. Open `lmsilbaugh.github.io/Flint` in Chrome
2. Tap the three-dot menu
3. Tap **Add to Home Screen**

**On desktop (Chrome / Edge):**
1. Open `lmsilbaugh.github.io/Flint`
2. Click the install icon in the address bar

Once installed, Flint opens full screen with no browser chrome, exactly like a native app.

---

## Tech Stack

- **PeerJS** — WebRTC signaling and peer management
- **WebRTC** — direct P2P audio, data channels, and file transfer
- **Mesh networking** — every room member connects to every other member directly
- **localStorage** — local message history, contacts, and room persistence
- **Service Worker** — PWA offline caching
- **Browser Notification API** — push notifications, no third-party service
- **Vanilla JS** — no frameworks, no build tools, no dependencies
- **Single HTML file** — the entire app is one file, ~85KB

---

## Self-Hosting

Flint is a single HTML file. To host your own instance:

1. Download `index.html`, `manifest.json`, `sw.js`, `icon-192.png`, `icon-512.png`
2. Upload to any static hosting:
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

- [x] P2P direct messaging via invite link
- [x] Encrypted voice calls (iOS, Android, PC)
- [x] P2P file sharing — any file, any size
- [x] Local message history persistence
- [x] Cross-platform tested
- [x] Group text rooms — persistent, mesh P2P
- [x] Group voice rooms — drop in/out, mesh audio
- [x] Direct / Rooms tab navigation
- [x] Leave room
- [x] PWA — installable on mobile and desktop
- [x] Typing indicators — direct and group rooms
- [x] Read receipts — direct messages
- [x] Image previews — inline thumbnails
- [x] Push notifications — messages, files, calls
- [ ] Message reactions
- [ ] Screen sharing
- [ ] Disappearing messages
- [ ] Message search
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
