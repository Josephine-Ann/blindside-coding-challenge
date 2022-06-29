import React from 'react';


const IndividualVideoPage = ({video}) => {
    return (
        <div>
            {
                video === undefined ? (
                    <h1>Loading</h1>
                ) : (
                        <div className='w-full flex justify-center mt-16'>
                            <iframe title='pexel-api' type="text/html\" width={960} height={540} src={video.video_files[0].link} frameBorder='0' allowFullScreen></iframe> 
                        </div>
                )
            }
        </div>
    );
};

export default IndividualVideoPage;

                            {/* <h1>The normal URL is {videos[0].url}</h1>
                            <h2>Video files include:</h2>
                            {JSON.stringify(videos[0].video_files)} */}