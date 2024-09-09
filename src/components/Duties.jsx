import React from 'react'
import {Accordion, AccordionItem} from "@nextui-org/react";

function Duties() {
    return (
        <section className='bg-[#FDFFFC] text-[#1D1D1D] px-6 flex items-center justify-center m-auto'>
            <div className='my-20 max-w-[900px] mx-auto'>
                <div className='text-2xl font-semibold mb-8'>
                    <p>Duties at Astrobie LLC</p>
                </div>
                <Accordion className='min-w-[350px] md:w-[900px] bg-[#e8eee55b] px-4 py-4 rounded-xl'>
                    <AccordionItem key="1" aria-label="Accordion 1" className='font-semibold' title="Leadership and Vision:">
                        <p className='text-sm font-normal'>Setting the vision and long-term goals for Astrobie LLC and ensuring that the company stays on track to achieve them. You inspire and guide your team to innovate and excel in their respective roles.</p>
                    </AccordionItem>
                    <AccordionItem key="2" aria-label="Accordion 2" className='font-semibold' title="Innovation and Product Development: ">
                        <p className='text-sm font-normal'> Leading the development of new products and services, ensuring they meet the highest standards of quality and innovation. Your passion for creating and attention to detail drive the company's success in delivering cutting-edge solutions.</p>
                    </AccordionItem>
                    <AccordionItem key="3" aria-label="Accordion 3" className='font-semibold' title="Astrobie Academy:">
                        <p className='text-sm font-normal'>Running and operating Astrobie Academy, an educational platform aimed at providing free education to people in need across the world. You ensure that the academy offers high-quality educational content and reaches as many learners as possible.</p>
                    </AccordionItem>
                    <AccordionItem key="4" aria-label="Accordion 4" className='font-semibold' title="Strategic Partnerships:">
                        <p className='text-sm font-normal'>Building and maintaining relationships with universities, organizations, and other stakeholders to foster collaboration and growth. These partnerships are crucial for expanding Astrobie LLC's reach and impact.</p>
                    </AccordionItem>
                    <AccordionItem key="5" aria-label="Accordion 5" className='font-semibold' title="Operational Management:">
                        <p className='text-sm font-normal'>Overseeing the day-to-day operations of the company, including managing resources, budgets, and timelines. You ensure that all departments work efficiently and effectively towards common goals.</p>
                    </AccordionItem>
                </Accordion>
                <div className="mt-20">
                    <p className="text-2xl font-semibold mb-8">What I Hope to Learn in this Course</p>
                    <ul className="list-disc text-sm ml-4">
                        <li>Gain deep understanding of Scrum management and different ways to collaborate with the development team.</li>
                        <li>Learn more about Azure and server side web development.</li>
                        <li>Find the relation between cybersecurity and software engineering.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Duties
