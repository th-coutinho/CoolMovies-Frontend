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
    <div className="mt-6 flex items-center space-x-2"> 
      <div className="flex flex-shrink-0 rounded-full border border-gray-200">
        <img
          className="w-8 h-8 object-cover rounded-full"
          src={avatarSrc}
          alt="Avatar"
        />
      </div>
      <p className="text-sm font-semibold leading-5 text-gray-900">by: {name}</p>
      <div className="flex-shrink-0">
        <FaCheckCircle/>
      </div>
    </div>
  )
}
