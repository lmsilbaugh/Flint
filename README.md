# ⚡ Flint

> Private P2P voice, chat, file sharing & group rooms. No account. No server. No cost. Share a link — connect instantly.

**[Try Flint →](https://lmsilbaugh.github.io/Flint/)**

---

## What is Flint?

Flint is a private, serverless communication app that runs entirely in your browser. There's no account to create, no phone number required, and no company storing your conversations or files.

Open Flint, type your name, and share a link. That's it. The person who clicks it is connected to you directly — device to device, encrypted end to end. Everything travels the shortest possible path: straight to them.

Your Peer ID is **persistent** — generated once and stored locally. This means mobile users can close the app, reopen it later, and still be reachable on the same ID. No reconnection headaches.

---

## Features

| Feature | Description |
|---|---|
| ⚡ **No account** | Open the link and you're in. No email, no phone number. |
| 🔒 **End-to-end encrypted** | All messages, calls, files and rooms — device to device. |
| 📞 **Voice calls** | Encrypted P2P audio, tested on iOS, Android and PC. |
| 💬 **Direct messaging** | Private one-to-one chat with persistent message history. |
| 👥 **Group rooms** | Persistent group text and voice rooms — mesh P2P. |
| 🔊 **Voice rooms** | Drop in and out of group voice. No dial-in required. |
| 📁 **File sharing** | Any file, any size. Direct P2P with progress tracking. |
| 🖼️ **Image previews** | Photos display as inline thumbnails. Click to download. |
| 🎤 **Voice memos** | Hold the mic button to record. Sends as an inline audio player. |
| ✍️ **Typing indicators** | See when someone is typing in real time. |
| ✓✓ **Read receipts** | Know when your messages have been read. |
| 🔔 **Push notifications** | Get alerted when messages arrive, even when Flint is closed. |
| 😂 **Reactions** | Hover any message and react with 👍 ❤️ 😂 😮 😢 🔥 |
| 🔗 **Clickable links** | URLs in messages open in a new tab automatically. |
| ⭐ **Save contacts** | Pin contacts to your sidebar so they survive chat deletion. |
| 🚪 **Close chats** | Clear history and remove contacts with one click. |
| 💾 **Persistent identity** | Your Peer ID is saved locally — same ID every session. |
| 📲 **Installable PWA** | Add to home screen on iOS or Android. Opens like a native app. |
| 🆓 **Free forever** | No subscriptions, no ads, no data collection. |

---

## How it works

### Direct messages

1. Open Flint and enter your name
2. Click **+** in the Direct tab to get your personal invite link
3. Send it — WhatsApp, SMS, email, anything
4. They click it, Flint opens, they enter their name, you're connected
5. Chat, call, share files directly — device to device
6. See typing indicators, read receipts, and reactions in real time

### Group rooms

1. Switch to the **Rooms** tab
2. Click **+** to create a room — choose Text, Voice, or Both
3. Click **🔗 Invite** to get a shareable room link
4. Anyone who clicks the link joins automatically
5. Click **✕ Leave** at any time to exit cleanly

---

## Reconnecting on mobile

Flint generates a **persistent Peer ID** once and stores it in your browser's localStorage. Every time you reopen Flint on that browser, you get the same ID back. This means:

- A contact saved on PC will still reach you when you reopen on mobile
- Closing and reopening the app doesn't break existing contact relationships
- Saved (pinned) contacts survive session restarts

If you want to reset your identity, go to **ℹ Info → Delete all local data**.

---

## Where is your data stored?

**Your data never leaves your device.**

Flint uses `localStorage` — a sandboxed storage area the browser maintains locally. No server ever receives your messages, files, or contact list.

**What is stored locally (`flint_v3` key):**
- Your display name
- Your contacts list (with pinned/saved status)
- Your direct message history
- Your rooms and group message history
- File transfer records (name, size — not the file data itself)
- Your persistent Peer ID (`flint_pid` key)

**What is never stored anywhere:**
- Your conversations on any server
- Your files on any server
- Any account information — there is none

**To view your stored data:**
F12 → Application → Local Storage → `lmsilbaugh.github.io` → key `flint_v3`

**To delete everything:**
- ℹ Info → **Delete all local data**
- Or: browser Settings → Clear browsing data → Site data

---

## Privacy & Security

**What's protected:**
- All traffic encrypted via WebRTC DTLS/SRTP — industry standard
- No server stores conversations — they live only on your device
- No account means no identity to leak or data to breach
- Group rooms use mesh P2P — every connection is direct and encrypted
- Typing indicators, read receipts, and reactions travel over the same encrypted channel
- Push notifications use the browser's native API — no third-party notification service

**Known limitations:**
- PeerJS signaling server sees your IP address when establishing a connection
- A VPN hides your real IP from the signaling server
- localStorage is unencrypted — anyone with physical access to your device can read it
- For maximum privacy, self-host the PeerJS signaling server (see below)

---

## Architecture

### Direct connection
```
Person A  ──── WebRTC P2P ────  Person B
              (direct, E2E)

         PeerJS signaling server
         (introduces devices only —
          never sees message content,
          files, or call audio)
```

### Group rooms — mesh topology
```
         Person A
        /         \
Person B ─────── Person C
        \         /
         Person D

Every member connects directly to every other member.
No relay, no hub. Pure mesh P2P.
```

Once devices are connected, PeerJS is completely out of the picture.

---

## Installing Flint (PWA)

**iPhone / iPad (Safari):**
1. Open `lmsilbaugh.github.io/Flint` in Safari
2. Tap the Share button → **Add to Home Screen**

**Android (Chrome):**
1. Open `lmsilbaugh.github.io/Flint` in Chrome
2. Tap the three-dot menu → **Add to Home Screen**

**Desktop (Chrome / Edge):**
1. Open `lmsilbaugh.github.io/Flint`
2. Click the install icon in the address bar

---

## Tech Stack

| Layer | Technology |
|---|---|
| P2P connections | PeerJS (WebRTC) |
| Audio | WebRTC MediaConnection |
| Data channels | PeerJS DataConnection |
| Group topology | Mesh P2P |
| Storage | Browser localStorage |
| Offline support | Service Worker |
| Notifications | Browser Notification API |
| Font | Geist (Vercel) |
| Build | None — single HTML file, ~110KB |

No frameworks. No build tools. No dependencies beyond PeerJS.

---

## Self-Hosting

Flint is a single HTML file. Deploy anywhere static hosting is available.

**Files needed:**
```
index.html
manifest.json
sw.js
icon-192.png
icon-512.png
```

Upload to GitHub Pages, Vercel, Netlify, Caddy, Nginx — anything that serves static files. No backend, no database, no configuration.

**Optional: Self-host the PeerJS signaling server**

```bash
npm install -g peer
peerjs --port 9000
```

Then update the `Peer()` constructor in `index.html` to point to your server. This removes PeerJS's visibility into connection metadata entirely.

---

## Roadmap

- [x] P2P direct messaging via invite link
- [x] Encrypted voice calls — iOS, Android, PC
- [x] P2P file sharing — any file, any size
- [x] Inline image previews
- [x] Voice memos — hold to record, inline playback
- [x] Local message history and contact persistence
- [x] Group text rooms — persistent, mesh P2P
- [x] Group voice rooms — drop in/out, mesh audio
- [x] Leave room — instant cleanup
- [x] PWA — installable on mobile and desktop
- [x] Typing indicators — direct and group rooms
- [x] Read receipts — direct messages
- [x] Push notifications — messages, files, calls
- [x] Message reactions — 👍 ❤️ 😂 😮 😢 🔥
- [x] Clickable links in messages
- [x] Save contacts — pin to sidebar, survive chat deletion
- [x] Close chat — clear history or remove contact
- [x] Persistent Peer ID — same identity every session, fixes mobile reconnection
- [ ] Message reactions in group rooms (broadcast)
- [ ] Screen sharing
- [ ] Disappearing messages
- [ ] Message search
- [ ] Flint for Teams

---

## Contributing

MIT license. Single file — contributing is editing one HTML file.

1. Fork the repo
2. Edit `index.html`
3. Open a pull request

---

## License

MIT © [lmsilbaugh](https://github.com/lmsilbaugh)

---

🔗 **[lmsilbaugh.github.io/Flint](https://lmsilbaugh.github.io/Flint/)**

*No download. No account. Just click.*
