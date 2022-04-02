import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-card mb-10 shadow-md rounded-lg pb-8 lg:flex lg:pb-0">
      <div className="hero-image rounded-lg w-full h-auto relative lg:w-128">
        <img src="/images/hero-image.png" alt="Hero" className="rounded-t-lg w-full h-full lg:rounded-none lg:rounded-lg lg:rounded-l-lg" />
      </div>
      <div className="hero-content my-9 mx-8 flex-1">
        <h3 className="hero-title font-bold text-2xl mb-6 lg:text-5xl lg:mb-10">
          Merhaba, <br />
          Dünyama Hoş Geldin
        </h3>
        <div className="hero-text lg:text-lg">
          <p className="mb-6">
            Herkese Selam <br /> <strong>Ben Ferhan Cihaner,</strong>
          </p>
          <p className="mb-6">
            Sporu çok seviyorum ve bir Triathletim! İnsanların da daha sağlıklı
            ve aktif bir yaşam biçimi benimsemeleri için elimden gelen her şeyi
            yapmaya hazırım.
          </p>
          <p className="mb-6">
            Sağlıklı ve daha iyi bir dünya için benim seçtiğim yol bu! Mutlu,
            huzurlu ve kendini seven bireyler dünyayı daha güzel bir yere
            çevirir. En büyük motivasyonum da bu amaç doğrultusunda sizinle
            birlikte hareket edebilmek. Web sitemi gezerken umarım istediklerini
            karşılarım!
          </p>{" "}
          <p>Benimle gel ve motive ol!</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
