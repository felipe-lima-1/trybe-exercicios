const header = document.getElementById('header-container');
header.style.backgroundColor = 'green';

const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
emergencyTasks.style.backgroundColor = 'lightPink';

const noEmergencyTasks = document.getElementsByClassName('no-emergency-tasks')[0];
noEmergencyTasks.style.backgroundColor = 'rgba(255, 255, 95, 0.87)';

const urgente = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < urgente.length; index += 1) {
    urgente[index].style.backgroundColor = 'purple'
}

const noUrgente = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noUrgente.length; index += 1) {
    noUrgente[index].style.backgroundColor = 'black'
}

const rodape = document.getElementById('footer-container');
rodape.style.backgroundColor = 'rgb(15, 53, 48)';