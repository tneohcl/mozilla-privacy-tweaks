// Firefox user.js: privacy/security with low friction
// Re-applied on every launch. Edit here, not in Settings. Remove this file to revert.

// --- Tracking protection ---
user_pref("browser.contentblocking.category", "strict");
user_pref("privacy.globalprivacycontrol.enabled", true);
user_pref("dom.private-attribution.submission.enabled", false);

// --- DNS over HTTPS: NextDNS, fall back to system DNS ---
// Works as-is (NextDNS without a profile = plain encrypted DNS, no filtering).
// For your own NextDNS filtering, append your profile ID to both URIs:
//   https://dns.nextdns.io/<your-id>
user_pref("network.trr.mode", 2);
user_pref("network.trr.uri", "https://dns.nextdns.io");
user_pref("network.trr.custom_uri", "https://dns.nextdns.io");

// --- HTTPS / TLS ---
user_pref("dom.security.https_only_mode", true);
user_pref("dom.security.https_only_mode_send_http_background_request", false);
user_pref("security.tls.enable_0rtt_data", false);
user_pref("security.cert_pinning.enforcement_level", 2);
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("media.peerconnection.ice.default_address_only", true);

// --- Telemetry / studies / crash reports ---
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.usage.uploadEnabled", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.archive.enabled", false);
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
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);

// --- Sponsored content / recommendations ---
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
user_pref("browser.discovery.enabled", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("extensions.getAddons.showPane", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);

// --- Background / speculative connections ---
user_pref("network.prefetch-next", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.predictor.enabled", false);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.places.speculativeConnect.enabled", false);
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);

// --- Misc hardening ---
user_pref("pdfjs.enableScripting", false);
user_pref("network.IDN_show_punycode", true);
user_pref("permissions.default.desktop-notification", 2);
user_pref("browser.uitour.enabled", false);

// --- Logins: password manager and Firefox Account/Sync off (not used) ---
user_pref("signon.rememberSignons", false);
user_pref("signon.autofillForms", false);
user_pref("signon.generation.enabled", false);
user_pref("signon.management.page.breach-alerts.enabled", false);
user_pref("signon.firefoxRelay.feature", "disabled");
user_pref("signon.formlessCapture.enabled", false);
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("identity.fxaccounts.enabled", false);

// --- Extras from the earlier firefox-user.js repo (low friction) ---
user_pref("browser.ml.chat.enabled", false);            // AI chatbot sidebar
user_pref("browser.vpn_promo.enabled", false);          // Mozilla VPN promos
user_pref("toolkit.telemetry.server", "data:,");        // blackhole any stray telemetry
user_pref("network.http.speculative-parallel-limit", 0); // no speculative connections on link hover
