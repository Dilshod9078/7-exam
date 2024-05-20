import React from 'react'
import SpotifywebPlayer from 'react-spotify-web-playback'

function PlayBack({accessToken, play, playing, setPlaying}) {
  return (
   <SpotifywebPlayer token={accessToken} uris={play ? [play] : []}
   play={playing}
     callback={(e) => {
        if(e.isPlaying) {
            setPlaying(false)
        }
     }}
   />
  )
}

export default PlayBack