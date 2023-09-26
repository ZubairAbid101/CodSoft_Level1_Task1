const tween = KUTE.fromTo(
    "#blob-1",
    {path: "#blob-1"},
    {path: "#blob-2"},
    {repeat: 999, duration: 2000, yoyo: true}
)

tween.start()

var emailElement = document.createElement('textarea');
        emailElement.value = 'zubairabid54@gmail.com';
        emailElement.style.position = 'absolute';
        emailElement.style.left = '-9999px';

        // Add the email element to the document
        document.body.appendChild(emailElement);

        // Add a click event listener to the link
        document.getElementById('copyEmail').addEventListener('click', function () {
            // Select the email address text
            emailElement.select();

            // Alert the user that the email address has been copied (you can use a more user-friendly notification)
            alert('Email address copied to clipboard: ' + emailElement.value);
        });