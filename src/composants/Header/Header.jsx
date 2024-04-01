import PageTitle from './PageTitle';
import TopTweets from './TopTweets';
import Imageetoile from '../../assets/Vector.svg';

export default function Header (){
    return <div className="py-6 px-4 flex items-center justify-between border-b border-solid border-gray-700">
        <PageTitle
            titre="Home"
        />
        <TopTweets
            img={Imageetoile}
        />
    </div>
}