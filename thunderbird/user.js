// Thunderbird user.js: privacy/security with low friction
// Re-applied on every launch. Edit here, not in Settings. Remove this file to revert.
// Based on the earlier thunderbird_user.js repo, minus the high-friction/broken items
// (javascript.enabled=false breaks Gmail/Outlook OAuth sign-in; session-only cookies;
// no login at startup; forced plaintext).

// --- Telemetry / studies / crash reports ---
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.usage.uploadEnabled", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.coverage.opt-out", true);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
user_pref("breakpad.reportURL", "");
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

// --- Tracking in messages ---
user_pref("mailnews.message_display.disable_remote_image", true); // block tracking pixels (allow per sender)
user_pref("mail.mdn.report.enabled", false);                     // never send read receipts
user_pref("mail.phishing.detection.enabled", true);
user_pref("mail.phishing.detection.disallow_form_actions", true);
user_pref("network.IDN_show_punycode", true);                    // expose lookalike domains in links
user_pref("pdfjs.enableScripting", false);

// --- Don't leak system details in outgoing mail ---
user_pref("mailnews.headers.sendUserAgent", false);              // no Thunderbird/OS version header
user_pref("mail.smtpserver.default.hello_argument", "[127.0.0.1]"); // hide hostname in SMTP EHLO
user_pref("mail.sanitize_date_header", true);                    // Date header in UTC, no seconds

// --- DNS over HTTPS: NextDNS, fall back to system DNS (same as Firefox) ---
// Works as-is (NextDNS without a profile = plain encrypted DNS, no filtering).
// For your own NextDNS filtering, append your profile ID to both URIs:
//   https://dns.nextdns.io/<your-id>
user_pref("network.trr.mode", 2);
user_pref("network.trr.uri", "https://dns.nextdns.io");
user_pref("network.trr.custom_uri", "https://dns.nextdns.io");

// --- TLS / network hygiene ---
user_pref("security.tls.enable_0rtt_data", false);
user_pref("security.cert_pinning.enforcement_level", 2);
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.prefetch-next", false);
user_pref("network.predictor.enabled", false);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.enabled", false);

// --- Nags / remote pages ---
user_pref("mailnews.start_page.enabled", false);                 // no remote start page
user_pref("mail.shell.checkDefaultClient", false);
user_pref("mail.provider.enabled", false);                       // no "get a new email address" offers
user_pref("mail.inappnotifications.enabled", false);          // no donation/news pop-ups (polls notifications.thunderbird.net)
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);

// --- Usability (from old repo) ---
user_pref("mailnews.default_sort_order", 2);                     // newest first
