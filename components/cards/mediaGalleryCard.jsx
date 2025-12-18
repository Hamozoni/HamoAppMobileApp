import ZoomableImage from "../mediaGallery/zoomableImage";
import VideoPlayer from "../mediaGallery/videoPlayer";


export default function MediaGalleryCard({ metaData }) {

    const CardComponent = () => {
        switch (metaData.type) {
            case "image":
                return <ZoomableImage url={metaData.metadata.imageURL} />;
            case "video":
                return <VideoPlayer url={metaData.metadata.videoURL} />;
            default:
                return;
        }
    }

    return (
        <CardComponent />
    );
}