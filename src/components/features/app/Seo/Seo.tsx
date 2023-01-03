import { DefaultSeo } from 'next-seo';
import { ROOT_URL } from '@/config/app';
import { useRootPath } from '@/hooks/useRootPath';
import { joinPath } from '@/lib/joinPath';

export const Seo = () => {
  const rootPath = useRootPath();
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
        additionalLinkTags={[
          { rel: 'icon', href: `${rootPath}/favicon.ico` },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: `${rootPath}/favicon-16x16.png`,
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: `${rootPath}/favicons/favicon-32x32.png`,
          },
          {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: `${rootPath}/favicons/apple-touch-icon-180x180.png`,
          },
          {
            rel: 'mask-icon',
            href: `${rootPath}/favicons/safari-pinned-tab.svg`,
            color: '#5bbad5',
          },
        ]}
      />
    </>
  );
};
