import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMovies } from '../redux/MovieSlice';
import MovieList from '../components/subcomp/MovieList';
import Header from '../components/subcomp/Header';
import Viewers from '../components/subcomp/Viewers';
import { useAuth } from '../pages/AuthContext';
import axios from 'axios';
import { MoreVertical, Trash2 } from 'lucide-react';

const Home = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const [userVideos, setUserVideos] = useState([]);
  const [dropdownOpenId, setDropdownOpenId] = useState(null);

  const allMovies = [
    { id: 1, title: '', image: '/JADWIN/project1/images/rec1.jpg', type: 'recommend', carding: '/JADWIN/project1/images/rec1.jpg' },
    { id: 2, title: '', image: '/JADWIN/project1/images/rec2.jpg', type: 'recommend', carding: '/JADWIN/project1/images/rec2.jpg' },
    { id: 3, title: '', image: '/JADWIN/project1/images/rec3.jpg', type: 'recommend', carding: '/JADWIN/project1/images/rec3.jpg' },
    { id: 4, title: '', image: '/JADWIN/project1/images/rec4.jpg', type: 'recommend', carding: '/JADWIN/project1/images/rec4.jpg' },

    { id: 5, title: '', image: '/JADWIN/project1/images/new1.jpg', type: 'new', carding: '/JADWIN/project1/images/new1.jpg' },
    { id: 6, title: '', image: '/JADWIN/project1/images/new2.jpg', type: 'new', carding: '/JADWIN/project1/images/new2.jpg' },
    { id: 7, title: '', image: '/JADWIN/project1/images/new3.jpg', type: 'new', carding: '/JADWIN/project1/images/new3.jpg' },
    { id: 8, title: '', image: '/JADWIN/project1/images/new4.jpg', type: 'new', carding: '/JADWIN/project1/images/new4.jpg' },

    { id: 9, title: '', image: '/JADWIN/project1/images/trend1.jpg', type: 'trending', carding: '/JADWIN/project1/images/trend1.jpg' },
    { id: 10, title: '', image: '/JADWIN/project1/images/trend2.jpg', type: 'trending', carding: '/JADWIN/project1/images/trend2.jpg' },
    { id: 11, title: '', image: '/JADWIN/project1/images/trend3.jpg', type: 'trending', carding: '/JADWIN/project1/images/trend3.jpg' },
    { id: 12, title: '', image: '/JADWIN/project1/images/trend4.jpg', type: 'trending', carding: '/JADWIN/project1/images/trend4.jpg' },

    { id: 13, title: '', image: '/JADWIN/project1/images/org1.jpg', type: 'original', carding: '/JADWIN/project1/images/org1.jpg' },
    { id: 14, title: '', image: '/JADWIN/project1/images/org2.jpg', type: 'original', carding: '/JADWIN/project1/images/org2.jpg' },
    { id: 15, title: '', image: '/JADWIN/project1/images/org3.jpg', type: 'original', carding: '/JADWIN/project1/images/org3.jpg' },
    { id: 16, title: '', image: '/JADWIN/project1/images/org4.jpg', type: 'original', carding: '/JADWIN/project1/images/org4.jpg' },
  ];
 
  useEffect(() => {
    dispatch(setMovies(allMovies));
  }, [dispatch]);

  useEffect(() => {
    if (!user?.id) return;

    axios.post('https://rssdinfotechoffice.store/JADWIN/backend/getUserVideo.php', { user_id: user.id })
      .then((res) => {
        if (res.data.status === 'success') {
          setUserVideos(res.data.videos);
        } else {
          setUserVideos([]);
        }
      })
      .catch((err) => {
        console.error("Error fetching user videos:", err);
        setUserVideos([]);
      });
  }, [user]);

 const handleDelete = (videoId) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this video?");
  if (!confirmDelete || !user?.id) return;

  axios.post('https://rssdinfotechoffice.store/JADWIN/backend/deleteVideo.php', {
    video_id: videoId,
    user_id: user.id
  })
  .then((res) => {
    console.log("Delete response:", res.data);
    if (res.data.status === 'success') {
      setUserVideos(prev => prev.filter(v => v.id !== videoId));
      setDropdownOpenId(null);
    } else {
      alert("Delete failed: " + (res.data.message || "Unknown error"));
    }
  })
  .catch(err => {
    console.error("Error deleting video:", err);
    alert("Something went wrong. See console.");
  });
};


  return (
    <div className="min-h-screen w-full bg-home-bg bg-cover bg-fixed bg-center bg-no-repeat px-5 pb-10">
      <Header />
      <Viewers />

      {userVideos.length > 0 && (
        <section className="mb-10">
          <h2 className="text-white text-xl font-bold mb-4">Your Uploaded Videos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {userVideos.map((video) => (
              <div
                key={video.id}
                className="relative w-full rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
                >
                <video
               src={`https://rssdinfotechoffice.store/JADWIN/backend/${video.filepath}`}
               controls
                className="w-full max-h-[400px] object-contain rounded-md"
               />

                {/* 3-dot button top-right inside video */}
                <div className="absolute top-2 right-2 z-20">
                  <button
                    onClick={() => setDropdownOpenId(dropdownOpenId === video.id ? null : video.id)}
                    className="p-1 bg-black/70 text-white rounded-full"
                  >
                    <MoreVertical size={20} />
                  </button>
                  {dropdownOpenId === video.id && (
                  <div className="absolute top-8 right-0 bg-white rounded-lg shadow-lg p-2 z-30 animate-fadeIn">
                  <button
                  onClick={() => handleDelete(video.id)}
                  className="flex items-center gap-2 text-sm text-red-600 hover:text-red-800 transition"
                  >
                 <Trash2 size={16} />
                  Delete
                </button>
                </div>
)}                 
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Static movie categories */}
      <MovieList title="Recommended Movies" movies={allMovies.filter(m => m.type === 'recommend')} />
      <MovieList title="New to CineHub" movies={allMovies.filter(m => m.type === 'new')} />
      <MovieList title="Trending Movies" movies={allMovies.filter(m => m.type === 'trending')} />
      <MovieList title="Original Movies" movies={allMovies.filter(m => m.type === 'original')} />
    </div>
  );
};

export default Home;
