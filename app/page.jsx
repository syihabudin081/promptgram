import Card from "@components/Card";
import Feed from "@components/Feed";


const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Promptgram
      <br className='max-md:hidden' />
      <span className='green_gradient text-center'> Share & Discover AI-Powered Prompts</span>
    </h1>
    <p className='desc text-center'>
      Promptgram is a platform for discovering and sharing AI-generated prompts.
    </p>
    <Feed/>


  </section>
);

export default Home;