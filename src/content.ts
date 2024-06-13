interface courseInfo {
  school: string;
  department: string;
  courseNumber: string;
  courseTitle: string;
}

const API: string = 'http://localhost:3001/api/v1/courses';
const body: HTMLBodyElement = document.querySelector('body') as HTMLBodyElement;
const box: HTMLElement = document.createElement('p');

setUp();

function setUp(): void {
  box.classList.add('box');
  body.appendChild(box);
  body.addEventListener('dblclick', handleDoubleClick);
  body.addEventListener('click', handleClick);
  hideBox();
  updateBoxContent('Searching...');
}

async function handleDoubleClick(e: MouseEvent): Promise<void> {
  const selectedText: string = (window.getSelection()?.toString() ?? '').trim();

  if (selectedText && !Number.isNaN(Number(selectedText))) {
    showBox();

    const school: string = 'The Ohio State University';
    const department: string = 'CSE';
    const courseNumber: string = selectedText;
    const courseTitle: string = await search(school, department, selectedText);

    if (courseTitle !== '') {
      updateBoxContent(`${department} ${courseNumber} ${courseTitle}`);
    } else {
      updateBoxContent('Not Found.');
    }
  }
}

function handleClick(e: MouseEvent): void {
  if (e.target !== box) {
    hideBox();
    updateBoxContent('Searching...');
  }
}

async function search(
  school: string,
  department: string,
  courseNumber: string
): Promise<string> {
  try {
    const res: Response = await fetch(
      `${API}?school=${encodeURI(school)}&department=${encodeURI(department)}&courseNumber=${encodeURI(courseNumber)}`
    );

    return (await res.json()).courseTitle;
  } catch (err) {
    console.error('[Course Number 2 Title] Error:', err);

    return '';
  }
}

function showBox(): void {
  box.classList.remove('hidden');
}

function hideBox(): void {
  box.classList.add('hidden');
}

function updateBoxContent(content: string): void {
  box.textContent = content;
}
