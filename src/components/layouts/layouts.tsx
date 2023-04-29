import React from 'react';

const Layouts = ({ children }: any) => {
    return (
        <main id="layouts">
            <section className='parent_section' style={{ minHeight: '90vh' }}>
                {children}
            </section>
            <footer className=''>
                Arogga © All Rights Reserved - {(new Date().getFullYear())}.
            </footer>
        </main>
    );
};

export default Layouts;