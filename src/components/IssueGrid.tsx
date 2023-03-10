import { ContentIssue } from '@/types/model';
import IssueCard from '@/components/card/IssueCard';

export default function IssueGrid({ issues }: { issues: ContentIssue[] }) {
  if (issues.length <= 0) {
    return (
      <div className='flex flex-col items-center justify-center w-full p-6 h-[300px] border border-gray-100 dark:border-gray-600 rounded-md'>
        <p className='text-lg text-zinc-700 dark:text-white'>Tidak ada entry</p>
      </div>
    );
  }

  return (
    <div className='grid w-full grid-cols-1 gap-2 md:gap-8 md:grid-cols-2 lg:grid-cols-4'>
      {issues.map((e: ContentIssue, i: number) => {
        return (
          <IssueCard
            topic={e.topic}
            createdAt={e.createdAt}
            cover={{
              publicId: e.cover.cloudinaryPublicId,
              placeholder: e.cover.placeholder,
              url: e.cover.coverUrl,
              caption: e.cover.caption,
              altTxt: e.cover.alternativeText,
            }}
            priority={i <= 5}
            slug={e.slug}
            title={e.title}
            description={e.description}
            key={e.slug}
          />
        );
      })}
    </div>
  );
}
