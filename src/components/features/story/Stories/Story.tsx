import { Date } from '@/components/common/Date';
import { Link } from '@/components/common/Link';

type Props = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
};

export const Story = ({ title, date, excerpt, slug }: Props) => {
  return (
    <Link
      href={`/posts/${slug}`}
      className="select-none overflow-hidden w-full h-full vstack md:flex-row cursor-pointer focus:outline-2"
    >
      <div className="md:w-2/3 p-4 md:p-6 vstack gap-2 bg-primary-1">
        <Date date={date} />
        <h3 className="text-primary-1 text-xl font-medium">{title}</h3>
        <p className="text-neutral-700 dark:text-neutral-300 font-normal text-md line-clamp-2 md:line-clamp-3">
          {excerpt}
        </p>
      </div>
    </Link>
  );
};
