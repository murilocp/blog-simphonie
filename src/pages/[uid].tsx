import { FC } from 'react';

import * as prismicH from '@prismicio/helpers';

import { createClient, linkResolver } from '../../prismicio';

import SEO from 'components/SEO';
import { IPostProps, PrismicPostPage } from 'types/Post';

const Post: FC<IPostProps> = ({ pageContent }) => {
  if (pageContent === undefined) {
    return null;
  }
  console.log('not undefined', pageContent);

  return (
    <div>
      <SEO
        title={pageContent.tituloMeta}
        description={pageContent.descricaoMeta}
        image={pageContent.imagemMeta.url}
        isArticle
      />
      <h1>Post</h1>
    </div>
  );
};

export const getStaticProps = async ({ params, previewData }) => {
  const client = createClient({ previewData });

  const post = await client.getByUID<PrismicPostPage>('blog-post', params.uid);

  console.log('post', post);

  return {
    props: {
      pageContent: post.data,
    },
  };
};

export const getStaticPaths = async () => {
  const client = createClient();

  const documents = await client.getAllByType('post');

  return {
    paths: documents.map(doc => prismicH.asLink(doc, linkResolver)),
    fallback: true,
  };
};

export default Post;
