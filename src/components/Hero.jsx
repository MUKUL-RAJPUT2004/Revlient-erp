import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Pause, Volume2, VolumeX } from 'lucide-react';

const Hero = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [videoStates, setVideoStates] = useState([
    { position: 'center', opacity: 1, scale: 1 },
    { position: 'hidden', opacity: 0, scale: 0.8 },
    { position: 'hidden', opacity: 0, scale: 0.8 }
  ]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const videos = [
    {
      id: 1,
      title: "Student Management System",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      poster: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      title: "Financial Tracking Dashboard",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      poster: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "Document Processing Workflow",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      poster: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  // Video transition logic - alternating left and right
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.innerWidth >= 1024) {
        setVideoStates(prevStates => {
          const newStates = [...prevStates];
          const centerIndex = newStates.findIndex(state => state.position === 'center');
          
          if (centerIndex !== -1) {
            // Alternate between left and right
            const direction = currentVideoIndex % 2 === 0 ? 'right' : 'left';
            newStates[centerIndex] = { position: direction, opacity: 0.4, scale: 0.7 };
          }
          
          // Bring next video to center
          const nextIndex = (currentVideoIndex + 1) % videos.length;
          newStates[nextIndex] = { position: 'center', opacity: 1, scale: 1 };
          
          return newStates;
        });
        
        setCurrentVideoIndex(prev => (prev + 1) % videos.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentVideoIndex, videos.length]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const getVideoStyle = (position) => {
    const baseStyle = "absolute top-1/2 transform -translate-y-1/2 transition-all duration-1000 ease-in-out";
    
    switch (position.position) {
      case 'center':
        return `${baseStyle} left-1/2 -translate-x-1/2 z-30`;
      case 'left':
        return `${baseStyle} left-[10%] z-20`;
      case 'right':
        return `${baseStyle} right-[10%] z-20`;
      default:
        return `${baseStyle} left-[100%] z-0`;
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-warmwind pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Main Container with Warmwind-style Background */}
        <div className="relative bg-warmwind-card rounded-3xl overflow-hidden warmwind-shadow-xl">

          {/* Warmwind-inspired Background Pattern */}
          <div className="absolute inset-0">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 dark:bg-warmwind-card bg-gradient-to-br from-white/20 via-transparent to-black-800/10 "></div>
            
            {/* Floating elements for depth */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-warmwind-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-warmwind-accent/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-warmwind-accent/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 px-8 py-16">
            
            {/* Video Section */}
            <div className="mb-12">
              {/* Desktop: 3 Videos Layout */}
              <div className="hidden lg:block relative h-80 mb-8">
                {videos.map((video, index) => (
                  <div
                    key={video.id}
                    className={getVideoStyle(videoStates[index])}
                    style={{
                      opacity: videoStates[index].opacity,
                      transform: `translateY(-50%) scale(${videoStates[index].scale}) ${
                        videoStates[index].position === 'center' ? 'translateX(-50%)' : ''
                      }`
                    }}
                  >
                    <div className="relative warmwind-card overflow-hidden shadow-2xl">
                      <video
                        className="w-96 h-64 object-cover"
                        src={video.src}
                        poster={video.poster}
                        autoPlay={videoStates[index].position === 'center' && isPlaying}
                        muted={isMuted}
                        loop
                        playsInline
                      />
                      
                      {/* Video Controls - Only on center video */}
                      {videoStates[index].position === 'center' && (
                        <div className="absolute top-4 right-4 flex space-x-2">
                          <button
                            onClick={togglePlayPause}
                            className="w-8 h-8 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-all duration-200"
                          >
                            {isPlaying ? <Pause size={12} /> : <Play size={12} />}
                          </button>
                          <button
                            onClick={toggleMute}
                            className="w-8 h-8 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-all duration-200"
                          >
                            {isMuted ? <VolumeX size={12} /> : <Volume2 size={12} />}
                          </button>
                        </div>
                      )}

                      {/* Video Title Overlay */}
                      {videoStates[index].position === 'center' && (
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                          <p className="text-white font-medium text-sm">{video.title}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile: Single Video */}
              <div className="lg:hidden mb-8">
                <div className="max-w-sm mx-auto">
                  <div className="relative warmwind-card overflow-hidden">
                    <video
                      className="w-full h-64 object-cover"
                      src={videos[currentVideoIndex].src}
                      poster={videos[currentVideoIndex].poster}
                      autoPlay={isPlaying}
                      muted={isMuted}
                      loop
                      playsInline
                    />
                    
                    {/* Mobile Video Controls */}
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <button
                        onClick={togglePlayPause}
                        className="w-8 h-8 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-all duration-200"
                      >
                        {isPlaying ? <Pause size={12} /> : <Play size={12} />}
                      </button>
                      <button
                        onClick={toggleMute}
                        className="w-8 h-8 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-all duration-200"
                      >
                        {isMuted ? <VolumeX size={12} /> : <Volume2 size={12} />}
                      </button>
                    </div>

                    {/* Mobile Video Title */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <p className="text-white font-medium text-sm">{videos[currentVideoIndex].title}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Indicators */}
              <div className="flex justify-center space-x-3">
                {videos.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      index === currentVideoIndex 
                        ? 'w-8 bg-warmwind-accent shadow-lg' 
                        : 'w-2 bg-warmwind-light'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="text-center mb-12">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="warmwind-btn-primary inline-flex items-center px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Request a Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="warmwind-btn-secondary inline-flex items-center px-8 py-4 text-lg font-semibold rounded-xl" >
                  <a href="#contact">Contact Sales</a>
                  <Play className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Heading and Content */}
            <div className="text-center">
              <h1 className=" text-responsive-4xl font-extrabold text-warmwind mb-6 leading-tight">
                Transform Your Education Consultancy
              </h1>
             
              <p className="text-lg sm:text-xl text-warmwind-light max-w-4xl mx-auto leading-relaxed">
                The complete ERP solution designed specifically for education consultancies. 
                Streamline operations, boost productivity, and grow your business with intelligent automation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;