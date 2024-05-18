import Image from "next/image";
import React from "react";
import CardFindTraveler from "../Card/CardFindTraveler";

const Hero = () => {
  return (
    <section className="mt-[30px] w-full px-[50px] h-[369px] relative z-10">
      <Image
        src="https://s3-alpha-sig.figma.com/img/432c/4a5e/03895160a9eeed3b07162ec71eb872e8?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YUSClu0Ebs-eYaC-LhB7Zqw9gy9CBwck~N2wIv90HomDADdlcB~B0lZIBl16Q4-IhYQBauOpffoqO27UK1hkW7HaTheAEfYgBN~0QvjKUVyvvyZZWz3GyJKQeQ-XLzpxqug8x5M~dx50M7GeYfpj4F1h4M1myFclcQhddDkj66IvTGztCiGG8AjwwLtPG6zPEwGgoeyH1X2Qdcy~YROypP61Zk1J9HX5X7tI46haw-3wK7cUfRx4DWYtm3X~Gk~txsv~TOKzkD7xex3L8WXqgoquOMw5bVXR70SCO8mhdpN7mnx48DYUt8xXcL6qdL3F8NPKm3TzyRS7~xT1F-XfgA__"
        alt="background"
        width={1340}
        height={369}
        className="w-full h-[369px] object-cover rounded-[30px]"
      />
      <CardFindTraveler />
    </section>
  );
};

export default Hero;
