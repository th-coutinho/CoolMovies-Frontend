import MovieReviewsList from './components/moviesReviewsList';
import { FaVideo } from 'react-icons/fa';

function App() {
  return (
    <div className="antialiased bg-gray-100 min-h-screen"> 
      {/* NAVBAR */}
      <div className="bg-white h-16 border-b-2 border-gray-200"> 
        <div className="container mx-auto"> 
           <div className="flex items-center h-16">
             <h1 className="flex items-center gap-2">
              <FaVideo/>
              <span className="font-semibold uppercase">Coolmovies</span>
             </h1>
           </div>
        </div>
      </div>
      <div className="container mx-auto py-8">
        <p className="text-lg">
          <span>Welcome back, <span className="font-bold">Chrono</span>!</span>
        </p>

        <p className="text-2xl font-semibold mt-4">
          Check the latest reviews:
        </p>

        {/* Filters */}
        <div className="flex items-center mt-2">
          <span className="px-2 py-1 bg-green-100 border border-green-600 text-green-600 rounded-full text-sm cursor-pointer">
            Show mine first
          </span>
        </div>

        <div className="flex gap-4 my-4">
          <MovieReviewsList />
        </div>     
      </div>  
    </div>
  );
}

export default App;
