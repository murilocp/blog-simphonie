import { GetStaticProps, NextPage } from 'next';

import { createClient } from '../../prismicio';

import SEO from 'components/SEO';
import { IBlogProps, PrismicBlogPage } from 'types/Blog';

import { Container } from 'styles/pages/Home';
import { Box, Flex, Input, Stack, Text } from '@chakra-ui/react';

const Home: NextPage<IBlogProps> = ({ pageContent }) => {
  if (!pageContent) {
    return null;
  }

  return (
    <Container>
      <SEO
        title={pageContent.tituloMeta}
        description={pageContent.descricaoMeta}
        image={pageContent.imagemMeta.url}
      />

      <Box paddingY={20} marginX="auto" maxWidth="1180px">
        <Flex marginBottom={6}>
          <Box width="60%" bgImage="/assets/logo.webp">
            <Stack justify="end">
              <Box bgColor="#e0e0e020" padding="16px 24px">
                <Text as="h3">Lorem ipsum dolor</Text>
              </Box>
            </Stack>
          </Box>
          <Box width="35%"></Box>
        </Flex>

        <Flex>
          <Input placeholder="Procurar..." />
        </Flex>
      </Box>
    </Container>
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
