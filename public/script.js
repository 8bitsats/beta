// script.js
document.getElementById('betaForm').addEventListener('submit', function(event) {
    var walletAddress = document.getElementById('walletAddress').value;
    var email = document.getElementById('email').value;
    
    // Add your validation logic here
    // For example, checking if the wallet address has the correct format
    
    // If validation fails, prevent form submission
    if (!isValidWalletAddress(walletAddress) || !isValidEmail(email)) {
        event.preventDefault();
        alert('Please enter valid information.');
    }
});

function isValidWalletAddress(walletAddress) {
    // Add logic to validate wallet address
    return true; // Placeholder
}

function isValidEmail(email) {
    // Simple email validation
    return /\S+@\S+\.\S+/.test(email);
}
