import { BiTimeFive } from "react-icons/bi";

const techJobs = [
    {
      id: 1,
      logo: "https://source.unsplash.com/100x100/?tech,google",
      image: "https://source.unsplash.com/500x300/?google-office",
      title: "Software Engineer",
      time: "Now",
      location: "Mountain View, CA",
      desc: "Responsible for developing scalable software solutions and collaborating on code review.",
      company: "Google"
    },
    {
      id: 2,
      logo: "https://source.unsplash.com/100x100/?tech,amazon",
      image: "https://source.unsplash.com/500x300/?amazon-office",
      title: "Data Engineer",
      time: "Now",
      location: "Seattle, WA",
      desc: "Design and optimize data pipelines and ensure data integrity for large-scale processing.",
      company: "Amazon"
    },
    {
      id: 3,
      logo: "https://source.unsplash.com/100x100/?tech,microsoft",
      image: "https://source.unsplash.com/500x300/?microsoft-office",
      title: "Product Manager",
      time: "Now",
      location: "Redmond, WA",
      desc: "Lead the product lifecycle from ideation to launch, coordinating with engineering and marketing.",
      company: "Microsoft"
    },
    {
      id: 4,
      logo: "https://source.unsplash.com/100x100/?tech,meta",
      image: "https://source.unsplash.com/500x300/?meta-office",
      title: "UI/UX Designer",
      time: "Now",
      location: "Menlo Park, CA",
      desc: "Create user-friendly and visually engaging interfaces for mobile and web applications.",
      company: "Meta"
    },
    {
      id: 5,
      logo: "https://source.unsplash.com/100x100/?tech,apple",
      image: "https://source.unsplash.com/500x300/?apple-office",
      title: "iOS Developer",
      time: "Now",
      location: "Cupertino, CA",
      desc: "Build and maintain iOS applications, focusing on user experience and performance optimization.",
      company: "Apple"
    },
    {
      id: 6,
      logo: "https://source.unsplash.com/100x100/?tech,netflix",
      image: "https://source.unsplash.com/500x300/?netflix-office",
      title: "Backend Developer",
      time: "Now",
      location: "Los Gatos, CA",
      desc: "Develop and maintain server-side logic, database management, and API integrations.",
      company: "Netflix"
    },
    {
      id: 7,
      logo: "https://source.unsplash.com/100x100/?tech,tesla",
      image: "https://source.unsplash.com/500x300/?tesla-office",
      title: "Machine Learning Engineer",
      time: "Now",
      location: "Palo Alto, CA",
      desc: "Develop machine learning algorithms to support autonomous vehicle systems.",
      company: "Tesla"
    },
    {
      id: 8,
      logo: "https://source.unsplash.com/100x100/?tech,ibm",
      image: "https://source.unsplash.com/500x300/?ibm-office",
      title: "Cloud Solutions Architect",
      time: "Now",
      location: "Armonk, NY",
      desc: "Design cloud infrastructure solutions to meet client needs in a hybrid cloud environment.",
      company: "IBM"
    },
    {
      id: 9,
      logo: "https://source.unsplash.com/100x100/?tech,salesforce",
      image: "https://source.unsplash.com/500x300/?salesforce-office",
      title: "CRM Developer",
      time: "Now",
      location: "San Francisco, CA",
      desc: "Customize Salesforce CRM solutions and build integrations to streamline business processes.",
      company: "Salesforce"
    },
    {
      id: 10,
      logo: "https://source.unsplash.com/100x100/?tech,stripe",
      image: "https://source.unsplash.com/500x300/?stripe-office",
      title: "DevOps Engineer",
      time: "Now",
      location: "San Francisco, CA",
      desc: "Automate and optimize deployment processes to ensure reliability in production environments.",
      company: "Stripe"
    }
  ];
  

const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {techJobs?.map(
          ({ id, logo, title, time, location, desc, company }) => {
            return (
              <div
                className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg cursor-pointer"
                key={id}
              >
                <span className="flex justify-between items-center gap-4">
                  <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                    {title}
                  </h1>
                  <span className="flex items-center text-[#ccc] gap-1">
                    <BiTimeFive />
                        {time}
                  </span>
                </span>
                <h6 className="text-[#ccc]">{location}</h6>
                <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                  {desc}
                </p>
                <div className="company flex iems-center gap-2">
                    <img src={logo} alt="Logo" className="w-[10%]" />
                  <span className="text-[14px] py-[1rem] block group-hover:text-white">
                   {company}
                  </span>
                </div>
                <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibAold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white">
                  Apply Now
                </button>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Jobs;
