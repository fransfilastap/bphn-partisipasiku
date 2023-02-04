import { ContentIssue } from '@/types/model';
import IssueCard from '@/components/card/IssueCard';

export default function IssueGrid({ issues }: { issues: ContentIssue[] }) {
  if (issues.length <= 0) {
    return (
      <div className='flex flex-col items-center justify-center w-full p-6 h-[300px]'>
        <p className='text-black dark:text-white text-lg'>
          Tidak ada Isu Hukum untuk query tersebut
        </p>
      </div>
    );
  }

  return (
    <div className='grid w-full grid-cols-1 gap-2 md:gap-8 md:grid-cols-3'>
      {issues.map((e: ContentIssue, i: number) => {
        return (
          <IssueCard
            topic={e.topic}
            cover={{
              placeholder: e.cover.placeholder,
              url: e.cover.coverUrl,
              caption: e.cover.caption,
              altTxt: e.cover.alternativeText,
            }}
            slug={e.slug}
            title={e.title}
            key={e.slug}
          />
        );
      })}
    </div>
  );
}
