import * as React from 'react';

type Props = { currentUser: string};

const HomePage: React.FC<Props> = ( { currentUser}) => (
    <div>
        <h2> Welcome to the MFE, {currentUser}! </h2>
    </div>
);

export default HomePage;