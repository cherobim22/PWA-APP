let push = require("web-push");

const vapidKeys = {
  publicKey:
    "BHMt9biPRmvq_4HEduy-T2Pe6dBdLDk7JF0DvIIy1RMgy0foiB-Wrp3CSKG3a1gqIFs3bsKHSfT7pQCZ1fLVinQ",
  privateKey: "zbrPxPwcH1sfI75iV5Npum-wBTFfREgs4m-TpHxw-Z4",
};

push.setVapidDetails('mailto:teste@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)

let sun = {};
push.sendNotification(sub,  'test message')

