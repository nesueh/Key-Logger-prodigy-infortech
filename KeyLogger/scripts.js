document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('keylogger');
    const log = [];

    textarea.addEventListener('keydown', (event) => {
        log.push(event.key);
        console.log(log.join(''));
        saveLog(log.join(''));
    });

    function saveLog(data) {
        const blob = new Blob([data], { type: 'text/plain' });
        const anchor = document.createElement('a');
        anchor.href = URL.createObjectURL(blob);
        anchor.download = 'keylog.txt';
        anchor.click();
    }
});
