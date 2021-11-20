import MovieReviewsList from './components/moviesReviewsList';
import LoadMore from './components/loadMore';
import Modal from './components/modal';
import { FaVideo } from 'react-icons/fa';

function App() {
  return (
    <div className="antialiased bg-blue-100 xl:h-screen xl:max-h-screen xl:overflow-hidden">
      <div className="bg-white h-16 border-b-2 border-gray-200">
        <div className="sm:container sm:mx-auto">
           <div className="flex items-center h-16 px-4">
             <h1 className="flex items-center gap-2">
              <FaVideo/>
              <span className="font-title font-semibold uppercase">Coolmovies</span>
             </h1>
           </div>
        </div>
      </div>
      <div className="sm:container sm:mx-auto">
        <div className="p-4 pt-8 pb-0 sm:py-8 sm:pb-0">
          <p className="text-lg font-title">
            <span>Welcome back, <span className="font-bold">Admin</span>!</span>
          </p>
          <p className="font-title text-xl sm:text-2xl font-bold mt-4">
            Your team latest reviews
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 my-4 font-description">
            <MovieReviewsList />
          </div>
          <LoadMore />
        </div>
      </div>
      <Modal/>
    </div>
  );
}

export default App;
