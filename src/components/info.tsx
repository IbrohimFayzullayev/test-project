import React from "react";
import InfoImg1 from "../img/info_1.png";
import InfoImg2 from "../img/info_2.png";

const Info = () => {
  return (
    <div className="c_container">
      <div className="flex items-center justify-between">
        <div className="w-1/2">
          <h2 className="font-bold text-[36px] leading-54px">
            Сайт рыбатекст поможет дизайнеру, верстальщику
          </h2>
          <p className="font-medium text-[20px] leading-[30px] mt-8">
            Siz IT o'quv kursini tugatdingiz yoki Internet tarmog'i orqali
            mustaqil o'rgandingiz, ammo ishga joylashishda qiyinchiliklarga
            uchrayapsizmi? Biz sizga yordam beramiz. Ushbu loyiha qobiliyatli
            yoshlarni topib, yetuk kadrlar bo'lib yetishishiga yordam berish
            uchun tashkil qilindi.{" "}
          </p>
        </div>
        <div className="w-1/2 flex justify-end">
          <img src={InfoImg1} alt="information" />
        </div>
      </div>
      <div className="mt-40 flex items-center justify-between">
        <div className="w-1/2">
          <img src={InfoImg2} alt="information" />
        </div>
        <div className="w-1/2">
          <h2 className="font-bold text-[36px] leading-54px">
            Aksariyat kompaniyalar ishga joylashishda sizdan ish staji va
            portfolio so'raydi
          </h2>
          <p className="font-medium text-[20px] leading-[30px] mt-6">
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
