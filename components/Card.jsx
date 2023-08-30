import React from 'react'
import Image from 'next/image'

function Card() {
  return (
    <div className='prompt_card'>
    <div className='flex justify-between items-start gap-5'>
      <div
        className='flex-1 flex justify-start items-center gap-3 cursor-pointer'
        // onClick={handleProfileClick}
      >
        <Image
          src="/assets/images/profile.svg"
          alt='user_image'
          width={40}
          height={40}
          className='rounded-full object-contain'
        />

        <div className='flex flex-col'>
          <h3 className='font-satoshi font-semibold text-gray-900'>
            Raim Lode
          </h3>
          <p className='font-inter text-sm text-gray-500'>
           Michael@email.com
          </p>
        </div>
      </div>

      <div className='copy_btn'>
        <Image
          src="/assets/icons/copy.svg"
          
          alt= "copy_icon"
          width={12}
          height={12}
        />
      </div>
    </div>

    <p className='my-4 font-satoshi text-sm text-gray-700'>Create a funny joke for my standup comedy next week</p>
    <p
      className='font-inter text-sm blue_gradient cursor-pointer'
      // onClick={() => handleTagClick && handleTagClick(post.tag)}
    >
      #jokes
    </p>

    {(
      <div className='mt-5 flex-center gap-4 border-t border-gray-100 pt-3'>
        <p
          className='font-inter text-sm green_gradient cursor-pointer'
          // onClick={handleEdit}
        >
          Edit
        </p>
        <p
          className='font-inter text-sm orange_gradient cursor-pointer'
          // onClick={handleDelete}
        >
          Delete
        </p>
      </div>
    )}
  </div>
  )
}

export default Card