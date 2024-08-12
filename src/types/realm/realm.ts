/**
 * Interface representing the response for fetching an access token.
 */
export interface AccessTokenResponse {
  access_token?: string;
}

/**
 * Interface representing the response for connected realm data.
 */
export interface ConnectedRealmResponse {
  connected_realm?: {
    href: string;
  };
}

/**
 * Interface representing data for a realm.
 */
export interface RealmData {
  id: number;
  slug: string;
  name: string;
  connectedRealms?: string[];
  language: string;
}
