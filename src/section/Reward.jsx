
import FeatureContainer from './FeatureContainer';

function Reward() {

    const featureData = [
        {
            title: "Master AI Questions-50pts",
            logo: "🤖",
            decs: "Earn points for correctly answering AI-generated questions"
        },
        {
            title: "Complete Schedule-100pts",
            logo: "📅",
            decs: "Get rewards for sticking to your personalized study schedule"
        },
        {
            title: "Improve Analytics Score-200pts",
            logo: "📊",
            decs: "Gain bonus points for significant jumps in your overall analytics score"
        },
        {
            title: "Finish a Course Module-300pts",
            logo: "🎓",
            decs: "Receive rewards for completing course modules ahead of time"
        },
        {
            title: "Refer a Friend-500pts",
            logo: "👥",
            decs: "Get bonus points when your referred friends sign up and start learning"
        }
    ]

    const pointsData = [
        {
            title:"Mastery Certificate",
            description:"Earn a certificate recognizing your expertise after accumulating 10,000 points.",
            points:"10,000 pts"
        },
        {
            title:"Exclusive Course",
            description:"Unlock access to a premium course of your choice upon reaching 25,000 points.",
            points:"25,000 pts"
        },
        {
            title:"Career Reference",
            description:"Receive a personalized career reference letter after earning 50,000 points.",
            points:"50,000 pts"
        },
        {
            title:"1-on-1 Mentorship Session",
            description:"Gain access to a private mentorship session with an industry expert at 75,000 points.",
            points:"75,000 pts"     
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

        <div className='text-2xl text-black font-bold mt-20'>Rewards Tier</div>
        <div className='text-center text-xl text-gray-500'>Reach these point threshold to unlock your rewards Tier 100,000 points</div>
        
        <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6'>
                {pointsData.map((feature) => (
                    <FeatureContainer
                      // FIX 1: Use feature.id as the required unique key
                      key={feature.id} 
                      // FIX 2: Correctly pass feature.logo to the icon prop
                      title={feature.title}
                      // FIX 3: Correctly pass feature.decs to the description prop
                      description={feature.description}
                      
                    />
                ))}
        </div>

    </div>
  );
}

export default Reward;