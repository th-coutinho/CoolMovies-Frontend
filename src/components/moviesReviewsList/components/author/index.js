import { AvatarGenerator } from 'random-avatar-generator';
import { FaCheckCircle } from 'react-icons/fa';

export default function Score({ name }) {
  const getAvatarSrc = () => {
    const imageGenerator = new AvatarGenerator();
    const pictureSrc = imageGenerator.generateRandomAvatar();

    return pictureSrc;
  };

  const avatarSrc = getAvatarSrc();

  return (
    <div className="flex items-center space-x-2">
      <div className="flex flex-shrink-0 rounded-full">
        <img
          className="w-8 h-8 object-cover rounded-full"
          src={avatarSrc}
          alt="Avatar"
        />
      </div>
      <p className="text-sm font-semibold leading-5 text-gray-900">{name}</p>
      <div className="flex-shrink-0 text-green-500">
        <FaCheckCircle/>
      </div>
    </div>
  )
};
