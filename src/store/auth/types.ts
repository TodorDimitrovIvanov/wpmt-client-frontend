// Singular Action Type
export const AUTH_START = "AUTH_START";

/**
 * Example with payload:
 * type FetchNotificationsAction = {
 *  type: typeof FETCH_NOTIFICATIONS
 *  payload: Notification[]
 * }
 */

type AuthStartAction = {
  type: typeof AUTH_START;
};

// All definde actions are exported here, as a union type
// Ex: ActionTypes = AuthStart | AuthSuccess | AuthFail
export type AuthActionTypes = AuthStartAction;
