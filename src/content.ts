interface courseInfo {
  school: string;
  department: string;
  courseNumber: string;
  courseTitle: string;
}

const API: string = 'https://mocki.io/v1/8670d292-1dbb-4063-a74c-6ec9c2c81a81';

const body: HTMLBodyElement = document.querySelector('body') as HTMLBodyElement;
const box: HTMLElement = document.createElement('p');

setUp();

function setUp(): void {
  box.classList.add('box');
  hideBox();
  body.appendChild(box);
  body.addEventListener('dblclick', handleDoubleClick);
  body.addEventListener('click', handleClick);
}

async function handleDoubleClick(e: MouseEvent): Promise<void> {
  const selectedText: string = (window.getSelection()?.toString() ?? '').trim();

  if (selectedText && !Number.isNaN(Number(selectedText))) {
    const res: courseInfo | null = await convert(
      'The Ohio State University',
      'CSE',
      selectedText
    );

    if (res) {
      showBox(res);
    }
  }
}

function handleClick(e: MouseEvent): void {
  if (e.target !== box) {
    hideBox();
  }
}

async function convert(
  school: string,
  department: string,
  courseNumber: string
): Promise<courseInfo | null> {
  try {
    const res: Response = await fetch(
      `${API}?school=${encodeURI(school)}&department=${encodeURI(department)}&courseNumber=${encodeURI(courseNumber)}`
    );

    return (await res.json()) as courseInfo | null;
  } catch (err) {
    console.error('[Course Number 2 Title] Error:', err);

    return null;
  }
}

function showBox({
  school,
  department,
  courseNumber,
  courseTitle,
}: courseInfo): void {
  box.classList.remove('hidden');
  box.textContent = `${department} ${courseNumber} ${courseTitle}`;
  body.appendChild(box);
}

function hideBox(): void {
  box.classList.add('hidden');
  box.textContent = 'Searching...';
}
