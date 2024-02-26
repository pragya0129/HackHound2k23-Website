import SliderGallery from "../Components/SliderGallery";

function Gallery() {
  const images = [
    "Images/hackhound 2k23 photos/IMG20230304125741.jpg",
    "Images/hackhound 2k23 photos/IMG20230304130236.jpg",
    "Images/hackhound 2k23 photos/IMG20230304183147.jpg",
    "Images/hackhound 2k23 photos/IMG20230304093904.jpg",
    "Images/hackhound 2k23 photos/one (1).jpeg",
    "Images/hackhound 2k23 photos/one (2).jpeg",
    "Images/hackhound 2k23 photos/one (3).jpeg",
    "Images/hackhound 2k23 photos/one (4).jpeg",
  ];
  return (
    <div>
      <SliderGallery images={images} />
    </div>
  );
}

export default Gallery;
