import Image from "next/image";
import Link from "next/link";
import photos from "../../photos";

const fotograflar = () => {
  return (
    <>
    <h1 className="w-full text-3xl lg:text-5xl font-bold text-white bg-black py-12 text-center mb-6">
          Fotoğraflar
        </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 lg:px-32 gap-4 pb-12">
        {photos.map((photo, index) => (
          <>
            <div key={index} className="h-80 relative">
              <Link href={`/fotograflar/${photo}`} alt={photo}>
                <a>
                  <Image
                    src={`/images/photos/${photo}`}
                    alt="Logo"
                    layout="fill"
                    objectFit="cover"
                  />
                </a>
              </Link>
            </div>
          </>
        ))}
      </div>
      <div className="pagination w-full flex justify-center">
        <button
          type="button"
          className="float-left w-11 h-11 mr-2 rounded-full font-bold bg-gray-300"
        >
          1
        </button>
        <button
          type="button"
          className="float-left w-11 h-11 mr-2 rounded-full font-bold bg-gray-300"
        >
          2
        </button>
        <button
          type="button"
          className="float-left w-11 h-11 mr-2 rounded-full font-bold bg-gray-300"
        >
          3
        </button>
        <button
          type="button"
          className="float-left w-11 h-11 mr-2 rounded-full font-bold bg-gray-300"
        >
          4
        </button>
      </div>
    </>
  );
};

export default fotograflar;
