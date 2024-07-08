document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript loaded");
    const deleteButtons = document.querySelectorAll('.delete-button');
    deleteButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            if (!confirm("Are you sure you want to delete this post?")) {
                e.preventDefault();
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript loaded");
    const updateButtons = document.querySelectorAll('.update-button');
    updateButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            if (!confirm("Are you sure you want to Update or Modify this post?")) {
                e.preventDefault();
            }
        });
    });
});
