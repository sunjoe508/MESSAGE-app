const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 100);

function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeDifference < 0) {
        document.getElementById('countdown').innerHTML = 'Challenge Completed!';
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();
