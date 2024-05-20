
import React, { useEffect, useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-node'
import Tracks from '../../components/Tracks/Tracks'
import useHook from '../../hook/useHook'
import PlayBack from '../../components/PlayBack/PlayBack'
import { useNavigate } from 'react-router-dom'

import Back from '../../assets/Images/Back.svg'
import Forward from '../../assets/Images/Forward.svg'

function Asosiy({code}) {

  const spotifyApi = new SpotifyWebApi({
    clientId: "921d3570abcc48fea588b91fd56190f3"
  })
  const accessToken = useHook(code)

  const navigate = useNavigate()

  const [mixes, setMixes] = useState("Yulduz Usmonova")
  const [made, setMade] = useState("Mirjalol Ne'matov")
  const [recently, setRecently] = useState("Doston Ergashev")

  const [title, setTitle] = useState("")
  const [artist, setArtist] = useState([])

  const [xamdam, setXamdam] = useState([])
  const [mirjalol, setMirjalol] = useState([])
  const [doston, setDoston] = useState([])
  const [album, setAlbum] = useState("")
  const [state, setState] = useState([])
  const [play, setPlay] = useState("")
  const [playing, setPlaying] = useState(false)
  const [artistId, setArtistId] = useState(null)

  const choosePlay = (item) => {
    setPlay(item.uri.uri);
    setPlaying(true)
  }


  useEffect(() => {
    if(!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken, mixes, made, recently, title, album])


  useEffect(() => {
    if(!mixes){
      setXamdam([])
    }
    if(!accessToken) return
      spotifyApi.searchArtists(mixes).then(res => {
        setXamdam(res.body.artists.items?.map(item => {
          const data = {
            name:item.name,
            img:item.images[0].url,
          };
          return data
        }));
      })
    
  }, [accessToken, mixes])
  
   useEffect(() => {
    if(made) {
      spotifyApi.searchAlbums(made).then((res) => {
        setMirjalol(res.body.albums.items.map(item => {
            const data = {
              img:item.images[0].url,
              name:item.name,
              uri:item.artists[0]
            }
            return data
        }))
      })
    }
    else{
      setMirjalol([])
    }
   }, [made, accessToken])

   useEffect(() => {
    if(recently) {
      spotifyApi.searchAlbums(recently).then((res) => {
        setDoston(res.body.albums.items.map(item => {
            const data = {
              img:item.images[0].url,
              name:item.name,
              uri:item.artists[0]
            }
            return data
        }))
      })
    }
    else{
      setDoston([])
    }
   }, [recently, accessToken])


  //  useEffect(() => {
  //   if(album){
  //     spotifyApi.searchArtists(album).then(res => {
  //       console.log(res);
  //       setState(res.body.artists.items.map(item => {
  //         const data = {
  //           img:item.images[0].url,
  //           name:item.name,
  //         };
  //         return data
  //       }));
  //     })
  //   }
  // }, [accessToken, album])

 

  useEffect(() => {
    if(!album){
      setState([])
    }
    if(!accessToken) return
    if (album != ""){
      spotifyApi.searchArtists(album).then(res => {
        setState(res.body.artists.items?.map(item => {
          const data = {
            id: artistId,
            name:item.name,
            img:item.images[0].url,
          };
          return data
        }));
      })
    }
  }, [accessToken, album])


   useEffect(() => {
    if(title) {
      spotifyApi.searchTracks(title).then((res) => {
        setArtist(res.body.tracks.items.map(item => {
            const data = {
              img:item.album.images[0].url,
              name:item.name,
              uri:item.artists[0]
            }
            return data
        }))
      })
    }
    else{
      setArtist([])
    }
   }, [title, accessToken])


  const clickArtist = (id) => {
    setArtistId(id)
  }
  return (
    <div className='home__page'>
      <div className=' pb-[357px]'>
        <div className='flex items-center space-x-[22px] py-[20px] mb-[30px]'>
          <button onClick={() => navigate(-1)}>
            <img src={Back} alt="Back icon" width={40} height={40}/>
          </button>
          <button>
            <img src={Forward} alt="Back icon" width={40} height={40}/>
          </button>
        </div>
        <h2 className='font-bold text-[39px] leading-[49.33px] text-white'>Good afternoon</h2>
      </div>

      <div className='mb-[50px]'>
          <input value={album} onChange={(e) => setAlbum(e.target.value)} className='border-[1px] border-gray-300 mb-[20px] bg-transparent w-[100%] rounded-md text-white p-3 outline-none focus:shadow-md focus:shadow-blue-500' type="text" placeholder='Searching Artist...' />
      <div className='flex items-end justify-between mb-[26px]'>
        <h3 className='text-[30px] font-bold leading-[37.95px] text-white'>Search Artist results</h3>
        <a className='text-[#ADADAD] text-[16px] leading-[20.24px] font-bold' href="#">SEE ALL</a>
      </div>
      <ul className='flex items-center justify-between'>
           {
              state?.slice(0, 4).map((item, index) => (
                <li key={index} onClick={() => clickArtist(item.id)} className='w-[224px] cursor-pointer rounded-[8px] p-[20px] bg-[#1B1B1B]'>
                    <img className='rounded-[4px]' src={item.img} alt="Image" width={182} height={182} />
                  <h2 className='text-[#FFFFFF] text-[20px] font-bold leading-[25.3px] mt-[25px]'>{item.name}</h2>
                </li>
              ))
            }
        </ul>
      </div>

      <div className='mb-[50px]'>
      <div className='flex items-end justify-between mb-[26px]'>
        <h3 className='text-[30px] font-bold leading-[37.95px] text-white'>Your top mixes (Artist)</h3>
        <a className='text-[#ADADAD] text-[16px] leading-[20.24px] font-bold' href="#">SEE ALL</a>
      </div>
      <ul className='flex items-center justify-between'>
         {
              xamdam?.slice(0, 4).map((item, index) => (
                <li key={index}  className='w-[224px] cursor-pointer rounded-[8px] p-[20px] bg-[#1B1B1B]'>
                    <img className='rounded-[4px]' src={item.img} alt="Image" width={182} height={182} />
                  <h2 className='text-[#FFFFFF] text-[20px] font-bold leading-[25.3px] mt-[25px]'>{item.name}</h2>
                </li>
              ))
            }
        </ul>
      </div>

      <div className='mb-[50px]'>
      <div className='flex items-end justify-between mb-[26px]'>
        <h3 className='text-[30px] font-bold leading-[37.95px] text-white'>Made for you (Album)</h3>
        <a className='text-[#ADADAD] text-[16px] leading-[20.24px] font-bold' href="#">SEE ALL</a>
      </div>
      <ul className='flex items-center justify-between'>
        {
          mirjalol.slice(1, 5).map((item, index) => (
            <Tracks key={index}  item={item}/>
          ))
        }
        </ul>
      </div>

      <div className='mb-[50px]'>
      <div className='flex items-end justify-between mb-[26px]'>
        <h3 className='text-[30px] font-bold leading-[37.95px] text-white'>Recently played (Album)</h3>
        <a className='text-[#ADADAD] text-[16px] leading-[20.24px] font-bold' href="#">SEE ALL</a>
      </div>
      <ul className='flex items-center justify-between'>
        {
          doston.slice(1, 5).map((item, index) => (
            <Tracks key={index} item={item}/>
          ))
        }
        </ul>
      </div>

      <div className='mb-[50px]'>
          <input value={title} onChange={(e) => setTitle(e.target.value)} className='border-[1px] border-gray-300 mb-[20px] bg-transparent w-[100%] rounded-md text-white p-3 outline-none focus:shadow-md focus:shadow-blue-500' type="text" placeholder='Searching music tracks...' />
      <div className='flex items-end justify-between mb-[26px]'>
        <h3 className='text-[30px] font-bold leading-[37.95px] text-white'>Search results</h3>
        <a className='text-[#ADADAD] text-[16px] leading-[20.24px] font-bold' href="#">SEE ALL</a>
      </div>
      <ul className='flex items-center justify-between'>
           {
              artist.slice(0, 4).map((item, index) => (
                <Tracks key={index} choosePlay={() => choosePlay(item)} item={item}/>
              ))
            }
        </ul>
      </div>
          <div>
            <PlayBack play={play} accessToken={accessToken} playing={playing} setPlaying={setPlaying}/>
          </div>
    </div>
  )
}

export default Asosiy