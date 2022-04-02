import Image from "next/image";
import photos from "../../photos";

const fotograflar = ({ photoLink }) => {
  return (
   <>
    <h1 className="w-full text-3xl lg:text-5xl font-bold text-white bg-black py-12 text-center mb-6">
          Fotoğraf Detay
        </h1>
    <div className="p-8 lg:px-32 pb-12">
      <div className="w-full h-96 relative">
      {photos
        .filter((photo) => photo === photoLink)
        .map((photo) => (
          <>
            <Image
              src={`/images/photos/${photo}`}
              alt="Logo"
              layout="fill"
              objectFit="contain"
            />
          </>
        ))}
      </div>
    </div>
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  return {
    props: {
      photoLink: params.photoLink,
    },
  };
};

export default fotograflar;
