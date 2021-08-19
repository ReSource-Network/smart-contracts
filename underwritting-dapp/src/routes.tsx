import { Box, BoxProps } from "@chakra-ui/react"
import React, { useCallback, useEffect } from "react"
import { Redirect, Route, Switch, useLocation } from "react-router-dom"
import { useAnalytics } from "use-analytics"
import { BugReport } from "./components/BugReport"
import { ChatContainer } from "./components/chat/ChatContainer"
import { Feedback } from "./components/Feedback"
import { footerHeight, headerHeight } from "./components/navigation/foundations"
import ProtectedRoute from "./components/ProtectedRoute"
import { AmbassadorPage } from "./pages/ambassador"
import { RequestResetPassword, RecoverAccount } from "./pages/auth/components/forgot"
import { Invite } from "./pages/auth/components/invite/Invite"
import { Login } from "./pages/auth/components/login"
import { OTP } from "./pages/auth/components/otp/OTP"
import { Register } from "./pages/auth/components/register"
import Marketplace from "./pages/marketplace/Marketplace"
import { OfferingPage } from "./pages/marketplace/OfferingPage"
import { OnboardingPage } from "./pages/onboarding/OnboardingPage"
import { SettingsPage } from "./pages/settings/SettingsPage"
import { StorefrontPage } from "./pages/storefront/StorefrontPage"
import WalletRouter from "./pages/wallet/WalletRouter"
import { useEmailNotVerified, useIsSignedIn, useOnboardingIsIncomplete } from "./utils/auth"
import { useHandleContext } from "./utils/urlContext"

const Routes = () => {
  const { page } = useAnalytics()
  const location = useLocation()
  const setContext = useHandleContext()
  const { value: signedIn } = useIsSignedIn()
  const { value: onboardingIncomplete } = useOnboardingIsIncomplete()
  const { value: emailNotVerified, email } = useEmailNotVerified()

  const pageStyles = usePageStyles(location.pathname)

  useEffect(() => {
    setContext()
  }, [])

  useEffect(() => {
    page()
  }, [location, page])

  return (
    <Box {...pageStyles}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/otp" component={OTP} />
        <Route exact path="/request-reset-password" component={RequestResetPassword} />
        <Route exact path="/recover" component={RecoverAccount} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/register/surrogate" component={Register} />
        <Route exact path="/invite" component={Invite} />
        <ProtectedRoute exact path="/ambassador/:handle" component={AmbassadorPage} />

        {emailNotVerified && email && (
          <Redirect to={{ pathname: `/otp`, search: `email=${email}` }} />
        )}

        <Route path="/marketplace" component={Marketplace} />
        <Route exact path="/feedback" component={Feedback} />
        <Route exact path="/report" component={BugReport} />

        <ProtectedRoute exact path="/onboarding" component={OnboardingPage} />
        {onboardingIncomplete && email && <Redirect to={{ pathname: "/onboarding" }} />}

        <ProtectedRoute path="/wallet" component={WalletRouter} />
        <ProtectedRoute exact path="/chat" component={ChatContainer} />
        <ProtectedRoute exact path="/settings" component={SettingsPage} />
        <Route exact path="/:handle" component={StorefrontPage} />
        <Route exact path="/:handle/listing/:offeringId" component={OfferingPage} />

        <Redirect to={{ pathname: signedIn ? "/marketplace" : "/login" }} />
      </Switch>
    </Box>
  )
}

const usePageStyles = (path: string): BoxProps => {
  const pageStyles = useCallback(
    (path): BoxProps => ({
      position: "absolute",
      top: headerHeight,
      bottom: {
        base: path !== "/onboarding" ? footerHeight : 0,
        md: 0,
      },
      w: "100vw",
      overflow: "auto",
      overflowX: "hidden",
    }),
    [],
  )
  return pageStyles(path)
}
export default Routes
