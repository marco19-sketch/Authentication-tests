# 🔐 Firebase Authentication Practice

A modern React application demonstrating complete user authentication flow using
Firebase Auth. Users can register, log in, and access a protected dashboard.
Built with Vite for fast development and hot module replacement (HMR).

## 🚀 Features

- ✅ User registration with email & password
- ✅ User login with email & password
- ✅ Protected dashboard (visible only when authenticated)
- ✅ Authentication state management using React Context API
- ✅ Toggle between login and registration forms
- ✅ Firebase Auth integration (ready for emulator support)

## 🛠️ Tech Stack

- **React 19** with Hooks
- **Vite** – build tool and dev server
- **Firebase Auth** – backend authentication service
- **React Context API** – global auth state
- **ESLint** – code linting

## 📦 Installation

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/auth-practice.git
   cd auth-practice
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Firebase setup** (optional if using my config)

- Create a Firebase project at
  [Firebase Console](https://console.firebase.google.com/)
- Enable **Email/Password** authentication
- Replace the `firebaseConfig` in `src/firebase.js` with your own project
  credentials

4.  **Run the development server**

```bash
npm run dev
```

5. **Open your browser at** [http://localhost:5173](http://localhost:5173)

## 🔧 Firebase Emulators (Optional)

The project includes configuration for Firebase Emulators (see `firebase.json`).
To use local emulators:

1.  **Install Firebase CLI:**
    ```bash
    npm install -g firebase-tools
    ```
2.  **Run emulators:**
    ```bash
    firebase emulators:start
    ```
3.  **Uncomment the emulator connection code in** `src/firebase.js`.

## 📁 Project Structure

```text
auth-practice/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, fonts
│   ├── App.jsx          # Main app component (route logic)
│   ├── AuthContext.jsx  # Context definition
│   ├── AuthProvider.jsx # Auth state provider
│   ├── firebase.js      # Firebase initialization
│   ├── LoginPage.jsx    # Login form
│   ├── RegisterPage.jsx # Registration form
│   ├── Dashboard.jsx    # Protected page (post-login)
│   ├── useAuth.js       # Custom hook for auth context
│   └── main.jsx         # App entry point
├── firebase.json        # Emulator config
├── .firebaserc          # Firebase project alias
├── package.json
└── vite.config.js
```

## 🧪 Usage

- **Register** – Click "Non hai un account? Registrati", enter email & password
- **Login** – After registration or directly with existing credentials
- **Dashboard** – Upon successful login, you're redirected to the protected
  dashboard
- **Logout** – (Add a logout button in `Dashboard.jsx` as an exercise)

## 📜 Available Scripts

| Command           | Description                         |
| :---------------- | :---------------------------------- |
| `npm run dev`     | Start Vite dev server (HMR enabled) |
| `npm run build`   | Build for production                |
| `npm run preview` | Preview production build locally    |
| `npm run lint`    | Run ESLint checks                   |


## 🔒 Authentication Flow Explained

1.  **`AuthProvider`**: Wraps the app and initializes the Firebase Auth
    listener.
2.  **`useAuth`**: A custom hook that provides `{ user, loading }` state to any
    component.
3.  **App Logic**: Checks for a user; if the user exists, it shows the
    `Dashboard`, otherwise, it shows the login/register toggle.
4.  **Pages**: `LoginPage` / `RegisterPage` call Firebase authentication methods
    (`signInWithEmailAndPassword`, `createUserWithEmailAndPassword`).

## 🗑️ Environment Variables (Recommended)

Move sensitive Firebase config to a `.env` file:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_APP_ID=your_app_id
```

Then update `firebase.js`

```JavaScript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
};
```

## 🧠 What I Learned / Interview Talking Points

- Managing global auth state with React Context without Redux
- Protecting routes conditionally based on auth status
- Integrating a third-party auth service (Firebase)
- Using Vite's fast refresh for rapid UI iteration
- Structuring a React project for authentication from scratch

## 📄 License

This project is open source and available under the MIT License.

### 🙌 Acknowledgments

Built as part of learning authentication flows in React

Inspired by real-world auth patterns used in production apps

### Happy authenticating! 🔑
