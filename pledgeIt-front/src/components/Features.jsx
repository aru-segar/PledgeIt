


const Features = () => {

    const features = [
        {
            icon:"https://img.icons8.com/bubbles/100/medal2-1.png",
            title: "Level Up Your Impact",
            description: "Earn XP and unlock achievements as you volunteer. The more you engage, the more you level up! Gamification keeps your volunteering experience fun and rewarding."
        },
        {
            icon: "https://img.icons8.com/bubbles/100/annual-general-meeting.png",
            title: "Volunteer Your Way",
            description: "PledgeIt matches you with volunteer opportunities that align with your interests and skills. Find meaningful causes that fit your passion and expertise."
        },
        {
            icon: 'https://img.icons8.com/bubbles/100/trophy.png',
            title: "Be Recognized, Be Celebrated",
            description: "Your efforts don't go unnoticed! Earn badges and recognition for your contributions, and be celebrated as a valued member of the PledgeIt community"

        }
    ];

    return(
        <div className="py-16">
            <p className="text-gray-600 text-center text-3xl font-bold mb-8"> Our Unique Edge</p>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature,index)=>(
                    <div key={index} className="p-6 bg-[#FFEDEE] rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <img src={feature.icon} alt="" className="w-1/4"/>
                        <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
                        <p className="mt-4">{feature.description}</p>
                    </div>
                ))}
            </div>
            <div className="text-center mt-10">
            <button className="bg-[#DE362E] text-white py-3 px-6 rounded-lg shadow-lg hover:bg-[#8c1913] transition-colors">Join Now</button>
            </div>
        </div>
    );

}
export default Features;