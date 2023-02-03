import { ContentIssue } from '@/types/model';
import IssueCard from '@/components/card/IssueCard';

export default function IssueGrid({ issues }: { issues: ContentIssue[] }) {
  return (
    <div className='grid w-full grid-cols-1 gap-2 md:gap-8 md:grid-cols-4'>
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
