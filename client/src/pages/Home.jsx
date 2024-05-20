import {Link} from 'react-router-dom'

const Home = () => {
  return <div className="flex justify-center items-center flex-col h-[80vh] gap-8">
    <h1 className="text-4xl md:text-8xl font-concertOne text-white">Try something epic...</h1>
    
    <Link to={'/signup'}
    className="bg-primary font-ropaSans text-white px-5 py-3 rounded-full hover:bg-primaryLight transition-all duration-300 ease-in-out">Create account
    </Link>
  </div>;
};

export default Home;
