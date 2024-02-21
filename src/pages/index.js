import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import PostItems from "@/components/PostItems";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>INKiDEA</title>
      </Head>
      <div className="bg-[#f3f1e6] ">
        <Hero />

        <main className=" py-40  px-[3%] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  gap-6  ">
          <PostItems posts={posts} />
        </main>
      </div>
    </>
  );
}

export async function getStaticProps() {
  try {
    const client = new ApolloClient({
      uri: "https://api-eu-west-2.hygraph.com/v2/clsppk1dw0lao01w98ibhdss8/master",
      cache: new InMemoryCache(),
    });

    const result = await client.query({
      query: gql`
        query Posts {
          posts {
            id
            slug
            title
            categories {
              name
            }
            image {
              url
            }
          }
        }
      `,
    });
   const { data, error } = result || {}
    if (error) {
      console.error("GraphQL Error:", error);
      throw new Error("Error fetching data from GraphQL");
    }

    const posts = data.posts;

    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.error("Error in getStaticProps:", error);

    return {
      props: {
        posts: [],
        error: "Error fetching data",
      },
      revalidate: 10,
    };
  }
}
