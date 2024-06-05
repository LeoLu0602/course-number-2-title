console.log(`[Course Number 2 Title]`);

const body: HTMLBodyElement = document.querySelector('body') as HTMLBodyElement;

body.addEventListener('dblclick', (e) => {
  const selectedText: string = window.getSelection()?.toString() ?? '';
  const courseNumber: number = Number(selectedText);

  console.log(courseNumber);
});
