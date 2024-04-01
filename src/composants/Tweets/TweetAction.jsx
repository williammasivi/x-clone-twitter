
export default function TweetAction (props){
    return (
        <div className="flex items-center justify-center gap-20">
            <div className="flex justify-center items-center gap-4 text-gray-600 text-base hover:text-blue-500">
                <img src={props.image} />
              <span>{props.action}</span>
            </div>
              
        </div>
    )
}