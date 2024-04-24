import Andrea from "@/public/andrea.jpeg";
import Crew from "@/public/crew.jpeg";
import Moose from "@/public/moose.jpg";
import Portrait from "@/public/profile.jpeg";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Image
        src={Portrait}
        alt={"Photo of Emma"}
        className={"h-48 w-auto rounded-sm"}
        placeholder="blur"
      />
      <section className="flex flex-col text-body pt-4 space-y-2">
        <p>
          Hey 👋 It&apos;s Emma (<i>she/any</i>). You made it to the page
          that&apos;s about me. I feel weird writing this. Seems sorta conceited
          to write about yourself. Anyways, I&apos;ll give it a whirl.
        </p>
        <p>
          I&apos;m originally from Columbus, OH, and currently live in
          Washington, D.C with my partner and my dog. I had a quick pit-stop in
          Rochester, NY where I attended the University of Rochester to get my
          Bachelor&apos;s degree in Computer Science.
        </p>
        <p>
          I&apos;m a software engineer by day, and by night I&apos;m taking on
          all of the ADHD side quests my mind can hyperfixate on. I&apos;ve
          recently been learning to sew and in the past I&apos;ve built
          mechanical keyboards, refurbished Gameboys, and learned to play the
          guitar.
        </p>
        <p>
          I don&apos;t know my right from my left. No, seriously. I understand
          the concept, but if you tell me to go right I will go left. I&apos;ve
          seriously considered getting &ldquo;R&rdquo; and &ldquo;L&rdquo;
          tattooed on my hands because when I hold my hands in the shape of an
          L, they both look correct.
        </p>
        <p>
          I love the Columbus Crew, and soccer in general. It consumes my
          weekends. I recently got to watch the Crew win their third cup live
          and it&apos;s one of my favorite memories. I love sports in general,
          and believe that they&apos;re a great way to teach kids how to work
          together.
        </p>
        <p>
          I am odd and somewhat introverted. I hate small talk, and prefer to
          talk about things that matter. At social gatherings, I tend to
          befriend the dog.
        </p>
        <p>
          Anyways, that&apos;s that&apos;s a pretty good overview and should
          give you a good idea about who I am as a human. If you want to get in
          touch, you{" "}
          <a
            href={"to:hello@spooklore.com"}
            className={"text-highlighted underline"}
          >
            can email me
          </a>
          .
        </p>
      </section>
      <section className="grid grid-cols-3 pt-8 gap-4 [&_img]:rounded-sm">
        <Image
          priority
          src={Crew}
          placeholder="blur"
          alt="columbus crew tifo"
        />
        <Image
          priority
          src={Andrea}
          placeholder="blur"
          alt="Andrea and I on ATVs"
        />
        <Image priority src={Moose} placeholder="blur" alt="My dog Moose" />
      </section>
    </>
  );
}
