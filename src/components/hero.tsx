import HtmlIcon from "../img/icons/html.svg";
import DartIcon from "../img/icons/dart.svg";
import FigmaIcon from "../img/icons/figma.svg";
import FlutterIcon from "../img/icons/flutter.svg";
import PythonIcon from "../img/icons/python.svg";
import UserGroup from "./user.group";

const Hero = () => {
  return (
    <section className="mt-8">
      <div className="relative pt-16 md:pt-28 pb-8 md:pb-16 px-4 md:px-20 c_container">
        <h1 className="text-[32px] md:text-[48px] leading-[40px] md:leading-[72px] font-bold text-center">
          Ваша работа мечты уже ждет вас, начните сегодня!
        </h1>
        <p className="p-5 text-center">
          <UserGroup
            count={120}
            avatars={[
              "https://randomuser.me/api/portraits/women/8.jpg",
              "https://randomuser.me/api/portraits/men/4.jpg",
              "https://randomuser.me/api/portraits/women/3.jpg",
            ]}
          />
        </p>
        <div className="text-center mt-8">
          <button className="rounded-[8px] bg-primary text-white text-[16px] md:text-[20px] leading-[20px] font-semibold py-[12px] md:py-[18px] px-[20px] md:px-[30px]">
            Оставить заявку
          </button>
        </div>
        <img
          src={HtmlIcon}
          alt="HTML"
          className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2"
        />
        <img
          src={DartIcon}
          alt="Dart"
          className="hidden md:block absolute bottom-20 right-1/4"
        />
        <img
          src={FigmaIcon}
          alt="Figma"
          className="hidden md:block absolute top-1/4 left-0"
        />
        <img
          src={FlutterIcon}
          alt="Flutter"
          className="hidden md:block absolute right-0 top-1/2"
        />
        <img
          src={PythonIcon}
          alt="Python"
          className="hidden md:block absolute bottom-0 left-40"
        />
      </div>
    </section>
  );
};

export default Hero;
