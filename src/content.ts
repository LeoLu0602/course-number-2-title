interface courseInfo {
  school: string;
  department: string;
  courseNumber: string;
  courseTitle: string;
}

const API: string = 'https://mocki.io/v1/8670d292-1dbb-4063-a74c-6ec9c2c81a81';

const body: HTMLBodyElement = document.querySelector('body') as HTMLBodyElement;

body.addEventListener('dblclick', async (e) => {
  const selectedText: string = (window.getSelection()?.toString() ?? '').trim();

  if (selectedText && !Number.isNaN(Number(selectedText))) {
    const res: courseInfo | null = await convert(
      'The Ohio State University',
      'CSE',
      selectedText
    );

    if (res) {
      console.log('[Course Number 2 Title] res:', res);
    }
  }
});

async function convert(
  school: string,
  department: string,
  courseNumber: string
): Promise<courseInfo | null> {
  try {
    const res: Response = await fetch(API);

    return (await res.json()) as courseInfo | null;
  } catch (err) {
    console.error('[Course Number 2 Title] Error:', err);

    return null;
  }
}
