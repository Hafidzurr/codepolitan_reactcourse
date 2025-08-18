import posts from "../posts.json"
import Article from "../components/article";
import { useState } from "react";

function Homepage () {

const [search, setSearch] = useState()

const changeSearch = (event) => {
    setSearch(event.target.value)

}
    return(
    <>
        <h1>Favorite Song</h1>
        <div>Search Song : <input onChange={changeSearch}></input></div>
        <small>Ditemukan 0 data dengan pencarian kata "{search}"</small>
        {/* {posts.map((song) => ( 
            <Article title={song.title} artist={song.artist} tags={song.tags} date={song.date} />   */}
            {posts.map(({ title, artist, tags, date}, index) => (
                <Article {...{title, artist, tags, date}} key={index}/>
            ))}
    </>
    )
}

export default Homepage;