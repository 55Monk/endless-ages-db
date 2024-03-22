import {
  ArrowDownTrayIcon,
  LockClosedIcon,
  TagIcon,
} from "@heroicons/react/24/outline";
import { Item, getItemSalePrice } from "../../data/items/items";

type Props = {
  item: Item;
};

export function ItemCardTitle(props: Props) {
  const { item } = props;

  return (
    <div className="flex items-center gap-2">
      <div className="relative flex">
        <div
          className="h-8 w-8"
          style={{
            background: `url(${import.meta.env.BASE_URL}/assets/icons.webp) no-repeat`,
          }}
        />
        <div
          className="absolute h-8 w-8"
          style={{
            background: `url(${import.meta.env.BASE_URL}/assets/icons.webp) no-repeat`,
            backgroundPosition: `-${(item.iconLocation?.[0] ?? 0) * 32}px -${
              (item.iconLocation?.[1] ?? 0) * 32
            }px`,
          }}
        />
      </div>
      <div className="flex-grow">
        <div className="flex items-center gap-2">
          <strong className="leading-none">{item.name}</strong>
          {item.drops ? (
            <ArrowDownTrayIcon
              className="group h-5 w-5"
              title="Drops On Death"
            />
          ) : (
            <LockClosedIcon className="group h-5 w-5" title="Nondrop" />
          )}
          {item.marketCost && (
            <div className="mb-[-1px] flex items-center gap-1">
              <TagIcon className="h-5 w-5" title="Sell Price" />
              <span className="text-sm leading-none">
                {getItemSalePrice(item)}
              </span>
            </div>
          )}
        </div>
        <div className="min-h-4 text-xs">
          {item.level ? `Lv${item.level}` : ""}
        </div>
      </div>
    </div>
  );
}
