import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero mt-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img
                        className='rounded-xl w-3/4'
                        src={person} />
                    <img
                        className='rounded-xl w-1/2 absolute right-5 top-1/2 border-8 border-white'
                        src={parts} />
                </div>
                <div className='lg:w-1/2 mt-14 md:mt-0'>
                    <h3 className='text-3xl text-orange-500 font-bold'>About Us</h3>
                    <h1 className="text-5xl font-bold mt-4">We are qualified & of experience in this field</h1>
                    <p className="py-3">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <p className="py-3">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <button className="btn text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br font-medium rounded-lg px-5 py-2.5 text-center ">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;