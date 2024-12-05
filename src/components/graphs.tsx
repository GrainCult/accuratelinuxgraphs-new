/* eslint-disable @next/next/no-img-element */ // next image sucks
import { JSX } from "react";
import * as fs from 'fs';
import Image from "next/image";

// type for metadata
type Metadata = {
    title: string,
    description: string,
    author: string,
    license: string,
    filename: string
}

// gets all graphs from public/graphs/* and builds graph elements for them
function get_graphs() {
    const graphs: JSX.Element[] = [];
    const directoryPath = "public/graphs/";

    fs.readdirSync(directoryPath).forEach((file: string) => {
        const metadataPath = `${directoryPath}${file}/metadata.json`;

        try {
            const data = fs.readFileSync(metadataPath, 'utf-8');
            const metadata: Metadata = JSON.parse(data);

            graphs.push(
                <div className="content-item graph" key={file} >
                    <img
                        className="graph-img"
                        src={`/graphs/${file}/${metadata.filename}`} 
                        title={`${metadata.title} - ${metadata.description}`}
                        alt={metadata.title}
                    />
                    <h2 className="graph-title">{metadata.title}</h2>
                    <p className="graph-description">{metadata.description}</p>
                    <p className="graph-author">Author: {metadata.author}</p>
                    <p className="graph-license">License: {metadata.license}</p>
                    <hr />
                </div>
            );
        } catch (err) {
            console.error(`Error reading metadata for ${file}:`, err);
        }
    });

    console.log(`DEBUG::: ${graphs.length}`);
    return graphs;
}

export default function Graphs() {
    const graphs = get_graphs();
    return (
        <div className="graphs">
            {graphs}
        </div>
    );
}
