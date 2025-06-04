function dialogWithUser() {
    alert("Ласкаво просимо до нашого магазину техніки!");

    let userName = prompt("Будь ласка, введіть ваше ім'я:", "");
    if (userName) {
        alert("Привіт, " + userName + "! Ми раді вас бачити.");
    }

    let isConfirmed = confirm("Ви хочете дізнатися більше про наш магазин?");
    if (isConfirmed) {
        alert("Чудово! Ви можете відвідати нас за адресою: вул. Васильківська, 34, Київ.");
    }

    let interests = [];
    let continueAsking = true;
    while (continueAsking) {
        let interest = prompt("Який тип продукту вас цікавить? (наприклад, смартфони, ноутбуки, побутова техніка)", "");
        if (interest) {
            interests.push(interest);
        } else {
            continueAsking = false;
        }
    }

    if (interests.length > 0) {
        alert("Ви цікавитеся такими продуктами: " + interests.join(", "));
    } else {
        alert("Ви не вказали жодного продукту, який вас цікавить.");
    }

    let needMoreInfo = confirm("Чи потрібна вам додаткова інформація?");
    if (needMoreInfo) {
        alert("Ви можете зв'язатися з нами за телефоном або електронною поштою для отримання додаткової інформації.");
    } else {
        alert("Дякуємо за відвідування нашого сайту!");
    }
}
