export default function Skeleton() {
  const NUMBER_OF_CARDS = 4;
  const cards = [...Array(NUMBER_OF_CARDS)];

  return cards.map((e, i) => (
    <div key={i} className="animate-pulse">
      <div className="p-6 rounded-md shadow-lg bg-white">
        <div className="h-96">
          <div className="flex flex-col">
            <div className="">
              <div className="w-1/3 h-4 bg-blue-400 rounded"></div>
            </div>
            <div className="mt-2">
              <div className="h-8 bg-blue-400 rounded"></div>
            </div>
            <div className="mt-2">
              <div className="h-10 bg-blue-400 rounded"></div>
            </div>
            <div className="mt-2 space-y-1 h-60">
              <div className="h-60 bg-blue-400 rounded"></div>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <div className="flex items-center mt-6 gap-2">
            <div className="h-8 w-4/12 bg-blue-400 rounded"></div>
          </div>
          <div className="mt-4">
            <div className="flex w-full h-8 w-4/12 gap-2 justify-end">
              <div className="h-8 w-2/12 bg-blue-400 rounded"></div>
              <div className="h-8 w-2/12 bg-blue-400 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))
};
