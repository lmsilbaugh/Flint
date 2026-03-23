# ⚡ Flint

Private messaging, voice calls, and file sharing. No account. No server. No cost.

**[Try it → lmsilbaugh.github.io/Flint](https://lmsilbaugh.github.io/Flint/)**

---

## What it is

Open the link. Type your name. Share an invite. That's it — you're connected directly to another person, device to device. Nothing goes through a server. Nobody can read your messages.

---

## What it does

- **Messaging** — direct and group rooms
- **Voice calls** — one-on-one, encrypted
- **Voice rooms** — drop in and out, group audio
- **File sharing** — any file, any size, direct transfer
- **Voice memos** — hold mic to record, plays inline
- **Reactions** — double-tap any message
- **Reply, edit, delete** — full message control
- **Typing indicators and read receipts**
- **Push notifications** — even when the tab is backgrounded
- **Single-use invite links** — expire after first connection
- **Installs as an app** — add to home screen on any device

---

## How to connect

1. Open Flint and type your name
2. Tap **+** to get your invite link
3. Send it to someone
4. They click it, type their name, you're connected

For group rooms: tap your avatar → **Create a room** → share the room link.

---

## Your data

Nothing leaves your device. Messages, contacts, and history are stored in your browser's local storage — not on any server. There is no account, so there's nothing to breach.

To delete everything: **ℹ Info → Delete all local data**

---

## Self-hosting

Flint is a single HTML file. Put it anywhere that serves static files — GitHub Pages, Vercel, Netlify, Nginx.

```
index.html
manifest.json
sw.js
icon-192.png
icon-512.png
```

To remove PeerJS's visibility into connection setup entirely, self-host the signaling server:

```bash
npm install -g peer
peerjs --port 9000
```

Then point the `Peer()` constructor in `index.html` at your server.

---

## License

MIT © [lmsilbaugh](https://github.com/lmsilbaugh)
