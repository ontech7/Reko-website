import { State } from "@9elt/miniframe";

/**
 * @type {State<null | 0 | string>}
 * 
 * null    = loading api status
 * 0       = api is offline
 * string  = api version
 */
export const version = State.from(null);

/**
 * @type {State<string> & {
*     reload: () => void;
*     set: (route: string) => void;
* }}
*/
export const router = State.from(window.location.pathname + window.location.hash);

/**
 * @type {State<HTMLElement[]>}
 */
export const root = State.from(document.querySelector('#root').childNodes);

/**
 * @type {State<null | -1 | {
*    username: string;
*    saved: { id: number; }[];
* }> & {
*    login: (username: string) => Promise<void>;
*    logout: () => void;
*    saved: State<{ id: number; }[]>;
*    save: (data: any) => void;
*    unsave: (id: any) => void;
*    has: (id: any) => boolean;
* }}
* 
* null  = loading session
* 0     = no session
* {...} = valid session
*/
export const session = State.from(null);
