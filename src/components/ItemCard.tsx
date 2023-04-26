import {
  ArrowDownTrayIcon,
  BoltIcon,
  BugAntIcon,
  ChartBarIcon,
  LockClosedIcon,
  RocketLaunchIcon,
  ShieldExclamationIcon,
  ShoppingCartIcon,
  TagIcon,
  TrophyIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/20/solid";
import { getItemDps, getItemSalePrice, Item } from "../data/items";
import icons from "./icons.png";

type Props = { item: Item };

export default function ItemCard(props: Props) {
  const { item } = props;

  return (
    <div className="flex flex-col gap-1 rounded border border-neutral-300 p-1">
      <div className="flex items-center gap-2">
        <div
          className="h-8 w-8"
          style={{
            background: `url(${icons}) no-repeat`,
            backgroundPosition: `-${(item.iconLocation?.x ?? 0) * 32}px -${
              (item.iconLocation?.y ?? 0) * 32
            }px`,
          }}
        />
        <div className="flex-grow">
          <div className="flex items-center gap-4">
            <strong className="text-sm leading-none">{item.name}</strong>
            <div className="flex-grow" />
            {item.marketCost && (
              <div className="mb-[-1px] flex items-center gap-1">
                <TagIcon className="h-4 w-4" />
                <span className="text-sm leading-none">
                  {getItemSalePrice(item)}
                </span>
              </div>
            )}
            {item.drops ? (
              <ArrowDownTrayIcon className="group h-4 w-4" />
            ) : (
              <LockClosedIcon className="group h-4 w-4" />
            )}
          </div>
          <div className="text-xs">
            &#xfeff;{item.race ? `[${item.race}]` : ""}
          </div>
        </div>
      </div>
      {item.requirements && (
        <div className="flex items-center gap-2">
          <ChartBarIcon className="group h-4 w-4" />
          <span className="mb-[-1px] flex gap-2 text-sm">
            {Object.entries(item.requirements).map(
              ([req, value]: any, index) => (
                <span key={index}>
                  {req} <strong>{value}</strong>
                </span>
              )
            )}
          </span>
        </div>
      )}
      {item.defenses && (
        <div className="flex items-center gap-2">
          <ShieldExclamationIcon className="group h-4 w-4" />
          <span className="mb-[-1px] flex gap-2 text-sm">
            {Object.entries(item.defenses).map(
              ([defense, value]: any, index) => (
                <span key={index}>
                  {defense} <strong>{value}</strong>
                </span>
              )
            )}
          </span>
        </div>
      )}
      {item.damage && (
        <div className="flex items-center gap-2">
          <BoltIcon className="group h-4 w-4" />
          <span className="mb-[-1px] text-sm">
            {item.damage.element} <strong>{item.damage.direct ?? 0}</strong>
            {item.damage.splash && (
              <span>
                {" "}
                /<strong> {item.damage.splash}</strong>
              </span>
            )}{" "}
            per <strong>{item.damage.reloadDuration}</strong>s (
            <strong>{getItemDps(item)}</strong>/s)
          </span>
        </div>
      )}
      {item.flight && (
        <div className="flex items-center gap-2">
          <RocketLaunchIcon className="group h-4 w-4" />
          <span className="mb-[-1px] text-sm">
            Flight Duration <strong>{item.flight}</strong>s
          </span>
        </div>
      )}
      {item.fromVendor && (
        <div className="flex items-center gap-2">
          <ShoppingCartIcon className="group h-4 w-4" />
          <span className="mb-[-1px] text-sm">
            Purchased from{" "}
            <span className="font-bold text-violet-500">{item.fromVendor}</span>
          </span>
        </div>
      )}
      {item.craftedBy && (
        <>
          <div className="flex items-center gap-2">
            <WrenchScrewdriverIcon className="group h-4 w-4" />
            <span className="mb-[-1px] text-sm">
              Crafted by{" "}
              <span className="font-bold text-cyan-500">
                {item.craftedBy.skill}
              </span>{" "}
              (level <strong>{item.craftedBy.level}</strong>)
            </span>
          </div>
          {item.craftedBy.ingredients.map((ingredient, index) => (
            <div key={index} className="mb-[-1px] pl-6 text-sm">
              {ingredient.quantity}{" "}
              <span className="font-bold text-lime-600">{ingredient.name}</span>
            </div>
          ))}
        </>
      )}
      {item.rewardFrom && (
        <div className="flex items-center gap-2">
          <TrophyIcon className="group h-4 w-4" />
          <span className="mb-[-1px] text-sm">
            Reward From{" "}
            <span className="font-bold text-orange-500">{item.rewardFrom}</span>
          </span>
        </div>
      )}
      {item.droppedBy && (
        <div className="flex items-center gap-2">
          <BugAntIcon className="group h-4 w-4" />
          <span className="mb-[-1px] text-sm">
            Dropped by{" "}
            <span className="font-bold text-red-500">
              {item.droppedBy.name}
            </span>{" "}
            (<strong>{item.droppedBy.rate}</strong>%)
          </span>
        </div>
      )}
    </div>
  );
}
