

export default function TailCard({title, subtitle, imgurl, keywords}) {
  
    let keyword = keywords.split(',');
  
    return (

        <div className="p-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 ">
            
            <img className="rounded-t-lg " src={imgurl} alt={title} />
            <h1 className="text-left text-xl p-1 mt-3 text-gray-600">
                {title}
            </h1>
            <div className="text-left p-1">
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{subtitle}</p>
                
                <div className="mt-7">
                    {keyword.map(item=><span className="inline-flex m-1 bg-gray-300 rounded-lg text-gray-600 text-sm p-1" key={item}>{item}</span>)}
                </div>
            </div>
        </div>
  )
}
