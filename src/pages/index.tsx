import { Home } from '@/components/pages/home';
import { getAllPosts } from '@/lib/api';

type Props = React.ComponentPropsWithoutRef<typeof Home>;

const View: React.FC<Props> = (props: Props) => <Home {...props} />;

export default View;

export const getStaticProps = async () => {
  const posts = getAllPosts(['title', 'date', 'slug', 'excerpt']).slice(0, 4);

  return {
    props: { posts },
  };
};
