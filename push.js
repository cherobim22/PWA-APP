let push = require("web-push");

const vapidKeys = {
  publicKey:
    "BHMt9biPRmvq_4HEduy-T2Pe6dBdLDk7JF0DvIIy1RMgy0foiB-Wrp3CSKG3a1gqIFs3bsKHSfT7pQCZ1fLVinQ",
  privateKey: "zbrPxPwcH1sfI75iV5Npum-wBTFfREgs4m-TpHxw-Z4",
};

push.setVapidDetails(
  "mailto:teste@code.co.uk",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

let sub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/dFWK5cN3BKs:APA91bFdpH0VeOiEhWp29femiFN787nz6-wut49i6u74hm-8gaLnpfzxdaRYTYcmNn3LM-0Itoi5B9VwwvYkHZdsKJIHkqEuq2KFET4hV-ryjqTArCSwXIzqHM4WpFS4Rm_ch8hbgrI6",
  expirationTime: null,
  keys: {
    p256dh:
      "BEMkWbXDuVmY_Gzy8AVW6dY2fyYrPmjke_o6aakgOD2c-ToQPmljHd_KUDnfqQfvCdHqKjBKdAdMXAaLA83pV00",
    auth: "EDtjiaTioN8xLGxXUnzskg",
  },
};
push.sendNotification(sub, "test message");
