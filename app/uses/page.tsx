import Computer from "public/computer.png";
import Image from "next/image";

export default function Uses() {
  return (
    <>
      <Image src={Computer} alt={"Skeleton hands typing at a computer"} className={"h-48 w-auto"}/>
      <h1 className={"text-black text-4xl tracking-tight pb-3"}>Uses</h1>
      <p className={"text-body"}>
        This is a list of all software, hardware, tools, apps, etc, that I use
        on a daily basis. This is a combination of tools that I use as a
        developer, as well as in my everyday life.
      </p>
      <section id="uses" className="space-y-8 pt-8">
        <section id="hardware" className="space-y-4">
          <h2 className="font-serif text-4xl text-black">Hardware</h2>
          <ol className="list-inside list-disc text-body">
            <li>2021 Apple Macbook Pro M1 Max, 64 GB</li>
            <li>Apple Magic Trackpad</li>
            <li>Massdrop Alt Wired Keyboard</li>
            <li>Caldigit TS3</li>
            <li>Homepod Mini</li>
            <li>Kindle Paperwhite</li>
          </ol>
        </section>

        <section id="software" className="space-y-4">
          <h2 className="font-serif text-4xl text-black">Software</h2>
          <p className={"text-body"}>
            If you&apos;re anything like me, I tend to jump from tool to tool
            trying to find something that&apos;s &ldquo;perfect&rdquo;. Unfortunately, I
            don&apos;t think there will ever be something perfect unless I build
            it myself. Here is what I find myself coming back to.
          </p>
          <ol className="list-inside list-disc text-body">
            <li>
              <b>Text Editor</b> : Visual Studio Code/Neovim
            </li>
            <li>
              <b>Notes</b> : Obsidian/Apple Notes
            </li>
            <li>
              <b>Longform Writing</b> : iA Writer
            </li>
            <li>
              <b>Calendar</b> : Fantastical
            </li>
            <li>
              <b>Cloud Storage</b> : iCloud Drive
            </li>
            <li>
              <b>Password Manager</b> : 1Password
            </li>
            <li>
              <b>Read It Later/RSS</b> : Readwise Reader
            </li>
            <li>
              <b>Music</b> : Apple Music
            </li>
            <li>
              <b>Podcasts</b> : Apple Podcasts
            </li>
            <li>
              <b>Todo</b> : Things 3
            </li>
            <li>
              <b>Spotlight/Launcher</b> : Raycast
            </li>
            <li>
              <b>Communication</b> : Slack/Microsoft Teams
            </li>
            <li>
              <b>Email</b> : Apple Mail
            </li>
          </ol>
        </section>

        <section id="analog" className="space-y-4">
          <h2 className="font-serif text-4xl text-black">Analog</h2>
          <p className={"text-body"}>
            When I am out and about, I tend to carry around a Traveler&apos;s
            journal for jotting down quick notes and ideas.
          </p>
        </section>
      </section>
    </>
  );
}
