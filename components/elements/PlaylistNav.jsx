import React from 'react'
import { IoMdPlayCircle } from 'react-icons/io';

const PlaylistNav = ({ playlist }) => {
const { id, owner, playlistName, songList } = playlist;

function onClickPlay() {
    console.log('play playlist');
}

  return (
    <li className='mx-3 px-4 py-2 h-auto flex flex-row justify-between items-center
    hover:bg-neutral-200 rounded-lg group'>
        <div className='flex flex-col'>
            <span className='text-[14px]'>{ playlistName }</span>
            <span className='text-[12px] text-neutral-300'>{ owner }</span>
        </div>
        <div>
            <div
            onClick={onClickPlay}
            className='hidden group-hover:block cursor-pointer'>
                <IoMdPlayCircle size={30} />
            </div>
        </div>
    </li>
  )
}

export default PlaylistNav