// Google Form configuration for waitlist submissions.
// To wire up: open your Google Form -> "Send" -> "<>" embed, OR view the form's
// pre-filled link to find these values.
//
// 1. FORM_ID: from the form URL https://docs.google.com/forms/d/e/<FORM_ID>/viewform
// 2. PHONE_ENTRY_ID: inspect the form's input field (entry.123456789)
//
// The form is submitted with `no-cors` so we can't read the response,
// but Google Forms reliably stores the entry. Replace placeholders below.

export const GOOGLE_FORM_ID =
  "REPLACE_WITH_YOUR_GOOGLE_FORM_ID"; // e.g. "1FAIpQLSc...."

export const GOOGLE_FORM_PHONE_ENTRY = "entry.000000000"; // e.g. "entry.123456789"

export const GOOGLE_FORM_ACTION = `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`;
