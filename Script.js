 function relogio() {
            const agora = new Date();
            const Horas = agora.getHours().toString().padStart(2, '0');
            const minutos = agora.getMinutes().toString().padStart(2, '0');
            const segundos = agora.getSeconds().toString().padStart(2, '0');
            document.getElementById("relogio").textContent = `${Horas}:${minutos}:${segundos}`;
        }
        setInterval(relogio, 1000);
        relogio()

        