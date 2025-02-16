import InfoImg1 from "../img/info_1.png";
import InfoImg2 from "../img/info_2.png";

const Info = () => {
  return (
    <div className="c_container">
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
        <div className="md:w-1/2 w-full">
          <h2 className="font-bold text-[28px] text-center md:text-start md:text-[36px] leading-[34px] md:leading-[54px]">
            Сайт рыбатекст поможет дизайнеру, верстальщику
          </h2>
          <p className="font-medium text-[16px] text-center md:text-start md:text-[20px] leading-[24px] md:leading-[30px] mt-4 md:mt-6">
            Siz IT o'quv kursini tugatdingiz yoki Internet tarmog'i orqali
            mustaqil o'rgandingiz, ammo ishga joylashishda qiyinchiliklarga
            uchrayapsizmi? Biz sizga yordam beramiz. Ushbu loyiha qobiliyatli
            yoshlarni topib, yetuk kadrlar bo'lib yetishishiga yordam berish
            uchun tashkil qilindi.
          </p>
        </div>
        <div className="md:w-1/2 w-full flex justify-center md:justify-end mt-8 md:mt-0">
          <img src={InfoImg1} alt="information" className="w-full max-w-md" />
        </div>
      </div>

      <div className="mt-14 md:mt-36 flex gap-2 flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-1/2 w-full flex justify-center md:justify-start mb-8 md:mb-0">
          <img src={InfoImg2} alt="information" className="w-full max-w-md" />
        </div>
        <div className="md:w-1/2 w-full">
          <h2 className="font-bold text-[28px] text-center md:text-start md:text-[36px] leading-[34px] md:leading-[54px]">
            Aksariyat kompaniyalar ishga joylashishda sizdan ish staji va
            portfolio so'raydi
          </h2>
          <p className="font-medium text-[16px] text-center md:text-start md:text-[20px] leading-[24px] md:leading-[30px] mt-4 md:mt-6">
            Tabiyki endigini bu sohaga kirib kelayotgan internlarda bular mavjud
            emas. Ma'lum bir ish stajiga ega bo'lish va turli xil qiziqarli
            lohiyalardan iborat portfolioni hosil qilish uchun ushbu loyihada
            amaliyot o'tashni taklif qilamiz. <br />
            <br /> Amaliyotchilar soni chegaralangan va konkurs asosida saralab
            olinadi. Eng yuqori ball to'plagan 10 kishi bepul amaliyot o'tash
            imkoniyatiga ega bo'ladi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
