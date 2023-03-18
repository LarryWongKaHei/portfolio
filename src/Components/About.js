import Photo from '../images/PhotoOfMe.png'

export function About (){
    return (
        <div>
            <div className='flex text-white justify-between'>
                <div className='w-[50%]'>
                    <h1 className=" text-center text-3xl mt-10 font-extralight border-b ml-20">About me</h1>
                    <p className='ml-14 font-light tracking-wide'>
                        <span className='text-xl ml-4 font-normal'>Hello World</span>, my name is Wong Ka Hei and I am a software developer with a passion for solving complex problems and creating innovative solutions. 
                        <p className='my-3'>
                            <span className='ml-4'>I</span> am skilled in several programming languages, including Python, Javascript, Java.
                        </p>
                        <p className='my-3'>
                            <span className='ml-4'>Also</span> I have experience working on full stack web application with mixture of different programming languages and framework, such as React,Django and Spring.
                        </p>

                        <p>
                            <span className='ml-4'>My</span> attention to detail, creativity, and strong work ethic have allowed me to consistently produce high-quality work, and I am always eager to learn and take on new challenges.
                        </p>
                        <p>
                        <span className='ml-4'>I</span> am excited about the opportunity to contribute my skills and knowledge to a team of like-minded developers and am looking forward to the next step in my career."
                        </p>

                    </p>
                </div>
                <div>
                    <img src={Photo} className='hidden md:flex w-72 justify-self-end'/>
                </div>
            </div>
            <div className='text-white mt-5 text-xl font-mono'>
                <div className='text-center'>
                    Programming languages:
                </div>
                <div className='flex justify-center gap-5 border-b pb-3 mx-16'>
                        <img src="https://user-images.githubusercontent.com/108957679/221861950-817a5628-a818-40fd-a2a4-58d361cc1b5a.png" alt="Javascript" width="70" height="70" />
                        <img src="https://img.icons8.com/color/48/000000/python.png" alt="Python" width="70" height="70" />
                        <img src="https://user-images.githubusercontent.com/108957679/221865391-3c5aad3e-7aef-4459-8c51-48655d28c4ca.png" alt="Java" width="70" height="70" />
                </div>
                <div className='text-center mt-5'>
                    frameworks:
                </div>
                <div className='flex justify-center gap-5 border-b pb-3 mx-16'>
                        <img src="https://user-images.githubusercontent.com/108957679/221864708-b48e978b-148d-4d1f-a315-d8df9ac24d7a.png" alt="React" width="70" height="70" />
                        <img src="https://user-images.githubusercontent.com/108957679/221864451-0cae0932-4ab4-4860-87fc-90c039a7ac97.png" alt="Django" width="70" height="70" />
                        <img src="https://user-images.githubusercontent.com/108957679/221865651-73fb0931-6ea6-4ca6-bb6c-22db0bfaa40c.png" alt="Spring" width="70" height="70" />
                        <img src="https://user-images.githubusercontent.com/108957679/221864279-fa907251-bad8-465a-b682-537dc92940dc.png" alt="Flask" width="70" height="70" />
                        <img src="https://user-images.githubusercontent.com/108957679/221865160-9ac91128-a0f0-4b64-ace9-d5b6fcff1f9a.png" alt="Node.js" width="70" height="70" />
                        <img src="https://user-images.githubusercontent.com/108957679/221945727-87baaae8-c3ff-4cb4-adab-064d464ec39b.png" alt="TailwindCSS" width="70" height="70" />
                </div>
                <div className='text-center mt-5'>
                    Databases:
                </div>
                <div className='flex justify-center gap-5 pb-8'>
                    <img src="https://user-images.githubusercontent.com/108957679/221865912-ec4de733-7049-4e94-874a-d1f2e3e5bcf7.png" alt="MongoDB" width="70" heigh="70" />
                    <img src="https://user-images.githubusercontent.com/108957679/221866158-23f3ad92-d23b-436f-b6a9-9894816f0d14.png" alt="PostgreSQL" width="70" height="70" />
                    <img src="https://user-images.githubusercontent.com/108957679/221887379-53d0f887-a97e-4366-9e33-92fe75bba61c.png" alt="SQLite" width="70" height="70" />
                </div>

            </div>
        </div>
    )
}