import { Issue } from '@/types';

export const mockFetchIssues = (): Issue[] => {
  setTimeout(() => {
    console.log('simulate latency...');
  }, 30000);
  return [
    {
      id: 1,
      author: 'Kementerian A',
      cover:
        'https://images.unsplash.com/photo-1671748274551-3221f157dd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=30',
      title: 'Naskah Akademik ABC',
      description: 'Lorem ipsum dolor sit amet',
      placeholder: '',
      slug: '',
    },
    {
      id: 2,
      author: 'Kementerian A',
      cover:
        'https://images.unsplash.com/photo-1671748275662-fb4ba29d6e8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1105&q=30',
      title: 'Naskah Akademik ABC',
      description: 'Lorem ipsum dolor sit amet',
      placeholder: '',
      slug: '',
    },
    {
      id: 3,
      author: 'Kementerian A',
      cover:
        'https://images.unsplash.com/photo-1671600493594-edb52f00c6d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1577&q=30',
      title: 'Naskah Akademik ABC',
      description: 'Lorem ipsum dolor sit amet',
      placeholder: '',
      slug: '',
    },
    {
      id: 3,
      author: 'Kementerian A',
      cover:
        'https://images.unsplash.com/photo-1669756117671-0642b96141ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=30',
      title: 'Naskah Akademik ABC',
      description: 'Lorem ipsum dolor sit amet',
      placeholder: '',
      slug: '',
    },
    {
      id: 4,
      author: 'Kementerian A',
      cover:
        'https://images.unsplash.com/photo-1670248012895-1cd8139bf32c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=30',
      title: 'Naskah Akademik ABC',
      description: 'Lorem ipsum dolor sit amet',
      placeholder: '',
      slug: '',
    },
    {
      id: 5,
      author: 'Kementerian A',
      cover:
        'https://images.unsplash.com/photo-1672561842799-35800adeb44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1037&q=30',
      title: 'Naskah Akademik ABC',
      description: 'Lorem ipsum dolor sit amet',
      placeholder: '',
      slug: '',
    },
    {
      id: 6,
      author: 'Kementerian A',
      cover:
        'https://images.unsplash.com/photo-1672312015469-459015b5b97d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=30',
      title: 'Naskah Akademik ABC',
      description: 'Lorem ipsum dolor sit amet',
      placeholder: '',
      slug: '',
    },
  ];
};
