export interface Subject {
  id: string;
  name: string;
  category: string;
}
export interface Papers {
  id: string;
  name: string;
  subject: string;
}

export const dummySubjects: Subject[] = [
  // Arts
  {
    id: '1',
    name: 'English Literature',
    category: 'Arts',
  },
  {
    id: '2',
    name: 'History',
    category: 'Arts',
  },
  {
    id: '3',
    name: 'Geography',
    category: 'Arts',
  },
  {
    id: '4',
    name: 'French',
    category: 'Arts',
  },
  // Science
  {
    id: '5',
    name: 'Physics',
    category: 'Science',
  },
  {
    id: '6',
    name: 'Chemistry',
    category: 'Science',
  },
  {
    id: '7',
    name: 'Math',
    category: 'Science',
  },
  {
    id: '8',
    name: 'Biology',
    category: 'Science',
  },
  // Commerce
  {
    id: '9',
    name: 'Accounting',
    category: 'Commerce',
  },
  {
    id: '10',
    name: 'C-Economics',
    category: 'Commerce',
  },
  {
    id: '11',
    name: 'B-Math',
    category: 'Commerce',
  },
  {
    id: '12',
    name: 'Ohada Acounting',
    category: 'Commerce',
  },
  // Add more subjects for Commerce
];

export const dummyPapers: Papers[] = [
  // math
  {
    id: '1',
    name: 'math june 2020',
    subject: 'math',
  },
  {
    id: '2',
    name: 'math june 2021',
    subject: 'math',
  },
  {
    id: '3',
    name: 'math june 2022',
    subject: 'math',
  },
  {
    id: '4',
    name: 'math june 2023',
    subject: 'math',
  },
  // english
  {
    id: '5',
    name: 'english june 2020',
    subject: 'english',
  },
  {
    id: '6',
    name: 'english june 2021',
    subject: 'english',
  },
  {
    id: '7',
    name: 'english june 2022',
    subject: 'english',
  },
  {
    id: '8',
    name: 'english june 2023',
    subject: 'english',
  },
  // french
  {
    id: '9',
    name: 'French june 2020',
    subject: 'french',
  },
  {
    id: '10',
    name: 'French june 2021',
    subject: 'french',
  },
  {
    id: '11',
    name: 'French june 2022',
    subject: 'french',
  },
  {
    id: '12',
    name: 'French june 2023',
    subject: 'french',
  },
  //economics
  {
    id: '13',
    name: 'economics june 2020',
    subject: 'economics',
  },
  {
    id: '14',
    name: 'economics june 2021',
    subject: 'economics',
  },
  {
    id: '15',
    name: 'economics june 2022',
    subject: 'economics',
  },
  {
    id: '16',
    name: 'economics june 2023',
    subject: 'economics',
  },
  // Add more subjects for Commerce
];