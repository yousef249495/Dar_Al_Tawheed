import fetchData from './fetchData.js';
import navigateToPage from './navigateToPage.js';

export default async function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.target;  // Get the form element from the event target
    const username = form.username.value.trim();
    const password = form.password.value.trim();

    if (username && password) {
        try {
            const responseData = await fetchData('../json/userAndPass.json');

            // Check if data is loaded
            if (!responseData) {
                showError('Data is still loading. Please wait a moment.', form);
                return;
            }

            // Disable submit button to prevent multiple submissions
            form.querySelector("input[type='submit']").disabled = true;

            // Find account based on the provided username and password
            const account = responseData.find(acc => acc.username === username && acc.password === password);

            if (account) {
                navigateToPage(`../pages/${account.role}`);
            } else {
                showError('Username or password is not correct.', form);
            }
        } catch (error) {
            console.error('Error during authentication:', error);
            showError('An error occurred. Please try again later.', form);
        } finally {
            // Re-enable the submit button after processing
            form.querySelector("input[type='submit']").disabled = false;
        }
    } else {
        showError('Please fill in both username and password.', form);
    }
}

function showError(message, form) {
    const errorMessageElement = form.querySelector('.error-message'); // Get error element within the form
    errorMessageElement.textContent = message;
    errorMessageElement.style.display = 'block';
    errorMessageElement.focus();  // Ensure the error is noticeable for screen readers
}
