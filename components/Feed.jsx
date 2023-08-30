import React from 'react'
import Card from './Card'


const PromptCardList = ({ }) => {
  return (
    <div className='mt-16 prompt_layout'>
    
        <Card
    
        />

    </div>
  );
};



function Feed() {
  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search for a tag or a username'
         
          required
          className='search_input peer'
        />
      </form>

    <PromptCardList/>
    </section>
  )
}

export default Feed