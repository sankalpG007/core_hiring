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
const scriptURL = 'https://script.google.com/macros/s/AKfycbz1pyPtVGg4syy415fwu1P4fPk3lAM2xCPbZYLaMEK6MCL7c_m_uvKMZpArjAvpEEzczg/exec';
const form = document.getElementById('hiringForm');
const btn = document.getElementById('submitBtn');
const msg = document.getElementById('responseMessage');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    // UI Update
    btn.disabled = true;
    btn.innerHTML = "Submitting... <i class='fas fa-spinner fa-spin'></i>";

    // Use FormData to capture all inputs
    const formData = new FormData(form);

    fetch(scriptURL, { 
        method: 'POST', 
        body: formData,
        mode: 'no-cors' // This prevents the "CORS Error" common with Google Scripts
    })
    .then(() => {
        // Since we use 'no-cors', we assume success if the fetch completes
        msg.innerHTML = "Registration Successful! See you at the drive.";
        msg.style.display = "block";
        msg.style.color = "#22c55e"; // Green color
        form.reset();
        
        // Reset button
        btn.disabled = false;
        btn.innerHTML = "Confirm Registration <i class='fas fa-arrow-right'></i>";
        
        // Hide the experience year field if it was open
        document.getElementById('expYearGroup').classList.add('hidden');
    })
    .catch(error => {
        console.error('Error!', error.message);
        alert("Something went wrong. Please try again.");
        btn.disabled = false;
        btn.innerHTML = "Confirm Registration <i class='fas fa-arrow-right'></i>";
    });
});

const jdData = {
    geon: `
        <h2>Geon Green Energy - Pune</h2>
        <p><strong>Lithium-ion Battery Manufacturing</strong></p>
        <hr>
        <p><strong>Salaries:</strong><br>
        • BE/B.Tech: ₹18,636 In-Hand (OT: ₹191)<br>
        • ITI/Diploma: ₹16,794 In-Hand (OT: ₹177)<br>
        • 10th/12th: ₹15,600 In-Hand (OT: ₹166)</p>
        <p><strong>Benefits:</strong> Canteen, Bus, PF & ESIC included.</p>
    `,
    motherson: `
        <h2>Motherson Group - Noida</h2>
        <p><strong>Role: Assembler / Production Associate</strong></p>
        <hr>
        <p><strong>Salary:</strong> ₹12,800 In-hand + ₹1,500 Bonus (OT: ₹114/hr)</p>
        <p><strong>Eligibility:</strong> 10th & 12th Pass only.</p>
        <p><strong>Benefits:</strong> Transport provided, Canteen food included.</p>
    `,
    benteler: `
        <h2>Benteler - Automotive</h2>
        <p><strong>Revised Stipend (May 2026 Cycle)</strong></p>
        <hr>
        <p><strong>Stipend:</strong><br>
        • BE: ₹19,000 (1st Yr) | ₹20,900 (2nd Yr)<br>
        • ITI/Diploma: ₹18,000 (1st Yr) | ₹19,800 (2nd Yr)</p>
        <p><strong>Retention Bonus:</strong> Up to ₹25,000 based on attendance.</p>
        <p><strong>Benefits:</strong> GMC Insurance (1 Lakh) & GPA (5 Lakh).</p>
    `,
    antolin: `
        <h2>Antolin Lighting Division - Pune</h2>
        <p><strong>NATS Trainee Positions</strong></p>
        <hr>
        <p><strong>Option 1 (Standard):</strong><br>
        • B.Tech: ₹18,000 + ₹1,500 + ₹1,000 Bonus<br>
        • Diploma: ₹16,500 + ₹1,500 + ₹1,000 Bonus</p>
        
        <p><strong>Option 2 (High In-Hand):</strong><br>
        • B.Tech: <strong>₹23,500 In-Hand</strong> (for 26 days)<br>
        • Diploma: <strong>₹20,500 In-Hand</strong> (for 26 days)</p>
        
        <p><strong>Bus Routes:</strong> Chakan, Bhosari, Nigdi, etc.</p>
    `,
    huf: `
        <h2>HUF India - Nanekarwadi MIDC</h2>
        <p><strong>Only Male Candidates | Age Limit: 27</strong></p>
        <hr>
        <p><strong>Stipend Details:</strong><br>
        • Diploma/Graduation (NATS): <strong>₹25,000 Total</strong><br>
        • ITI (NAPS): <strong>₹23,000 Total</strong><br>
        • 10th/12th (NAPS): <strong>₹21,000 Total</strong></p>
        
        <p><strong>Facilities:</strong> Bus & Canteen available (₹850 deduction).</p>
    `,
    flash: `
        <h2>Flash Electronics - Mahalunge</h2>
        <p><strong>Urgently Required | Male Candidates Only</strong></p>
        <hr>
        <p><strong>Salary Breakdown:</strong><br>
        • BE/B.Tech: ₹16,300 In-Hand (Gross: ₹22,566)<br>
        • Diploma: ₹15,000 In-Hand (Gross: ₹20,818)<br>
        • ITI (Electronics/Electrical): 50 Vacancies</p>
        <p><strong>Important:</strong> Interview at 7:00 AM - 8:00 AM. <strong>Sports Shoes are compulsory.</strong></p>
        <p><strong>Facilities:</strong> Bus & Canteen available.</p>
    `,
    aptiv: `
        <h2>Aptiv Components - Chakan</h2>
        <p><strong>Apprenticeship / Trainee (Male & Female)</strong></p>
        <hr>
        <p><strong>Stipend Details:</strong><br>
        • BE/B.Tech: ₹19,100 Per Month<br>
        • Diploma: ₹18,100 Per Month</p>
        <p><strong>Bonuses & OT:</strong><br>
        • Attendance Bonus: <strong>₹4,000</strong> (After 3 months)<br>
        • Overtime (OT): <strong>₹169/hour</strong></p>
        <p><strong>Branches:</strong> Mechanical, Electrical, E&TC.</p>
        <p><strong>Facilities:</strong> Bus, Canteen, and Medical facilities available.</p>
    `

};

function openJD(company) {
    document.getElementById('jdDetails').innerHTML = jdData[company];
    document.getElementById('jdModal').classList.remove('hidden');
}

function closeJD() {
    document.getElementById('jdModal').classList.add('hidden');
}