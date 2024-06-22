let playerName = prompt("Вітаю у грі! Як тебе звати?");
    alert(`Привіт, ${playerName}! Твоє завдання - перемогти дракона.`);

    let playerHealth = 100;
    let dragonHealth = 100;
    let isGameOver = false;
    let dragonLoot = false

    while (!isGameOver) {
        let playerChoice = prompt("Ти стоїш перед драконом. Що ти будеш робити? (атака/лікування/втеча)");

        if (playerChoice === 'атака') {
            let playerDamage = Math.floor(Math.random() * 20) + 1;
            let dragonDamage = Math.floor(Math.random() * 20) + 1;
            dragonHealth -= playerDamage;
            playerHealth -= dragonDamage;
            alert(`Ти завдав драконові ${playerDamage} шкоди. Дракон завдав тобі ${dragonDamage} шкоди.`);

        } else if (playerChoice=== 'лікування') {
            let healing = Math.floor(Math.random() * 20) + 1;
            playerHealth += healing;
            alert(`Ти вилікувався на ${healing} очок здоров'я.`);

        } else if (playerChoice === 'втеча') {
            alert("Ти втек з поля бою. Гра закінчена.");
            isGameOver = true;
            continue;

        } else {
            alert("Невідома команда");
            continue;
        }

        if (playerHealth <= 0) {
            alert("Ти був переможений драконом. Гра закінчена.");
            isGameOver = true;
        } else if (dragonHealth <= 0) {
            alert("Ти переміг дракона! Вітаю!");
            isGameOver = true;
        let lootChoice = prompt("З дракона випала шкура. Хочеш її продати за 50 монет? (так/ні)");

        if (lootChoice === 'так') {
                playerCoins += 50;
                alert("Ти продав шкуру дракона за 50 монет. Тепер у тебе 50 монет.");
        } else {
                alert("Ти вирішив залишити шкуру дракона собі.");
            }
        }

        alert(`Ваше здоров'я: ${playerHealth} Здоров'я дракона: ${dragonHealth}`);
    }


