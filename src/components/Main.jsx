import {useEffect} from  "react"
import {React} from "react"
import { useDispatch,useSelector } from "react-redux"


const Main = () => {

    const Track = useSelector(state=> state.music.track)
    const dispatch = useDispatch() //constante l'invio dell'azione 
    const fetchTrack = async () =>{ //inizo fetch
        try {
            const res = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=linkin%20park")
            if(res.ok){
                const dataMusic = await res.json() //creazione di una costante in cui andiamo ad inviare il file json
                console.log(dataMusic)
                dispatch({type:"ADD_TRACK_MAIN", payload:dataMusic.data})

            }
        } catch (error) {
            console.log("errore")
        }
    }
    useEffect  (()=>{
        fetchTrack()
    },[])
    return(
        <>
        <div className="row">
        <div className="col-10">
          <div id="searchResults" style={{display: "none"}}>
            <h2>Search Results</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
            ></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="rock">
            <h2>Rock ClassNameics</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="rockSection"
            ></div>
          </div>
        </div>
      </div>
      <div className="row">
            <div className="col-10">
              <div id="pop">
                <h2>Pop Culture</h2>
                <div
                  className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                  id="popSection"
                ></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-10">
              <div id="hiphop">
                <h2>#HipHop</h2>
                <div
                  className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                  id="hipHopSection"
                ></div>
              </div>
            </div>
          </div>
      </>
    )
}
export default Main