import ZoomableImage from "../mediaGallery/zoomableImage";
import VideoPlayer from "../mediaGallery/videoPlayer";


export default function MediaGalleryCard({ metaData }) {

    const CardComponent = () => {
        switch (metaData.type) {
            case "image":
                return <ZoomableImage url={metaData.metadata.url} />;
            case "video":
                return <VideoPlayer url={metaData.metadata.url} />;
            default:
                return;
        }
    }

    return (
        <CardComponent />
    );
}