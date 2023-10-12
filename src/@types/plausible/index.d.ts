type Options = {
	cb?: () => void;
	props?: Record<string, string | number | undefined | null>;
};

interface Window {
	plausible: (event: string, options?: Options) => void;
	/**
	 * Track Custom event goals using Plausible
	 *
	 * ⚠️ This function is not really implemented in our codebase.
	 * This is just an example of how to use TypeScript types.
	 *
	 * @see https://plausible.io/docs/custom-event-goals
	 *
	 * @example
	 * registerForm.addEventListener('submit', function(e) {
	 *   e.preventDefault();
	 *   setTimeout(submitForm, 1000);
	 *   var formSubmitted = false;
	 *
	 *   function submitForm() {
	 *     if (!formSubmitted) {
	 *       formSubmitted = true;
	 *       registerForm.submit();
	 *     }
	 *   }
	 *
	 *   plausible('Signup', {callback: submitForm});
	 * })
	 */
}
