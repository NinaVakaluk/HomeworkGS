const temperature=Number.parseInt(prompt("Введите температуру в градусах Цельсия :"));
alert(`Цельсий: ${temperature}, Фаренгейт: ${((9 / 5) * temperature + 32).toFixed(1)}`);

