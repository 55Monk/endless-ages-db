import {
  ArrowDownTrayIcon,
  LockClosedIcon,
  TagIcon,
} from "@heroicons/react/20/solid";
import { Item, getItemSalePrice } from "../../data/items/items";
import icons from "../icons.webp";

type Props = {
  item: Item;
};

export function ItemCardTitleRow(props: Props) {
  const { item } = props;

  return (
    <div className="flex items-center gap-2">
      <div className="relative flex">
        <div
          className="h-8 w-8"
          style={{
            background: `url(${icons}) no-repeat`,
          }}
        />
        <div
          className="absolute h-8 w-8"
          style={{
            background: `url(${icons}) no-repeat`,
            backgroundPosition: `-${(item.iconLocation?.[0] ?? 0) * 32}px -${
              (item.iconLocation?.[1] ?? 0) * 32
            }px`,
          }}
        />
      </div>
      <div className="flex-grow">
        <div className="flex items-center gap-4">
          <strong className="flex-grow leading-none">{item.name}</strong>
          {item.marketCost && (
            <div className="mb-[-1px] flex items-center gap-1">
              <TagIcon className="h-5 w-5" title="Sell Price" />
              <span className="text-sm leading-none">
                {getItemSalePrice(item)}
              </span>
            </div>
          )}
          {item.drops ? (
            <ArrowDownTrayIcon
              className="group h-5 w-5"
              title="Drops On Death"
            />
          ) : (
            <LockClosedIcon className="group h-5 w-5" title="Nondrop" />
          )}
        </div>
        {/*<div className="text-xs">&#xfeff;</div> 2nd line for subtext*/}
      </div>
    </div>
  );
}