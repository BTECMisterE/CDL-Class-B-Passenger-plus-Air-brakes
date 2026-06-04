# Enable Cloud Sync (Firebase) — ~5 minutes, free

Cloud sync lets your progress merge automatically across your phone and computer.
The app already has all the code; it just needs a free Firebase project's config.

## Step 1 — Create a Firebase project
1. Go to https://console.firebase.google.com/ and sign in with your Google account.
2. Click **Add project** (or **Create a project**).
3. Name it anything, e.g. `cdl-study`. Click **Continue**.
4. You can **turn OFF Google Analytics** (not needed). Click **Create project**, then **Continue**.

## Step 2 — Create the database (Firestore)
1. In the left menu, open **Build → Firestore Database**.
2. Click **Create database**.
3. Choose a location near you, click **Next**.
4. Pick **Start in test mode** for now, click **Enable**.
5. After it loads, open the **Rules** tab and paste the rules below, then click **Publish**:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Personal CDL study app — allow read/write only to the progress collection.
    match /cdl_progress/{docId} {
      allow read, write: if true;
    }
  }
}
```
> Note: this lets anyone who knows your exact Sync Code read/write that one record.
> For a personal study app that's fine — just pick a non-obvious Sync Code.

## Step 3 — Get your web config
1. Click the **gear icon ⚙️ → Project settings** (top-left).
2. Scroll to **Your apps** and click the **web icon `</>`**.
3. Give it a nickname (e.g. `cdl-web`), click **Register app**.
   (You do NOT need Firebase Hosting — skip that.)
4. You'll see a `firebaseConfig` block like this:

```js
const firebaseConfig = {
  apiKey: "AIza........",
  authDomain: "cdl-study.firebaseapp.com",
  projectId: "cdl-study",
  storageBucket: "cdl-study.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef123456"
};
```

## Step 4 — Give it to Claude
Copy that whole `firebaseConfig = { ... }` block and paste it back in chat.
Claude will insert it into `index.html` (the `FIREBASE_CONFIG = null` line) and sync will turn on.

## Step 5 — Turn on sync on each device
1. Open the app, tap the **"Local only"** pill (top-right) → enter a **Sync Code**
   (e.g. `kelly-cdl-2026`). Use the SAME code on your phone and computer.
2. That's it — progress merges automatically from then on.
