# mozilla-privacy-tweaks

Low-friction privacy and security `user.js` files for **Firefox** and **Thunderbird**.

These are the files I run daily. They turn off telemetry, ads and background
connections, and tighten TLS and tracking protection, **without** breaking sites,
logins or OAuth sign-in. This is not arkenfox: nothing here should need
per-site exceptions or daily fiddling.

| File | Prefs | Highlights |
|---|---|---|
| [`firefox/user.js`](firefox/user.js) | 67 | Strict tracking protection, HTTPS-Only, DNS over HTTPS, telemetry/studies off, no sponsored content, no speculative connections, password manager, Sync and AI chatbot off |
| [`thunderbird/user.js`](thunderbird/user.js) | 46 | Remote images blocked, no read receipts, phishing checks, no User-Agent/hostname leaks in outgoing mail, DNS over HTTPS, telemetry and nags off |

## Install

1. Close the app.
2. Copy the file into your profile folder as `user.js`:

   | App | Flatpak profile folder | Regular install |
   |---|---|---|
   | Firefox | `~/.var/app/org.mozilla.firefox/config/mozilla/firefox/<profile>/` (older Flatpaks: `~/.var/app/org.mozilla.firefox/.mozilla/firefox/<profile>/`) | `~/.mozilla/firefox/<profile>/` |
   | Thunderbird | `~/.var/app/org.mozilla.thunderbird/.thunderbird/<profile>/` | `~/.thunderbird/<profile>/` |

   `<profile>` is the folder ending in `.default-release`. `about:profiles` (Firefox) or
   **Help → Troubleshooting Information → Profile Folder** (Thunderbird) shows it.
3. Start the app. `user.js` is re-applied on every launch.

To undo a setting, delete its line and reset the pref in `about:config` (settings
from `user.js` stay in `prefs.js` until reset). To undo everything, delete `user.js`
and reset the prefs, or start a fresh profile.

## DNS over HTTPS

Both files use `network.trr.mode = 2`: encrypted DNS first, falling back to system
DNS if it fails, so nothing breaks on captive portals or broken networks. The
resolver is `https://dns.nextdns.io`, which works as-is with no account (plain
encrypted DNS, no filtering). To use your own NextDNS profile with filtering, append
its ID to **both** `network.trr.uri` and `network.trr.custom_uri`:

```js
user_pref("network.trr.uri", "https://dns.nextdns.io/<your-id>");
user_pref("network.trr.custom_uri", "https://dns.nextdns.io/<your-id>");
```

## Deliberately left out

Each of these was tried or reviewed and rejected because it costs daily friction:

**Firefox**
- `privacy.resistFingerprinting` / fingerprinting protection on all targets: breaks
  time zones, canvas-based sites and window sizing.
- First-party isolation, strict referrer trimming, WebRTC relay-only, timing APIs off:
  site breakage for little gain on top of Strict tracking protection.
- Clearing cookies/history on shutdown: logs you out of everything every day.
- Disabling search suggestions: kept for convenience.

**Thunderbird**
- `javascript.enabled = false`: **breaks the Gmail and Outlook OAuth sign-in
  window.** This is the most common way hardened Thunderbird configs lock people out.
- Session-only cookies: OAuth tokens and some providers need persistent cookies.
- No login at startup, forced plain-text / simple HTML, no inline attachments:
  inconvenient, not meaningfully safer.
- Add-on update checks are left **on**, because they carry the security blocklist.

## Notes

- The Thunderbird file hides your hostname in SMTP (`EHLO [127.0.0.1]`) and sends the
  `Date` header in UTC, so outgoing mail doesn't reveal your machine name or time zone.
- Remote images in mail stay blocked by default. Allow them per sender from the
  message bar when you trust someone.
- Tested with Firefox 156 and Thunderbird 156 (Flatpak) on Fedora 44.

## History

This replaces my earlier separate repos,
[`firefox-user.js`](https://github.com/tneohcl/firefox-user.js) and
[`thunderbird_user.js`](https://github.com/tneohcl/thunderbird_user.js), which are
now archived.

## License

[MIT](LICENSE)
