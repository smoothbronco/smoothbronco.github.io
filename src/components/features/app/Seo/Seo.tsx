import { DefaultSeo } from 'next-seo';
import { ROOT_URL } from '@/config/app';
import { joinPath } from '@/lib/joinPath';

export const Seo = () => {
  const imageURL = joinPath(ROOT_URL, '/assets/author.png');

  return (
    <>
      <DefaultSeo
        defaultTitle="smoothbronco's blog"
        description="大学生のエンジニアブログ"
        openGraph={{
          type: 'website',
          title: "smoothbronco's blog",
          description: '大学生のエンジニアブログ',
          site_name: "smoothbronco's blog",
          url: ROOT_URL,
          images: [
            {
              url: imageURL,
              width: 512,
              height: 512,
              alt: 'Og Image Alt',
              type: 'image/png',
            },
          ],
        }}
        twitter={{
          handle: '@smoothbronco',
          site: "smoothbronco's blog",
          cardType: 'summary_large_image',
        }}
      />
    </>
  );
};
