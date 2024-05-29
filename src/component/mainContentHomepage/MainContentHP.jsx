import VideoCard from "../video-card/VideoCard"
import "./mainContentHP.scss"
import data from "../../data/videoYT.json"
import {fetchTrendingVideos} from "../../api"

export default function MainContentHP(){
    
    const tabVideo = fetchTrendingVideos()
    console.log(tabVideo)


    return(
        <div className="mainContent-container">
            {data.videos.map((video) => (
                <VideoCard
                    key={video.id}
                    Miniature={video.video_image}
                    channelImage={video.channel.image_url}
                    title={video.title}
                    channelName={video.channel.name}
                    nbrView={video.view_count}
                    date={video.publish_date}
                />
            ))} 
        </div>
    )
}