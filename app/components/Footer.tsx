import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-custom-dark p-4">
            <div className="flex justify-center items-center"> 
                <a
                    className="p-2"
                    href="https://github.com/OggieBoggie"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src={"/github-mark-white.svg"}
                        alt="Github logo"
                        width={60}
                        height={24}
                        priority
                    />
                </a>
                <a
                className="p-2"
                href="https://github.com/OggieBoggie/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <Image 
                    src={"/repo.svg"}
                    alt="github repository"
                    width={60}
                    height={24}
                    priority
                    />
                </a>
                <a
                className="p-2"
                href="mailto:tommy.nguyen.vanc@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <Image
                    src={"/email.svg"}
                    alt="contact by email"
                    width={60}
                    height={24}
                    priority
                    />
                </a>
            </div>
        </footer>
    );
}
