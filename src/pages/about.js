import React from 'react';
import {Link} from 'gatsby'
import Head from '../components/head'

import Layout from '../components/layout';
const About = () => {
    return (
        <Layout>
            <Head title="about" />
            <h2>About</h2>
            <Link to="contact">Contact me</Link>
        </Layout>
    )
}
export default About