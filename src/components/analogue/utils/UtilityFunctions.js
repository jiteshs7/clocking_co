export const alertUser = (time, timeZone) => {
  // Get the current hour
  let currentHour = time.getHours();
  // Convert to 12 hour format
  const TFHour = currentHour % 12 || 12;
  // Define the message based on the current hour
  let message = "";
  const timeMsg = `It's ${TFHour}o'clock in ${timeZone.locale}`;
  if (currentHour >= 6 && currentHour < 12) {
    message = `Good morning!, ${timeMsg}`;
  } else if (currentHour >= 12 && currentHour < 18) {
    message = `Good afternoon!, ${timeMsg}`;
  } else {
    message = `Good evening!, ${timeMsg}`;
  }

  // Show the alert with the appropriate message
  alert(message);
};

export const getHourDegrees = (time) => {
  const hours = time.getHours() % 12;
  return hours * 30 + time.getMinutes() * 0.5;
};

export const getMinuteDegrees = (time) => {
  return time.getMinutes() * 6 + time.getSeconds() * 0.1;
};

export const getSecondDegrees = (time) => {
  return time.getSeconds() * 6;
};
