import dbIcon from "./db.png";
import discordLogo from "./discord-mark.svg";
import githubLogo from "./github-mark.svg";

type Props = {};

export default function WebsiteHeader(props: Props) {
  const {} = props;

  return (
    <div className="flex flex-row flex-nowrap items-center gap-4 border border-b-neutral-300 px-4 py-2">
      <img src={dbIcon} alt="Deathbot Orb" className="h-6 w-6" />
      <div className="text-xl">
        endless ages <strong>db</strong>
      </div>
      <div className="flex-grow" />
      <div className="group relative flex">
        <a href="https://discord.gg/25WgUUURmV">
          <img src={discordLogo} alt="EA Server Discord" className="h-6 w-6" />
        </a>
        <span className="absolute left-1/2 -translate-x-1/2 translate-y-3/4 rounded bg-neutral-800 px-2 py-1 text-center text-sm text-neutral-100 opacity-0 transition-opacity group-hover:opacity-100">
          Need&nbsp;help? 55&nbsp;Monk#4855
        </span>
      </div>
      <a href="https://github.com/55Monk/endless-ages-db">
        <img src={githubLogo} alt="Project Github" className="h-6 w-6" />
      </a>
    </div>
  );
}
