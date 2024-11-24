document.getElementById('fetch-data').addEventListener('click', async () => {
  const output = document.getElementById('data-output');
  output.textContent = 'Загрузка...';

  // Пример получения данных с API
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    output.textContent = `Заголовок: ${data.title}`;
  } catch (error) {
    output.textContent = 'Ошибка загрузки данных.';
  }
});
