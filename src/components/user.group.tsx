import React from "react";

interface UserGroupProps {
  count: number;
  avatars: string[];
}

const UserGroup: React.FC<UserGroupProps> = ({ count, avatars }) => {
  return (
    <div className="flex items-center space-x-3 justify-center">
      <div className="flex -space-x-2">
        {avatars.slice(0, 3).map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`User ${index + 1}`}
            className="w-12 h-12 rounded-full border-2 border-white"
          />
        ))}
        {count > 3 && (
          <div className="w-12 h-12 flex items-center justify-center bg-primary text-white text-[14px] leading-[14px] font-bold rounded-full border-2 border-white">
            +{count - 3}
          </div>
        )}
      </div>
      <p className="text-dark text-[16px] leading-[22.4px]">
        человек уже стали участниками групп <br /> по своим направлениям
      </p>
    </div>
  );
};

export default UserGroup;
