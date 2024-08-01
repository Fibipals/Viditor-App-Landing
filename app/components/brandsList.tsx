import Image from "next/image";

interface BrandCardProps{
  path: string;
}

const BrandCard = ({path}:BrandCardProps) => (
  <div className='flex items-center justify-center flex-1 min-w-16 m-4'>
    <Image src={path} alt="Brand Logo" width={110} height={20}/>
  </div>
)

const BrandList = () => (
  <div className="flex flex-col md:flex-row items-center justify-between px-16 mt-12">
    <BrandCard path="/brands/google.png"/>
    <BrandCard path="/brands/youtube.png"/>
    <BrandCard path="/brands/openai.png"/>
    <BrandCard path="/brands/adobe.png"/>
  </div>
);

export default BrandList;
