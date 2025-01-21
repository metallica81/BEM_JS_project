// Скачивание файлов
function downloadFiles() {
    const files = [
        'assets/docs/act.xls',
        'assets/docs/alum.docx',
        'assets/docs/prihod.docx'
    ];

    files.forEach(file => {
        const link = document.createElement('a');
        link.href = file;
        link.download = file.split('/').pop(); // Установить имя файла
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}