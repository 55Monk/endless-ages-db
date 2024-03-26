import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

type Page = {
  hasNext: boolean;
  next: () => void;
  hasPrevious: boolean;
  previous: () => void;
};

type Expand = {
  fullContent: ReactNode;
  full: boolean;
  select: () => void;
  close: () => void;
  page: Page;
};

type Props = {
  titleContent: ReactNode;
  previewContent?: ReactNode;
  expand?: Expand;
};

export default function Card(props: Props) {
  const { titleContent, previewContent, expand } = props;
  const { fullContent, full, select, close, page } = expand ?? {};
  const { hasNext, next, hasPrevious, previous } = page ?? {};

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
      className={`border bg-white ${full ? "absolute left-0 top-0 z-[998] h-full w-full border-white" : expand ? "cursor-pointer rounded border-neutral-300 p-1 hover:bg-neutral-50" : ""}`}
    >
      {full && (
        <div className="absolute right-0 z-[997] flex gap-2 p-3">
          <button
            onClick={previous}
            className="rounded focus:outline-none focus:ring-2 enabled:hover:bg-neutral-100 disabled:text-neutral-400"
            disabled={!hasPrevious}
          >
            <ChevronLeftIcon className="m-1 h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="rounded focus:outline-none focus:ring-2 enabled:hover:bg-neutral-100 disabled:text-neutral-400"
            disabled={!hasNext}
          >
            <ChevronRightIcon className="m-1 h-5 w-5" />
          </button>
          <button
            onClick={close}
            className="rounded hover:bg-neutral-100 focus:outline-none focus:ring-2"
          >
            <XMarkIcon className="m-1 h-5 w-5" />
          </button>
        </div>
      )}
      {inView ? (
        <div
          className={`flex flex-col items-start gap-1 ${previewContent ? "min-h-[88px]" : "min-h-10"} ${full ? "h-full p-3" : ""}`}
        >
          {titleContent}
          {full ? fullContent : previewContent}
        </div>
      ) : (
        <div className={previewContent ? "min-h-[88px]" : "min-h-10"} />
      )}
    </div>
  );
}
