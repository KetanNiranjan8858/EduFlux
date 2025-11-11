
import FeatureContainer from './FeatureContainer';

function Reward() {

    const featureData = [
        {
            title: "Master AI Questions",
            logo: "🤖",
            decs: "Earn points for correctly answering AI-generated questions"
        },
        {
            title: "Complete Schedule",
            logo: "📅",
            decs: "Get rewards for sticking to your personalized study schedule"
        },
        {
            title: "Improve Analytics Score",
            logo: "📊",
            decs: "Gain bonus points for significant jumps in your overall analytics score"
        },
        {
            title: "Finish a Course Module",
            logo: "🎓",
            decs: "Receive rewards for completing course modules ahead of time"
        },
        {
            title: "Refer a Friend",
            logo: "👥",
            decs: "Get bonus points when your referred friends sign up and start learning"
        }
    ]

  return (
    <div className='flex flex-col justify-center items-center p-10 gap-4 bg-gray-100 m-10 ml-20 mr-20 rounded-2xl'>
        <h1 className='text-4xl text-blue-500 font-bold'><span className="text-4xl">🏅</span> Points & Rewards Center</h1>
        <div className='text-center text-xl m-5 text-gray-500'>Track your progress, earn points for completing tasks, and unlock exclusive rewards to<br />accelerate your learning journey</div>
        
        <div className='text-2xl text-black font-bold'>Ways to earn points</div>

        <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6'>
                {featureData.map((feature) => (
                    <FeatureContainer
                      // FIX 1: Use feature.id as the required unique key
                      key={feature.id} 
                      // FIX 2: Correctly pass feature.logo to the icon prop
                      icon={feature.logo}
                      title={feature.title}
                      // FIX 3: Correctly pass feature.decs to the description prop
                      description={feature.decs}
                      
                    />
                ))}
            </div>  


    </div>
  );
}

export default Reward;