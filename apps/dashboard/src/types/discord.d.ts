interface guild {
  id: String
  name: String
  icon: String
  owner: Boolean
  permissions: String
  features: String[]
}

interface user {
  id: String,
  username: String,
  discriminator: String,
  bot: Boolean | null,
  system: Boolean | null,
  mfa_enabled: Boolean | null,
  avatar: String,
  verified: Boolean | null,
  email: String | null,
  flags: Number | null,
  banner: String | null,
  accent_color: String | null,
  premium_type: Number | null,
  public_flags: Number | null,
}

// This isn't really needed, use discord-api-types instead 