// Toggle Experience Years field
const expSelect = document.getElementById('expSelect');
const expYearGroup = document.getElementById('expYearGroup');

expSelect.addEventListener('change', () => {
    if (expSelect.value === 'Experienced') {
        expYearGroup.classList.remove('hidden');
    } else {
        expYearGroup.classList.add('hidden');
    }
});

// Form Submission to Google Sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycby3vRAqpam8kvq-37clztUNI73hJ7FPO5lIo9RVW4SC2kuVwkjtidA2aA8DqRhmuMKj-w/exec';
const form = document.getElementById('hiringForm');
const btn = document.getElementById('submitBtn');
const msg = document.getElementById('responseMessage');

form.addEventListener('submit', e => {
    e.preventDefault();
    btn.disabled = true;
    btn.innerText = "Submitting...";

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Application Sent Successfully!";
            msg.className = "success";
            form.reset();
            btn.disabled = false;
            btn.innerText = "Submit Application";
        })
        .catch(error => {
            console.error('Error!', error.message);
            btn.disabled = false;
            btn.innerText = "Submit Application";
        });
});