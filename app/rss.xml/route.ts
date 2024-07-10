import { Post, allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { Feed } from "feed";
import moment from "moment";

const createFeed = () => {
  const feed = new Feed({
    title: "Emma's Thoughts",
    description: "An RSS feed of all posts from spooklore.com",
    id: "https://spooky.blog",
    link: "https://spooky.blog",
    language: "en",
    image:
      "https://www.spooklore.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fspooklore.e786bb34.png&w=2048&q=75",
    favicon: "",
    copyright: `2022 - ${moment().format("YYYY")}, Emma Campbell`,
    author: {
      name: "Emma Campbell",
      link: "https://spooky.blog",
    },
  });

  allPosts
    .filter((p: Post) => p.status !== "draft")
    .sort((a: Post, b: Post) =>
      compareDesc(new Date(a.published), new Date(b.published)),
    )
    .forEach((p: Post) => {
      const url = `https://spooky.blog/notebook/${p.slug}`;
      feed.addItem({
        id: url,
        link: url,
        title: p.title,
        description: p.description,
        date: moment(p.published).toDate(),
        author: [
          {
            name: "Emma Campbell",
            link: "https://spooky.blog",
          },
        ],
      });
    });

  return feed.rss2();
};

export const GET = () => {
  const feed = createFeed();
  return new Response(feed, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
};
