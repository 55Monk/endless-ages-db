import { HeartIcon } from "@heroicons/react/20/solid";

export function getElementIcon(element: string) {
  const ele = element.toLowerCase();
  if (ele === "heal") {
    return <HeartIcon className="h-4 w-4" />;
  }
  return (
    <img
      className="h-4 w-4"
      src={`${import.meta.env.BASE_URL}/assets/elements/${ele}.webp`}
      alt={ele}
      title={ele}
    />
  );
}
