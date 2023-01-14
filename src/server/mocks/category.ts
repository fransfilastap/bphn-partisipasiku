import { IssueCategory } from '@/types';

const mockFetchIssueCategories = (): IssueCategory[] => {
  return [
    {
      id: 1,
      title: 'Naskah Akademik',
      slug: 'naskah-akademik',
      description: 'Naskah akademik',
    },
    {
      id: 2,
      title: 'Prolegnas',
      slug: 'prolegnas',
      description: 'Naskah akademik',
    },
    {
      id: 3,
      title: 'Isu Peraturan',
      slug: 'isu-peraturan',
      description: 'Naskah akademik',
    },
  ];
};

export default mockFetchIssueCategories;
