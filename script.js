function toggleReportInput(checkbox) {
    const reportInput = document.getElementById('name2');
    if (checkbox.checked) {
        reportInput.disabled = false; // Включаем поле ввода, если чекбокс включен
        reportInput.required = true; // Делаем поле обязательным
    } else {
        reportInput.disabled = true; // Отключаем поле ввода, если чекбокс выключен
        reportInput.required = false; // Убираем обязательность
        reportInput.value = ''; // Очищаем поле, если чекбокс выключен
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
