import PostHog from 'posthog-react-native'

const rawProjectToken = process.env.EXPO_PUBLIC_POSTHOG_PROJECT_TOKEN
const rawHost = process.env.EXPO_PUBLIC_POSTHOG_HOST
const projectToken = rawProjectToken?.trim()
const host = rawHost?.trim()
const isPostHogConfigured = Boolean(projectToken && projectToken !== 'phc_your_project_token_here' && host)

if (!isPostHogConfigured && __DEV__) {
  const missingVariable = projectToken
    ? 'EXPO_PUBLIC_POSTHOG_HOST'
    : 'EXPO_PUBLIC_POSTHOG_PROJECT_TOKEN'

  console.warn(
    `${missingVariable} variable required by PostHog is missing or un-configured. Analytics will be disabled until it is configured.`,
  )
}

export const posthog = new PostHog(projectToken || 'placeholder_key', {
  ...(host ? { host } : {}),
  disabled: !isPostHogConfigured,
  logs: {
    serviceName: 'recurrly-mobile',
    environment: __DEV__ ? 'development' : 'production',
  },
  captureAppLifecycleEvents: true,
  errorTracking: {
    autocapture: {
      uncaughtExceptions: true,
      unhandledRejections: true,
    },
  },
  preloadFeatureFlags: true,
})

export const posthogLogger = posthog?.logger
