
        const startBtn = document.querySelector('[data-start]');
        const stopBtn = document.querySelector('[data-stop]');
        let timerId = null;

        function getRandomHexColor() {
            return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
        }

        startBtn.addEventListener("click", () => {
            if (!timerId) {
                startBtn.disabled = true;
                stopBtn.disabled = false;
                timerId = setInterval(() => {
                    document.body.style.backgroundColor = getRandomHexColor();
                }, 1000);
            }
        });

        stopBtn.addEventListener("click", () => {
            if (timerId) {
                startBtn.disabled = false;
                stopBtn.disabled = true;
                clearInterval(timerId);
                timerId = null;
            }
        });

    