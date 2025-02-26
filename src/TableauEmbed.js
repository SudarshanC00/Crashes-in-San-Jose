import React, { useEffect, useRef } from 'react';
import tableau from 'tableau-api';

const TableauEmbed = ({ url }) => {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            new tableau.Viz(ref.current, url, { width: "100%", height: "800px" });
        }
    }, [url]);

    return <div ref={ref}></div>;
};

export default TableauEmbed;