// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	// for dark mode
	interface Window {
		toggleTheme?(): void;
	}

	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}

		// when submits the newsletter superform
		namespace Superforms {
			type Message = {
				type: 'error' | 'success';
				text: string;
			};
		}
	}
}

export {};
