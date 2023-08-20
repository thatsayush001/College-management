import { useState } from 'react';
import styles from '../../style';
import { people02 } from '../../assets';
export let alumAdd;
const AlumniForm = ({ setFeedback, feedback }) => {
  console.log(styles);
  const [name, setName] = useState('');
  const [gradYear, setGradYear] = useState('');
  const [email, setEmail] = useState('');
  const [sentences, setSentences] = useState('');
  const [photo, setPhoto] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleGradYearChange = (event) => {
    setGradYear(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAchievementChange = (event) => {
    setSentences(event.target.value);
    // const sentences = achievements.split(".");
    // console.log(sentences);
  };


  const handlePhotoChange = (event) => {
    setPhoto(event.target.value);
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    // const achievements = sentences.split(".");
    setFeedback([...feedback, {
      id: "feedback-7",
      graduationYear: "Graduation Year : 2026",
      ach: "Achievements : ",
      achievements: ["Opened a 50M$ startup Company", "Big contribution in Machine Learning department"],
      name: "rre  ",
      title: "Founder & Leader",
      img: people02,
    },]);
    setPhoto('');
    setName('');
    setEmail('');
    setGradYear('');
    setSentences('');
    event.preventDefault();
  };
  // console.log(addAlumni);
  console.log(styles);
  return (
    <form onSubmit={handleSubmit} className={`${styles.flexStartLeft} flex-col p-20 max-w-xl border-y-2 bg-gray-900 border-white-700 rounded-3xl`}>

      <label htmlFor="picture">
        <img src='/src/assets/profile.png'
          alt="Upload"
          height="100px"
          width="100px"
          className='cursor-pointer hover:scale-125 ease-in-out duration-200 hover:transform-gpu'
        />
      </label>
      <input
        id="picture"
        src='/src/assets/profile.png'
        type="file"
        accept="image/*"
        value={photo}
        onChange={handlePhotoChange}
        className="rounded-lg border-white text-black hidden"
        required
      />
      <br />
      <label htmlFor="name" className="font-poppins font-semibold text-white text-lg">
        Name:
      </label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={handleNameChange}
        className="mt-2 py-1 mb-6 px-4 rounded-lg border-2 border-white w-full text-black"
        required
      />
      <br />
      <label htmlFor="name" className="font-poppins font-semibold text-white text-lg">
        Email:
      </label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={handleEmailChange}
        className="mt-2 py-1 mb-8 px-4 rounded-lg border-2 border-white w-full text-black"
        required
      /><br />
      <label htmlFor="gradYear" className="font-poppins font-semibold text-white text-lg mt-4">
        Graduation Year:
      </label>
      <input
        id="gradYear"
        type="number"
        value={gradYear}
        onChange={handleGradYearChange}
        className="mt-2 mb-8 py-1 px-4 rounded-lg border-2 border-white w-full text-black"
        required
      />

      <label htmlFor="gradYear" className="font-poppins font-semibold text-white text-lg mt-4">
        Achievements:
      </label>
      <input
        id="gradYear"
        type="text"
        value={sentences}
        onChange={handleAchievementChange}
        className="mt-2 mb-4 py-1 px-4 rounded-lg border-2 border-white w-full text-black"
        required
      />
      <button type="submit"
        className="mt-4 py-2 px-4 rounded-lg bg-white text-black font-semibold 
      hover:bg-gray-700 hover:text-white hover:scale-105 ease-in-out duration-200">
        Submit
      </button>
    </form>
  );
};

const AlumniSection = ({ setFeedback, feedback }) => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  return (
    <>
      <section
        className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
      >
        <div className="flex-1 flex flex-col">
          <h2 className={styles.heading2}>Add Alumnus :</h2>
          <p className={`${styles.paragraph} max-w-[490px] mt-5`}>
            Click on Add Alumni button, enter the details and Submit it. An Alumni will be added.
          </p>
        </div>

        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
          {/* {showForm ? (
          <AlumniForm />
        ) : ( */}
          <button
            onClick={handleButtonClick}
            className="py-2 px-4 rounded-lg bg-white text-black font-semibold"
          >
            Add Alumni
          </button>
        </div>
      </section>
      <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding}`}>
        {showForm ? (
          <AlumniForm setFeedback={setFeedback} feedback={feedback} />
        ) : (<div className={`${styles.paragraph} max-w-[490px]`}>Register as Alumni</div>)}

      </section>
    </>
  );
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default function Home({ setFeedback, feedback }) {
  return <AlumniSection setFeedback={setFeedback} feedback={feedback} />;
}

