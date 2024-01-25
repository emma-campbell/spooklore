import { allPosts } from "@/.contentlayer/generated";
import { PostPreview } from "@/components/posts/post-preview";
import HeaderImage from "@/public/the_spooky_supper.png";
import moment from "moment";
import dynamic from "next/dynamic";
import Link from "next/link";

const ReadingPreview = dynamic(() => import("@/components/reading-preview"));
const Image = dynamic(() => import("next/image"));

function getPosts() {
  return allPosts
    .sort((a, b) => {
      return moment(b.published).unix() - moment(a.published).unix();
    })
    .slice(0, 3);
}

export default function Home() {
  const posts = getPosts();

  return (
    <div className="space-y-12">
      <section className="flex content-center">
        <Image
          src={HeaderImage}
          alt="skeletons gathered around a dinner table"
          priority={true}
          placeholder="blur"
          className="rounded-lg py-8"
        />
      </section>
      <section className="sm:grid sm:grid-cols-5 flex flex-col">
        <div className="col-span-2">
          <h1 className="font-serif text-2xl text-[#FFFFFF]">recent posts</h1>
        </div>
        <ul className="font-serif col-span-3">
          {posts.map((p) => (
            <PostPreview key={p.slug} post={p} />
          ))}
        </ul>
      </section>
      <section className="grid grid-cols-5">
        <div className="col-span-2">
          <h1 className="font-serif text-2xl text-[#FFFFFF]">
            currently reading
          </h1>
        </div>
        <div className="col-span-3">
          <ReadingPreview />
        </div>
      </section>
    </div>
  );
}
