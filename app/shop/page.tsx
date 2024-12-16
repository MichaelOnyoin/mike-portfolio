import React from 'react';
//import CallToActionButton from '../../components/CallToActionButton';
import { Button } from '@/components/ui/Button';

export default function Shop() {
    return (
        <div>
            
            <main className="p-4 text-gray-800">
                <h1 className="text-3xl font-bold mb-4">Our Services</h1>
                
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold">Coaching</h2>
                    <p className="mb-4">
                        Our coaching services are designed to help you achieve your personal and professional goals. 
                        Whether you need guidance in your career or personal life, our experienced coaches are here to support you.
                    </p>
                    {/* <CallToActionButton text="Learn More" link="/services/coaching" /> */}
                    <Button className=''>Learn More</Button>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold">Accounting</h2>
                    <p className="mb-4">
                        Our accounting services provide you with the expertise you need to manage your finances effectively. 
                        From bookkeeping to tax preparation, we ensure your financial health is in good hands.
                    </p>
                    {/* <CallToActionButton label={"Learn More"} link="/services/accounting" /> */}
                    <Button>Learn More</Button>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold">Self-Management</h2>
                    <p className="mb-4">
                        Our self-management services empower you to take control of your life. 
                        We offer tools and strategies to help you manage your time, set goals, and achieve success.
                    </p>
                    {/* <CallToActionButton text="Learn More" link="/services/self-management" /> */}
                    <Button>Learn More</Button>
                </section>
            </main>
            
        </div>
    );
};

//export default Shop;