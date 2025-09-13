import Ishy from "../assets/images/ishy_profile.svg"

function Hero() { 
    return (
        <main className="flex flex-grow py-40">
            <section className="text-left w-7/12">
                <div className="border-2 rounded-2xl px-3 py-1 w-fit">
                    <span class="inline-block w-3 h-3 bg-fuchsia-400 rounded-full mr-2 animate-pulse"></span>
                    <span className="text-sky-100">Software Engineer</span>
                </div>
                <h1 className="oxanium-font text-8xl pt-8 bg-gradient-to-r from-sky-500 via-45% via-fuchsia-500 via-10% to-indigo-500 via-45% text-transparent bg-clip-text inline-block">Ismael Lopez</h1>
                <h2 className="oxanium-font text-4xl">Designing & Developing Clean,<br/> Modern Web Apps</h2>
                <p className="text-sky-100 py-5">
                    A curious developer at the start of an exciting journey, passionate about building delightful,
                    tech-inspired web experiences that everyone can use. I'm currently sharpening my skills in the
                    JavaScript ecosystem, with a core focus on React, modern CSS, and accessible design principles.
                    I'm eager to contribute to a thoughtful engineering team where I can learn from experienced mentors
                    and help create meaningful products for real users.
                </p>
                <a href="" className="font-semibold h-full w-auto py-2 px-4 rounded-2xl bg-sky-600 text-sky-100 hover:bg-sky-500 mr-5">Contact Me</a>
                <a href="" className="font-semibold h-full w-auto py-2 px-4 rounded-2xl backdrop-blur-md bg-white/5 border border-white/20 shadow-lg text-sky-100 hover:bg-fuchsia-500">Download CV</a>
            </section>
            <section className="w-5/12 mx-auto relative text-sky-500">
                <div className="w-100 h-100 mx-auto rounded-full border border-sky-100 border-4 bg-sky-50/10 overflow-hidden">
                    <img src={Ishy} alt="Ishy" className="h-96 mx-auto object-cover"/> 
                </div>    
            </section>
        </main>   
    );
}

export default Hero;