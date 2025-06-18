'use client';

import { Auth0Provider } from '@auth0/auth0-react';
import { ReactNode } from 'react';

interface Auth0ProviderWrapperProps {
  children: ReactNode;
}

export default function Auth0ProviderWrapper({ children }: Auth0ProviderWrapperProps) {
  // Get the current URL for dynamic callback
  const redirectUri = typeof window !== 'undefined' 
    ? window.location.origin 
    : process.env.NEXT_PUBLIC_AUTH0_CALLBACK_URL || 'http://localhost:3000';

  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN || 'dev-i2apb6eb10f1hjbz.us.auth0.com'}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID || 'acEffu8mcq8TsvJ3fyYnCkXwqjotjErU'}
      authorizationParams={{
        redirect_uri: redirectUri,
        audience: 'https://dev-i2apb6eb10f1hjbz.us.auth0.com/api/v2/',
        scope: 'openid profile email'
      }}
    >
      {children}
    </Auth0Provider>
  );
} 