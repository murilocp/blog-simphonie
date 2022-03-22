import NextLink from 'next/link';

import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react';

import { Divider } from 'styles/components/Header';

import Instagram from 'components/Icons/Instagram';
import Facebook from 'components/Icons/Facebook';

const Header: React.FC = () => {
  return (
    <Box padding={4} bgColor="brand.500">
      <Flex marginX="auto" maxWidth="1180px" align="center">
        <Box marginRight="auto">
          <Image
            src="/assets/logo.webp"
            alt="Simphonie - Logo"
            width="98px"
            height="80px"
          />
        </Box>

        <Box height="100%">
          <Flex height="60px" align="center">
            <List display="flex">
              <ListItem
                marginRight={4}
                color="white"
                _hover={{ color: '#e0e0e0' }}
              >
                <Link>
                  <NextLink href="/">Home</NextLink>
                </Link>
              </ListItem>
              <ListItem
                marginRight={4}
                color="white"
                _hover={{ color: '#e0e0e0' }}
              >
                <Link href="www.simphonie.com.br">Loja Simphonie</Link>
              </ListItem>
            </List>

            <Button>Fale conosco</Button>

            <Divider />

            <Link
              href="https://www.instagram.com/simphonie.brasil/"
              target="_blank"
              marginRight={3}
            >
              <Instagram />
            </Link>

            <Link
              href="https://www.facebook.com/simphonie.brasil"
              target="_blank"
            >
              <Facebook />
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
export default Header;
