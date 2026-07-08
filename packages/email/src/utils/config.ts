const URL_REGEX = /\/+$/;

function normalizeUrl(url: string): string {
  return url.replace(URL_REGEX, "");
}

export const EMAIL_CONFIG = {
  /**
   * Site URL for marketing site (logo, assets, etc.)
   * Falls back to production URL if not set
   */
  getSiteUrl(): string {
    return normalizeUrl(
      process.env.NEXT_PUBLIC_SITE_URL || "https://rubani.ai"
    );
  },

  /**
   * App/Dashboard URL for the Dashboard application
   * Falls back to production URL if not set
   */
  getAppUrl(): string {
    return normalizeUrl(
      process.env.NEXT_PUBLIC_APP_URL || "https://app.rubani.ai"
    );
  },

  /**
   * Get logo URL with fallback (uses site URL)
   */
  getLogoUrl(): string {
    const siteUrl = this.getSiteUrl();
    return `${siteUrl}/brand/rubani-logo.png`;
  },

  /**
   * Reply-to email address
   */
  replyTo: "support@rubani.ai",

  /**
   * From email address for automated notification emails.
   * Configurable via env so a verified Resend sender can be provided without a
   * code change; falls back to a sensible Rubani address for local development.
   */
  get from(): string {
    return process.env.EMAIL_FROM_ADDRESS || "Rubani <hello@rubani.ai>";
  },

  /**
   * Physical mailing address for CAN-SPAM compliance
   */
  physicalAddress: {
    name: "Rubani",
    street: "",
    city: "",
    zip: "",
    country: "",
  },
} as const;
