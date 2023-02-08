import useCurrentUrl from '@/hooks/useCurrentUrl';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

export function useDiscussionUrl(): string {
  const url = useCurrentUrl();
  const { query } = useRouter();
  const urlWithParams = useMemo(() => {
    return url.replace('[slug]', `${query.slug}`);
  }, [url, query.slug]);

  return urlWithParams;
}
