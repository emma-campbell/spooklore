import { LastUpdated } from "@/components/layout/last-updated";
export default function Now() {
  const lastUpdated: Date = new Date("2024/07/09");
  return (
    <section className="flex flex-col space-y-4 text-body">
      <h1 className="text-4xl font-medium text-black">now</h1>
      <p>
        2024 has been a good year so far. I&apos;m currently smack-dab in the
        middle of a cross-state move from Virginia to Indiana. At the time of
        writing this, I am <i>10 days away</i> from key turn-in. My routine,
        respectively, is f*cked.
      </p>
      <p>
        I am definitely running behind on replying to emails, and doing things
        that aren&apos;t related to moving. So if you reach out to me through{" "}
        <i>any of the platforms</i>, you&apos;re gonna have to wait a &apos;lil
        longer than usual.
      </p>
      <LastUpdated date={lastUpdated} />
    </section>
  );
}
