function compareStrings() {
    let string1 = prompt("Будь ласка, введіть перший рядок:");
    let string2 = prompt("Будь ласка, введіть другий рядок:");

    if (string1 && string2) {
        if (string1.length > string2.length) {
            alert("Перший рядок більший: " + string1);
        } else if (string2.length > string1.length) {
            alert("Другий рядок більший: " + string2);
        } else {
            alert("Обидва рядки однакової довжини.");
        }
    } else {
        alert("Ви не ввели один або обидва рядки.");
    }
}
