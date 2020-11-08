var webPush = require('web-push');
 
const vapidKeys = {
   "publicKey": "BISslrSEJ6XaoAf6VmjxtUTXN8ZAmRfQYZAo7Ym7yWR74S-0cJEQbtODAtUCGfKefeRx5fVfZ0uY-iar3P2y0Wk",
   "privateKey": "4sZAnEc0T-udp7B795quRTpehv-82lcbvhmr5y4ZPB0"
};
 
 
webPush.setVapidDetails(
   'mailto:example@yourdomain.org',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
var pushSubscription = {
   "endpoint": "https://fcm.googleapis.com/fcm/send/cO6CaYnsTO0:APA91bGYbDhlRjAL7ruYfFPZ9eLKgQzt_H6Q0oySrERWLLCXThDO1SxfmHPuLY9IaonCObU2ydXTbwgzR1MEKWbWTJrn2fYAjxmX6BeMkT3UAdHJPYmC3ST_yjgCS2Xg2xmKysobSEsR",
   "keys": {
       "p256dh": "BDLoLZ41an5c50ioQipJBIu+FvV9yZ1meZQe7Z3RfrQVkVegi2EufNbjNmLkybo/FFFdm9xvddFA3fXbq1YSbME=",
       "auth": "lkrmPuKqOlmtNsOwJhTSfw=="
   }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';
 
var options = {
   gcmAPIKey: '78319278976',
   TTL: 60
};
webPush.sendNotification(
   pushSubscription,
   payload,
   options
);