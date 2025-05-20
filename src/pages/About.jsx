import HeroImage from "../components/HeroImage"
import aboutImage from "../assets/images/aboutImage.jpg"
import aboutSection from "../assets/images/aboutSection.jpg"

function About() {
  return (
    <div>
      <HeroImage
        imageUrl={aboutImage}
        title="About Us"
        subtitle="Discover who we are and what we stand for"
      />
      <h1 className="font-bold text-blue-950 text-5xl text-center my-4">
        About Us
      </h1>
      <div className="grid grid-cols-2 my-[70px] mx-[50px] gap-3">
        <div className="p-4">
          <h1 className="font-bold text-blue-950 font-serif text-[36px] py-4">
            Who We Are
          </h1>
          <p className="text-xl leading-[1.6]">
            We are a passionate team dedicated to making high-quality tech
            education accessible for everyone. Our platform offers a wide range
            of courses, tutorials, and hands-on projects that help learners
            build real-world skills and stay ahead in the fast-changing tech
            world. We are a passionate team dedicated to making high-quality
            tech education accessible for everyone. Our platform offers a wide
            range of courses, tutorials, and hands-on projects that help
            learners build real-world skills and stay ahead in the fast-changing
            tech world.
          </p>
        </div>
        <div className="p-4">
          <img
            src={aboutSection}
            alt="about"
            className="w-full h-full object-cover overflow-hidden rounded-md"
          />
        </div>
      </div>
    </div>
  )
}

export default About
