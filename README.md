# Recurrly - Subscription Tracker 📱

This is an [Expo](https://expo.dev) project with Clerk authentication for managing your subscriptions.

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Set up environment variables

   Copy `.env.example` to `.env` and replace the placeholder with your Clerk publishable key from the [Clerk Dashboard](https://dashboard.clerk.com/~/api-keys):

   ```bash
   cp .env.example .env
   ```

   Keep `.env` local; do not commit it.

3. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Production builds with EAS

`EXPO_PUBLIC_` variables are included in the client app bundle and are publicly readable. Set the Clerk publishable key in the EAS `production` environment as a plaintext or sensitive environment variable (not a secret):

```bash
eas env:set --name EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY --value YOUR_CLERK_PUBLISHABLE_KEY --environment production --visibility plaintext
```

Set the production build profile in `eas.json` to use the `production` environment, then build with `eas build --platform android --profile production` or `eas build --platform ios --profile production`. Never put Clerk secret keys in client-side environment variables.

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
# react-native-recurrly
