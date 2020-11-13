import React from 'react';
import Header from "../../components/Header";

interface EmptyPageProps {
    title?: string
}
const EmptyPage: React.FC<EmptyPageProps> = ({title}) => {
    return (
        <div>
            <div>
                This is the page for {title}!
            </div>
        </div>
    );
};

export default EmptyPage;