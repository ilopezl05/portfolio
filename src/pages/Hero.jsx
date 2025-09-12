import Ishy from "../assets/images/ishy.svg"

function Hero() { 
    return (
        <main className="flex flex-wrap py-50">
            <section className="text-left w-7/12">
                <div className="border-2 rounded-2xl px-3 py-1 w-fit">
                    <span class="inline-block w-3 h-3 bg-fuchsia-400 rounded-full mr-2 animate-pulse"></span>
                    <span className="text-sky-100">Software Engineer</span>
                </div>
                <h1 className="oxanium-font text-8xl pt-8 bg-gradient-to-r from-sky-500 via-45% via-fuchsia-500 via-10% to-indigo-500 via-45% text-transparent bg-clip-text inline-block">Ismael Lopez</h1>
                <h2 className="oxanium-font text-4xl pb-5">Designing & Developing Clean,<br/> Modern Web Apps</h2>
                <p className="text-sky-100">
                    A curious developer at the start of an exciting journey, passionate about building delightful,
                    tech-inspired web experiences that everyone can use. I'm currently sharpening my skills in the
                    JavaScript ecosystem, with a core focus on React, modern CSS, and accessible design principles.
                    I'm eager to contribute to a thoughtful engineering team where I can learn from experienced mentors
                    and help create meaningful products for real users.
                </p>
            </section>
            <section className="w-5/12 mx-auto relative">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
                    <path fill="#00A5F5" d="M64.8,-28C70,-5,50.6,19,29.1,33C7.5,47.1,-16.3,51.1,-34,39.8C-51.7,28.6,-63.4,2.1,-56.7,-22.9C-50,-47.8,-25,-71.3,2.4,-72C29.8,-72.8,59.6,-50.9,64.8,-28Z" transform="translate(100 100)" />
                </svg>
                <img src={Ishy} alt="Ishy" className="h-96 mx-auto relative z-10"/>
            </section>
        </main>   
    );
}

export default Hero;