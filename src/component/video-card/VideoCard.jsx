import "./videoCard.scss"

const VideoCard = ({Miniature, channelImage, title, channelName, nbrView, date}) => {
    return(
        <div className="container-card">
                <img src={Miniature} className="videoCard-minia"/>
                <div className="cont-videoCard-info">
                    <img src={channelImage} className="videoCard-channel-img"/>
                    <div className="cont-text-videoCard">
                        <span className="videoCard-Title">{title}</span>
                        <span className="videoCard-Channel-name">{channelName}</span>
                        <span className="videoCard-viewAndDate">{`${nbrView} vues | il y a ${date}`}</span>
                    </div>
                </div>
        </div>
    )
}

export default VideoCard