type Props = {
  type: string;
};

export default function NoMatchCard(props: Props) {
  const { type } = props;

  return (
    <div className="rounded-md border-2 border-dotted border-neutral-300 p-6 text-center align-middle text-neutral-400">
      No {type}s Match Criteria
    </div>
  );
}
