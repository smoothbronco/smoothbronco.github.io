import { PostType } from '@/types/post';
import { PostBody } from './PostBody';
import { PostHeader } from './PostHeader';

type Props = {
  post: PostType;
};

export const Post: React.FC<Props> = ({ post }) => {
  const { title, date, tags, content } = post;

  return (
    <div className="p-8 bg-primary-1">
      <PostHeader title={title} date={date} tags={tags} />
      <PostBody content={content} />
    </div>
  );
};
