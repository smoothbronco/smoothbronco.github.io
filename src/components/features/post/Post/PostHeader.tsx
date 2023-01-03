import { AiTwotoneTags } from 'react-icons/ai';
import { Date } from '@/components/common/Date';
import { Link } from '@/components/common/Link';

type Props = {
  title: string;
  date: string;
  tags: string[];
};

export const PostHeader = ({ title, date, tags }: Props) => {
  return (
    <div className="vstack gap-4">
      <h1 className="text-primary-1 text-3xl md:text-4xl font-bold tracking-tighter leading-tight">
        {title}
      </h1>
      <div className="wrap gap-4">
        <Date date={date} />
        <div className="wrap gap-2">
          <span className="select-none text-primary-1">
            <AiTwotoneTags />
          </span>
          {tags.map((tag) => (
            <Link key={tag} href={`/tags/${tag}`} passHref className="badge">
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
