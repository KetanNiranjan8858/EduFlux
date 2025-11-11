
import FeatureContainer from './FeatureContainer';

function Feature() {

    const featureData = [
        {
            title: "Scheduling",
            logo: "📅",
            decs: "Master your time with our intelligent scheduling and personalized study reminders."
        },
        {
            title: "AI Questions",
            logo: "🤖",
            decs: "Generate custom, adaptive practice questions tailored to your knowledge gaps."
        },
        {
            title: "Doubt Solving",
            logo: "❓",
            decs: "Get instant, 24/7 clarification on complex topics from our dedicated AI assistant"
        },
        {
            title: "Video cut",
            logo: "✂️",
            decs: "Easily trim and edit educational videos to focus on the most important content."
        },
        {
            title: "Goal Setting",
            logo: "🎯",
            decs: "Set, track, and achieve your learning goals with our intuitive goal management tools."
        },
        {
            title: "Community Forums",
            logo: "💬",
            decs: "Engage with peers, share insights, and collaborate in our vibrant learning community."
        },
        {
            title: "Analytics Dashboard",
            logo: "📊",
            decs: "Monitor your progress with detailed analytics and performance insights."
        },
        {
            title: "Resume Analysis",
            logo: "📄",
            decs: "Optimize your resume with AI-driven feedback to enhance your job prospects."
        },
        {
            title: "Skill Gap Bridging",
            logo: "🔧",
            decs: "Identify and bridge your skill gaps with targeted learning resources and recommendations."
        }
    ]

  return (
    <div className='flex flex-col justify-center items-center p-10 gap-4'>
        <h1 className='text-4xl text-blue-500 font-bold'><span className="text-4xl">💡</span> Core Features of Eduflux</h1>
        <div className='text-center text-xl m-5 text-gray-500'>Our intelligent suite of tools is designed to streamline your learning process, from <br />planning your studt time to mastering advanced skills.</div>
        
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

export default Feature;