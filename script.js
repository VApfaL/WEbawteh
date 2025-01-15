document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    const formData = new FormData(event.target);
    const entries = Object.fromEntries(formData.entries());

    // Сохраняем данные в localStorage
    entries.hasReport = document.getElementById('hasReport').checked; // Сохраняем состояние чекбокса
    localStorage.setItem('userData', JSON.stringify(entries));

    // Перенаправляем на страницу с результатами
    window.location.href = 'result.html';
})

function toggleReportInput(checkbox) {
    var input = document.getElementById('name2');
    if (checkbox.checked) {
        input.disabled = false;
        input.required = true; // Делаем поле обязательным
        input.focus();
    } else {
        input.disabled = true;
        input.required = false; // Убираем обязательность
        input.value = ""; // Очищаем поле при отключении
    }
}