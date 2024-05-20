import React from 'react'

function Login() {

    const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=921d3570abcc48fea588b91fd56190f3&response_type=code&redirect_uri=http://localhost:5173&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-read-recently-played"


  return (
    <div className='bg-[#121212] h-[100vh] flex items-center justify-center'>
        <div className='flex flex-col items-center space-y-[10px]'>
            <h2 className='text-white font-bold text-[36px] mb-3'>Welcome to Spotify</h2>
            <a className='p-2 px-4 rounded-md bg-blue-500 text-white transition-all duration-300 hover:scale-110 font-bold text-[22px] text-center' href={AUTH_URL}>Login to Spotify</a>
        </div>
    </div>
  )
}

export default Login