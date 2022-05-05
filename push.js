let push = require("web-push");

function log(sub) {
  console.log({sub});
}

const vapidKeys = {
  publicKey:
    "BHMt9biPRmvq_4HEduy-T2Pe6dBdLDk7JF0DvIIy1RMgy0foiB-Wrp3CSKG3a1gqIFs3bsKHSfT7pQCZ1fLVinQ",
  privateKey: "zbrPxPwcH1sfI75iV5Npum-wBTFfREgs4m-TpHxw-Z4",
};

push.setVapidDetails(
  "mailto:cherobim22@gmail.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

let sub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/f43v3ZionQ4:APA91bFRNqKIFMEb1FLuLmeqQxxktAqL_E8leJxcMOYH3n2HfQqKyGZGnnrAVp_ASJfi0lzmfPoJgAym0lH9092IMOvQ0mLKtRZVgVv2KGYkYMU8estXdaFHUZyksJrNhhShPKqpJsH4",
  expirationTime: null,
  keys: {
    p256dh:
      "BJFtBhgeGdNDDn1A1Wn0yk3f_tlKJ__CbtWjMZJXoXzRM0Sn9BmCjQojVxuuGcDaD5nSYft01680Rm7bW2THNwc",
    auth: "AexcPLy9wBzZuJ_6PVPALQ",
  },
};
push.sendNotification(sub, "test message");
log(sub)
