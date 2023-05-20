// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	// interface Error {}
	// interface Locals {}
	interface PageData {
		user: SpotifyApi.CurrentUsersProfileResponse | null;
		title?: string;
		color?: string | null;
	}
	// interface Platform {}
}

// Declare the Window interface to include the refreshPromise property
declare interface Window {
	// Promise that represents the refresh action
	refreshPromise: Promise<Response> | null;
}
