import * as prismic from '@prismicio/client';
import * as prismicH from '@prismicio/helpers';
import * as prismicNext from '@prismicio/next';

import sm from './sm.json';

export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint);

export const linkResolver: prismicH.LinkResolverFunction = doc => {
  if (doc.type === 'post') {
    return `/blog/${doc.uid}`;
  }

  return '/';
};

export const createClient = (config: prismicNext.CreateClientConfig = {}) => {
  const client = prismic.createClient(sm.apiEndpoint);

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
};
