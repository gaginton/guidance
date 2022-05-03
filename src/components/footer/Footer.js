import React from 'react';
import Footer from '@bit/eden.buy-a-goldfish.blocks.footer';
import Layout from '@bit/eden.buy-a-goldfish.common.layout';
// import ReactBootstrapStyle from '@bit/react-bootstrap.react-bootstrap.internal.style-links';


function FooterComponent() {
    return (
        <Layout>
            <Footer logo="Goldfish inc.">
                <Footer.Column title="Features" items={["Hearing", "Vision"]} />
                <Footer.Column title="Resources" items={["Compare", "Blog"]} />
                <Footer.Column title="Social" items={["LinkedIn", "Instagram"]} />
                <Footer.Column title="Company" items={["About Us", "Careers"]} />
            </Footer>
        </Layout>
    );
}

export default FooterComponent;
// export default () => (<div><ReactBootstrapStyle /><FooterComponent /></div>)  