document.getElementById("uploadForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var formData = new FormData(this);

    fetch("/upload", {
        method: "POST",
        body: formData
    })
    .then(response => {
        if (response.ok) {
            console.log("File uploaded successfully.");
            // Optionally, you can redirect the user or show a success message here
        } else {
            console.error("Error uploading file.");
            // Handle the error appropriately
        }
    })
    .catch(error => {
        console.error("Error:", error);
        // Handle the error appropriately
    });
});
