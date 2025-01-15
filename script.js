function toggleReportInput(checkbox) {
    const reportInput = document.getElementById('name2');
    if (checkbox.checked) {
        reportInput.required = true; // Делаем поле обязательным
    } else {
        reportInput.required = false; // Убираем обязательность
        reportInput.value = ''; // Очищаем поле, если чекбокс выключен
    }
}

function toggleSubmitButton() {
    const checkbox = document.getElementById('hasReport');
    const reportInput = document.getElementById('name2');
    const submitButton = document.querySelector('input[type="submit"]');

    // Кнопка всегда активна
    if (checkbox.checked) {
        submitButton.disabled = reportInput.value.trim() === ''; // Проверяем заполненность поля, если чекбокс включён
    } else {
        submitButton.disabled = false; // Кнопка активна, если чекбокс выключен
    }
}

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    const formData = new FormData(event.target);
    const entries = Object.fromEntries(formData.entries());

    // Сохраняем данные в localStorage
    entries.hasReport = document.getElementById('hasReport').checked; // Сохраняем состояние чекбокса
    localStorage.setItem('userData', JSON.stringify(entries));

    // Перенаправляем на страницу с результатами
    window.location.href = 'result.html';
});
