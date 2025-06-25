import fs from 'fs';

console.log('1. Start');

process.nextTick(() => console.log('4. nextTick'));

Promise.resolve().then(() => console.log('3. Promise'));

setTimeout(() => console.log('7. setTimeout'), 0);

setImmediate(() => console.log('5. setImmediate'));

fs.readFile(import.meta.url, () => {
  console.log('6. fs.readFile callback');
});

console.log('2. End');

// process.nextTick() (Virtual Code)
import { fetchUserFromDB } from './db.js';

async function updateUserCache(userId) {
  const user = await fetchUserFromDB(userId);
  
  process.nextTick(() => {
    updateCache(userId, user);
    console.log(`Cache updated for user ${userId}`);
  });

  return user;
}

function updateCache(id, data) {
  // Cache update logic (e.g., Redis)
}

await updateUserCache(123);

// setImmediate (Virtual Code)
import { uploadFile } from './storage.js';

async function handleFileUpload(file) {
  const fileUrl = await uploadFile(file);

  setImmediate(() => {
    sendNotification(`File uploaded: ${fileUrl}`);
  });

  return fileUrl;
}

function sendNotification(message) {
  // Notification logic (e.g., Slack, Email)
  console.log(message);
}

await handleFileUpload('report.pdf');