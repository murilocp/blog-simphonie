import { FC } from 'react';
import { GetStaticProps } from 'next';

import { createClient } from '../../prismicio';

import SEO from '../components/SEO';
import { IBlogProps, PrismicBlogPage } from 'types/Blog';

const Home: FC<IBlogProps> = ({ pageContent }) => {
  if (!pageContent) {
    return null;
  }

  console.log(pageContent);

  return (
    <div>
      <SEO
        title={pageContent.tituloMeta}
        description={pageContent.descricaoMeta}
        image={pageContent.imagemMeta.url}
      />

      <h1>Blog</h1>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async context => {
  const client = createClient({ ...context });

  let blogHome = null;
  try {
    blogHome = await client.getSingle<PrismicBlogPage>('blog-home', {
      fetchLinks: [
        'blog-post.titulo',
        'blog-post.conteudo',
        'blog-post.imagem',
      ],
    });
  } catch {
    // TODO
  }

  console.log('blogHome', blogHome);

  return {
    props: { pageContent: blogHome.data },
  };
};

export default Home;
