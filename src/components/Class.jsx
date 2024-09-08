import React from 'react'
import {Card, CardHeader, CardFooter, Accordion, AccordionItem, Divider} from "@nextui-org/react";



function Class() {

    const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return (
        <section className='bg-[#FDFFFC] text-[#1D1D1D] px-6 flex items-center justify-center m-auto'>
            <div className='mt-20 mb-20 max-w-[900px] mx-auto'>
                <div className='text-2xl font-semibold mb-8'>
                    <p>More Information:</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <Card className={`bg-[#e8eee55b] lg:w-[400px] xl:w-[450px] min-w-[350px] h-auto p-3 text-[#FDFFFC] rounded-xl`}>
                        <CardHeader className="flex-col items-start">
                            <p className='text-[#1D1D1D] text-xl font-semibold'>Hobbies & Activities</p>
                            <p className='text-[#1D1D1D] text-xs'>The things I usually do</p>
                        </CardHeader>
                        <CardFooter className='bottom-0 z-10 flex items-end justify-end text-[#1D1D1D]'>
                            <Accordion>
                                <AccordionItem key="1" aria-label="Accordion 1" className='font-semibold' title="Books and novels">
                                    <p className='text-sm font-normal'>I have a deep love for novels and reading books. As I grow older, I aspire to run Astrobie LLC and continue writing my own novels.</p>
                                </AccordionItem>
                                <AccordionItem key="2" aria-label="Accordion 2" className='font-semibold' title="I am an artistic individual">
                                    <p className='text-sm font-normal'>I love music and art. I learned to paint and produce art with limited tools. Also, I love music, during my childhood I learned to play piano, guitar, bass, harmonica, drums, ukulele, and to sing.</p>
                                </AccordionItem>
                            </Accordion>
                        </CardFooter>
                            
                    </Card>
                    <Card className={`bg-[#e8eee55b] lg:w-[400px] xl:w-[450px] min-w-[350px] h-auto p-3 text-[#FDFFFC] rounded-xl`}>
                        <CardHeader className="flex-col items-start">
                            <p className='text-[#1D1D1D] text-xl font-semibold'>Fun/Interesting Facts</p>
                            <p className='text-[#1D1D1D] text-xs'>Something funny or interesting</p>
                        </CardHeader>
                        <CardFooter className='bottom-0 z-10 flex items-end justify-end text-[#1D1D1D]'>
                            <Accordion>
                                <AccordionItem key="1" aria-label="Accordion 1" className='font-semibold' title="I hated programming">
                                    <p className='text-sm font-normal'>I hated programming so bad. I actually went to medical school in Mexico, but suddently had a change of mind.</p>
                                </AccordionItem>
                                <AccordionItem key="2" aria-label="Accordion 2" className='font-semibold' title="I changed my major">
                                    <p className='text-sm font-normal'>My first major at Lewis University was Computer Science, but right after getting to know the Cybersecurity defense team I switched majors.</p>
                                </AccordionItem>
                            </Accordion>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default Class