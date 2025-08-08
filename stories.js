
document.addEventListener('DOMContentLoaded', function() {
    const storyForm = document.getElementById('storyForm');
    const thankyou = document.getElementById('thankyou');
    
    if (storyForm && thankyou) {
        storyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            thankyou.style.display = 'block';
            this.reset();
        });
    }
});
