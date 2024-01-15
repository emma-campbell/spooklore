import HeaderImage from "@/public/the_spooky_supper.png";
import moment from "moment";
import dynamic from "next/dynamic";

const ReadingPreview = dynamic(() => import("@/components/reading-preview"));
const Image = dynamic(() => import('next/image'));

const posts = [
  {
    title: "In 2024... I'm Moving?",
    date: "01-12-2024",
  },
  {
    title: "Managing Imposter Sydrome",
    date: "05-30-2023",
  },
  {
    title: "Azure Functions Changeset Bot",
    date: "01-16-2023",
  },
];

export default function Home() {
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
      <section className="grid grid-cols-5">
        <div className="col-span-2">
          <h1 className="font-serif text-2xl text-[#FFFFFF]">recent posts</h1>
        </div>
        <ul className="font-serif col-span-3">
          {posts.map((p) => (
            <div
              key={p.title}
              className="flex flex-row justify-between space-x-2 transition-all hover:text-[#ffffff]"
            >
              <h4 className="flex-shrink-0">{p.title}</h4>
              <span className="relative border-b-[1px] border-[#D7D7D7] w-full -top-2"></span>
              <p className="flex-shrink-0">
                {moment(p.date).format("MMM DD, YYYY")}
              </p>
            </div>
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
