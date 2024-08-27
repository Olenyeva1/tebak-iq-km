function submitName() {
    const name = document.getElementById('nameInput').value.trim();
    if (name) {
        document.getElementById('nameForm').style.display = 'none';
        document.getElementById('iqSection').style.display = 'block';
    } else {
        alert('Silakan masukkan nama Anda.');
    }
}

function generateIQ() {
    let iq;
    let random = Math.random(); // Generates a random number between 0 and 1

    if (random < 0.75) { // 75% probability for 1-100
        iq = Math.floor(Math.random() * 100) + 1;
    } else { // 25% probability for 101-300
        iq = Math.floor(Math.random() * 200) + 101;
    }

    let description;

    if (iq <= 50) {
        description = "Tolol Banget";
    } else if (iq <= 100) {
        description = "Tolol";
    } else if (iq <= 200) {
        description = "Pinter";
    } else {
        description = "Pinter Bangetttt";
    }

    document.getElementById('result').innerHTML = `IQ Kamu: ${iq} - ${description}`;
    
    // Disable the button after it's clicked
    document.querySelector('#iqSection button').disabled = true;
    document.querySelector('#iqSection button').textContent = 'IQ Sudah Ditebak';
}