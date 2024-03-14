export interface Subject {
  id: string;
  name: string;
  category: string;
}

const dummySubjects: Subject[] = [
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

export default dummySubjects;