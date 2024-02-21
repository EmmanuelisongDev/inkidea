import Link from "next/link";

export default function PostItems({ posts }) {
  return (
    <>
      {posts.map((post) => {
        const category = post.categories.map((c) => c.name);
        return (
          <div key={post.id}>
            <Link href={`/${post.slug}`}>
              <div className=" overflow-hidden  rounded-2xl w-full">
                <img
                  className="w-full hover:scale-105 transition-all ease-in-out  duration-300 delay-100 object-cover h-[50svh]"
                  width={post.image.width}
                  height={post.image.height}
                  src={post.image.url}
                  fill={true}
                  alt="image"
                />
              </div>
            </Link>
            <div className=" mt-2">
              <p className="  text-xs md:text-sm lg:text-base font-normal">
                {category}
              </p>
              <h1 className="text-lg font-bold md:text-xl lg:text-2xl">
                {post.title}
              </h1>
            </div>
          </div>
        );
      })}
    </>
  );
}
