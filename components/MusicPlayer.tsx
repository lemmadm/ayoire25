import React, { useState, useRef, useEffect } from 'react';

const musicUrl = "https://music.youtube.com/watch?v=dG45Sm6PYM0&si=D8nMPqdVzPW6nqL3"; // A romantic, royalty-free track

const MusicPlayer: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const togglePlayPause = () => {
        if (audioRef.current) {
            // Get user gesture confirmation before playing audio
            const promise = audioRef.current.play();
            if (promise !== undefined) {
                promise.then(_ => {
                    // Autoplay started!
                    if (isPlaying) {
                        audioRef.current?.pause();
                    }
                    setIsPlaying(!isPlaying);
                }).catch(error => {
                    // Autoplay was prevented.
                    // Show a "Play" button so the user can start playback.
                    if (isPlaying) {
                        audioRef.current?.pause();
                        setIsPlaying(false);
                    } else {
                        // In case of an error, ensure we reflect the paused state
                        setIsPlaying(false);
                    }
                });
            } else {
                 if (isPlaying) {
                    audioRef.current.pause();
                } else {
                    audioRef.current.play();
                }
                setIsPlaying(!isPlaying);
            }
        }
    };
    
    useEffect(() => {
        if(audioRef.current) {
            audioRef.current.volume = 0.3; // Set a pleasant default volume
        }
    }, [])

    return (
        <>
            <audio ref={audioRef} src={musicUrl} loop />
            <button 
                onClick={togglePlayPause}
                className="fixed bottom-6 right-6 z-50 bg-chocolate text-cream w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-opacity-80 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-chocolate focus:ring-cream"
                aria-label={isPlaying ? "Pause music" : "Play music"}
            >
                {isPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 00-1 1v2a1 1 0 102 0V9a1 1 0 00-1-1zm6 0a1 1 0 00-1 1v2a1 1 0 102 0V9a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8.118v3.764a1 1 0 001.555.832l3.197-1.882a1 1 0 000-1.664l-3.197-1.882z" clipRule="evenodd" /></svg>
                )}
            </button>
        </>
    );
};

export default MusicPlayer;
