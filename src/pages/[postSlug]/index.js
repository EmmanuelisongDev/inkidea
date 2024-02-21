import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { data } from "autoprefixer";
import Head from "next/head";
export default function Post({ post }) {
  const { title, author, body, date, slug, image, categories } = post;
  const cate = categories.map((c) => c.name);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className=" pt-72 pb-40 px-[3%]">
        <header className=" ">
          <h1 className=" mb-3 text-4xl md:text-6xl font-black xl:text-8xl">
            {title}
          </h1>
          <p className=" font-normal mb-2 ">by {author}</p>
        </header>

        <div>
          <img
            src={image.url}
            className="w-full rounded-2xl object-cover h-[90svh]"
            alt="jj"
          />
          <p className=" font-extrabold mt-5">{cate}</p>
          <p className="mt-1">{date}</p>
        </div>

        <article
          dangerouslySetInnerHTML={{ __html: body.html }}
          className="text-xl md:text-2xl lg:text-3xl mt-20"
        />
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  try {
    const client = new ApolloClient({
      uri: process.env.GRAPHL_API_ACCESS,
      cache: new InMemoryCache(),
    });

    const result = await client.query({
      query: gql`
        query SinglePost($slug: String) {
          post(where: { slug: $slug }) {
            body {
              html
            }
            date
            author
            id
            slug
            title
            image {
              url
            }
            categories {
              name
            }
          }
        }
      `,
      variables: {
        slug: params.postSlug,
      },
    });
    const { data, error } = result || {};

    if (error || !data.post) {
      console.error("GraphQL Error:", error);
      return {
        props: {
          error: error?.message || "An error occurred",
        },
      };
    }

    const post = data.post;

    return {
      props: {
        post,
      },
    };
  } catch (error) {
    console.error("Error in getStaticProps:", error);
    return {
      props: {
        error: error.message || "An error occurred",
      },
      revalidate: 10,
    };
  }
}

export async function getStaticPaths() {
  try {
    const client = new ApolloClient({
      uri: process.env.GRAPHL_API_ACCESS,
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

    const { data, error } = result || {};
    if (error || !data.posts || data.posts.length === 0) {
      console.error("GraphQL Error:", error);
      return {
        paths: [],
        fallback: false,
      };
    }

    const paths = data.posts.map((post) => ({
      params: {
        postSlug: post.slug,
      },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error("Error in getStaticPaths:", error);
    return {
      paths: [],
      fallback: false,
    };
  }
}
