// Add an event listener to the button for checking the palindrome
document.getElementById('check-btn').addEventListener('click', function() {
    // Get the value of the input field and trim any extra spaces
    const inputText = document.getElementById('text-input').value.trim();
    const resultElement = document.getElementById('result');

    // Check if the input is empty
    if (!inputText) {
        alert("Please input a value"); // Show alert if no input
        return; // Stop the function
    }

    // Function to clean the input and check for palindrome
    function isPalindrome(text) {
        // Remove non-alphanumeric characters and convert to lowercase
        const cleanedText = text.replace(/[^a-z0-9]/gi, '').toLowerCase();
        // Reverse the cleaned text
        const reversedText = cleanedText.split('').reverse().join('');
        // Return true if cleaned text is the same as reversed text
        return cleanedText === reversedText;
    }

    // Check if the input is a palindrome
    const palindromeCheck = isPalindrome(inputText);

    // Capitalize the first letter of the result
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // Display the result message
    if (palindromeCheck) {
        resultElement.textContent = capitalizeFirstLetter(inputText) + " is a palindrome";
    } else {
        resultElement.textContent = capitalizeFirstLetter(inputText) + " is not a palindrome";
    }
});
