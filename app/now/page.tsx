import { LastUpdated } from "@/components/layout/last-updated";
import { Timeline, TimelineProps } from "@/components/now/timeline";
import { compareDesc } from "date-fns";

const sections: TimelineProps = {
  items: [
    {
      month: 4,
      year: 2024,
      children: [
        <>
          <p>Hiking. Packing. Planning. Life is getting crazy.</p>
          <p>
            I&apos;ve picked up some part time work as a Project Manager to
            bring in some extra 💰. It&apos;s a different kind of challenge, and
            I am definitely enjoying it.
          </p>
        </>,
      ],
    },
    {
      month: 6,
      year: 2024,
      children: [
        <>
          <p>
            I&apos;m currently smack-dab in the middle of a cross-state move
            from Virginia to Indiana. At the time of writing this, I am{" "}
            <i>10 days away</i> from key turn-in. My routine, respectively, is
            f*cked.
          </p>
          <p>
            I am definitely running behind on replying to emails and doing
            things that aren&apos;t related to moving. So if you reach out to me
            through <i>any of the platforms</i>, you&apos;re gonna have to wait
            a &apos;lil longer than usual.
          </p>
        </>,
      ],
    },
    {
      month: 10,
      year: 2024,
      children: [
        <>
          <p>
            I&apos;ve picked up more part time work, and as a result I am
            learning React Native 👀
          </p>
          <p>I&apos;ve also officially left Twitter, because f*ck you Elon.</p>
        </>,
      ],
    },
  ],
};

export default function Now() {
  // "2024/07/21 2:51pm EST"
  const lastUpdated: Date = new Date(2024, 10, 12, 20, 54);

  return (
    <section className="flex flex-col space-y-10 text-body">
      <div>
        <h1 className="font-sans uppercase text-4xl font-medium text-body pb-2">
          What I&apos;m doing now
        </h1>
        <p className="text-md">
          This page is generally updated on a monthly+ cadence and intended to
          represent my focus at the given time.
        </p>
      </div>
      <Timeline
        items={sections.items.sort((a, b) =>
          compareDesc(new Date(a.year, a.month), new Date(b.year, b.month))
        )}
      />
      <LastUpdated date={lastUpdated} />
    </section>
  );
}
