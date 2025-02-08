"use client";

import { useRef } from "react";

interface MediaData {
    id?: string;
    image?: string;
    video?: string | null;
    title?: string | null;
    description?: string | null;
    link?: string | null;
    isBig?: boolean | null;
    isSmall?: boolean | null;
}

const MediaViewer = ({ data, onClose, viewerVisible }: { data: MediaData | null, onClose: () => void, viewerVisible: boolean }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleClose = () => {
        if (videoRef && videoRef.current) {
            videoRef.current.pause();
        }
        onClose();
    };

    return (
        <div className={`fixed w-screen h-screen top-0 z-50 before:absolute before:-z-10 before:opacity-90 before:h-full before:w-full before:bg-primary backdrop-blur-lg ${viewerVisible ? 'block' : 'hidden'}`}>
            <button onClick={handleClose} className="h-16 w-16 absolute right-0 top-0 text-4xl mr-6 font-base text-secondary">X</button>
            <div className='w-full h-full flex items-center justify-center'>
                <div className='w-full h-fit flex flex-wrap items-center justify-center px-2 sm:px-12 sm:h-[576px] xl:w-[1280px] xl:h-[650px]'>
                    {data ? (
                    <>
                        {data.video ? (
                        <video
                            ref={videoRef}
                            key={data.video}
                            controls
                            controlsList="nodownload"
                            disablePictureInPicture
                            className={`h-auto object-cover rounded-md shadow-image-view ${
                                data.isSmall 
                                  ? 'h-fit w-fit' 
                                  : `h-auto w-[90%] ${data.isBig 
                                      ? 'max-w-[1280px] sm:w-[90%] md:w-[80%]' 
                                      : 'max-w-[700px] sm:w-[80%] md:w-[60%]'
                                    }`
                              }`}
                              
                        >
                            <source src={data.video} type="video/mp4" />
                            Seu navegador não suporta vídeos.
                        </video>    
                        ) : (
                        <img
                            src={data.image}
                            className={`h-autorounded-md shadow-image-view ${
                                data.isSmall 
                                  ? 'h-3/5 w-[80%] sm:w-auto' 
                                  : `h-auto w-[90%] ${data.isBig 
                                      ? 'max-w-[1280px] sm:w-[90%] md:w-[80%]' 
                                      : 'max-w-[700px] sm:w-[80%] md:w-[60%]'
                                    }`
                              }`}
                            alt={data.title ?? "Game Image"}
                        />
                        )}

                        {(data.title || data.description || data.link) && (
                        <div className="w-full h-fit flex flex-wrap justify-center py-4 mt-2">
                            {data.title && (
                            <h3 className="text-secondary uppercase text-4xl font-bold text-center">
                                {data.title}
                            </h3>
                            )}

                            {data.description && (

                            <p
                                dangerouslySetInnerHTML={{ __html: data.description }}
                                className="text-secondary w-full text-base text-center my-5"
                            />
                            )}

                            {data.link && (
                            <a
                                href={data.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-play-button w-2/3 h-14 right-0 bottom-0 mx-4 rounded-md mt-2 min-[500px]:w-1/2 sm:w-56 lg:w-64"
                            >
                                <div className="w-full h-full bg-polygon-icon bg-fit bg-no-repeat bg-center"></div>
                            </a>
                            )}
                        </div>
                        )}
                    </>
                    ) : (
                    <p className="text-white text-center">Loading...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MediaViewer;
