import { XMarkIcon } from "@heroicons/react/24/outline";
import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

type Expand = {
  fullContent: ReactNode;
  full: boolean;
  select: () => void;
  close: () => void;
};

type Props = {
  titleContent: ReactNode;
  previewContent: ReactNode;
  expand?: Expand;
  defaultSize?: "SMALL" | "MEDIUM";
};

export default function Card(props: Props) {
  const { titleContent, previewContent, expand, defaultSize } = props;
  const { fullContent, full, select, close } = expand ?? {};

  const { ref, inView } = useInView({ threshold: 0 });

  function handleOnClick() {
    if (!full && select) {
      select();
    }
  }

  return (
    <div
      ref={ref}
      onClick={handleOnClick}
      className={`border bg-white ${full ? "absolute left-0 top-0 z-[998] h-full w-full border-white p-3" : expand ? "cursor-pointer rounded border-neutral-300 p-1 hover:bg-neutral-50" : ""}`}
    >
      {inView ? (
        <div className={defaultSize === "SMALL" ? "min-h-10" : "min-h-20"}>
          <div className="flex items-start justify-between gap-2">
            {titleContent}
            <button
              onClick={close}
              className={`rounded hover:bg-neutral-100 focus:outline-none focus:ring-2 ${full ? "" : "invisible"}`}
            >
              <XMarkIcon className="m-1 h-5 w-5" />
            </button>
          </div>
          {full ? fullContent : previewContent}
        </div>
      ) : (
        <div className={defaultSize === "SMALL" ? "min-h-10" : "min-h-20"} />
      )}
    </div>
  );
}
