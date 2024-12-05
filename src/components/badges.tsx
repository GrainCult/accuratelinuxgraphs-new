import * as fs from 'fs';
import Image from 'next/image';

function get_badges() {
    const badges: JSX.Element[] = [];

    fs.readdirSync("public/img/badges/").forEach((file: any) => {
        console.log(`found badge: ${file}`);
        badges.push(
            <div className="badge" key={file}>
                <Image src={`/img/badges/${file}`} alt={file} width={ 88 } height={ 31 } />
            </div>
        );
    });

    return badges;
}

export default function Badges() {
    const badges = get_badges();
    return (
        <div className="badges">
            {badges}
        </div>
    );
}