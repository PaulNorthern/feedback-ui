import React from 'react';
import Card from "../components/shared/Card";
import { Link } from 'react-router-dom'

function AboutPage(props) {
    return (
        <Card>
           <div className="about">About This Project</div>
            <p>This s a React app to leave feedback for a product or smth like this</p>
            <p>Version: 1.0.0</p>

            <p>
                <Link to="/">Back to Home</Link>
            </p>
        </Card>
    );
}

export default AboutPage;