type Props = {
  params: {
    id: number;
    photoId: number;
  };
};

const PhotoDetailPage = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      Photo Detail Page {id} {photoId}
    </div>
  );
};

export default PhotoDetailPage;
