interface AvatarProps {
  src?: string;
  initials: string;
  name: string;
  bgColor: string;
}

function Avatar({ src, initials, name, bgColor }: AvatarProps) {
  return (
    <>
      {src ? (
        <img
          src={src}
          alt={name}
          className="w-6 h-6 rounded-full object-cover"
        />
      ) : (
        <div
          className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold ${bgColor}`}
        >
          {initials}
        </div>
      )}
    </>
  );
}

export default Avatar;
