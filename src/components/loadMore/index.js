import { FaLock } from 'react-icons/fa';

export default function MovieReviewsList() {
  const NUMBER_OF_CARDS = 4;
  const cards = [...Array(NUMBER_OF_CARDS)];

  return (
    <div className="relative h-56 overflow-hidden">
      <div className="absolute w-full left-0 right-0 top-16 z-10 flex items-center justify-center  p-4 ">
        <button type="button" className="relative flex flex-col sm:flex-row justify-center items-center gap-2 rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-xs font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:w-auto sm:text-sm">
          <FaLock/>
          <span>Get our Premium Plan to read more!</span>
          <span className="animate-ping top-0 right-0 absolute inline-flex rounded-full h-3 w-3 bg-blue-500 translate-y-1/2 translate-x-1/2"></span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 my-4 font-description">
        { cards.map((e, i) => (
          <div key={i} className="filter blur-sm mt-4">
            <div className="p-6 rounded-md shadow-lg bg-white">
              <div className="h-96"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};
