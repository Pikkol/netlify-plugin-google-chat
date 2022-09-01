const sendGoogleChatMessage = text => {
  const webhookURL = process.env.NETLIFY_GOOGLE_CHAT_WEBHOOK;
  const fetch = require("node-fetch");
  const data = JSON.stringify({
    text,
  });
  return fetch(webhookURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: data,
  })
    .then(response => response)
    .catch(error => error);
};

export const onPreBuild = ({ constants, utils }) => {
  try {
    const text = `Build started at ${new Date()}`;
    console.log(text);
    sendGoogleChatMessage(text);
  } catch (error) {
    console.log(error);
  }
};

export const onSuccess = ({ constants }) => {
  try {
    const text = `Build finished at ${new Date()}`;
    sendGoogleChatMessage(text);
  } catch (error) {
    console.log(error);
  }
};

export const onError = ({ constants }) => {
  try {
    const text = `Build failed at ${new Date()}`;
    console.log(text);
    sendGoogleChatMessage(text);
  } catch (error) {
    console.log(error);
  }
};
