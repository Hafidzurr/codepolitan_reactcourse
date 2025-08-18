function Article (props) {
    // let results = []
    // for (let i=1;i<=10;i++) {
    //     results.push(`percobaan ${i} `)
    // }
    
    return (
        <>
            <h3>{props.title}</h3>
            <small>artist : {props.artist}, tags : {props.tags.join(", ")}, Date : {props.date} </small>
                {/* <div>
                    {props.hobby.map((hobby) => {
                        return <div> - {hobby}</div>
                    })}
                </div> */}
            {/* <div>
                {results.map((result) => {
                    return (
                        <>
                            <div>{result}</div>
                            <div>{result+'.5'}</div>
                        </>
                    )
                } )}
            </div> */}
        </>
    )

    // return <div>Ini adalah component pertama</div>
}

export default Article;