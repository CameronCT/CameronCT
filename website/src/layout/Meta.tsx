import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import Config from '@/Config';

type IMetaProps = {
    title: string;
    description?: string;
    canonical?: string;
};

const Meta = (props: IMetaProps) => {
    const router = useRouter();

    const useTitle = `${Config.name} - ${props.title}`;

    return (
      <>
        <Head>
          <meta charSet="UTF-8" key="charset" />
          <meta
              name="viewport"
              content="width=device-width,initial-scale=1"
              key="viewport"
          />
          <link
              rel="apple-touch-icon"
              href={`${router.basePath}/apple-touch-icon.png`}
              key="apple"
          />
          <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href={`${router.basePath}/favicon-32x32.png`}
              key="icon32"
          />
          <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href={`${router.basePath}/favicon-16x16.png`}
              key="icon16"
          />
          <link
              rel="icon"
              href={`${router.basePath}/favicon.ico`}
              key="favicon"
          />
        </Head>
        <NextSeo
            title={useTitle}
            description={String(Config.description)}
            canonical={props.canonical}
            openGraph={{
              title: useTitle,
              description: String(Config.description),
              url: props.canonical,
              locale: 'en',
              site_name: Config.name,
            }}
        />
    </>
  );
};

export { Meta };
