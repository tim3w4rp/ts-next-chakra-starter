import { Box, Code, Flex, Heading, Link, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import NextLink from 'next/link'

const Home: NextPage = () => {
  return (
    <Box p="0 2rem">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        as="main"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        minH={'100vh'}
        alignContent="center"
      >
        <Heading as="h1" size="2xl" mb="2">
          Welcome to{' '}
          <NextLink href="https://nextjs.org" passHref>
            <Link color="blue.500">Next.js!</Link>
          </NextLink>
        </Heading>

        <Text>
          Get started by editing <Code>pages/index.tsx</Code>
        </Text>

        <Flex
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
          maxW="800px"
          mt="10"
        >
          <Box
            as="a"
            href="https://nextjs.org/docs"
            p="6"
            m="4"
            borderWidth="1px"
            rounded="lg"
            flexBasis="45%"
            _hover={{ color: 'blue.500', borderColor: 'blue.500' }}
          >
            <Heading fontWeight="light" size="lg" mb="6">
              Documentation &rarr;
            </Heading>
            <Text fontSize="lg">
              Find in-depth information about Next.js features and API.
            </Text>
          </Box>

          <Box
            as="a"
            href="https://nextjs.org/learn"
            p="6"
            m="4"
            borderWidth="1px"
            rounded="lg"
            flexBasis="45%"
            _hover={{ color: 'blue.500', borderColor: 'blue.500' }}
          >
            <Heading fontWeight="light" size="lg" mb="6">
              Learn &rarr;
            </Heading>
            <Text fontSize="lg">
              Learn about Next.js in an interactive course with quizzes!
            </Text>
          </Box>

          <Box
            as="a"
            href="https://github.com/vercel/next.js/tree/canary/examples"
            p="6"
            m="4"
            borderWidth="1px"
            rounded="lg"
            flexBasis="45%"
            _hover={{ color: 'blue.500', borderColor: 'blue.500' }}
          >
            <Heading fontWeight="light" size="lg" mb="6">
              Examples &rarr;
            </Heading>
            <Text fontSize="lg">
              Discover and deploy boilerplate example Next.js projects.
            </Text>
          </Box>

          <Box
            as="a"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            p="6"
            m="4"
            borderWidth="1px"
            rounded="lg"
            flexBasis="45%"
            _hover={{ color: 'blue.500', borderColor: 'blue.500' }}
          >
            <Heading fontWeight="light" size="lg" mb="6">
              Deploy &rarr;
            </Heading>
            <Text fontSize="lg">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </Text>
          </Box>
        </Flex>
      </Box>

      <Box
        as="footer"
        display="flex"
        p="2rem"
        borderTop="1px"
        borderColor="gray.400"
        justifyContent="center"
      >
        <Box
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          as="a"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Box as="p" style={{ fontSize: 100 }}></Box>
          Powered by
          <Box as="span" ml="0.5rem">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Home
