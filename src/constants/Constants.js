export const DEFAULT_OPTIONS = [
  {
    key: "UK",
    value: "United Kingdom",
  },
  {
    key: "USA",
    value: "United States Of America",
  },
  {
    key: "India",
    value: "India",
  },
  {
    key: "Australia",
    value: "Australia",
  },
];

export const DEFAULT_TIME_ZONE = Object.freeze({
  UK: {
    locale: "GB",
    options: {
      timeZone: "Europe/London", // Set the time zone to UK
      hour12: false, // Use 24-hour format
    },
    color: "red",
  },
  USA: {
    locale: "US",
    options: {
      timeZone: "America/New_York", // Set the time zone to UK
      hour12: false, // Use 24-hour format
    },
    color: "blue",
  },
  India: {
    locale: "IN",
    options: {
      timeZone: "Asia/Kolkata", // Set the time zone to UK
      hour12: false, // Use 24-hour format
    },
    color: "orange",
  },
  Australia: {
    locale: "AU",
    options: {
      timeZone: "Australia/Sydney", // Set the time zone to UK
      hour12: false, // Use 24-hour format
    },
    color: "yellow",
  },
});
