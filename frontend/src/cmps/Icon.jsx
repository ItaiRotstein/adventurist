import { Suspense, lazy, memo } from 'react';

const IoLogoFacebook = lazy(() => import('react-icons/io5').then(module => ({ default: module.IoLogoFacebook })));
const IoLogoInstagram = lazy(() => import('react-icons/io5').then(module => ({ default: module.IoLogoInstagram })));
const IoLogoTwitter = lazy(() => import('react-icons/io5').then(module => ({ default: module.IoLogoTwitter })));
const IoCheckmark = lazy(() => import('react-icons/io5').then(module => ({ default: module.IoCheckmark })));
const IoClose = lazy(() => import('react-icons/io5').then(module => ({ default: module.IoClose })));
const IoLocationOutline = lazy(() => import('react-icons/io5').then(module => ({ default: module.IoLocationOutline })));
const IoInformationCircleOutline = lazy(() => import('react-icons/io5').then(module => ({ default: module.IoInformationCircleOutline })));
const IoFitness = lazy(() => import('react-icons/io5').then(module => ({ default: module.IoFitness })));
const IoFastFoodOutline = lazy(() => import('react-icons/io5').then(module => ({ default: module.IoFastFoodOutline })));
const IoWalletOutline = lazy(() => import('react-icons/io5').then(module => ({ default: module.IoWalletOutline })));
const IoMenu = lazy(() => import('react-icons/io5').then(module => ({ default: module.IoMenu })));
const IoSearch = lazy(() => import('react-icons/io5').then(module => ({ default: module.IoSearch })));
const IoHeart = lazy(() => import('react-icons/io5').then(module => ({ default: module.IoHeart })));
const IoChevronUp = lazy(() => import('react-icons/io5').then(module => ({ default: module.IoChevronUp })));
const IoChevronDown = lazy(() => import('react-icons/io5').then(module => ({ default: module.IoChevronDown })));

const TbWorldWww = lazy(() => import('react-icons/tb').then(module => ({ default: module.TbWorldWww })));
const TbDisabled = lazy(() => import('react-icons/tb').then(module => ({ default: module.TbDisabled })));

const CiShop = lazy(() => import('react-icons/ci').then(module => ({ default: module.CiShop })));
const CiClock1 = lazy(() => import('react-icons/ci').then(module => ({ default: module.CiClock1 })));

const FaWhatsapp = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaWhatsapp })));
const FaPhone = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaPhone })));
const FaShower = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaShower })));
const FaWaze = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaWaze })));
const FaHeart = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaHeart })));
const FaExclamationTriangle = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaExclamationTriangle })));

const MdOutlineEmail = lazy(() => import('react-icons/md').then(module => ({ default: module.MdOutlineEmail })));
const MdEmojiPeople = lazy(() => import('react-icons/md').then(module => ({ default: module.MdEmojiPeople })));
const MdGroups = lazy(() => import('react-icons/md').then(module => ({ default: module.MdGroups })));

const GiTeacher = lazy(() => import('react-icons/gi').then(module => ({ default: module.GiTeacher })));
const GiGlassCelebration = lazy(() => import('react-icons/gi').then(module => ({ default: module.GiGlassCelebration })));

const IoMdShare = lazy(() => import('react-icons/io').then(module => ({ default: module.IoMdShare })));
const FaChildren = lazy(() => import('react-icons/fa6').then(module => ({ default: module.FaChildren })));
const LuParkingCircle = lazy(() => import('react-icons/lu').then(module => ({ default: module.LuParkingCircle })));
const PiDress = lazy(() => import('react-icons/pi').then(module => ({ default: module.PiDress })));
const HiShoppingBag = lazy(() => import('react-icons/hi2').then(module => ({ default: module.HiShoppingBag })));

const MdOutlineLocalActivity = lazy(() => import('react-icons/md').then(module => ({ default: module.MdOutlineLocalActivity })));
const MdOutlineRecommend = lazy(() => import('react-icons/md').then(module => ({ default: module.MdOutlineRecommend })));
const IoLocationSharp = lazy(() => import('react-icons/io5').then(module => ({ default: module.IoLocationSharp })));
const IoIosInformationCircleOutline = lazy(() => import('react-icons/io').then(module => ({ default: module.IoIosInformationCircleOutline })));
const BsQuestionSquare = lazy(() => import('react-icons/bs').then(module => ({ default: module.BsQuestionSquare })));
const GrContact = lazy(() => import('react-icons/gr').then(module => ({ default: module.GrContact })));
const TiBusinessCard = lazy(() => import('react-icons/ti').then(module => ({ default: module.TiBusinessCard })));

export const Icon = memo(({ icon, className, onClick }) => (
  <Suspense fallback={<div className={className}></div>}>
    {icon === 'IoLogoFacebook' && <IoLogoFacebook className={className} onClick={onClick} />}
    {icon === 'IoLogoInstagram' && <IoLogoInstagram className={className} onClick={onClick} />}
    {icon === 'IoLogoTwitter' && <IoLogoTwitter className={className} onClick={onClick} />}
    {icon === 'IoCheckmark' && <IoCheckmark className={className} onClick={onClick} />}
    {icon === 'IoClose' && <IoClose className={className} onClick={onClick} />}
    {icon === 'IoLocationOutline' && <IoLocationOutline className={className} onClick={onClick} />}
    {icon === 'IoInformationCircleOutline' && <IoInformationCircleOutline className={className} onClick={onClick} />}
    {icon === 'IoFitness' && <IoFitness className={className} onClick={onClick} />}
    {icon === 'IoFastFoodOutline' && <IoFastFoodOutline className={className} onClick={onClick} />}
    {icon === 'IoWalletOutline' && <IoWalletOutline className={className} onClick={onClick} />}
    {icon === 'IoMenu' && <IoMenu className={className} onClick={onClick} />}
    {icon === 'IoSearch' && <IoSearch className={className} onClick={onClick} />}
    {icon === 'IoHeart' && <IoHeart className={className} onClick={onClick} />}
    {icon === 'IoChevronUp' && <IoChevronUp className={className} onClick={onClick} />}
    {icon === 'IoChevronDown' && <IoChevronDown className={className} onClick={onClick} />}
    {icon === 'TbWorldWww' && <TbWorldWww className={className} onClick={onClick} />}
    {icon === 'TbDisabled' && <TbDisabled className={className} onClick={onClick} />}
    {icon === 'CiShop' && <CiShop className={className} onClick={onClick} />}
    {icon === 'CiClock1' && <CiClock1 className={className} onClick={onClick} />}
    {icon === 'FaWhatsapp' && <FaWhatsapp className={className} onClick={onClick} />}
    {icon === 'FaPhone' && <FaPhone className={className} onClick={onClick} />}
    {icon === 'FaShower' && <FaShower className={className} onClick={onClick} />}
    {icon === 'FaWaze' && <FaWaze className={className} onClick={onClick} />}
    {icon === 'FaHeart' && <FaHeart className={className} onClick={onClick} />}
    {icon === 'FaExclamationTriangle' && <FaExclamationTriangle className={className} onClick={onClick} />}
    {icon === 'MdOutlineEmail' && <MdOutlineEmail className={className} onClick={onClick} />}
    {icon === 'MdEmojiPeople' && <MdEmojiPeople className={className} onClick={onClick} />}
    {icon === 'MdGroups' && <MdGroups className={className} onClick={onClick} />}
    {icon === 'GiTeacher' && <GiTeacher className={className} onClick={onClick} />}
    {icon === 'GiGlassCelebration' && <GiGlassCelebration className={className} onClick={onClick} />}
    {icon === 'IoMdShare' && <IoMdShare className={className} onClick={onClick} />}
    {icon === 'FaChildren' && <FaChildren className={className} onClick={onClick} />}
    {icon === 'LuParkingCircle' && <LuParkingCircle className={className} onClick={onClick} />}
    {icon === 'PiDress' && <PiDress className={className} onClick={onClick} />}
    {icon === 'HiShoppingBag' && <HiShoppingBag className={className} onClick={onClick} />}
    {icon === 'MdOutlineLocalActivity' && <MdOutlineLocalActivity className={className} onClick={onClick} />}
    {icon === 'MdOutlineRecommend' && <MdOutlineRecommend className={className} onClick={onClick} />}
    {icon === 'IoLocationSharp' && <IoLocationSharp className={className} onClick={onClick} />}
    {icon === 'IoIosInformationCircleOutline' && <IoIosInformationCircleOutline className={className} onClick={onClick} />}
    {icon === 'BsQuestionSquare' && <BsQuestionSquare className={className} onClick={onClick} />}
    {icon === 'GrContact' && <GrContact className={className} onClick={onClick} />}
    {icon === 'TiBusinessCard' && <TiBusinessCard className={className} onClick={onClick} />}
  </Suspense>
));
