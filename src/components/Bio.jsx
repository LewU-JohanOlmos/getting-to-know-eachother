import React from 'react'

function Bio() {
    return (
        <section className='bg-[#e8eee55b] text-[#1D1D1D] px-6 flex items-center justify-center m-auto'>
            <div className='my-20 max-w-[900px] mx-auto'>
                <div>
                    <p className='text-2xl font-medium mb-4'>Biography:</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div>
                            <p>
                            I am originally from Moroleon, a city in southern Guanajuato, Mexico. I have been programming for over two years and innovating for around four. I chose to pursue a Cybersecurity major at Lewis University because I believe protecting against online threats is crucial for any organization. Knowing that Astrobie LLC will definitely need someone to safeguard it, choosing Cybersecurity was an easy decision. I usually prefer to handle crucial tasks myself rather than relying on others.
                            </p>
                        </div>
                        <div>
                            <p>
                            My biggest passion is innovation and creating products, fueled by my obsession with attention to detail. I spend most of my time finding better ways to approach problems, striving to tackle them in the best way possible. I enjoy working with people because I always have something to learn from them, and sharing my knowledge is always enjoyable. Additionally, I love to read and write books, which further fuels my creativity and problem-solving skills.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Bio